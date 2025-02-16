import { useState, useEffect } from 'react';
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:992px)');

  useEffect(() => {
    // Reset sidebar state when screen size changes
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: 'fixed',
          left: isMobile ? 16 : isOpen ? 240 : 16,
          top: 16,
          zIndex: 1200,
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          },
          transition: 'left 0.3s',
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: '#1a1a1a',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            boxSizing: 'border-box',
          },
        }}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Sidebar; 