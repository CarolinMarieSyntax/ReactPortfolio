import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../components/CSSComponents/Card';
import Badge from '../components/CSSComponents/Badge';
import ProgressBar from '../components/CSSComponents/ProgressBar';
import Plasma from '../components/Plasma';
import projectsData from '../data/projects.json';

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

const slugify = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

function Projects() {
  const location = useLocation();
  const navigate = useNavigate();
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
  };

  const projects = projectsData.filter((project) => project.projectName && project.projectName.trim().length > 0);
  const activeSlug = useMemo(() => {
    if (!location.hash) return null;
    const lower = location.hash.toLowerCase();
    if (lower.startsWith('#project-')) {
      return lower.replace('#project-', '');
    }
    return null;
  }, [location.hash]);

  const visibleProjects = useMemo(() => {
    if (!activeSlug) return projects;
    const filtered = projects.filter((project) => slugify(project.projectName) === activeSlug);
    return filtered.length > 0 ? filtered : projects;
  }, [projects, activeSlug]);

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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Projects
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider">
            Web Development Projects
          </p>
          {activeSlug && (
            <button
              type="button"
              onClick={() => navigate('/projects', { replace: true })}
              className="mt-6 rounded-full border border-syntax-lightPurple/40 bg-syntax-darkBlue/60 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-syntax-lightPurple hover:bg-syntax-lightPurple/20 transition-colors"
            >
              Show All Projects
            </button>
          )}
        </div>

        <div className="space-y-16">
          {visibleProjects.map((project, index) => {
            const galleryImages = project.images?.map((imagePath) => imageMap[imagePath] || imagePath).filter(Boolean) || [];
            const imageFit = project.imageFit || 'cover';
            const slug = slugify(project.projectName);
            return (
              <section key={project.projectName + index} id={`project-${slug}`} className="scroll-mt-24 space-y-10">
                {galleryImages.length > 0 && (
                  <ProjectGallery images={galleryImages} title={project.projectName} fit={imageFit} />
                )}
                <article className="space-y-10 text-gray-200">
                  <header className="space-y-3">
                    <div className="w-16 h-0.5 bg-syntax-lightPurple" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">{project.projectName}</h2>
                    <p className="text-sm text-syntax-lightPurple uppercase tracking-[0.4em]">
                      {project.module || 'Module'} • {project.projectType || 'Project Type'}
                    </p>
                  </header>

                  <div className="grid gap-8 md:grid-cols-2">
                    {project.task && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Task</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{project.task}</p>
                      </div>
                    )}
                    {project.personalApproach && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Personal Approach</h3>
                        <p className="text-sm leading-relaxed text-gray-300">{project.personalApproach}</p>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {project.programsUsed?.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Programs Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.programsUsed.map((program, programIndex) => (
                            <Badge key={program + programIndex} variant="primary">{program}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {project.externalProgramsUsed?.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">External Tools</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.externalProgramsUsed.map((program, programIndex) => (
                            <Badge key={program + programIndex} variant="default">{program}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {typeof project.progress === 'number' && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Progress</h4>
                      <ProgressBar progress={Math.round(project.progress * 100)} />
                    </div>
                  )}
                </article>
                {index !== visibleProjects.length - 1 && (
                  <div className="h-px bg-syntax-mediumPurple/30" />
                )}
              </section>
            );
          })}
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

const ProjectGallery = ({ images, title, fit = 'cover' }) => {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const total = images.length;
  const current = images[index % total];

  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-syntax-mediumPurple/40 bg-black/20 shadow-2xl">
      <img
        src={current}
        alt={`${title} showcase ${index + 1}`}
        className={`w-full h-[34rem] md:h-[42rem] ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl transition"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="absolute bottom-6 inset-x-0 flex justify-center gap-3">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 w-10 rounded-full transition ${dotIndex === index ? 'bg-syntax-lightPurple' : 'bg-white/30 hover:bg-white/60'}`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

