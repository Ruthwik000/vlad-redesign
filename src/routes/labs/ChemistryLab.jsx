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
    title: "Circular Dichroism Spectroscopy Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Circular Dichroism", "Spectroscopy Methods", "Molecular Spectroscopy"],
    syllabusMapping: ["CD Spectroscopy", "Molecular Structure", "Optical Activity"]
  },
  {
    title: "Colloid and Surface Chemistry Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Colloid Chemistry", "Surface Chemistry", "Interface Science"],
    syllabusMapping: ["Colloidal Systems", "Surface Phenomena", "Interfacial Properties"]
  },
  {
    title: "Inorganic Chemistry Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Inorganic Chemistry", "Chemical Compounds", "Coordination Chemistry"],
    syllabusMapping: ["Inorganic Compounds", "Reaction Mechanisms", "Chemical Analysis"]
  },
  {
    title: "Molecular Absorption Spectroscopy Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Absorption Spectroscopy", "Molecular Spectroscopy", "Analytical Methods"],
    syllabusMapping: ["Absorption Techniques", "Spectral Analysis", "Quantitative Analysis"]
  },
  {
    title: "Molecular Fluorescence Spectroscopy Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Fluorescence Spectroscopy", "Molecular Luminescence", "Spectral Analysis"],
    syllabusMapping: ["Fluorescence Methods", "Molecular Analysis", "Spectral Interpretation"]
  },
  {
    title: "Physical Chemistry (Amrita) Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Physical Chemistry", "Chemical Kinetics", "Thermodynamics"],
    syllabusMapping: ["Chemical Kinetics", "Thermodynamics", "Electrochemistry"]
  },
  {
    title: "Physical Chemistry (IIITH) Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Physical Chemistry", "Chemical Physics", "Quantum Chemistry"],
    syllabusMapping: ["Reaction Kinetics", "Quantum Chemistry", "Statistical Mechanics"]
  },
  {
    title: "Quantum Chemistry Lab",
    institute: "IIIT HYDERABAD",
    referenceBooks: ["Quantum Chemistry", "Molecular Quantum Mechanics", "Computational Chemistry"],
    syllabusMapping: ["Quantum Theory", "Molecular Structure", "Computational Methods"]
  }
];

const ChemistryLab = () => {
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
          Chemical Sciences Labs
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

export default ChemistryLab; 