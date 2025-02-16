import { Routes, Route, useLocation } from 'react-router-dom';
import ElectronicsLab from './ElectronicsLab';
import ComputerScienceLab from './ComputerScienceLab';
import ElectricalLab from './ElectricalLab';
import MechanicalLab from './MechanicalLab';
import ChemicalLab from './ChemicalLab';
import BiotechnologyLab from './BiotechnologyLab';
import CivilLab from './CivilLab';
import PhysicsLab from './PhysicsLab';
import ChemistryLab from './ChemistryLab';

const LabRoutes = () => {
  const location = useLocation();
  console.log('LabRoutes rendering, current path:', location.pathname);

  return (
    <Routes>
      <Route path="electronics-communications" element={<ElectronicsLab />} />
      <Route path="electrical" element={<ElectricalLab />} />
      <Route path="computer-science" element={<ComputerScienceLab />} />
      <Route path="mechanical" element={<MechanicalLab />} />
      <Route path="chemical" element={<ChemicalLab />} />
      <Route path="biotechnology" element={<BiotechnologyLab />} />
      <Route path="civil" element={<CivilLab />} />
      <Route path="physics" element={<PhysicsLab />} />
      <Route path="chemistry" element={<ChemistryLab />} />
      <Route 
        path="*" 
        element={
          <div style={{ 
            color: 'white', 
            padding: '20px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 0, 0, 0.8)',
            borderRadius: '8px',
            zIndex: 9999
          }}>
            No matching lab route found for path: {location.pathname}
          </div>
        } 
      />
    </Routes>
  );
};

export default LabRoutes; 