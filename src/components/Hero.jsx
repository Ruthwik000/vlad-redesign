import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        color: 'var(--text-color)',
        bgcolor: 'var(--background-color)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: { xs: 2, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            sx={{
              background: 'linear-gradient(145deg, var(--gradient-start) 0%, var(--gradient-end) 100%)',
              borderRadius: '32px',
              padding: { xs: 8, md: 16 },
              minHeight: { xs: '60vh', md: '70vh' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(167, 139, 250, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(139, 92, 246, 0.08)',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.2) 20%, rgba(167, 139, 250, 0.2) 80%)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(167, 139, 250, 0.3)',
                boxShadow: '0 12px 40px 0 rgba(139, 92, 246, 0.12)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%)',
                borderRadius: '32px',
                opacity: 0.5,
                transition: 'opacity 0.3s ease-in-out',
              },
              '&:hover::before': {
                opacity: 0.7,
              }
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: '100%' }}
            >
              <Typography 
                variant="h2" 
                fontWeight="bold"
                sx={{ 
                  color: 'var(--text-color)',
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                  marginBottom: 4,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  position: 'relative',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                Explore Virtual Labs
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'var(--text-color)',
                  opacity: 0.9,
                  marginBottom: 6,
                  maxWidth: '1000px',
                  margin: '0 auto',
                  fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                  lineHeight: 1.6,
                }}
              >
                Hands-on experience in a digital environment for engineering students.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    mt: 4,
                    bgcolor: 'var(--text-color)',
                    color: 'var(--background-color)',
                    padding: '16px 48px',
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
                    borderRadius: '16px',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'var(--text-color)',
                      opacity: 0.9,
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 30px rgba(15, 23, 42, 0.2)'
                    }
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
