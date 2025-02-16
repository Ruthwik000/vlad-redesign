import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      // Dark mode - deep violet/purple gradient
      document.documentElement.style.setProperty('--background-color', '#0F172A');
      document.documentElement.style.setProperty('--gradient-start', 'rgba(88, 28, 135, 0.15)'); // Violet
      document.documentElement.style.setProperty('--gradient-end', 'rgba(124, 58, 237, 0.15)'); // Purple
      document.documentElement.style.setProperty('--text-color', '#F8FAFC');
      document.documentElement.style.setProperty('--hover-color', '#1E293B');
    } else {
      // Light mode - soft violet/lavender gradient
      document.documentElement.style.setProperty('--background-color', '#F8FAFC');
      document.documentElement.style.setProperty('--gradient-start', 'rgba(139, 92, 246, 0.1)'); // Lighter violet
      document.documentElement.style.setProperty('--gradient-end', 'rgba(167, 139, 250, 0.1)'); // Lavender
      document.documentElement.style.setProperty('--text-color', '#0F172A');
      document.documentElement.style.setProperty('--hover-color', '#E2E8F0');
    }
    
    document.body.style.backgroundColor = 'var(--background-color)';
    document.body.style.color = 'var(--text-color)';
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <IconButton 
      onClick={toggleDarkMode} 
      sx={{ 
        color: 'var(--text-color)',
        '&:hover': {
          bgcolor: 'var(--hover-color)'
        }
      }}
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkModeToggle;
