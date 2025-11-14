import React from 'react';
import syntaxLogo from '../assets/logo-syntax.png';
import Plasma from '../components/Plasma';
// Import header video
import headerVideo from '../assets/header-video.mp4';

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
      
      {/* Soft Header Video */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-syntax-darker/70 via-syntax-darker/50 to-syntax-darker z-10"></div>
        <video 
          src={headerVideo} 
          autoPlay
          muted
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
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
        </div>
      </div>
    </div>
  );
}

export default Home;

