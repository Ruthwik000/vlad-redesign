import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  useTheme,
  Paper,
  Link
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const cursorDot = {
  width: "5px",
  height: "5px",
  backgroundColor: "rgba(96, 165, 250, 0.9)",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "opacity 0.3s ease, width 0.3s ease, height 0.3s ease, transform 0.1s ease",
};

const cursorOutline = {
  width: "30px",
  height: "30px",
  border: "2px solid rgba(96, 165, 250, 0.4)",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "all 0.2s ease-out",
};

const ContactUs = () => {
  const theme = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const contacts = [
    {
      title: "Technical Team",
      contacts: [
        {
          name: "Dr. Rahul Swarup Sharma",
          role: "Technical Coordinator, Virtual Labs",
          email: "rahuls.sharma@vlabs.ac.in",
          icon: <PersonIcon />
        },
        {
          name: "Shubhangi Gupta",
          role: "Technical Project Officer, Virtual Labs",
          email: "shubhangi@vlabs.ac.in",
          icon: <PersonIcon />
        }
      ]
    },
    {
      title: "Outreach Team",
      contacts: [
        {
          name: "Ms. Sheetal Singh",
          role: "Project Officer, Virtual Labs",
          email: "sheetal@vlabs.ac.in",
          icon: <PersonIcon />
        }
      ]
    }
  ];

  const addresses = [
    {
      title: "Virtual Labs Project",
      address: [
        "Room No. 113/114, Block-2",
        "Indian Institute of Technology Delhi (IIT Delhi)",
        "Hauz Khas, New Delhi-110016",
        "India"
      ],
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />
    },
    {
      title: "Contact Information",
      info: [
        { label: "Phone", value: "+91-11-2659-1000", icon: <PhoneIcon /> },
        { label: "Email", value: "support@vlabs.ac.in", icon: <EmailIcon /> }
      ],
      icon: <PhoneIcon sx={{ fontSize: 40 }} />
    }
  ];

  // Add IIT Delhi location data
  const iitDelhiLocation = {
    position: [28.5456, 77.1926],
    name: "Virtual Labs Project",
    address: [
      "Room No. 113/114, Block-2",
      "Indian Institute of Technology Delhi (IIT Delhi)",
      "Hauz Khas, New Delhi-110016",
      "India"
    ]
  };

  useEffect(() => {
    const mouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      });
    };

    const checkCursor = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.role === 'button' ||
        target.closest('.MuiCard-root') ||
        target.closest('.MuiLink-root') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', mouseMove, { passive: true });
    window.addEventListener('mouseover', checkCursor, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Box
      sx={{
        background: '#080B14',
        minHeight: '100vh',
        pt: 2,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none',
      }}
    >
      {/* Custom Cursor */}
      <AnimatePresence>
        <motion.div
          className="cursor-dot"
          animate={{
            x: mousePosition.x - 5,
            y: mousePosition.y - 5,
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "tween",
            duration: 0.15,
            ease: "linear"
          }}
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: isHovering ? '#60A5FA' : 'rgba(96, 165, 250, 0.9)',
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'difference',
            boxShadow: isHovering ? '0 0 10px rgba(96, 165, 250, 0.5)' : 'none'
          }}
        />
        <motion.div
          className="cursor-ring"
          animate={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "tween",
            duration: 0.2,
            ease: "linear"
          }}
          style={{
            width: '50px',
            height: '50px',
            border: `2px solid ${isHovering ? '#60A5FA' : 'rgba(96, 165, 250, 0.4)'}`,
            borderRadius: '50%',
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: 'difference'
          }}
        />
      </AnimatePresence>

      <style>
        {`
          @media (hover: hover) {
            * {
              cursor: none !important;
            }
          }

          @media (hover: none) {
            .cursor-dot, .cursor-ring {
              display: none !important;
            }
            * {
              cursor: auto !important;
            }
            a, button, [role="button"] {
              cursor: pointer !important;
            }
          }
        `}
      </style>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mb: 8,
              mt: 12,
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 800,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: 'white',
                textShadow: '0 0 40px rgba(192, 219, 255, 0.3), 0 0 80px rgba(192, 219, 255, 0.1)',
                letterSpacing: '-0.02em'
              }}
            >
              Contact Us
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {contacts.map((team, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: '#60A5FA',
                        mb: 3
                      }}
                    >
                      {team.title}
                    </Typography>
                    {team.contacts.map((contact, idx) => (
                      <Box key={idx} sx={{ mt: 3 }}>
                        <Typography 
                          variant="h6" 
                          gutterBottom
                          sx={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.9)'
                          }}
                        >
                          {contact.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            mb: 1
                          }}
                        >
                          {contact.role}
                        </Typography>
                        <Link 
                          href={`mailto:${contact.email}`}
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 1,
                            color: '#60A5FA',
                            textDecoration: 'none',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: '#93C5FD'
                            }
                          }}
                        >
                          <EmailIcon sx={{ fontSize: 18 }} />
                          {contact.email}
                        </Link>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}

          {addresses.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h5" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 700,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: '#60A5FA',
                        mb: 3
                      }}
                    >
                      {item.title}
                    </Typography>
                    {item.address && (
                      <Box sx={{ mt: 2 }}>
                        {item.address.map((line, idx) => (
                          <Typography 
                            key={idx} 
                            variant="body2" 
                            gutterBottom
                            sx={{
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                            }}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    )}
                    {item.info && (
                      <Box sx={{ mt: 2 }}>
                        {item.info.map((contact, idx) => (
                          <Link
                            key={idx}
                            href={contact.label === "Email" ? `mailto:${contact.value}` : `tel:${contact.value}`}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              color: '#60A5FA',
                              textDecoration: 'none',
                              mb: 1,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              transition: 'color 0.3s ease',
                              '&:hover': {
                                color: '#93C5FD'
                              }
                            }}
                          >
                            {contact.icon}
                            {contact.value}
                          </Link>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}

          {/* Map Section */}
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.05)',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: '#60A5FA',
                      mb: 3
                    }}
                  >
                    Our Location
                  </Typography>
                  <Box 
                    sx={{ 
                      height: '400px',
                      borderRadius: 2,
                      overflow: 'hidden',
                      '& .leaflet-container': {
                        height: '100%',
                        width: '100%',
                        borderRadius: 'inherit'
                      }
                    }}
                  >
                    <MapContainer 
                      center={iitDelhiLocation.position}
                      zoom={15}
                      scrollWheelZoom={false}
                      style={{ height: '100%', width: '100%' }}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={iitDelhiLocation.position}>
                        <Popup>
                          <Box sx={{ p: 1 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                              {iitDelhiLocation.name}
                            </Typography>
                            {iitDelhiLocation.address.map((line, index) => (
                              <Typography 
                                key={index} 
                                variant="body2" 
                                sx={{ 
                                  color: 'text.secondary',
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                              >
                                {line}
                              </Typography>
                            ))}
                          </Box>
                        </Popup>
                      </Marker>
                    </MapContainer>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs; 