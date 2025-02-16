import { motion } from "framer-motion";
import { 
  Box, 
  Container, 
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useRef, useState } from "react";
import { yearwiseData, overallData, nodalCentresData } from '../data/outreachData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { nodalCentresLocations } from '../data/nodalCentresLocations';

const cursorDot = {
  width: "8px",
  height: "8px",
  backgroundColor: "#60A5FA",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 10000,
  transition: "width 0.2s, height 0.2s, background-color 0.2s",
  mixBlendMode: "difference",
};

const cursorOutline = {
  width: "40px",
  height: "40px",
  border: "2px solid #60A5FA",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "width 0.2s, height 0.2s, border-color 0.2s, transform 0.1s",
  mixBlendMode: "difference",
};

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const OutreachPortal = () => {
  const outreachActivities = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
      title: "Training Programs",
      description: "Comprehensive training sessions for faculty and students on Virtual Labs implementation and usage.",
      link: "https://outreach.vlabs.ac.in/training"
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
      title: "Workshops",
      description: "Interactive workshops to demonstrate the practical applications and benefits of Virtual Labs.",
      link: "https://outreach.vlabs.ac.in/workshops"
    },
    {
      icon: <EventIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
      title: "Nodal Centers",
      description: "Establishment and support of nodal centers across different regions to facilitate Virtual Labs adoption.",
      link: "https://outreach.vlabs.ac.in/nodal-centers"
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 40, color: '#60A5FA' }} />,
      title: "Impact Assessment",
      description: "Regular evaluation and assessment of Virtual Labs implementation and its impact on education.",
      link: "https://outreach.vlabs.ac.in/impact"
    }
  ];

  const statistics = [
    {
      title: "Nodal Centers",
      value: "250+",
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#60A5FA' }} />
    },
    {
      title: "Users Trained",
      value: "50,000+", 
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#60A5FA' }} />
    },
    {
      title: "Workshops",
      value: "1,000+",
      icon: <EventIcon sx={{ fontSize: 40, color: '#60A5FA' }} />
    },
    {
      title: "Total Usage",
      value: "1M+",
      icon: <AssessmentIcon sx={{ fontSize: 40, color: '#60A5FA' }} />
    }
  ];

  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  // State management
  const [selectedYear, setSelectedYear] = useState(2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('yearly');
  const [filteredData, setFilteredData] = useState(yearwiseData[2025]);
  const [filteredOverallData, setFilteredOverallData] = useState(overallData);
  const [filteredNodalData, setFilteredNodalData] = useState(nodalCentresData[2025]);
  const [mapView, setMapView] = useState('cluster'); // 'cluster' or 'scatter'

  // Helper functions
  const calculateNodalTotal = (year) => {
    return nodalCentresData[year]?.reduce((acc, curr) => acc + (curr.nodalCentre || 0), 0) || 0;
  };

  const calculateTotals = (year) => {
    if (!yearwiseData[year]) return { nodalCentres: 0, workshops: 0, participants: 0, usage: 0 };
    
    return yearwiseData[year].reduce((acc, curr) => ({
      nodalCentres: (acc.nodalCentres || 0) + (curr.nodalCentres || 0),
      workshops: (acc.workshops || 0) + (curr.workshops || 0),
      participants: (acc.participants || 0) + (curr.participants || 0),
      usage: (acc.usage || 0) + (curr.usage || 0)
    }), { nodalCentres: 0, workshops: 0, participants: 0, usage: 0 });
  };

  const calculateOverallTotals = () => {
    return overallData.reduce((acc, curr) => ({
      workshops: (acc.workshops || 0) + (curr.workshops || 0),
      participants: (acc.participants || 0) + (curr.participants || 0),
      usage: (acc.usage || 0) + (curr.usage || 0)
    }), { workshops: 0, participants: 0, usage: 0 });
  };

  // Filter effect
  useEffect(() => {
    switch (activeTab) {
      case 'yearly':
        const filtered = yearwiseData[selectedYear]?.filter(item =>
          item.institute.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
        setFilteredData(filtered);
        break;
      case 'overall':
        const filteredOverall = overallData.filter(item =>
          item.institute.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOverallData(filteredOverall);
        break;
      case 'nodal':
        const filteredNodal = nodalCentresData[selectedYear]?.filter(item =>
          item.institute.toLowerCase().includes(searchTerm.toLowerCase())
        ) || [];
        setFilteredNodalData(filteredNodal);
        break;
    }
  }, [selectedYear, searchTerm, activeTab]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const animate = () => {
      if (cursorOutlineRef.current) {
        // Smooth follow for outline
        const deltaX = mouseX - outlineX;
        const deltaY = mouseY - outlineY;
        
        outlineX += deltaX * 0.15;
        outlineY += deltaY * 0.15;
        
        cursorOutlineRef.current.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursorDotRef.current) {
        // Instant follow for dot
        cursorDotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      // Check for interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'select' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.MuiButton-root') ||
        target.closest('.MuiTableRow-root') ||
        target.closest('.MuiSelect-root') ||
        target.closest('.MuiTextField-root');

      // Apply hover effect
      if (cursorDotRef.current && cursorOutlineRef.current) {
        if (isInteractive) {
          cursorDotRef.current.style.width = '12px';
          cursorDotRef.current.style.height = '12px';
          cursorOutlineRef.current.style.width = '60px';
          cursorOutlineRef.current.style.height = '60px';
          cursorOutlineRef.current.style.borderColor = '#90CAF9';
        } else {
          cursorDotRef.current.style.width = '8px';
          cursorDotRef.current.style.height = '8px';
          cursorOutlineRef.current.style.width = '40px';
          cursorOutlineRef.current.style.height = '40px';
          cursorOutlineRef.current.style.borderColor = '#60A5FA';
        }
      }
    };

    // Start animation
    animate();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} style={cursorDot} />
      <div ref={cursorOutlineRef} style={cursorOutline} />

      <Box
        sx={{
          background: '#080B14',
          minHeight: '100vh',
          pt: 2,
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated gradient background */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 0% 0%, rgba(30, 41, 59, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, rgba(15, 23, 42, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(23, 37, 84, 0.7) 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, rgba(17, 24, 39, 0.7) 0%, transparent 50%)
            `,
            opacity: 0.6,
            filter: 'blur(120px)',
            animation: 'gradientAnimation 20s ease infinite',
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8, mt: 12 }}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 4,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textShadow: '0 0 40px rgba(192, 219, 255, 0.3), 0 0 80px rgba(192, 219, 255, 0.1)',
                  letterSpacing: '-0.02em'
                }}
              >
                Outreach Portal
              </Typography>
              <Typography 
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                Connecting institutions and learners through Virtual Labs
              </Typography>
              
              {/* Visit Portal Button */}
              <Button
                variant="contained"
                endIcon={<LaunchIcon />}
                href="https://outreach.vlabs.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  mt: 4,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  color: 'white',
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976D2 30%, #00B8D4 90%)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)'
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Visit Outreach Portal
              </Button>
            </Box>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Container maxWidth="xl">
              <Grid container spacing={4} sx={{ mb: 8 }}>
                {statistics.map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        textAlign: 'center',
                        py: 3
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          color: '#60A5FA',
                          fontWeight: 700,
                          mb: 1,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.8)',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {stat.title}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </motion.div>

          {/* Map Visualization Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Container maxWidth="xl" sx={{ mb: 8 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  p: 4
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: 'white',
                    mb: 3,
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Nodal Centers Distribution
                </Typography>
                <Box 
                  sx={{ 
                    height: '400px',
                    borderRadius: 2,
                    overflow: 'hidden'
                  }}
                >
                  <MapContainer 
                    center={[20.5937, 78.9629]}
                    zoom={5}
                    style={{ height: '100%', width: '100%' }}
                    scrollWheelZoom={true}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {nodalCentresLocations.map((center) => (
                      <Marker 
                        key={center.id} 
                        position={center.position}
                      >
                        <Popup>
                          <div style={{ padding: '10px' }}>
                            <h3 style={{ margin: '0 0 10px 0' }}>{center.name}</h3>
                            <p style={{ margin: '5px 0' }}><strong>State:</strong> {center.state}</p>
                            <p style={{ margin: '5px 0' }}><strong>Usage:</strong> {center.usage}</p>
                            <p style={{ margin: '5px 0' }}><strong>Users:</strong> {center.users}</p>
                            <p style={{ margin: '5px 0' }}><strong>Workshops:</strong> {center.workshops}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                  <Button
                    variant="outlined"
                    onClick={() => setMapView('cluster')}
                    sx={{
                      color: mapView === 'cluster' ? '#60A5FA' : 'white',
                      borderColor: mapView === 'cluster' ? '#60A5FA' : 'rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        borderColor: '#60A5FA'
                      }
                    }}
                  >
                    Cluster View
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => setMapView('scatter')}
                    sx={{
                      color: mapView === 'scatter' ? '#60A5FA' : 'white',
                      borderColor: mapView === 'scatter' ? '#60A5FA' : 'rgba(255, 255, 255, 0.2)',
                      '&:hover': {
                        borderColor: '#60A5FA'
                      }
                    }}
                  >
                    Scatter View
                  </Button>
                </Box>
              </Card>
            </Container>
          </motion.div>

          {/* Add Data Tables Section */}
          <Container maxWidth="xl" sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" sx={{ color: 'white', mb: 4 }}>
                Virtual Labs Outreach Statistics
              </Typography>

              <Card sx={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: 4
              }}>
                {/* Tabs */}
                <Tabs
                  value={activeTab}
                  onChange={(e, newValue) => setActiveTab(newValue)}
                  sx={{
                    mb: 4,
                    '& .MuiTab-root': { color: 'white' },
                    '& .Mui-selected': { color: '#60A5FA' },
                    '& .MuiTabs-indicator': { backgroundColor: '#60A5FA' }
                  }}
                >
                  <Tab value="yearly" label="Yearly Usage" />
                  <Tab value="overall" label="Overall Usage" />
                  <Tab value="nodal" label="New Nodal Centres" />
                </Tabs>

                {/* Controls */}
                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  {(activeTab === 'yearly' || activeTab === 'nodal') && (
                    <FormControl sx={{ minWidth: 200 }}>
                      <InputLabel id="year-select-label" sx={{ color: 'white' }}>Year</InputLabel>
                      <Select
                        labelId="year-select-label"
                        value={selectedYear}
                        label="Year"
                        onChange={(e) => setSelectedYear(e.target.value)}
                        sx={{
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        }}
                      >
                        {Object.keys(activeTab === 'yearly' ? yearwiseData : nodalCentresData)
                          .sort((a, b) => b - a)
                          .map((year) => (
                            <MenuItem key={year} value={parseInt(year)}>{year}</MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  )}

                  <TextField
                    placeholder="Search institutes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                      flexGrow: 1,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                      },
                      '& .MuiOutlinedInput-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Box>

                {/* Data Table */}
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Institute</TableCell>
                        {activeTab === 'nodal' ? (
                          <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Nodal Centres</TableCell>
                        ) : activeTab === 'yearly' ? (
                          <>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Nodal Centres</TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Workshops</TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Participants</TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Usage</TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Workshops</TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Participants</TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>Usage</TableCell>
                          </>
                        )}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {activeTab === 'nodal' ? (
                        // Nodal Centers data rows
                        filteredNodalData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                            }}
                          >
                            <TableCell sx={{ color: 'white' }}>{row.institute}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>
                              {row.nodalCentre?.toLocaleString() || '0'}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : activeTab === 'yearly' ? (
                        // Yearly data rows
                        filteredData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                            }}
                          >
                            <TableCell sx={{ color: 'white' }}>{row.institute}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.nodalCentres?.toLocaleString() || '0'}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.workshops?.toLocaleString() || '0'}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.participants?.toLocaleString() || '0'}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.usage?.toLocaleString() || '0'}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        // Overall data rows
                        filteredOverallData.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              '&:nth-of-type(odd)': { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                            }}
                          >
                            <TableCell sx={{ color: 'white' }}>{row.institute}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.workshops?.toLocaleString() || '0'}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.participants?.toLocaleString() || '0'}</TableCell>
                            <TableCell align="right" sx={{ color: 'white' }}>{row.usage?.toLocaleString() || '0'}</TableCell>
                          </TableRow>
                        ))
                      )}
                      
                      {/* Totals Row */}
                      <TableRow sx={{
                        backgroundColor: 'rgba(96, 165, 250, 0.1)',
                        '&:hover': { backgroundColor: 'rgba(96, 165, 250, 0.15)' },
                      }}>
                        <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total</TableCell>
                        {activeTab === 'nodal' ? (
                          <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                            {calculateNodalTotal(selectedYear).toLocaleString()}
                          </TableCell>
                        ) : activeTab === 'yearly' ? (
                          <>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateTotals(selectedYear).nodalCentres.toLocaleString()}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateTotals(selectedYear).workshops.toLocaleString()}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateTotals(selectedYear).participants.toLocaleString()}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateTotals(selectedYear).usage.toLocaleString()}
                            </TableCell>
                          </>
                        ) : (
                          <>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateOverallTotals().workshops.toLocaleString()}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateOverallTotals().participants.toLocaleString()}
                            </TableCell>
                            <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                              {calculateOverallTotals().usage.toLocaleString()}
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </motion.div>
          </Container>

          {/* Main Activities Grid */}
          <Box sx={{ 
            cursor: 'none !important',
            '& *': { cursor: 'none !important' },
          }}>
            <Grid container spacing={4} sx={{ mb: 8 }}>
              {outreachActivities.map((activity, index) => (
                <Grid item xs={12} md={6} lg={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          background: 'rgba(255, 255, 255, 0.05)',
                        }
                      }}
                    >
                      <Link 
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ textDecoration: 'none' }}
                      >
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ mb: 3 }}>
                            {activity.icon}
                          </Box>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              color: '#60A5FA',
                              mb: 2,
                              fontWeight: 700,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                          >
                            {activity.title}
                          </Typography>
                          <Typography 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.8)',
                              lineHeight: 1.8,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                          >
                            {activity.description}
                          </Typography>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OutreachPortal; 