import { Routes, Route } from 'react-router-dom';

const LabRoutes = () => {
  return (
    <Routes>
      <Route path="/labs/electrical-engineering" element={<div>Hello from Electrical Engineering Lab</div>} />
      <Route path="/labs/ai-&-machine-learning-lab" element={<div>Hello from AI & Machine Learning Lab</div>} />
      <Route path="/labs/power-systems-lab" element={<div>Hello from Power Systems Lab</div>} />
      <Route path="/labs/fluid-mechanics-lab" element={<div>Hello from Fluid Mechanics Lab</div>} />
      <Route path="/labs/chemical-reactions-lab" element={<div>Hello from Chemical Reactions Lab</div>} />
      <Route path="/labs/biotechnology-lab" element={<div>Hello from Biotechnology Lab</div>} />
      <Route path="/labs/structural-engineering-lab" element={<div>Hello from Structural Engineering Lab</div>} />
      <Route path="/labs/quantum-physics-lab" element={<div>Hello from Quantum Physics Lab</div>} />
      <Route path="/labs/molecular-chemistry-lab" element={<div>Hello from Molecular Chemistry Lab</div>} />
    </Routes>
  );
};

export default LabRoutes; 