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
    title: "Artificial Intelligence Lab (New)",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Artificial Intelligence: A Modern Approach", "Machine Learning", "AI Algorithms"],
    syllabusMapping: ["Search Algorithms", "Knowledge Representation", "Machine Learning Basics"]
  },
  {
    title: "Artificial Intelligence Lab (Theory)",
    institute: "IIT HYDERABAD",
    referenceBooks: ["AI Theory and Practice", "Computational Intelligence", "Expert Systems"],
    syllabusMapping: ["AI Fundamentals", "Logic Programming", "Expert Systems"]
  },
  {
    title: "Artificial Neural Networks Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Neural Networks", "Deep Learning", "Pattern Recognition"],
    syllabusMapping: ["Neural Network Architecture", "Training Algorithms", "Applications"]
  },
  {
    title: "Computational Linguistics Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Natural Language Processing", "Computational Linguistics", "Language Models"],
    syllabusMapping: ["NLP Basics", "Text Processing", "Language Analysis"]
  },
  {
    title: "Computer Organization and Architecture Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Computer Architecture", "Digital Design", "Assembly Language"],
    syllabusMapping: ["Computer Organization", "Assembly Programming", "Hardware Design"]
  },
  {
    title: "Computer Programming Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Programming Fundamentals", "Data Structures", "Algorithms"],
    syllabusMapping: ["Basic Programming", "Data Structures", "Problem Solving"]
  },
  {
    title: "Creative Design, Prototyping & Experiential Lab",
    institute: "IIT GUWAHATI",
    referenceBooks: ["Design Thinking", "Prototyping Methods", "User Experience"],
    syllabusMapping: ["Design Process", "Prototyping", "User Testing"]
  },
  {
    title: "Cryptography Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Cryptography and Network Security", "Applied Cryptography", "Security Protocols"],
    syllabusMapping: ["Encryption", "Cryptographic Protocols", "Security"]
  },
  {
    title: "Data Structures - I",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Introduction to Algorithms", "Data Structures", "Algorithm Design"],
    syllabusMapping: ["Basic Data Structures", "Arrays", "Linked Lists"]
  },
  {
    title: "Data Structures - II",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Advanced Data Structures", "Algorithm Analysis", "Problem Solving"],
    syllabusMapping: ["Trees", "Graphs", "Advanced Algorithms"]
  },
  {
    title: "Image Processing Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Digital Image Processing", "Computer Vision", "Image Analysis"],
    syllabusMapping: ["Image Enhancement", "Feature Detection", "Image Recognition"]
  },
  {
    title: "Natural Language Processing Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["NLP with Python", "Text Analytics", "Language Processing"],
    syllabusMapping: ["Text Processing", "Language Models", "Machine Translation"]
  },
  {
    title: "Problem Solving Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Algorithm Design", "Programming Challenges", "Competitive Programming"],
    syllabusMapping: ["Problem Analysis", "Algorithm Design", "Optimization"]
  },
  {
    title: "Python Programming Lab",
    institute: "IIT KANPUR",
    referenceBooks: ["Python Programming", "Data Science with Python", "Python Libraries"],
    syllabusMapping: ["Python Basics", "Data Structures", "Libraries"]
  },
  {
    title: "Python Programming Lab - Advanced Topics (New)",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Advanced Python", "Web Development", "Data Analysis"],
    syllabusMapping: ["Advanced Python", "Web Frameworks", "Data Processing"]
  },
  {
    title: "Soft Computing Tools in Engineering Lab",
    institute: "IIT KHARAGPUR",
    referenceBooks: ["Soft Computing", "Neural Networks", "Fuzzy Logic"],
    syllabusMapping: ["Neural Networks", "Fuzzy Systems", "Genetic Algorithms"]
  },
  {
    title: "Software Engineering Lab",
    institute: "IIT DHARWAD",
    referenceBooks: ["Software Engineering", "Software Testing", "Project Management"],
    syllabusMapping: ["Software Development", "Testing", "Project Management"]
  },
  {
    title: "Speech Signal Processing Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Speech Processing", "Digital Signal Processing", "Audio Analysis"],
    syllabusMapping: ["Speech Analysis", "Signal Processing", "Speech Recognition"]
  }
];

const ComputerScienceLab = () => {
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
          Computer Science & Engineering Labs
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

export default ComputerScienceLab;