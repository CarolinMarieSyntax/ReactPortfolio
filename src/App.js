import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Offline from './pages/Offline';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Vibe from './pages/Vibe';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offline" element={<Offline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/vibe" element={<Vibe />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

