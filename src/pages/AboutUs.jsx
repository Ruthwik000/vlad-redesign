import { 
    Box, 
    Container, 
    Typography, 
    Card, 
    CardContent,
    Grid,
    Link,
    useTheme,
    Breadcrumbs,
    Paper,
    Divider,
    useMediaQuery,
    Button,
    Avatar
  } from "@mui/material";
  import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
  import { Link as RouterLink } from 'react-router-dom';
  import EmailIcon from '@mui/icons-material/Email';
  import PhoneIcon from '@mui/icons-material/Phone';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import SchoolIcon from '@mui/icons-material/School';
  import GroupsIcon from '@mui/icons-material/Groups';
  import SettingsIcon from '@mui/icons-material/Settings';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
  import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
  import React, { useState, useRef } from 'react';
  import CustomCursor from '../components/CustomCursor';
  
  const AboutUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { scrollY } = useScroll();
    const containerRef = useRef(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    // Enhanced scroll animations
    const y = useSpring(useTransform(scrollY, [0, 300], [0, 100]), {
      stiffness: 100,
      damping: 30
    });
    const opacity = useSpring(useTransform(scrollY, [0, 300], [1, 0.3]), {
      stiffness: 100,
      damping: 30
    });
  
    const highlights = [
      {
        icon: <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />,
        title: 'Mission',
        description: 'To provide remote-access to Simulation-based Labs in various disciplines of Science and Engineering.',
        color: '#FF6B6B'
      },
      {
        icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: 'white' }} />,
        title: 'Vision',
        description: 'To develop a complete Virtual Labs learning experience for students to help them understand concepts through remote experimentation.',
        color: '#4ECDC4'
      },
      {
        icon: <RocketLaunchIcon sx={{ fontSize: 40, color: 'white' }} />,
        title: 'Objective',
        description: 'To provide remote access to Labs in various disciplines of Science and Engineering and to share costly equipment and resources.',
        color: '#45B7D1'
      }
    ];
  
    const timeline = [
      {
        year: '2009',
        title: 'Foundation',
        description: 'Virtual Labs project initiated under NMEICT by MHRD'
      },
      {
        year: '2018',
        title: 'Growth',
        description: 'Over 85 Virtual Labs and 1000+ experiments developed'
      },
      {
        year: 'Present',
        title: 'Impact',
        description: 'Serving millions of students and over 500 colleges across India'
      }
    ];
  
    const team = [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Chief Scientific Officer',
        image: 'https://source.unsplash.com/random/400x400?portrait=1'
      },
      {
        name: 'Michael Chen',
        role: 'Technical Director',
        image: 'https://source.unsplash.com/random/400x400?portrait=2'
      },
      {
        name: 'Emma Williams',
        role: 'Education Lead',
        image: 'https://source.unsplash.com/random/400x400?portrait=3'
      }
    ];
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }
    };
  
    const handleMouseMove = (e) => {
      const { currentTarget, clientX, clientY } = e;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };
  
    // Add this style for text hover effect
    const textHoverStyle = {
      position: 'relative',
      '&:hover': {
        '& .text-highlight': {
          opacity: 1,
          transform: 'scale(1.02)',
        },
        '& .text-content': {
          transform: 'translateY(-2px)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }
      },
      '& .text-highlight': {
        position: 'absolute',
        top: '-10%',
        left: '-5%',
        width: '110%',
        height: '120%',
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        opacity: 0,
        transition: 'all 0.3s ease',
        pointerEvents: 'none',
      },
      '& .text-content': {
        position: 'relative',
        transition: 'all 0.3s ease',
      }
    };
  
    return (
      <>
        <CustomCursor />
        <Box
          sx={{
            minHeight: '100vh',
            background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            pt: { xs: 12, md: 16 },
            pb: 8,
            cursor: 'none',
            '& a, & button, & [role="button"]': {
              cursor: 'none'
            }
          }}
        >
          {/* Background Video with Enhanced Overlay */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(3,3,3,0.85) 0%, rgba(3,3,3,0.95) 100%)',
                backdropFilter: 'blur(10px)'
              }
            }}
          >
            <motion.div style={{ opacity }}>
              <video
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src="https://film.vev.design/XoYKo6hk0m/EJRe2yL9DM.392n0q05j.webm" type="video/webm" />
              </video>
            </motion.div>
          </Box>
    
          {/* Main Content */}
          <Container 
            maxWidth="xl" 
            sx={{ 
              position: 'relative',
              zIndex: 1,
              pt: { xs: 4, md: 0 }
            }}
          >
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <Box 
                sx={{ 
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h1" 
                    sx={{ 
                      fontWeight: 900,
                      fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                      lineHeight: 1.1,
                      mb: 4,
                      color: '#FFFFFF',
                      textAlign: { xs: 'center', md: 'left' },
                      position: 'relative',
                      zIndex: 2,
                      textShadow: '0 0 20px rgba(122, 184, 255, 0.5)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    About Us
                  </Typography>
                </motion.div>
    
                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      maxWidth: '800px',
                      mb: 8,
                      color: 'rgba(255, 255, 255, 0.9)',
                      textAlign: { xs: 'center', md: 'left' },
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                      lineHeight: 1.4,
                      fontWeight: 500,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    Virtual Labs is an initiative to provide remote-access to Simulation-based Labs in various disciplines of Science and Engineering
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
    
            {/* Highlights with Enhanced Interaction */}
            <Grid container spacing={4} sx={{ mb: 12 }}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: '100%',
                        background: hoveredCard === index ? 
                          `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)` :
                          'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'none'
                      }}
                    >
                      <Box sx={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                            rotate: hoveredCard === index ? 360 : 0
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {highlight.icon}
                        </motion.div>
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ 
                            color: '#FFFFFF',
                            fontWeight: 600,
                            mb: 2,
                            mt: 2,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                          }}
                        >
                          {highlight.title}
                        </Typography>
                        <Typography 
                          sx={{ 
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.6,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                          }}
                        >
                          {highlight.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
    
            {/* Add new section for additional information after the highlights section */}
            <Box sx={{ mb: 12 }}>
              <Typography 
                variant="h3" 
                onMouseMove={handleMouseMove}
                sx={{ 
                  ...textHoverStyle,
                  textAlign: 'center',
                  mb: 6,
                  background: 'linear-gradient(135deg, #7AB8FF 0%, #FFFFFF 50%, #7AB8FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(to right, #7AB8FF, #FFFFFF)',
                    borderRadius: '2px'
                  }
                }}
              >
                <span className="text-highlight" />
                <span className="text-content">Key Features</span>
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Typography 
                      onMouseMove={handleMouseMove}
                      sx={{ 
                        ...textHoverStyle,
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.8,
                        textAlign: 'justify'
                      }}
                    >
                      <span className="text-highlight" />
                      <span className="text-content">• Access to quality virtual experiments for engineering students{'\n'}
                      • Web-resources and video-lectures related to various experiments{'\n'}
                      • Online support for performing virtual experiments{'\n'}
                      • Assessment of student's performance{'\n'}
                      • Feedback mechanism for continuous improvement{'\n'}
                      • Complete Learning Management System{'\n'}
                      • Rich learning content for various engineering disciplines</span>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
    
            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 12 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 6,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: '0.02em',
                    position: 'relative',
                    textShadow: '0 0 20px rgba(122, 184, 255, 0.5)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '3px',
                      background: '#7AB8FF',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Our Journey
                </Typography>
                <Grid container spacing={4}>
                  {timeline.map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          sx={{
                            textAlign: 'center',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: '50%',
                              right: '-50%',
                              width: '100%',
                              height: '2px',
                              background: 'rgba(122, 184, 255, 0.3)',
                              display: { xs: 'none', md: index < timeline.length - 1 ? 'block' : 'none' }
                            }
                          }}
                        >
                          <Typography 
                            variant="h2" 
                            sx={{ 
                              color: '#7AB8FF',
                              fontWeight: 900,
                              fontSize: { xs: '3rem', md: '4rem' },
                              mb: 2,
                              textShadow: '0 0 20px rgba(122, 184, 255, 0.3)',
                              opacity: 0.9
                            }}
                          >
                            {item.year}
                          </Typography>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              color: '#FFFFFF',
                              fontWeight: 600,
                              mb: 2,
                              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              lineHeight: 1.6,
                              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                            }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
    
            {/* Overview Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: 12 }}>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 6,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: '0.02em',
                    position: 'relative',
                    textShadow: '0 0 20px rgba(122, 184, 255, 0.5)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '3px',
                      background: '#7AB8FF',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Overview
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography 
                    onMouseMove={handleMouseMove}
                    sx={{ 
                      ...textHoverStyle,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8,
                      mb: 4,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      '& strong': {
                        color: '#7AB8FF',
                        fontWeight: 600
                      },
                      '& ul': {
                        listStyle: 'none',
                        pl: 0,
                        '& li': {
                          position: 'relative',
                          pl: 4,
                          mb: 2,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '8px',
                            height: '8px',
                            background: 'linear-gradient(135deg, #7AB8FF, #FFFFFF)',
                            borderRadius: '50%'
                          }
                        }
                      }
                    }}
                  >
                    <span className="text-highlight" />
                    <span className="text-content">Virtual Labs project is an initiative of Ministry of Education (MoE), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes and IIT Delhi is coordinating institute. It is a paradigm shift in ICT-based education. For the first time, such an initiative has been taken-up in remote‐experimentation. Under Virtual Labs project, over 100 Virtual Labs consisting of approximately 700+ web-enabled experiments were designed for remote-operation and viewing.</span>
                  </Typography>

                  <Typography 
                    variant="h6" 
                    onMouseMove={handleMouseMove}
                    sx={{ 
                      ...textHoverStyle,
                      color: 'white',
                      mb: 2
                    }}
                  >
                    <span className="text-highlight" />
                    <span className="text-content">Intended Beneficiaries:</span>
                  </Typography>
                  <Typography 
                    component="ul" 
                    onMouseMove={handleMouseMove}
                    sx={{ 
                      ...textHoverStyle,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8,
                      pl: 2,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    <li><span className="text-highlight" />All students and Faculty Members of Science and Engineering Colleges who do not have access to good lab‐facilities and/or instruments.</li>
                    <li><span className="text-highlight" />High‐school students, whose inquisitiveness will be triggered, possibly motivating them to take up higher‐studies.</li>
                    <li><span className="text-highlight" />Researchers in different institutes who can collaborate and share resources.</li>
                    <li><span className="text-highlight" />Different engineering colleges who can benefit from the content and related teaching resources.</li>
                  </Typography>

                  <Typography 
                    onMouseMove={handleMouseMove}
                    sx={{ 
                      ...textHoverStyle,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8,
                      mt: 4,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    <span className="text-highlight" />
                    <span className="text-content">Virtual Labs do not require any additional infrastructural setup for conducting experiments at user premises. The simulations-based experiments can be accessed remotely via internet.</span>
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
    
            {/* Contact Us Section */}
            <Box sx={{ py: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h3" 
                  sx={{ 
                    textAlign: 'center',
                    mb: 6,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    letterSpacing: '0.02em',
                    position: 'relative',
                    textShadow: '0 0 20px rgba(122, 184, 255, 0.5)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '3px',
                      background: '#7AB8FF',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Contact Us
                </Typography>
                <Grid container spacing={4}>
                  {[
                    { icon: <EmailIcon sx={{ fontSize: 28 }} />, text: 'support@vlabs.ac.in' },
                    { icon: <PhoneIcon sx={{ fontSize: 28 }} />, text: '+91-11-2658 1507' },
                    { icon: <LocationOnIcon sx={{ fontSize: 28 }} />, text: 'Virtual Labs, IIT Delhi, Hauz Khas, New Delhi-110016' }
                  ].map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            justifyContent: { xs: 'center', md: 'center' },
                            p: 3,
                            borderRadius: 2,
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(122, 184, 255, 0.1)',
                              border: '1px solid rgba(122, 184, 255, 0.3)',
                              '& .icon': {
                                color: '#7AB8FF'
                              },
                              '& .text': {
                                color: '#FFFFFF'
                              }
                            }
                          }}
                        >
                          <Box 
                            className="icon"
                            sx={{ 
                              color: 'rgba(255,255,255,0.7)',
                              transition: 'color 0.3s ease'
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Typography 
                            className="text"
                            sx={{ 
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '1.1rem',
                              fontWeight: 500,
                              transition: 'color 0.3s ease',
                              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>
          </Container>
        </Box>
      </>
    );
  };
  
  export default AboutUs;