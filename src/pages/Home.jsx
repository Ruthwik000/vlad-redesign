import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Chip 
} from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import GroupsIcon from '@mui/icons-material/Groups';
import LabIcon from '@mui/icons-material/Science';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MouseIcon from '@mui/icons-material/Mouse';
import { useState, useEffect, useRef } from 'react';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PeopleIcon from '@mui/icons-material/People';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CustomCursor from '../components/CustomCursor';
import CountUp from 'react-countup';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isHovered, setIsHovered] = useState(false);
  const contentRef = useRef(null); // Reference for the content to scroll to
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef(null);

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Virtual Learning",
      description: "Access to high-quality virtual laboratory experiences anytime, anywhere."
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      title: "Interactive Experiments",
      description: "Engage with realistic simulations and hands-on virtual experiments."
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: "Collaborative Platform",
      description: "Connect with institutions and learners across the country."
    },
    {
      icon: <LabIcon sx={{ fontSize: 40 }} />,
      title: "Research & Innovation",
      description: "Advanced tools and resources for research and development."
    }
  ];

  const testimonials = [
    {
      quote: "Virtual Laboratory enables self-paced learning for students. The platform provides an excellent opportunity for hands-on experience.",
      author: "Dr. Mohd Zubair Ansari",
      institution: "NIT Srinagar",
      role: "Professor, Computer Science"
    },
    {
      quote: "Virtual Labs have revolutionized how we teach practical concepts. Students can experiment safely and learn at their own pace.",
      author: "Dr. Khyati Chopra",
      institution: "USAR, GGSIPU",
      role: "Head of Department"
    },
    {
      quote: "The platform has become an essential tool for science education. It bridges the gap between theory and practical application.",
      author: "Dr. Pankaj K. Goswami",
      institution: "Amity University",
      role: "Dean of Sciences"
    }
  ];

  const announcements = [
    {
      text: "New ICT initiatives launched by Ministry of Education - Transforming digital learning",
      link: "https://www.education.gov.in/hi/ict-initiatives",
      isNew: false,
      date: "March 15, 2024"
    },
    {
      text: "Virtual Labs Workshop: Advanced Tutorial for Flash-based Labs via Virtual Box",
      link: "https://docs.google.com/document/d/1mX0YMtFk4Dxn_vQBJmUJ8pIOPE2hVf6AscJMdLWd9k8/edit?pli=1&tab=t.0",
      isNew: false,
      date: "March 10, 2024"
    },
    {
      text: "To enroll as a Nodal Center, submit the Expression of interest(EOI)Form_2025",
      link: "https://drive.google.com/file/d/1FGJ21hQmJ40gtPh264ZS6QDtT11hSTTv/view",
      isNew:true,
      date: "March 5, 2024"
    },
   
  ];

  const stats = {
    nodalCenters: "1531",
    totalUsage: "4679904",
    pageViews: "81330147",
    participants: "8560251"
  };

  // Scroll indicator animation
  const scrollAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scrollToContent = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: windowHeight,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Enhanced cursor effect
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (!cursor || !cursorDot) return; // Guard clause

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    const addHoverClass = () => {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    };

    const removeHoverClass = () => {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('button, a, [role="button"]');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', addHoverClass);
      element.addEventListener('mouseleave', removeHoverClass);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', addHoverClass);
        element.removeEventListener('mouseleave', removeHoverClass);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video parallax and fade effect
  const videoOpacity = useTransform(
    scrollY,
    [0, 300],
    [1, 0.3]
  );

  const videoScale = useTransform(
    scrollY,
    [0, 300],
    [1, 1.1]
  );

  return (
    <Box 
      sx={{ 
        bgcolor: '#121212',
        minHeight: '100vh',
        width: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden', // Prevent horizontal scroll
        '& *': {
          boxSizing: 'border-box'
        }
      }}
    >
      <CustomCursor />

      {/* Enhanced Hero Section */}
      <Box sx={{ 
        position: 'relative', 
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#000',
        margin: 0,
        padding: 0
      }}>
        {/* Video Background with Enhanced Effects */}
        <motion.div 
          style={{ 
            opacity: videoOpacity,
            scale: videoScale,
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            component="video"
            ref={videoRef}
            autoPlay
            loop
            muted
            onLoadedData={() => setVideoLoaded(true)}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              top: 0,
              left: 0,
              zIndex: 0,
              filter: 'brightness(0.6)',
            }}
          >
            <source src="https://film.vev.design/XoYKo6hk0m/EJRe2yL9DM.392n0q05j.webm" type="video/webm" />
          </Box>

          {/* Gradient Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                linear-gradient(
                  180deg,
                  rgba(0,0,0,0.4) 0%,
                  rgba(0,0,0,0.6) 50%,
                  rgba(0,0,0,0.8) 100%
                ),
                linear-gradient(
                  45deg,
                  rgba(100,255,218,0.1) 0%,
                  transparent 100%
                )
              `,
              zIndex: 1,
            }}
          />

          {/* Animated Particles Effect */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
              opacity: 0.3,
              background: `
                radial-gradient(circle at 20% 20%, rgba(100,255,218,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(100,255,218,0.1) 0%, transparent 50%)
              `,
              animation: 'pulse 8s ease-in-out infinite',
            }}
          />
        </motion.div>

        {/* Content Container with Enhanced Animations */}
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <Box sx={{ 
              color: 'white', 
              textAlign: 'left',
              pl: { xs: 2, md: 8, lg: 12 },
              maxWidth: { xs: '100%', md: '70%', lg: '60%' }
            }}>
              <motion.div 
                variants={fadeInUp}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontSize: { xs: '3.5rem', md: '5rem', lg: '7rem' },
                    fontWeight: '900',
                    mb: 2,
                    lineHeight: '1.1',
                    letterSpacing: '-2px',
                    background: 'linear-gradient(45deg, #E0E0E0 30%, #8E8E8E 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textTransform: 'uppercase',
                    fontFamily: "'Montserrat', sans-serif",
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: '-10px',
                      width: '100px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #64FFDA, transparent)',
                    }
                  }}
                >
                  Virtual
                  <br />
                  Labs
                </Typography>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontSize: { xs: '1.2rem', md: '1.5rem', lg: '1.8rem' },
                    mb: 6,
                    color: 'rgba(255,255,255,0.8)',
                    fontWeight: '300',
                    maxWidth: '600px',
                    lineHeight: '1.5',
                    fontFamily: "'Roboto', sans-serif",
                    position: 'relative',
                    pl: 3,
                    borderLeft: '2px solid rgba(100, 255, 218, 0.5)',
                    '& strong': {
                      color: '#64FFDA',
                      fontWeight: '500'
                    }
                  }}
                >
                  Empowering <strong>Education</strong> Through
                  <br />
                  Virtual <strong>Experimentation</strong>
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box sx={{ mt: 8, display: 'flex', gap: 2 }}>
                  <Box 
                    component="button"
                    sx={{
                      background: 'linear-gradient(45deg, #64FFDA 0%, #1DE9B6 100%)',
                      border: 0,
                      color: '#1A1A1A',
                      padding: '16px 40px',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(100, 255, 218, 0.25)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 25px rgba(100, 255, 218, 0.35)',
                        background: 'linear-gradient(45deg, #1DE9B6 0%, #64FFDA 100%)',
                      },
                      '&:active': {
                        transform: 'translateY(1px)',
                      }
                    }}
                  >
                    Explore Labs
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>

        {/* Scroll Indicator with Enhanced Animation */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
          }}
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={scrollToContent}
          whileHover={{ scale: 1.1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#64FFDA',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontSize: '0.8rem',
              }}
            >
              Scroll Down
            </Typography>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ↓
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          overflow: 'hidden',
          '&.MuiContainer-root': {
            paddingLeft: { xs: 2, sm: 3, md: 4 },
            paddingRight: { xs: 2, sm: 3, md: 4 }
          }
        }}
      >
        {/* Announcements Section */}
        <Box sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 4, 
                  textAlign: 'center', 
                  fontWeight: 'bold',
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    color: '#64FFDA',
                    filter: 'brightness(1.3)',
                    textShadow: '0 0 10px rgba(100, 255, 218, 0.4)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #64FFDA, transparent)',
                    transition: 'all 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '120px',
                  }
                }}
              >
                Latest Updates & Announcements
              </Typography>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid container spacing={3}>
              {announcements.map((announcement, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: 3,
                        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.05))',
                          transition: 'all 0.3s ease'
                        },
                        '&:hover': {
                          background: 'linear-gradient(145deg, #1a1a1a, rgba(37, 99, 235, 0.2))',
                          '& .announcement-text': {
                            color: '#60A5FA',
                            filter: 'brightness(1.3)',
                            textShadow: '0 0 10px rgba(96, 165, 250, 0.3)'
                          },
                          '&::before': {
                            opacity: 1
                          }
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                          <AnnouncementIcon 
                            sx={{ 
                              fontSize: 28,
                              color: '#60A5FA',
                              transition: 'all 0.3s ease',
                              '.MuiPaper-root:hover &': {
                                filter: 'brightness(1.3)',
                              }
                            }} 
                          />
                          <Box sx={{ flex: 1 }}>
                            <Typography 
                              component="a" 
                              href={announcement.link}
                              className="announcement-text"
                              sx={{ 
                                textDecoration: 'none',
                                color: 'text.primary',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease',
                                display: 'block',
                                '&:hover': { 
                                  color: '#60A5FA',
                                  filter: 'brightness(1.3)',
                                  textShadow: '0 0 10px rgba(96, 165, 250, 0.3)'
                                }
                              }}
                            >
                              {announcement.text}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', alignItems: 'center' }}>
                          <Typography 
                            variant="caption" 
                            color="text.secondary"
                            sx={{
                              transition: 'all 0.3s ease',
                              '.MuiPaper-root:hover &': {
                                color: '#60A5FA',
                                filter: 'brightness(1.2)',
                                opacity: 0.8
                              }
                            }}
                          >
                            {announcement.date}
                          </Typography>
                          {announcement.isNew && (
                            <Chip 
                              label="NEW"
                              sx={{ 
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                backgroundColor: '#1E40AF',
                                color: '#fff',
                                letterSpacing: '0.05em',
                                fontSize: '0.75rem',
                                height: '24px',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                textTransform: 'uppercase',
                                '.MuiChip-label': {
                                  padding: '0 10px',
                                  lineHeight: 1,
                                },
                                '.MuiPaper-root:hover &': {
                                  filter: 'brightness(1.2)',
                                  backgroundColor: '#1E3A8A',
                                  boxShadow: '0 0 10px rgba(30, 64, 175, 0.3)'
                                }
                              }}
                              size="small"
                            />
                          )}
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ py: 8, bgcolor: 'rgba(255,255,255,0.02)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 6, 
                textAlign: 'center', 
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
            >
              What Our Users Say
            </Typography>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card 
                      sx={{ 
                        height: '100%',
                        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(45deg, transparent, rgba(100, 255, 218, 0.05))',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:hover::after': {
                          opacity: 1
                        }
                      }}
                    >
                      <CardContent sx={{ color: 'white' }}>
                        <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                        <Typography sx={{ mb: 4, fontStyle: 'italic', flex: 1 }}>
                          "{testimonial.quote}"
                        </Typography>
                        <Box sx={{ mt: 'auto' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                            {testimonial.author}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {testimonial.role}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.institution}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 8 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {[
                {
                  key: 'nodalCenters',
                  icon: <SchoolOutlinedIcon sx={{ fontSize: 48, mb: 2 }} />,
                  label: 'NODAL CENTERS',
                  value: stats.nodalCenters
                },
                {
                  key: 'totalUsage',
                  icon: <PeopleIcon sx={{ fontSize: 48, mb: 2 }} />,
                  label: 'TOTAL USAGE',
                  value: stats.totalUsage
                },
                {
                  key: 'pageViews',
                  icon: <VisibilityIcon sx={{ fontSize: 48, mb: 2 }} />,
                  label: 'WEBSITE PAGEVIEWS',
                  value: stats.pageViews
                },
                {
                  key: 'participants',
                  icon: <GroupsIcon sx={{ fontSize: 48, mb: 2 }} />,
                  label: 'PARTICIPANTS ATTENDED',
                  value: stats.participants
                }
              ].map((stat, index) => (
                <Grid item xs={12} md={6} lg={3} key={stat.key}>
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: 4,
                        background: `linear-gradient(145deg, #1e3c72 0%, #2a5298 100%)`,
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.1), transparent)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease'
                        },
                        '&:hover::before': {
                          opacity: 1
                        }
                      }}
                    >
                      {stat.icon}
                      <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold', color: 'white' }}>
                        <CountUp
                          end={parseInt(stat.value)}
                          duration={2.5}
                          separator=","
                          useEasing={true}
                          enableScrollSpy={true}
                          scrollSpyOnce={true}
                          delay={0.3}
                        />
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          letterSpacing: '0.1em'
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 