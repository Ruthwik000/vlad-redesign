import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Container, 
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import { useState, useEffect, useRef } from "react";

// Updated sample data with correct logo paths
const institutes = [
  {
    name: "Indian Institute of Technology Delhi",
    location: "New Delhi",
    type: "IIT",
    labs: 15,
    website: "https://iitd.ac.in",
    logo: "/institute-logos/iit-delhi.png"
  },
  {
    name: "Indian Institute of Technology Bombay",
    location: "Mumbai",
    type: "IIT",
    labs: 12,
    website: "https://iitb.ac.in",
    logo: "/institute-logos/iit-bombay.png"
  },
  {
    name: "Indian Institute of Technology Kanpur",
    location: "Kanpur",
    type: "IIT",
    labs: 14,
    website: "https://iitk.ac.in",
    logo: "/institute-logos/iit-kanpur.png"
  },
  {
    name: "Indian Institute of Technology Kharagpur",
    location: "Kharagpur",
    type: "IIT",
    labs: 10,
    website: "https://iitkgp.ac.in",
    logo: "/institute-logos/iit-kharagpur.png"
    },
  {
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore",
    type: "Private",
    labs: 8,
    website: "https://amrita.edu",
    logo: "/institute-logos/amrita.png"
  },
  {
    name: "Indian Institute of Technology Guwahati",
    location: "Guwahati",
    type: "IIT",
    labs: 10,
    website: "https://iitg.ac.in",
    logo: "/institute-logos/iit-guwahati.png"
  },
  {
    name: "Indian Institute of Technology Roorkee",
    location: "Roorkee",
    type: "IIT",
    labs: 12,
    website: "https://iitr.ac.in",
    logo: "/institute-logos/iit-roorkee.png"
  },
  {
    name: "Dayalbagh Educational Institute",
    location: "Agra",
    type: "Private",
    labs: 6,
    website: "https://dayalbagh.ac.in",
    logo: "/institute-logos/dayalbagh.png"
  },
  {
    name: "National Institute of Technology Karnataka",
    location: "Surathkal",
    type: "NIT",
    labs: 8,
    website: "https://nitk.ac.in",
    logo: "/institute-logos/nitk.png"
  },
  {
    name: "College of Engineering Pune",
    location: "Pune",
    type: "Government",
    labs: 7,
    website: "https://www.coep.org.in",
    logo: "/institute-logos/coep.png"
  },
  {
    name: "International Institute of Information Technology Hyderabad",
    location: "Hyderabad",
    type: "IIIT",
    labs: 9,
    website: "https://www.iiit.ac.in",
    logo: "/institute-logos/iiit-hyderabad.png"
  },
];

const instituteTypes = ["All", "IIT", "NIT", "IIIT", "Private", "Government"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Add cursor styles at the top of the file
const cursorDot = {
  width: "5px",
  height: "5px",
  backgroundColor: "rgba(96, 165, 250, 0.9)",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "opacity 0.3s ease",
};

const cursorOutline = {
  width: "30px",
  height: "30px",
  border: "2px solid rgba(96, 165, 250, 0.4)",
  borderRadius: "50%",
  position: "fixed",
  pointerEvents: "none",
  zIndex: 9999,
  transition: "transform 0.1s ease",
};

const ParticipatingInstitutes = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const filteredInstitutes = institutes.filter(institute => {
    const matchesType = selectedType === "All" || institute.type === selectedType;
    return matchesType;
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const checkCursor = () => {
      const hoveredElement = document.querySelector(':hover');
      const isClickable = 
        hoveredElement?.tagName === 'BUTTON' ||
        hoveredElement?.tagName === 'A' ||
        hoveredElement?.role === 'button' ||
        hoveredElement?.closest('.MuiCard-root') ||
        hoveredElement?.closest('.MuiChip-root') ||
        window.getComputedStyle(hoveredElement).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', checkCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: 1,
            x: mousePosition.x - 5,
            y: mousePosition.y - 5
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 0.8
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '10px',
            height: '10px',
            backgroundColor: isHovering ? '#60A5FA' : 'rgba(96, 165, 250, 0.9)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'difference'
          }}
        />
        <motion.div
          className="cursor-ring"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.5 : 0.3,
            x: mousePosition.x - 25,
            y: mousePosition.y - 25
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 28,
            mass: 0.8
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50px',
            height: '50px',
            border: `2px solid ${isHovering ? '#60A5FA' : 'rgba(96, 165, 250, 0.4)'}`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: 'difference'
          }}
        />
      </AnimatePresence>

      <style>
        {`
          /* Hide cursor on non-touch devices */
          @media (hover: hover) {
            * {
              cursor: none !important;
            }
          }

          /* Show default cursor on touch devices */
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
        {/* Header Section */}
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
              Participating Institutes
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
              Network of institutions contributing to Virtual Labs
            </Typography>
          </Box>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {instituteTypes.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  onClick={() => setSelectedType(type)}
                  sx={{
                    background: selectedType === type ? '#60A5FA' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedType === type ? 'white' : 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      background: selectedType === type ? '#60A5FA' : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Institutes Grid */}
        <Grid container spacing={4}>
          {filteredInstitutes.map((institute, index) => (
            <Grid item xs={12} md={6} lg={4} key={institute.name}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                custom={index}
              >
                <Card
                  component="a"
                  href={institute.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.6s ease-in-out',
                    },
                    '&:hover::before': {
                      transform: 'translateX(100%)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Logo Section with enhanced animation */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          mb: 3,
                          height: 100,
                          '& img': {
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            filter: 'brightness(0.9) contrast(1.1)',
                          }
                        }}
                      >
                        <img 
                          src={institute.logo} 
                          alt={`${institute.name} logo`}
                          onError={(e) => {
                            e.target.src = '/institute-logos/default-institute.png';
                          }}
                        />
                      </Box>
                    </motion.div>

                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'white',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          mb: 1,
                          background: 'linear-gradient(90deg, #fff, #60A5FA)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontWeight: 700
                        }}
                      >
                        {institute.name}
                      </Typography>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          mb: 2,
                          '&:hover': {
                            color: '#60A5FA'
                          }
                        }}>
                          <LocationOnIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', mr: 1, fontSize: 18 }} />
                          <Typography 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.7)',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '0.9rem'
                            }}
                          >
                            {institute.location}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Box>

                    <Box sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      justifyContent: 'center',
                      '& .MuiChip-root': {
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          background: 'rgba(96, 165, 250, 0.2)',
                        }
                      }
                    }}>
                      <Chip 
                        label={institute.type}
                        size="small"
                        sx={{ 
                          background: 'rgba(96, 165, 250, 0.1)',
                          color: '#60A5FA',
                          borderRadius: '8px',
                        }}
                      />
                      <Chip 
                        label={`${institute.labs} Labs`}
                        size="small"
                        sx={{ 
                          background: 'rgba(96, 165, 250, 0.1)',
                          color: '#60A5FA',
                          borderRadius: '8px',
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* No Results Message */}
        {filteredInstitutes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                mt: 4,
                p: 4,
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                No institutes found matching your search criteria
              </Typography>
            </Box>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default ParticipatingInstitutes; 