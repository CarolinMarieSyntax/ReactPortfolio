import React from 'react';
import Card from '../components/CSSComponents/Card';
import Badge from '../components/CSSComponents/Badge';
import Button from '../components/CSSComponents/Button';
import ProgressBar from '../components/CSSComponents/ProgressBar';
import Plasma from '../components/Plasma';
import projectsData from '../data/projects.json';

function Projects() {
  const projects = projectsData.filter((project) => project.projectName && project.projectName.trim().length > 0);

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
            Projects
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Web Development Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={project.projectName + index} className="flex flex-col">
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-syntax-lightPurple mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">{project.projectName}</h3>
                <p className="text-sm text-syntax-lightPurple uppercase tracking-widest">
                  {project.module} • {project.projectType}
                </p>
              </div>
              <div className="space-y-4 flex-grow">
                {project.task && (
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Task</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.task}</p>
                  </div>
                )}
                {project.personalApproach && (
                  <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">Personal Approach</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.personalApproach}</p>
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                {project.programsUsed?.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Programs Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.programsUsed.map((program, programIndex) => (
                        <Badge key={program + programIndex} variant="primary">{program}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                {project.externalProgramsUsed?.length > 0 && (
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">External Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.externalProgramsUsed.map((program, programIndex) => (
                        <Badge key={program + programIndex} variant="default">{program}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {typeof project.progress === 'number' && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Progress</h4>
                  <ProgressBar progress={Math.round(project.progress * 100)} />
                </div>
              )}
              
              <div className="flex gap-3 mt-auto pt-4 border-t border-syntax-mediumPurple/30">
                <Button variant="primary" size="sm" className="flex-1">
                  View Project
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="w-16 h-0.5 bg-syntax-mediumPurple mx-auto mb-4"></div>
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Additional projects in development
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

