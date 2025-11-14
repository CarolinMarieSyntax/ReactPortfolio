import React from 'react';
import Card from '../components/CSSComponents/Card';
import Plasma from '../components/Plasma';

function Vibe() {
  return (
    <div className="min-h-screen bg-syntax-darker relative py-16">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Vibe
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Professional Background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <Card className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">About</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hello and welcome to my page! My name is <span className="font-semibold text-syntax-lightPurple">Carolin Marie Pütz</span>. 
              I am currently 26 years old and enrolled as a student at Syntax Institut learning about web development.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Focused on mastering modern web technologies and creating functional, user-centered digital experiences.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Continuously exploring new technologies, refining design skills, and building expertise in full-stack development. 
              Committed to delivering high-quality, performant web solutions.
            </p>
          </Card>

          {/* AI-Assisted Coding Section */}
          <Card className="relative overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-syntax-purple/10 via-transparent to-syntax-mediumPurple/10 opacity-50"></div>
            <div className="relative">
              <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">AI-Powered Development</h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  I'm building the future of web development by <span className="text-syntax-lightPurple font-semibold">collaborating with artificial intelligence</span> to craft digital experiences. 
                  This isn't about replacing creativity—it's about amplifying it. AI becomes my co-pilot, handling repetitive tasks 
                  and suggesting optimizations while I focus on the bigger picture: architecture, user experience, and bringing ideas to life.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  Every line of code is a conversation between human intuition and machine intelligence, resulting in faster iterations, 
                  cleaner solutions, and more time to push boundaries.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-syntax-mediumPurple/30">
                <span className="px-3 py-1 text-xs uppercase tracking-wider text-syntax-lightPurple bg-syntax-mediumPurple/20 border border-syntax-mediumPurple/40 rounded-full">
                  AI-Assisted
                </span>
                <span className="px-3 py-1 text-xs uppercase tracking-wider text-syntax-lightPurple bg-syntax-mediumPurple/20 border border-syntax-mediumPurple/40 rounded-full">
                  Human-Driven
                </span>
                <span className="px-3 py-1 text-xs uppercase tracking-wider text-syntax-lightPurple bg-syntax-mediumPurple/20 border border-syntax-mediumPurple/40 rounded-full">
                  Future-Forward
                </span>
              </div>
            </div>
          </Card>

          {/* Interests Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Objectives</h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Master modern web development frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Build scalable, maintainable applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Deliver production-ready solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Continuous professional development</span>
                </li>
              </ul>
            </Card>

            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">Focus Areas</h3>
              <ul className="text-gray-400 space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Clean, efficient code architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Systematic problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-syntax-mediumPurple mr-3">—</span>
                  <span>User experience design</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Skills & Learning Section */}
          <Card className="mb-8">
            <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
            <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Current Focus</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-left border-l-2 border-syntax-mediumPurple pl-4">
                <div className="text-3xl mb-3">⚛️</div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">React</h4>
                <p className="text-xs text-gray-400">Interactive user interfaces</p>
              </div>
              <div className="text-left border-l-2 border-syntax-mediumPurple pl-4">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">CSS & Design</h4>
                <p className="text-xs text-gray-400">Styling and visual design</p>
              </div>
              <div className="text-left border-l-2 border-syntax-mediumPurple pl-4">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Full-Stack</h4>
                <p className="text-xs text-gray-400">End-to-end development</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Vibe;

