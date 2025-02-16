import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Container
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Labs', path: '/labs' },
    { title: 'NMEICT', path: '/nmeict' },
    { title: 'Outreach Portal', path: '/outreach' },
    { title: 'Participating Institutes', path: '/participating-institutes' },
    { title: 'Contact Us', path: '/contact' }
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{
          background: 'rgba(3, 3, 3, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  fontSize: '1.5rem',
                  background: 'linear-gradient(45deg, #FFFFFF 30%, #A0A0A0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Virtual Labs
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setMobileOpen(true)}
                sx={{ 
                  ml: 2,
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {pages.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: 'white',
                        position: 'relative',
                        px: 2,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: location.pathname === item.path ? '100%' : '0%',
                          height: '2px',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'white',
                          transition: 'width 0.3s ease'
                        },
                        '&:hover::after': {
                          width: '100%'
                        }
                      }}
                    >
                      {item.title}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>

        <AnimatePresence>
          {mobileOpen && (
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              PaperProps={{
                sx: {
                  width: '100%',
                  maxWidth: '400px',
                  background: 'rgba(3, 3, 3, 0.95)',
                  backdropFilter: 'blur(10px)'
                }
              }}
            >
              <Box sx={{ p: 2, height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                  <IconButton 
                    onClick={() => setMobileOpen(false)} 
                    sx={{ 
                      color: 'white',
                      '&:hover': {
                        transform: 'rotate(90deg)',
                        transition: 'transform 0.3s ease'
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {pages.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ListItem 
                        button 
                        component={RouterLink} 
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        sx={{
                          py: 2,
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: location.pathname === item.path ? 
                            'rgba(255, 255, 255, 0.05)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            transform: 'translateX(10px)',
                            transition: 'all 0.3s ease'
                          }
                        }}
                      >
                        <ListItemText 
                          primary={item.title} 
                          primaryTypographyProps={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            sx: {
                              background: location.pathname === item.path ?
                                'linear-gradient(45deg, #FFFFFF 30%, #A0A0A0 90%)' : 'none',
                              WebkitBackgroundClip: location.pathname === item.path ? 'text' : 'none',
                              WebkitTextFillColor: location.pathname === item.path ? 'transparent' : 'white'
                            }
                          }}
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </Drawer>
          )}
        </AnimatePresence>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
