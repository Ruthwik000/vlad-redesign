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
    title: "Advanced Mechanics Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Mechanics", "Classical Mechanics", "Analytical Mechanics"],
    syllabusMapping: ["Advanced Dynamics", "Lagrangian Mechanics", "Hamiltonian Systems"]
  },
  {
    title: "Basics of Physics",
    institute: "IIT KANPUR",
    referenceBooks: ["Fundamentals of Physics", "Basic Physics", "Classical Physics"],
    syllabusMapping: ["Mechanics", "Thermodynamics", "Electromagnetism"]
  },
  {
    title: "Digital Anthropology Lab",
    institute: "IIT GUWAHATI",
    referenceBooks: ["Digital Anthropology", "Computational Physics", "Digital Methods"],
    syllabusMapping: ["Digital Analysis", "Anthropological Methods", "Computational Techniques"]
  },
  {
    title: "Electricity and Magnetism Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Electromagnetism", "Electrical Physics", "Magnetic Fields"],
    syllabusMapping: ["Electric Fields", "Magnetic Fields", "Electromagnetic Induction"]
  },
  {
    title: "Heat & Thermodynamics Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Thermodynamics", "Heat Transfer", "Thermal Physics"],
    syllabusMapping: ["Heat Laws", "Thermodynamic Processes", "Thermal Properties"]
  },
  {
    title: "Physical Optics Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Physical Optics", "Wave Optics", "Optical Physics"],
    syllabusMapping: ["Wave Theory", "Interference", "Diffraction"]
  },
  {
    title: "Mechanical Modelling Lab (New)",
    institute: "IIT KANPUR",
    referenceBooks: ["Mechanical Modeling", "Physics Simulation", "Computational Mechanics"],
    syllabusMapping: ["Mechanical Systems", "Modeling Techniques", "Simulation Methods"]
  },
  {
    title: "Mechanics Virtual Lab (Old)",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Classical Mechanics", "Kinematics", "Dynamics"],
    syllabusMapping: ["Newton's Laws", "Motion", "Forces"]
  },
  {
    title: "Optics Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Optics", "Light Physics", "Optical Systems"],
    syllabusMapping: ["Geometric Optics", "Wave Optics", "Optical Instruments"]
  },
  {
    title: "Quantum and Statistics Lab (New)",
    institute: "IIT DELHI",
    referenceBooks: ["Quantum Mechanics", "Statistical Physics", "Quantum Statistics"],
    syllabusMapping: ["Quantum Theory", "Statistical Mechanics", "Quantum Systems"]
  },
  {
    title: "Quantum Theory and Modelling Lab (New)",
    institute: "IIT DELHI",
    referenceBooks: ["Quantum Theory", "Quantum Modeling", "Computational Physics"],
    syllabusMapping: ["Quantum Mechanics", "Modeling Methods", "Quantum Simulation"]
  },
  {
    title: "Virtual Astrophysics Lab",
    institute: "IIT KANPUR",
    referenceBooks: ["Astrophysics", "Stellar Physics", "Cosmology"],
    syllabusMapping: ["Stellar Systems", "Cosmological Models", "Astronomical Physics"]
  },
  {
    title: "Virtual English and Communication Lab",
    institute: "IIT GUWAHATI",
    referenceBooks: ["Technical Communication", "Scientific Writing", "Physics Communication"],
    syllabusMapping: ["Technical Writing", "Scientific Communication", "Presentation Skills"]
  }
];

const PhysicsLab = () => {
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
          Physical Sciences Labs
        </Typography>

        <List sx={{ width: '100%', mt: 2 }}>
          {labExperiments.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper 
                elevation={3}
                sx={{
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <ListItemButton 
                  onClick={() => handleExpandClick(index)}
                  sx={{ 
                    py: 2,
                    px: 3,
                    '&:hover': { 
                      background: 'rgba(255, 255, 255, 0.1)' 
                    }
                  }}
                >
                  <ListItemText 
                    primary={lab.title}
                    secondary={lab.institute}
                    primaryTypographyProps={{
                      sx: { 
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: 'white'
                      }
                    }}
                    secondaryTypographyProps={{
                      sx: { 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
                      }
                    }}
                  />
                  <IconButton size="small" sx={{ color: 'white' }}>
                    {expandedItems[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </ListItemButton>

                <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Box sx={{ mb: 2 }}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          cursor: 'pointer',
                          py: 1
                        }}
                        onClick={() => handleSectionClick(index, 'books')}
                      >
                        <MenuBookIcon sx={{ mr: 1, color: 'white' }} />
                        <Typography sx={{ 
                          color: 'white',
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

                    <Box>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          cursor: 'pointer',
                          py: 1
                        }}
                        onClick={() => handleSectionClick(index, 'syllabus')}
                      >
                        <MapIcon sx={{ mr: 1, color: 'white' }} />
                        <Typography sx={{ 
                          color: 'white',
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

export default PhysicsLab; 