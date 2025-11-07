import React from 'react';
import Button from '../components/CSSComponents/Button';
import Card from '../components/CSSComponents/Card';
import Badge from '../components/CSSComponents/Badge';
import ProgressBar from '../components/CSSComponents/ProgressBar';
import Plasma from '../components/Plasma';

function CSSShowcase() {
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
            CSS Components
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Reusable Component Library
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-16">
          <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Buttons</h2>
          <Card>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-syntax-lightPurple mb-4 uppercase tracking-wider">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-syntax-lightPurple mb-4 uppercase tracking-wider">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Card Title</h3>
              <p className="text-gray-400 text-sm">
                Sample card component with hover effects and clean styling.
              </p>
            </Card>
            
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Card Title</h3>
              <p className="text-gray-400 text-sm">
                Organized content display with structured visual hierarchy.
              </p>
            </Card>
            
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">Card Title</h3>
              <p className="text-gray-400 text-sm">
                Responsive and flexible, adapting to any screen size.
              </p>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16">
          <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Badges</h2>
          <Card>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-syntax-lightPurple mb-4 uppercase tracking-wider">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
              </div>
            </div>
          </Card>
        </section>

        {/* Progress Bars Section */}
        <section className="mb-16">
          <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Progress Bars</h2>
          <Card>
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-syntax-lightPurple mb-4 uppercase tracking-wider">Examples</h3>
              <ProgressBar progress={0} />
              <ProgressBar progress={50} />
              <ProgressBar progress={83} />
              <ProgressBar progress={100} />
            </div>
          </Card>
        </section>

        {/* Combined Example */}
        <section className="mb-16">
          <div className="w-16 h-0.5 bg-syntax-lightPurple mb-6"></div>
          <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">Combined Example</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Project Card</h3>
                <Badge variant="primary">New</Badge>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Components working together to create cohesive UI elements.
              </p>
              <div className="mb-4">
                <ProgressBar progress={75} />
              </div>
              <div className="flex gap-3 pt-4 border-t border-syntax-mediumPurple/30">
                <Button variant="primary" size="sm">View Project</Button>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            </Card>
            
            <Card>
              <div className="w-12 h-0.5 bg-syntax-lightPurple mb-4"></div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Feature Card</h3>
                <Badge variant="success">Active</Badge>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Fully customizable components following consistent design patterns.
              </p>
              <div className="mb-4">
                <ProgressBar progress={100} />
              </div>
              <div className="flex gap-3 pt-4 border-t border-syntax-mediumPurple/30">
                <Button variant="secondary" size="sm">Explore</Button>
                <Button variant="outline" size="sm">Details</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CSSShowcase;

