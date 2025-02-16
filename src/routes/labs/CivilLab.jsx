import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MapIcon from '@mui/icons-material/Map';

const labExperiments = [
  {
    title: "Basic Engineering Mechanics and Strength of Materials Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Engineering Mechanics", "Strength of Materials", "Material Testing"],
    syllabusMapping: ["Mechanics Basics", "Material Strength", "Testing Methods"]
  },
  {
    title: "Concrete Structures Lab",
    institute: "IIT DELHI",
    referenceBooks: ["Concrete Technology", "Structural Design", "Construction Materials"],
    syllabusMapping: ["Concrete Design", "Structural Analysis", "Material Testing"]
  },
  {
    title: "Engineering Geology Lab (New)",
    institute: "COEP Technological University Pune",
    referenceBooks: ["Engineering Geology", "Rock Mechanics", "Geological Engineering"],
    syllabusMapping: ["Rock Types", "Geological Structures", "Field Methods"]
  },
  {
    title: "Environmental Engineering Lab I",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Environmental Engineering", "Water Treatment", "Environmental Chemistry"],
    syllabusMapping: ["Water Quality", "Treatment Processes", "Environmental Analysis"]
  },
  {
    title: "Environmental Engineering Lab II",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Advanced Environmental Engineering", "Air Pollution", "Waste Management"],
    syllabusMapping: ["Air Quality", "Waste Treatment", "Environmental Impact"]
  },
  {
    title: "Fluid Machinery Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Fluid Mechanics", "Hydraulic Machines", "Fluid Dynamics"],
    syllabusMapping: ["Fluid Flow", "Machinery", "Performance Testing"]
  },
  {
    title: "Fluid Mechanics Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Fluid Mechanics", "Hydraulics", "Flow Measurement"],
    syllabusMapping: ["Flow Properties", "Hydraulics", "Experimental Methods"]
  },
  {
    title: "Geotechnical Engineering Lab (New)",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Soil Mechanics", "Foundation Engineering", "Geotechnical Testing"],
    syllabusMapping: ["Soil Properties", "Foundation Design", "Soil Testing"]
  },
  {
    title: "Hydraulics and Fluid Mechanics Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Hydraulics", "Fluid Mechanics", "Hydraulic Engineering"],
    syllabusMapping: ["Hydraulic Systems", "Fluid Behavior", "Experimental Methods"]
  },
  {
    title: "Marine Structure Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Marine Structures", "Coastal Engineering", "Ocean Engineering"],
    syllabusMapping: ["Marine Construction", "Coastal Structures", "Wave Mechanics"]
  },
  {
    title: "Mining Geology Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Mining Geology", "Mineral Exploration", "Geological Mapping"],
    syllabusMapping: ["Mineral Identification", "Geological Mapping", "Mining Methods"]
  },
  {
    title: "Smart Structures and Dynamics Lab",
    institute: "IIT DELHI",
    referenceBooks: ["Smart Materials", "Structural Dynamics", "Intelligent Structures"],
    syllabusMapping: ["Smart Systems", "Dynamic Analysis", "Structural Control"]
  },
  {
    title: "Soil Mechanics Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Soil Mechanics", "Geotechnical Engineering", "Soil Testing"],
    syllabusMapping: ["Soil Properties", "Testing Methods", "Soil Classification"]
  },
  {
    title: "Strength of Materials Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Strength of Materials", "Material Testing", "Mechanical Properties"],
    syllabusMapping: ["Material Testing", "Strength Analysis", "Property Measurement"]
  },
  {
    title: "Structural Analysis & Virtual Lab (New)",
    institute: "IIT DELHI",
    referenceBooks: ["Structural Analysis", "Virtual Testing", "Computer Methods"],
    syllabusMapping: ["Virtual Analysis", "Structural Behavior", "Computer Simulation"]
  },
  {
    title: "Structural Dynamics Lab",
    institute: "IIT HYDERABAD",
    referenceBooks: ["Structural Dynamics", "Vibration Analysis", "Dynamic Loading"],
    syllabusMapping: ["Dynamic Response", "Vibration Testing", "Structural Behavior"]
  },
  {
    title: "Surveying Lab",
    institute: "IIT ROORKEE",
    referenceBooks: ["Surveying", "Geomatics", "Land Surveying"],
    syllabusMapping: ["Survey Methods", "Mapping", "Field Techniques"]
  },
  {
    title: "Transportation Engineering Lab",
    institute: "NIT SURATHKAL",
    referenceBooks: ["Transportation Engineering", "Traffic Analysis", "Highway Engineering"],
    syllabusMapping: ["Traffic Studies", "Pavement Design", "Transportation Planning"]
  },
  {
    title: "Virtual and Vibration Transmission in Plastic Structures Lab",
    institute: "IIT DELHI",
    referenceBooks: ["Plastic Structures", "Vibration Analysis", "Virtual Testing"],
    syllabusMapping: ["Vibration Analysis", "Plastic Behavior", "Virtual Simulation"]
  }
];

const CivilLab = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [expandedSection, setExpandedSection] = useState({});

  const handleExpandClick = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSectionClick = (index, section) => {
    setExpandedSection(prev => ({
      ...prev,
      [`${index}-${section}`]: !prev[`${index}-${section}`]
    }));
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        background: 'linear-gradient(135deg, #0A1929 0%, #1A237E 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        color: 'white',
        pt: 8,
        mt: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(25, 118, 210, 0.1), transparent)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component={motion.h1}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variant="h3"
          sx={{
            color: 'white',
            mb: 6,
            fontWeight: 700,
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            letterSpacing: '-0.5px'
          }}
        >
          Civil Engineering Labs
        </Typography>

        <List sx={{ width: '100%', mt: 2 }}>
          {labExperiments.map((lab, index) => (
            <ListItem key={index}>
              <ListItemButton onClick={() => handleExpandClick(index)}>
                <ListItemText primary={lab.title} />
                {expandedItems[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default CivilLab; 