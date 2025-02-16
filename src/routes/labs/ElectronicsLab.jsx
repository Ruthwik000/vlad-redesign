import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Map';

const labExperiments = [
  {
    title: "Analog and Digital Electronics Lab - I (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Digital Electronics by Morris Mano", "Digital Design by John F. Wakerly", "Digital Circuits by Anand Kumar"],
    syllabusMapping: ["Digital Logic Gates", "Combinational Circuits", "Sequential Circuits", "Digital Design"]
  },
  {
    title: "Analog and Digital Electronics Lab - II (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Analog Electronics by Robert Boylestad", "Electronic Devices by Thomas Floyd", "Op-Amps and Linear ICs"],
    syllabusMapping: ["Analog Circuits", "Operational Amplifiers", "Filters", "Signal Processing"]
  },
  {
    title: "Analog Electronics Circuits Virtual Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Virtual Lab Manual", "Circuit Analysis", "Electronics Lab Guide"],
    syllabusMapping: ["Virtual Circuit Design", "Simulation Tools", "Circuit Analysis"]
  },
  {
    title: "Analog Electronics Lab",
    institute: "IIT ROORKEE",
    referenceBooks: ["Analog Circuit Design", "Electronic Devices and Circuits", "Lab Manual"],
    syllabusMapping: ["Basic Electronics", "Amplifiers", "Oscillators"]
  },
  {
    title: "Basic Electronics Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Basic Electronics", "Electronic Components", "Circuit Theory"],
    syllabusMapping: ["Component Study", "Basic Circuits", "Measurements"]
  },
  {
    title: "Digital Applications Lab",
    institute: "IIT BOMBAY",
    referenceBooks: ["Digital System Design", "VHDL Programming", "Digital Applications"],
    syllabusMapping: ["FPGA Programming", "Digital Design", "Applications"]
  },
  {
    title: "Digital Electronic Circuits Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Digital Circuit Design", "Logic Design", "Digital Systems"],
    syllabusMapping: ["Logic Gates", "Flip-Flops", "Counters"]
  },
  {
    title: "Digital Electronics Lab-I",
    institute: "IIT ROORKEE",
    referenceBooks: ["Digital Electronics Fundamentals", "Digital Design Basics", "Lab Manual"],
    syllabusMapping: ["Basic Digital Circuits", "Combinational Logic", "Sequential Logic"]
  },
  {
    title: "Digital Electronics Lab-II",
    institute: "IIT GUWAHATI",
    referenceBooks: ["Advanced Digital Design", "Microprocessors", "Digital Systems"],
    syllabusMapping: ["Advanced Digital Circuits", "Microprocessor Interface", "Digital Applications"]
  },
  {
    title: "Digital Logic Design Lab (Logic Gates & Mux-Demux)",
    institute: "IIT BOMBAY",
    referenceBooks: ["Logic Design", "Digital Electronics", "MUX and DEMUX"],
    syllabusMapping: ["Logic Gates", "Multiplexers", "Demultiplexers"]
  },
  {
    title: "Digital Signal Processing Virtual Laboratory",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["DSP by Proakis", "Signal Processing", "Virtual Lab Guide"],
    syllabusMapping: ["Signal Processing", "Digital Filters", "DSP Applications"]
  },
  {
    title: "Hybrid Electronics Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Hybrid Electronics", "Mixed Signal Systems", "Electronic Design"],
    syllabusMapping: ["Hybrid Circuits", "Mixed Signal Processing", "System Design"]
  },
  {
    title: "Microelectronics and VLSI Engineering Laboratory",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["VLSI Design", "Microelectronics", "IC Fabrication"],
    syllabusMapping: ["VLSI Design", "Chip Fabrication", "Testing"]
  }
];

const ElectricalLab = () => {
  console.log('ElectricalLab component rendered');
  const [expandedItems, setExpandedItems] = useState({});
  const [expandedSection, setExpandedSection] = useState({});

  const handleExpandClick = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSectionClick = (index, section) => {
    setExpandedSection(prev => ({
      ...prev,
      [`${index}-${section}`]: !prev[`${index}-${section}`]
    }));
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: 'linear-gradient(135deg, #0A1929 0%, #1A237E 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        color: 'white',
        pt: 8,
        mt: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(25, 118, 210, 0.1), transparent)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h1}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variant="h3"
          sx={{
            color: 'white',
            mb: 6,
            fontWeight: 700,
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            letterSpacing: '-0.5px'
          }}
        >
          Electronics & Communications Labs
        </Typography>

        <List sx={{ width: '100%', mt: 2 }}>
          {labExperiments.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                sx={{
                  mb: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease-in-out',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }
                }}
              >
                <ListItemButton
                  onClick={() => handleExpandClick(index)}
                  sx={{ 
                    color: 'white',
                    py: 2,
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                          fontSize: '1.1rem',
                          color: 'rgba(255, 255, 255, 0.95)'
                        }}
                      >
                        {lab.title}
                      </Typography>
                    }
                    secondary={
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                          mt: 0.5
                        }}
                      >
                        {lab.institute}
                      </Typography>
                    }
                  />
                  <IconButton 
                    sx={{ 
                      color: 'white',
                      transform: expandedItems[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease-in-out'
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </ListItemButton>

                <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                  <Box sx={{ p: 3, pt: 1 }}>
                    {/* Reference Books Section */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        onClick={() => handleSectionClick(index, 'books')}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          color: 'white',
                          mb: 2,
                          p: 1,
                          borderRadius: '8px',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)'
                          }
                        }}
                      >
                        <MenuBookIcon sx={{ mr: 2, color: '#64B5F6' }} />
                        <Typography sx={{ 
                          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                          fontWeight: 500
                        }}>
                          Reference Books
                        </Typography>
                        <IconButton size="small" sx={{ color: 'white', ml: 'auto' }}>
                          {expandedSection[`${index}-books`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      </Box>
                      <Collapse in={expandedSection[`${index}-books`]} timeout="auto" unmountOnExit>
                        <List sx={{ pl: 4 }}>
                          {lab.referenceBooks.map((book, bookIndex) => (
                            <ListItem 
                              key={bookIndex} 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)',
                                py: 0.5
                              }}
                            >
                              <ListItemText 
                                primary={book}
                                primaryTypographyProps={{
                                  sx: { 
                                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                                    fontSize: '0.9rem'
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Box>

                    {/* Syllabus Mapping Section */}
                    <Box>
                      <Box
                        onClick={() => handleSectionClick(index, 'syllabus')}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          color: 'white',
                          mb: 2,
                          p: 1,
                          borderRadius: '8px',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)'
                          }
                        }}
                      >
                        <MapIcon sx={{ mr: 2, color: '#81C784' }} />
                        <Typography sx={{ 
                          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                          fontWeight: 500
                        }}>
                          Syllabus Mapping
                        </Typography>
                        <IconButton size="small" sx={{ color: 'white', ml: 'auto' }}>
                          {expandedSection[`${index}-syllabus`] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                      </Box>
                      <Collapse in={expandedSection[`${index}-syllabus`]} timeout="auto" unmountOnExit>
                        <List sx={{ pl: 4 }}>
                          {lab.syllabusMapping.map((topic, topicIndex) => (
                            <ListItem 
                              key={topicIndex} 
                              sx={{ 
                                color: 'rgba(255, 255, 255, 0.7)',
                                py: 0.5
                              }}
                            >
                              <ListItemText 
                                primary={topic}
                                primaryTypographyProps={{
                                  sx: { 
                                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                                    fontSize: '0.9rem'
                                  }
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  </Box>
                </Collapse>
              </Paper>
            </motion.div>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ElectricalLab; 