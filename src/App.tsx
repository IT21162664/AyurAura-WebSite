import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectOverview from './pages/ProjectOverview';
import Methodology from './pages/Methodology';
import Research from './pages/Research';
import Results from './pages/Results';
import Therapies from './pages/Therapies';
import Commercialization from './pages/Commercialization';
import Team from './pages/Team';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project-overview" element={<ProjectOverview />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/research" element={<Research />} />
            <Route path="/results" element={<Results />} />
            <Route path="/therapies" element={<Therapies />} />
            <Route path="/commercialization" element={<Commercialization />} />
            <Route path="/team" element={<Team />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;