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
    title: "Biochemistry Signal & Image Processing Lab",
    institute: "IIT ROORKEE",
    referenceBooks: ["Biochemical Signal Processing", "Image Analysis", "Biomedical Signals"],
    syllabusMapping: ["Signal Processing", "Image Analysis", "Data Processing"]
  },
  {
    title: "Biochemistry Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Biochemistry", "Molecular Biology", "Cell Biology"],
    syllabusMapping: ["Biomolecules", "Enzymes", "Metabolism"]
  },
  {
    title: "Bioinformatics and Computational Biology Virtual Lab (New)",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Bioinformatics", "Computational Biology", "Sequence Analysis"],
    syllabusMapping: ["Sequence Analysis", "Structure Prediction", "Genomics"]
  },
  {
    title: "Bioinformatics and Data Science in Biotechnology Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Data Science in Biology", "Bioinformatics Tools", "Biological Databases"],
    syllabusMapping: ["Data Analysis", "Biological Databases", "Statistical Methods"]
  },
  {
    title: "Bioinformatics Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Introduction to Bioinformatics", "Biological Computing", "Database Management"],
    syllabusMapping: ["Basic Bioinformatics", "Sequence Analysis", "Database Usage"]
  },
  {
    title: "Bioinformatics Virtual Lab II",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Bioinformatics", "Molecular Modeling", "Systems Biology"],
    syllabusMapping: ["Advanced Analysis", "Molecular Modeling", "Systems Approach"]
  },
  {
    title: "Biological Image Processing Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Biological Image Analysis", "Microscopy", "Digital Image Processing"],
    syllabusMapping: ["Image Processing", "Microscopy Analysis", "Visualization"]
  },
  {
    title: "Biomedical and Signal Processing Lab",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Biomedical Signals", "Medical Instrumentation", "Signal Analysis"],
    syllabusMapping: ["Signal Processing", "Medical Signals", "Data Analysis"]
  },
  {
    title: "Biomedical Instrumentation Lab",
    institute: "IIT ROORKEE",
    referenceBooks: ["Biomedical Instruments", "Medical Electronics", "Clinical Engineering"],
    syllabusMapping: ["Medical Instruments", "Measurements", "Clinical Applications"]
  },
  {
    title: "Biomedical Modeling and Simulation Lab",
    institute: "IIT DELHI",
    referenceBooks: ["Biomedical Modeling", "Simulation Techniques", "Systems Biology"],
    syllabusMapping: ["Model Development", "Simulation", "Analysis"]
  },
  {
    title: "Biomedical Virtual Lab (New)",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Virtual Biomedical Systems", "Medical Instrumentation", "Healthcare Technology"],
    syllabusMapping: ["Virtual Experiments", "Medical Equipment", "Healthcare Systems"]
  },
  {
    title: "Biological Processing and Analysis Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Biological Processing", "Bioprocess Technology", "Analysis Methods"],
    syllabusMapping: ["Process Analysis", "Biological Systems", "Data Processing"]
  },
  {
    title: "Cell Biology Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Cell Biology", "Molecular Cell Biology", "Cell Structure"],
    syllabusMapping: ["Cell Structure", "Cell Function", "Cellular Processes"]
  },
  {
    title: "Cell Biology Virtual Lab II",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Cell Biology", "Cell Signaling", "Cell Development"],
    syllabusMapping: ["Cell Communication", "Development", "Advanced Topics"]
  },
  {
    title: "Computer-Aided Drug Design Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Drug Design", "Molecular Modeling", "Computational Chemistry"],
    syllabusMapping: ["Drug Design", "Molecular Docking", "CADD Tools"]
  },
  {
    title: "Immunology Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Basic Immunology", "Immune System", "Clinical Immunology"],
    syllabusMapping: ["Immune System", "Antibodies", "Immunity"]
  },
  {
    title: "Immunology Virtual Lab II",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Immunology", "Immunotechnology", "Clinical Applications"],
    syllabusMapping: ["Advanced Concepts", "Clinical Immunology", "Applications"]
  },
  {
    title: "Microbiology Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Basic Microbiology", "Bacteriology", "Laboratory Techniques"],
    syllabusMapping: ["Basic Concepts", "Lab Techniques", "Microorganisms"]
  },
  {
    title: "Microbiology Virtual Lab II",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Microbiology", "Industrial Microbiology", "Applied Microbiology"],
    syllabusMapping: ["Advanced Topics", "Industrial Applications", "Research Methods"]
  },
  {
    title: "Molecular Biology Virtual Lab I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Molecular Biology", "Gene Expression", "DNA Technology"],
    syllabusMapping: ["DNA Structure", "Gene Expression", "Molecular Techniques"]
  },
  {
    title: "Molecular Biology Virtual Lab II",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Advanced Molecular Biology", "Genetic Engineering", "Biotechnology"],
    syllabusMapping: ["Advanced Techniques", "Genetic Engineering", "Applications"]
  },
  {
    title: "Neuron Simulation Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Neural Systems", "Computational Neuroscience", "Neuron Modeling"],
    syllabusMapping: ["Neuron Models", "Neural Networks", "Simulation"]
  },
  {
    title: "Neurophysiology Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Neurophysiology", "Neural Function", "Nervous System"],
    syllabusMapping: ["Neural Function", "Physiology", "Experimental Methods"]
  },
  {
    title: "Population Ecology I",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Population Ecology", "Ecological Systems", "Environmental Science"],
    syllabusMapping: ["Population Dynamics", "Ecological Principles", "Environmental Factors"]
  },
  {
    title: "Systems Biology Virtual Lab",
    institute: "AMRITA VISHWA VIDYAPEETHAM",
    referenceBooks: ["Systems Biology", "Biological Networks", "Computational Systems"],
    syllabusMapping: ["Systems Analysis", "Network Biology", "Modeling"]
  }
];

const BiotechnologyLab = () => {
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
          Biotechnology and Biomedical Engineering Labs
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

export default BiotechnologyLab; 