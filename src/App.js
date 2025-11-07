import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CSSShowcase from './pages/CSSShowcase';
import Projects from './pages/Projects';
import Vibe from './pages/Vibe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<CSSShowcase />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/vibe" element={<Vibe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

