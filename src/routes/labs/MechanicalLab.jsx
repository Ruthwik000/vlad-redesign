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
    title: "3d Printing Virtual Simulation Lab",
    institute: "DAYALBAGH",
    referenceBooks: ["3D Printing Technology", "Additive Manufacturing", "CAD/CAM"],
    syllabusMapping: ["3D Modeling", "Printing Technologies", "Material Properties"]
  },
  {
    title: "Dynamics of Machines Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Dynamics of Machinery", "Mechanical Vibrations", "Kinematics and Dynamics"],
    syllabusMapping: ["Machine Dynamics", "Vibration Analysis", "Balancing"]
  },
  {
    title: "Electrical Technology for Beginners",
    institute: "IIT KANPUR",
    referenceBooks: ["Basic Electrical Engineering", "Circuit Theory", "Electrical Measurements"],
    syllabusMapping: ["Basic Circuits", "Electrical Machines", "Measurements"]
  },
  {
    title: "Engineering Graphics Lab (New)",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Engineering Drawing", "Computer Aided Design", "Technical Drawing"],
    syllabusMapping: ["Orthographic Projection", "CAD Tools", "Technical Drawing"]
  },
  {
    title: "FAB LAB",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Digital Fabrication", "Rapid Prototyping", "Manufacturing Processes"],
    syllabusMapping: ["Digital Manufacturing", "Prototyping", "Fabrication Techniques"]
  },
  {
    title: "Instrumentation and Control Lab (New)",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Instrumentation Engineering", "Control Systems", "Measurement Systems"],
    syllabusMapping: ["Sensors", "Control Theory", "Instrumentation"]
  },
  {
    title: "Kinematics and Dynamics of Machines Lab",
    institute: "IIT BHUBANESWAR",
    referenceBooks: ["Kinematics of Machines", "Dynamics of Machines", "Mechanism Design"],
    syllabusMapping: ["Mechanism Analysis", "Dynamic Systems", "Machine Design"]
  },
  {
    title: "Machine Dynamics & Mechanical Vibration Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Mechanical Vibrations", "Machine Dynamics", "Vibration Analysis"],
    syllabusMapping: ["Vibration Theory", "Dynamic Analysis", "Machine Behavior"]
  },
  {
    title: "Material Response to Microstructural, Mechanical, Thermal and Structural Stimuli Lab",
    institute: "IIT KANPUR",
    referenceBooks: ["Materials Science", "Mechanical Metallurgy", "Thermal Analysis"],
    syllabusMapping: ["Material Properties", "Thermal Analysis", "Structural Analysis"]
  },
  {
    title: "Mechanics of Machine Lab-1",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Mechanics of Machines", "Kinematics", "Machine Theory"],
    syllabusMapping: ["Basic Mechanisms", "Machine Analysis", "Kinematics"]
  },
  {
    title: "Mechanics of Machine Lab-2",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Advanced Machine Mechanics", "Dynamics", "Machine Design"],
    syllabusMapping: ["Advanced Mechanisms", "Dynamic Analysis", "Design Principles"]
  },
  {
    title: "Mechatronics and Robotics Lab",
    institute: "IIT BHUBANESWAR",
    referenceBooks: ["Mechatronics", "Robotics", "Control Systems"],
    syllabusMapping: ["Mechatronic Systems", "Robotics", "Automation"]
  },
  {
    title: "Metal Forming Virtual Simulation Lab",
    institute: "DAYALBAGH",
    referenceBooks: ["Metal Forming", "Manufacturing Processes", "Simulation Techniques"],
    syllabusMapping: ["Metal Working", "Forming Processes", "Virtual Simulation"]
  },
  {
    title: "Micromachining Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Micromachining Technology", "MEMS", "Precision Engineering"],
    syllabusMapping: ["Micro Manufacturing", "MEMS", "Precision Machining"]
  },
  {
    title: "Mine Automation & Virtual Reality",
    institute: "IIT BHUBANESWAR",
    referenceBooks: ["Mine Automation", "Virtual Reality", "Mining Technology"],
    syllabusMapping: ["Mining Automation", "VR Applications", "Safety Systems"]
  },
  {
    title: "Model Based Test Definition Lab",
    institute: "IIT BHUBANESWAR",
    referenceBooks: ["Model-Based Testing", "Test Automation", "System Testing"],
    syllabusMapping: ["Test Modeling", "Automation", "Validation"]
  },
  {
    title: "Sensors and Instrumentation Lab (New)",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Sensors and Transducers", "Measurement Systems", "Instrumentation"],
    syllabusMapping: ["Sensor Technology", "Measurements", "Data Acquisition"]
  },
  {
    title: "Vibration and Acoustics Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Mechanical Vibrations", "Acoustics", "Noise Control"],
    syllabusMapping: ["Vibration Analysis", "Acoustic Testing", "Noise Measurement"]
  }
];

const MechanicalLab = () => {
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
          Mechanical Engineering Labs
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

export default MechanicalLab; 