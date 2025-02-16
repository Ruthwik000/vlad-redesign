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
    title: "Analog Signals, Network and Measurement Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Network Analysis", "Signal Processing", "Measurement Systems"],
    syllabusMapping: ["Analog Signals", "Network Theory", "Measurements"]
  },
  {
    title: "Basics of Pneumatic Components Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Pneumatic Systems", "Industrial Pneumatics", "Component Design"],
    syllabusMapping: ["Pneumatic Components", "System Design", "Applications"]
  },
  {
    title: "Control Engineering Lab (New)",
    institute: "DAYALBAGH",
    referenceBooks: ["Control Systems", "Modern Control Theory", "Control Engineering"],
    syllabusMapping: ["Control Systems", "Feedback Systems", "System Analysis"]
  },
  {
    title: "Electrical Machine (COEP) Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Electrical Machines", "Machine Design", "Power Systems"],
    syllabusMapping: ["DC Machines", "AC Machines", "Transformers"]
  },
  {
    title: "Electrical Machines Lab",
    institute: "IIT ROORKEE",
    referenceBooks: ["Electric Machinery", "Power Electronics", "Machine Analysis"],
    syllabusMapping: ["Machine Testing", "Performance Analysis", "Applications"]
  },
  {
    title: "Electrical Measurements Lab (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Electrical Measurements", "Instrumentation", "Measurement Systems"],
    syllabusMapping: ["Measurement Techniques", "Instrumentation", "Error Analysis"]
  },
  {
    title: "Industrial Automation Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Industrial Automation", "PLC Programming", "SCADA Systems"],
    syllabusMapping: ["Automation Systems", "Industrial Controls", "PLC"]
  },
  {
    title: "Industrial Electric Drives Lab",
    institute: "NITK SURATHKAL",
    referenceBooks: ["Electric Drives", "Power Electronics", "Motor Control"],
    syllabusMapping: ["Electric Drives", "Industrial Motors", "Control Systems"]
  },
  {
    title: "Microwave Engineering Lab (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Microwave Engineering", "RF Systems", "Antenna Theory"],
    syllabusMapping: ["Microwave Systems", "RF Design", "Applications"]
  },
  {
    title: "Optical Communication Lab (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Optical Communications", "Fiber Optics", "Optical Networks"],
    syllabusMapping: ["Optical Systems", "Fiber Communications", "Network Design"]
  },
  {
    title: "PLC Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["PLC Programming", "Industrial Automation", "Control Systems"],
    syllabusMapping: ["PLC Basics", "Programming", "Applications"]
  },
  {
    title: "Power Electronics I Virtual Lab (New)",
    institute: "IIT DELHI",
    referenceBooks: ["Power Electronics", "Electronic Converters", "Circuit Design"],
    syllabusMapping: ["Power Conversion", "Electronic Control", "Applications"]
  },
  {
    title: "Power Electronics II Virtual Lab (New)",
    institute: "IIT DELHI",
    referenceBooks: ["Advanced Power Electronics", "Power Systems", "Control Systems"],
    syllabusMapping: ["Advanced Converters", "System Control", "Applications"]
  },
  {
    title: "Power Electronics Lab (New)",
    institute: "IIT ROORKEE",
    referenceBooks: ["Power Electronics", "Power Systems", "Electronic Control"],
    syllabusMapping: ["Power Conversion", "Control Systems", "Applications"]
  },
  {
    title: "Process Loop Component and Control Value for Various Applications Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Process Control", "Control Valves", "Loop Components"],
    syllabusMapping: ["Process Control", "Control Systems", "Applications"]
  },
  {
    title: "Process Loop Component for Control and Pneumatic Components Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Process Control", "Pneumatic Systems", "Control Components"],
    syllabusMapping: ["Process Control", "Pneumatic Control", "System Design"]
  },
  {
    title: "Process Loop Component for High Low Selector and Alarm Annunciators Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Process Control", "Alarm Systems", "Control Systems"],
    syllabusMapping: ["Selector Systems", "Alarm Systems", "Process Control"]
  },
  {
    title: "Process Loop Component for Transmitter and Tank Applications Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Process Control", "Transmitter Systems", "Tank Applications"],
    syllabusMapping: ["Transmitter Systems", "Tank Control", "Applications"]
  },
  {
    title: "Real Time Embedded Systems Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Embedded Systems", "Real-Time Systems", "System Design"],
    syllabusMapping: ["Embedded Programming", "Real-Time Control", "Applications"]
  },
  {
    title: "Sensors Modeling & Simulation Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Sensor Technology", "Modeling Systems", "Simulation"],
    syllabusMapping: ["Sensor Design", "System Modeling", "Simulation"]
  },
  {
    title: "Single Board Heater System Lab",
    institute: "IIT BOMBAY",
    referenceBooks: ["Heater Systems", "Control Systems", "Thermal Design"],
    syllabusMapping: ["Heater Control", "System Design", "Applications"]
  },
  {
    title: "Substation Automation Lab",
    institute: "NITK SURATHKAL",
    referenceBooks: ["Substation Design", "Automation Systems", "Power Systems"],
    syllabusMapping: ["Substation Control", "Automation", "Protection"]
  },
  {
    title: "Virtual High Voltage Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["High Voltage Engineering", "Insulation Systems", "Testing"],
    syllabusMapping: ["HV Testing", "Insulation", "Safety"]
  },
  {
    title: "Virtual Laboratory For Simulation and Gaming",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Simulation Systems", "Gaming Technology", "Virtual Reality"],
    syllabusMapping: ["Simulation", "Gaming", "Virtual Systems"]
  },
  {
    title: "Virtual Power Lab",
    institute: "DAYALBAGH",
    referenceBooks: ["Power Systems", "Virtual Labs", "Power Engineering"],
    syllabusMapping: ["Power Systems", "Virtual Testing", "Applications"]
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