import React from 'react';
import syntaxLogo from '../assets/logo-syntax.png';
import Plasma from '../components/Plasma';

function Home() {
  return (
    <div className="min-h-screen bg-syntax-darker relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <Plasma 
          color="#9370DB"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Portfolio
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-400 mb-3 font-light">
            Carolin Marie Pütz
          </p>
          <div className="flex items-center justify-center gap-4 mb-16">
            <p className="text-lg text-gray-500 uppercase tracking-wider">
              Web Development Student at Syntax
            </p>
            <img 
              src={syntaxLogo} 
              alt="Syntax Institut Logo" 
              className="h-8 object-contain"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            <div className="bg-syntax-darkBlue p-8 border border-syntax-mediumPurple/40 hover:border-syntax-lightPurple transition-all duration-300 hover:shadow-lg hover:shadow-syntax-purple/20">
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">CSS Components</h3>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A collection of reusable CSS components and design system
              </p>
            </div>
            
            <div className="bg-syntax-darkBlue p-8 border border-syntax-mediumPurple/40 hover:border-syntax-lightPurple transition-all duration-300 hover:shadow-lg hover:shadow-syntax-purple/20">
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Projects</h3>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Completed web development projects and professional work
              </p>
            </div>
            
            <div className="bg-syntax-darkBlue p-8 border border-syntax-mediumPurple/40 hover:border-syntax-lightPurple transition-all duration-300 hover:shadow-lg hover:shadow-syntax-purple/20">
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Vibe</h3>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional background and approach to web development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

