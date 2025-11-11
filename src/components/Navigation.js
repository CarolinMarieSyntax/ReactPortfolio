import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import syntaxLogo from '../assets/logo-syntax.png';
import projectsData from '../data/projects.json';

function Navigation() {
  const location = useLocation();
  const [projectsOpen, setProjectsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const projectLinks = useMemo(() => {
    return projectsData
      .filter((project) => project.projectName && project.projectName.trim().length > 0)
      .map((project) => {
        const slug = project.projectName
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        return {
          name: project.projectName,
          to: `/projects#project-${slug}`,
        };
      });
  }, []);

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
            <div className="relative">
              <button
                type="button"
                className={`flex items-center gap-1 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  projectsOpen
                    ? 'text-syntax-lightPurple border-b-2 border-syntax-mediumPurple' 
                    : 'text-gray-400 hover:text-syntax-lightPurple'
                }`}
                onClick={() => setProjectsOpen((prev) => !prev)}
                aria-expanded={projectsOpen}
                aria-controls="projects-dropdown"
              >
                Projects
                <svg
                  className={`w-3 h-3 transition-transform ${projectsOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {projectsOpen && projectLinks.length > 0 && (
                <div
                  id="projects-dropdown"
                  className="absolute right-0 mt-2 w-56 rounded-2xl border border-syntax-mediumPurple/40 bg-syntax-darkBlue/95 p-3 shadow-xl backdrop-blur-md"
                >
                  <ul className="space-y-1">
                    {projectLinks.map((project) => (
                      <li key={project.to}>
                        <Link
                          to={project.to}
                          className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-200 hover:bg-syntax-mediumPurple/30 hover:text-white transition-colors"
                          onClick={() => setProjectsOpen(false)}
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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

