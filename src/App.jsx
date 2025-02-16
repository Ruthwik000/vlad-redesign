import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Labs from './pages/Labs';
import AboutUs from './pages/AboutUs';
import OutReachPortal from './pages/OutReachPortal';
import ParticipatingInstitutes from './pages/ParticipatingInstitutes';
import NMEICT from './pages/NMEICT';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import LabRoutes from './routes/labs';
import LabAssessment from './components/LabAssessment';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log('App rendering');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Navbar onToggleTheme={toggleTheme} />
        
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/labs/*" element={<LabRoutes />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/nmeict" element={<NMEICT />} />
            <Route path="/outreach" element={<OutReachPortal />} />
            <Route path="/participating-institutes" element={<ParticipatingInstitutes />} />
            <Route path="/assessment" element={<LabAssessment />} />
            <Route 
              path="*" 
              element={
                <div style={{ color: 'white', padding: '20px' }}>
                  404 - Route not found
                </div>
              } 
            />
          </Routes>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
