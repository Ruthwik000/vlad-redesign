import { useState } from 'react';
import { Box, IconButton, Collapse, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const InstructionBox = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Paper 
      sx={{ 
        mb: 2,
        background: 'linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'rgba(255,255,255,0.05)'
          }
        }}
      >
        <Typography variant="h6" sx={{ color: 'white' }}>
          {title}
        </Typography>
        <IconButton 
          sx={{ 
            transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s',
            color: 'white'
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
      <Collapse in={expanded}>
        <Box sx={{ p: 2, color: 'rgba(255,255,255,0.8)' }}>
          {children}
        </Box>
      </Collapse>
    </Paper>
  );
};

export default InstructionBox; 