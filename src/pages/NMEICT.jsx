import { motion } from "framer-motion";
import { 
  Box, 
  Container, 
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useRef } from "react";

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

const NMEICT = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const { target } = e;
      
      if (cursorDotRef.current && cursorOutlineRef.current) {
        const isCard = target.closest('.MuiCard-root');
        const isButton = 
          target.tagName === 'BUTTON' || 
          target.classList.contains('MuiButton-root');
        const isLink = target.tagName === 'A';
        const isImage = target.tagName === 'IMG';
        const isTextElement = 
          target.tagName === 'P' || 
          target.tagName === 'SPAN' || 
          target.tagName === 'H1' || 
          target.tagName === 'H2' || 
          target.tagName === 'H3' || 
          target.tagName === 'H4' || 
          target.tagName === 'H5' || 
          target.tagName === 'H6' ||
          target.classList.contains('MuiTypography-root');

        // Base cursor movement
        const dotX = clientX - 2.5;
        const dotY = clientY - 2.5;
        const outlineX = clientX - 15;
        const outlineY = clientY - 15;

        if (isCard) {
          // Card magnetic effect
          const rect = isCard.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            Math.pow(clientX - centerX, 2) + 
            Math.pow(clientY - centerY, 2)
          );
          const maxDistance = 100;

          if (distance < maxDistance) {
            const pull = 0.3;
            const moveX = (centerX - clientX) * pull;
            const moveY = (centerY - clientY) * pull;
            cursorDotRef.current.style.transform = `translate(${dotX + moveX}px, ${dotY + moveY}px) scale(1.5)`;
            cursorOutlineRef.current.style.transform = `translate(${outlineX + moveX}px, ${outlineY + moveY}px) scale(2)`;
          }
        } else if (isButton) {
          // Button interaction
          cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) scale(2.5)`;
          cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(0)`;
          cursorDotRef.current.style.backgroundColor = "#60A5FA";
        } else if (isLink) {
          // Link interaction
          cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) scale(2.5)`;
          cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(0)`;
          cursorDotRef.current.style.backgroundColor = "#60A5FA";
        } else if (isImage) {
          // Image interaction - added special effect for images
          cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) scale(2)`;
          cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) scale(1.5)`;
          cursorOutlineRef.current.style.border = "2px solid rgba(96, 165, 250, 0.8)";
        } else if (isTextElement) {
          // Text behavior
          cursorDotRef.current.style.width = "8px";
          cursorDotRef.current.style.height = "8px";
          cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
          cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
        } else {
          // Default behavior
          cursorDotRef.current.style.width = "5px";
          cursorDotRef.current.style.height = "5px";
          cursorDotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
          cursorOutlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
          cursorDotRef.current.style.backgroundColor = "rgba(96, 165, 250, 0.9)";
          cursorOutlineRef.current.style.borderColor = "rgba(96, 165, 250, 0.4)";
        }
      }
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (cursorOutlineRef.current && cursorDotRef.current) {
        if (target.closest('.MuiCard-root')) {
          cursorOutlineRef.current.style.width = "50px";
          cursorOutlineRef.current.style.height = "50px";
        }
        if (target.tagName === 'IMG') {
          cursorOutlineRef.current.style.width = "40px";
          cursorOutlineRef.current.style.height = "40px";
          cursorOutlineRef.current.style.border = "2px solid rgba(96, 165, 250, 0.8)";
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorOutlineRef.current && cursorDotRef.current) {
        cursorOutlineRef.current.style.width = "30px";
        cursorOutlineRef.current.style.height = "30px";
        cursorOutlineRef.current.style.transform = "scale(1) translate(-15px, -15px)";
        cursorOutlineRef.current.style.border = "2px solid rgba(96, 165, 250, 0.4)";
        cursorDotRef.current.style.transform = "scale(1)";
        cursorDotRef.current.style.backgroundColor = "rgba(96, 165, 250, 0.9)";
      }
    };

    document.addEventListener("mousemove", moveCursor);

    // Add hover effect for all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .MuiCard-root, .MuiButton-root, img');
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Elements */}
      <motion.div
        ref={cursorDotRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={cursorDot}
      />
      <motion.div
        ref={cursorOutlineRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={cursorOutline}
      />

      <Box
        sx={{
          background: '#080B14',
          minHeight: '100vh',
          pt: 2,
          pb: 8,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'none',
          '& *': { cursor: 'none !important' },
        }}
      >
        {/* Animated gradient background */}
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
                NMEICT
              </Typography>
              <Typography 
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 4,
                  lineHeight: 1.6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                National Mission on Education through Information and Communication Technology
              </Typography>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button
                  variant="contained"
                  endIcon={<LaunchIcon />}
                  href="https://nmeict.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    color: 'white',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    mb: 6,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 30%, #00B8D4 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(33, 150, 243, 0.3)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  Visit NMEICT Website
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {/* Mission Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#60A5FA',
                        mb: 3,
                        fontWeight: 700,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: 1.8,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      NMEICT aims to leverage the potential of ICT in teaching and learning processes for the benefit of all the learners in Higher Education Institutions in any time, anywhere mode.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Objectives Section */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#60A5FA',
                        mb: 3,
                        fontWeight: 700,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      Key Objectives
                    </Typography>
                    <Box component="ul" sx={{ color: 'rgba(255, 255, 255, 0.8)', pl: 2 }}>
                      {[
                        'Empowering students through digital learning',
                        'Building capacity of educational institutions',
                        'Developing quality e-content and MOOCs',
                        'Bridging the digital divide in education',
                        'Standardizing content and ensuring quality'
                      ].map((objective, index) => (
                        <Typography 
                          component="li" 
                          key={index} 
                          sx={{ 
                            mb: 2,
                            lineHeight: 1.8,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {objective}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NMEICT; 