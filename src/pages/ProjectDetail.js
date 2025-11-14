import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Badge from '../components/CSSComponents/Badge';
import ProgressBar from '../components/CSSComponents/ProgressBar';
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
};

const allProjects = projectsData.filter((project) => project.projectName && project.projectName.trim().length > 0);

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    if (!slug) return null;
    return allProjects.find((item) => slugify(item.projectName) === slug.toLowerCase());
  }, [slug]);

  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const galleryImages = project.images?.map((imagePath) => imageMap[imagePath] || imagePath).filter(Boolean) || [];
  const imageFit = project.imageFit || 'cover';

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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">{project.projectName}</h1>
            <p className="mt-3 text-sm text-syntax-lightPurple uppercase tracking-[0.4em]">
              {project.module || 'Module'} • {project.projectType || 'Project Type'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="rounded-full border border-syntax-lightPurple/40 bg-syntax-darkBlue/60 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-syntax-lightPurple hover:bg-syntax-lightPurple/20 transition-colors"
          >
            Back to Overview
          </button>
        </div>

        {galleryImages.length > 0 && (
          <ProjectGallery images={galleryImages} title={project.projectName} fit={imageFit} />
        )}

        <article className="space-y-12 text-gray-200">
          <div className="grid gap-8 lg:grid-cols-2">
            {project.task && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wide">Task</h2>
                <p className="text-sm leading-relaxed text-gray-300">{project.task}</p>
              </div>
            )}
            {project.personalApproach && (
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white uppercase tracking-wide">Personal Approach</h2>
                <p className="text-sm leading-relaxed text-gray-300">{project.personalApproach}</p>
              </div>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {project.programsUsed?.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Programs Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.programsUsed.map((program, programIndex) => (
                    <Badge key={program + programIndex} variant="primary">{program}</Badge>
                  ))}
                </div>
              </div>
            )}
            {project.externalProgramsUsed?.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">External Tools</h3>
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
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Progress</h3>
              <ProgressBar progress={Math.round(project.progress * 100)} />
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default ProjectDetail;

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


