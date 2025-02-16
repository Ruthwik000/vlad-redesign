import { useState, useEffect } from "react";
import { 
  Grid, 
  Container, 
  Typography,
  Box,
  Chip,
  Paper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LabCard from "../components/LabCard";
import { useNavigate } from 'react-router-dom';

// Add global styles for animations
const globalStyles = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1) translate(0, 0);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2) translate(20px, 20px);
      opacity: 0.8;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

// Add style tag to document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

// Lab Categories
const categories = [
  "All",
  "Electronics & Communications",
  "Computer Science & Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Chemical Engineering",
  "Biotechnology and Biomedical Engineering",
  "Civil Engineering",
  "Physical Sciences",
  "Chemical Sciences",
];

// Lab Data
const labs = [
  {
    title: "Electronics & Communications ",
    description: "Explore electronic circuits and communication systems",
    image: "src/assets/images/ec.jpg",
    category: "Electronics & Communications"
  },
  {
    title: "Electrical Engineering ",
    description: "Study electrical systems and power electronics",
    image: "src/assets/images/ee.jpg",
    category: "Electrical Engineering"
  },
  {
    title: "Computer Science & Engineering",
    description: "Explore AI models and deep learning techniques.",
    image: "src/assets/images/cse.jpg",
    category: "Computer Science & Engineering",
  },
  
  {
    title: "Mechanical Engineering ",
    description: "Hydrodynamics and fluid behavior experiments.",
    image: "src/assets/images/mech.jpg",
    category: "Mechanical Engineering",
  },
  {
    title: "Chemical Engineering ",
    description: "Study reaction kinetics and material properties.",
    image: "src/assets/images/chemical.jpg",
    category: "Chemical Engineering",
  },
  {
    title: "Biotechnology and Biomedical Engineering ",
    description: "Genetic engineering and bioinformatics experiments.",
    image: "src/assets/images/bio.jpg",
    category: "Biotechnology and Biomedical Engineering",
  },
  {
    title: "Civil Engineering ",
    description: "Simulate stress and strain in structures.",
    image: "src/assets/images/civil.jpg",
    category: "Civil Engineering",
  },
  {
    title: "Physical Sciences ",
    description: "Explore wave functions and quantum mechanics.",
    image: "src/assets/images/physicssencic.jpg",
    category: "Physical Sciences",
  },
  {
    title: "Chemical Sciences ",
    description: "Analyze molecular interactions and reactions.",
    image: "src/assets/images/chemstry.jpg",
    category: "Chemical Sciences",
  },
];

const Labs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerVisible, setIsPointerVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

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

  const filteredLabs = selectedCategory === "All"
    ? labs
    : labs.filter((lab) => lab.category === selectedCategory);

  const handleLabClick = (lab) => {
    console.log('Clicking lab:', lab);
    console.log('Category:', lab.category);
    
    const routeMap = {
      'Electronics & Communications': 'electronics-communications',
      'Electrical Engineering': 'electrical',
      'Computer Science & Engineering': 'computer-science',
      'Mechanical Engineering': 'mechanical',
      'Chemical Engineering': 'chemical',
      'Biotechnology and Biomedical Engineering': 'biotechnology',
      'Civil Engineering': 'civil',
      'Physical Sciences': 'physics',
      'Chemical Sciences': 'chemistry'
    };
    
    const route = `/labs/${routeMap[lab.category]}`;
    console.log('About to navigate to:', route);
    
    // Add a small delay to see the log before navigation
    setTimeout(() => {
      navigate(route);
    }, 100);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0A1929 0%, #1A237E 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        pt: 2,
        pb: 8,
        color: 'white',
        cursor: 'none',
      }}
    >
      {/* Custom Cursor */}
      <AnimatePresence>
        {isPointerVisible && (
          <>
            <motion.div
              className="cursor-dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                opacity: 1,
                x: mousePosition.x - 5,
                y: mousePosition.y - 5
              }}
              exit={{ scale: 0, opacity: 0 }}
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
                backgroundColor: isHovering ? '#2196F3' : 'rgba(33, 150, 243, 0.9)',
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
              exit={{ scale: 0, opacity: 0 }}
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
                border: `2px solid ${isHovering ? '#2196F3' : 'rgba(33, 150, 243, 0.4)'}`,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9998,
                mixBlendMode: 'difference'
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Video Background */}
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
            background: 'rgba(10, 25, 41, 0.85)', // Dark overlay to maintain readability
          }
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/labs-bg.mp4" type="video/mp4" />
        </video>
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
            radial-gradient(circle at 20% 30%, rgba(33, 150, 243, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(25, 118, 210, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(21, 101, 192, 0.05) 0%, transparent 60%)
          `,
          zIndex: 1
        }}
      />

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          pt: { xs: 4, md: 8 }
        }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
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
              Virtual Labs Explorer
            </Typography>

            <Typography 
              variant="h4"
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: '0.02em',
                fontSize: { xs: '1.2rem', md: '1.6rem' },
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Experience next-generation virtual laboratories powered by cutting-edge technology
            </Typography>
          </Box>
        </motion.div>

        {/* Category Chips */}
        <Box sx={{ mb: 6 }}>
          <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Chip
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    borderRadius: '50px',
                    py: 3,
                    px: 2,
                    backgroundColor: selectedCategory === category 
                      ? 'rgba(33, 150, 243, 0.15)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid',
                    borderColor: selectedCategory === category 
                      ? 'rgba(33, 150, 243, 0.5)'
                      : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    color: selectedCategory === category 
                      ? '#2196F3'
                      : 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.2)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(33, 150, 243, 0.2)'
                    },
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </Box>

        {/* Labs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Grid container spacing={4}>
              {filteredLabs.map((lab, index) => (
                <Grid item key={lab.title} xs={12} sm={6} md={4} lg={3}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LabCard {...lab} onClick={() => handleLabClick(lab)} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        <AnimatePresence>
          {filteredLabs.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Paper 
                elevation={3}
                sx={{ 
                  textAlign: 'center', 
                  mt: 4, 
                  p: 4,
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: 500
                  }}
                >
                  No labs found in this category
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 1,
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
                  }}
                >
                  Try selecting a different category
                </Typography>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Labs;
