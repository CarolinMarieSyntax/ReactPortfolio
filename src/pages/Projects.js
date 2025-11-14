import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Plasma from '../components/Plasma';
import projectsData from '../data/projects.json';
import { slugify } from '../utils/slugify';

import mandalamore1 from '../assets/projects/mandalamore/mandalamore-1.png';
import mandalamore12 from '../assets/projects/mandalamore/mandalamore-1-2.png';
import mandalamore2 from '../assets/projects/mandalamore/mandalamore-2.png';
import mandalamore22 from '../assets/projects/mandalamore/mandalamore-2-2.png';
import mandalamore3 from '../assets/projects/mandalamore/mandalamore-3.png';
import mandalamore4 from '../assets/projects/mandalamore/mandalamore-4.png';

import nmtw1 from '../assets/projects/nomattertheweather/nomattertheweather-1.png';
import nmtw2 from '../assets/projects/nomattertheweather/nomattertheweather-2.png';
import nmtw21 from '../assets/projects/nomattertheweather/nomattertheweather-2-1.png';
import nmtw3 from '../assets/projects/nomattertheweather/nomattertheweather-3.png';

import rezepte1 from '../assets/projects/rezepte-sammlung/rezepte-sammlung-1.png';
import rezepte2 from '../assets/projects/rezepte-sammlung/rezepte-sammlung-2.png';
import rezepte3 from '../assets/projects/rezepte-sammlung/rezepte-sammlung-3.png';
import rezepte4 from '../assets/projects/rezepte-sammlung/rezepte-sammlung-4.png';
import rezepte5 from '../assets/projects/rezepte-sammlung/rezepte-sammlung-5.png';

import soultoskin1 from '../assets/projects/soultoskin/soultoskin-1.png';
import soultoskin2 from '../assets/projects/soultoskin/soultoskin-2.png';
import soultoskin3 from '../assets/projects/soultoskin/soultoskin-3.png';
import soultoskin4 from '../assets/projects/soultoskin/soultoskin-4.png';
import soultoskin5 from '../assets/projects/soultoskin/soultoskin-5.png';

import xylophon1 from '../assets/projects/rainbow-xylophone/xylophon-1.png';
import xylophon2 from '../assets/projects/rainbow-xylophone/xylophon-2.png';

import portfolio1 from '../assets/projects/portfolio/portfolio.png';

const imageMap = {
  '/assets/projects/mandalamore/mandalamore-1.png': mandalamore1,
  '/assets/projects/mandalamore/mandalamore-1-2.png': mandalamore12,
  '/assets/projects/mandalamore/mandalamore-2.png': mandalamore2,
  '/assets/projects/mandalamore/mandalamore-2-2.png': mandalamore22,
  '/assets/projects/mandalamore/mandalamore-3.png': mandalamore3,
  '/assets/projects/mandalamore/mandalamore-4.png': mandalamore4,
  '/assets/projects/nomattertheweather/nomattertheweather-1.png': nmtw1,
  '/assets/projects/nomattertheweather/nomattertheweather-2.png': nmtw2,
  '/assets/projects/nomattertheweather/nomattertheweather-2-1.png': nmtw21,
  '/assets/projects/nomattertheweather/nomattertheweather-3.png': nmtw3,
  '/assets/projects/rezepte-sammlung/rezepte-sammlung-1.png': rezepte1,
  '/assets/projects/rezepte-sammlung/rezepte-sammlung-2.png': rezepte2,
  '/assets/projects/rezepte-sammlung/rezepte-sammlung-3.png': rezepte3,
  '/assets/projects/rezepte-sammlung/rezepte-sammlung-4.png': rezepte4,
  '/assets/projects/rezepte-sammlung/rezepte-sammlung-5.png': rezepte5,
  '/assets/projects/soultoskin/soultoskin-1.png': soultoskin1,
  '/assets/projects/soultoskin/soultoskin-2.png': soultoskin2,
  '/assets/projects/soultoskin/soultoskin-3.png': soultoskin3,
  '/assets/projects/soultoskin/soultoskin-4.png': soultoskin4,
  '/assets/projects/soultoskin/soultoskin-5.png': soultoskin5,
  '/assets/projects/rainbow-xylophone/xylophon-1.png': xylophon1,
  '/assets/projects/rainbow-xylophone/xylophon-2.png': xylophon2,
  '/assets/projects/portfolio/portfolio.png': portfolio1,
};

const Projects = () => {
  const projects = useMemo(
    () => projectsData.filter((project) => project.projectName && project.projectName.trim().length > 0),
    []
  );

  return (
    <div className="relative py-16 bg-syntax-darker">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-syntax-darker via-syntax-darkBlue/60 to-syntax-darker opacity-90" />
        <Plasma 
          color="#9370DB"
          speed={0.4}
          direction="forward"
          scale={1.4}
          opacity={0.6}
          mouseInteractive={false}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Projects
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 mx-auto uppercase tracking-wider whitespace-nowrap">
            Browse recent prototypes, experiments, and collaboration pieces.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const slug = slugify(project.projectName);
            const firstImage = project.images?.find(Boolean);
            const preview = firstImage ? (imageMap[firstImage] || firstImage) : null;
            return (
              <article
                key={project.projectName}
                className="group relative overflow-hidden rounded-3xl border border-syntax-mediumPurple/30 bg-black/30 shadow-xl transition transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link to={`/projects/${slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.projectName}`} />
                <div className="relative h-56 overflow-hidden">
                  {preview ? (
                    <img
                      src={preview}
                      alt={project.projectName}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-syntax-darkBlue text-sm uppercase tracking-wide text-gray-400">
                      Preview coming soon
                    </div>
                  )}
                </div>
                <div className="space-y-4 p-6 text-sm text-gray-200">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-[0.35em] text-syntax-lightPurple">
                      {project.module || 'Module'} • {project.projectType || 'Project Type'}
                    </span>
                    <h2 className="text-xl font-semibold uppercase tracking-wide text-white">{project.projectName}</h2>
                  </div>
                  {project.task && (
                    <p className="leading-relaxed text-gray-300">{project.task}</p>
                  )}
                  <div className="flex items-center justify-between text-xs uppercase tracking-wide text-syntax-lightPurple">
                    <span>{project.programsUsed?.join(', ') || 'Tools TBD'}</span>
                    {typeof project.progress === 'number' && (
                      <span>{Math.round(project.progress * 100)}% complete</span>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-syntax-mediumPurple/0 transition group-hover:bg-syntax-mediumPurple/10" />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
