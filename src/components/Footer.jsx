import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Link,
  Divider,
  useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Lab Feedback Form', path: 'http://38.100.110.143/feedback/feedback.html', external: true },
        { name: 'Lab Assessment Form', path: '/assessment' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Shakshat Portal', path: 'http://www.sakshat.ac.in/', external: true }
      ]
    },
    {
      title: 'About VLAB',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  const contactInfo = {
    email: 'support@vlsb.co.in',
    phone: '01-011-26582050',
    address: [
      'Wireless Research Lab',
      'Room No - 206/IIA',
      'Bharti School of Telecom',
      'Indian Institute of Technology Delhi',
      'Hauz Khas, New Delhi-110016'
    ]
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, rgba(3, 3, 3, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)',
        color: '#fff',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
        }
      }}
    >
      {/* White background strip for logo */}
      <Box 
        sx={{
          background: 'rgba(255, 255, 255, 0.98)',
          py: 4,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #0088ff, #00ff88)'
          }
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src="/images/vlabs-banner.png"
                alt="Virtual Labs"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.15))',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.2))'
                  }
                }}
              />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Main footer content */}
      <Container maxWidth="xl" sx={{ pt: 8, pb: 4 }}>
        <Grid container spacing={8}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#fff',
                    fontWeight: 700,
                    mb: 4,
                    fontSize: '1.25rem',
                    position: 'relative',
                    paddingBottom: '12px',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '48px',
                      height: '3px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #0088ff, #00ff88)'
                    }
                  }}
                >
                  {section.title}
                </Typography>
                <Box 
                  component="ul" 
                  sx={{ 
                    listStyle: 'none', 
                    p: 0, 
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (linkIndex * 0.05) }}
                    >
                      {link.external ? (
                        <Link
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: '#fff',
                              transform: 'translateX(8px)',
                              textShadow: '0 0 20px rgba(0,136,255,0.4)'
                            }
                          }}
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <Link
                          component={RouterLink}
                          to={link.path}
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: '#fff',
                              transform: 'translateX(8px)',
                              textShadow: '0 0 20px rgba(0,136,255,0.4)'
                            }
                          }}
                        >
                          {link.name}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}

          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '24px',
                p: 5,
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(0,136,255,0.3), transparent)'
                }
              }}>
                <Grid container spacing={5} alignItems="center">
                  <Grid item xs={12} md={7}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#fff',
                        fontWeight: 700,
                        mb: 4,
                        position: 'relative',
                        paddingBottom: '16px',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '48px',
                          height: '3px',
                          borderRadius: '2px',
                          background: 'linear-gradient(90deg, #0088ff, #00ff88)'
                        }
                      }}
                    >
                      Get in Touch With Us
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Box sx={{ 
                        color: 'rgba(255,255,255,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#fff',
                          transform: 'translateX(8px)'
                        }
                      }}>
                        <Box sx={{ 
                          bgcolor: 'rgba(0,136,255,0.1)', 
                          p: 1.5, 
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          📧
                        </Box>
                        {contactInfo.email}
                      </Box>
                      
                      <Box sx={{ 
                        color: 'rgba(255,255,255,0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: '#fff',
                          transform: 'translateX(8px)'
                        }
                      }}>
                        <Box sx={{ 
                          bgcolor: 'rgba(0,136,255,0.1)', 
                          p: 1.5, 
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          📞
                        </Box>
                        {contactInfo.phone}
                      </Box>

                      {contactInfo.address.map((line, index) => (
                        <Typography 
                          key={index}
                          sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            ml: index === 0 ? 0 : 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              color: '#fff',
                              transform: 'translateX(8px)'
                            }
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box 
                      component="img"
                      src="/qr-code.png"
                      alt="Contact QR Code"
                      sx={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '24px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.05) rotate(2deg)',
                          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 8, 
          borderColor: 'rgba(255, 255, 255, 0.06)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '180px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,136,255,0.3), transparent)'
          }
        }} />

        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.6)',
              transition: 'color 0.3s ease',
              fontSize: '0.9rem',
              '&:hover': {
                color: '#fff'
              }
            }}
          >
            © {new Date().getFullYear()} Virtual Labs. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link 
              href="#" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              sx={{ 
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#fff',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
