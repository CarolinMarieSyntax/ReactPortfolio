import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import syntaxLogo from '../assets/logo-syntax.png';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-syntax-darker border-b border-syntax-mediumPurple/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold text-white hover:text-syntax-lightPurple transition-colors uppercase tracking-wide">
              <img src={syntaxLogo} alt="Syntax Logo" className="h-8 w-auto" />
              <span>Carolin Marie Pütz</span>
            </Link>
          </div>
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive('/') 
                  ? 'text-syntax-lightPurple border-b-2 border-syntax-mediumPurple' 
                  : 'text-gray-400 hover:text-syntax-lightPurple'
              }`}
            >
              Home
            </Link>
            <Link
              to="/css"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive('/css') 
                  ? 'text-syntax-lightPurple border-b-2 border-syntax-mediumPurple' 
                  : 'text-gray-400 hover:text-syntax-lightPurple'
              }`}
            >
              CSS
            </Link>
            <Link
              to="/projects"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive('/projects') 
                  ? 'text-syntax-lightPurple border-b-2 border-syntax-mediumPurple' 
                  : 'text-gray-400 hover:text-syntax-lightPurple'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/vibe"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive('/vibe') 
                  ? 'text-syntax-lightPurple border-b-2 border-syntax-mediumPurple' 
                  : 'text-gray-400 hover:text-syntax-lightPurple'
              }`}
            >
              Vibe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

