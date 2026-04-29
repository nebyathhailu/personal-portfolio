'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';

// Tech icon map
const TECH_ICON_MAP: Record<string, string> = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Django REST Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Django REST': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Next.js 14': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Celery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Twilio': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
};

// Individual stacking card
function StackingCard({ project, index, total }: {
  project: typeof projects[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = project.accentColor ?? '#D4AF37';

  // Each card sticks slightly higher than the previous
  const stickyTop = 80 + index * 12;

  return (
    <div
      ref={ref}
      style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
      className="sticky"
    >
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto max-w-6xl "
      >
        <div
          className="group relative rounded-2xl overflow-hidden border border-white/6 bg-background-secondary transition-all duration-500"
          style={{
            boxShadow: `0 ${4 + index * 2}px ${32 + index * 8}px rgba(0,0,0,0.5), 0 0 0 1px ${accent}08`,
          }}
        >
          {/* Accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}90, transparent)` }}
          />

          <div className="flex flex-col md:flex-row min-h-[500px]">
            {/* Left: Image */}
            <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-secondary/80 md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/90 to-transparent md:hidden" />

              {/* Number badge */}
              <div className="absolute top-4 left-4 font-display text-5xl font-bold leading-none select-none"
                style={{ color: `${accent}22` }}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-7 md:p-9">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>
                <div
                  className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: accent, boxShadow: `0 0 8px ${accent}` }}
                />
              </div>

              <p className="font-body text-sm text-gray-400 leading-relaxed mb-6 line-clamp-4">
                {project.longDescription}
              </p>

              {/* Tech Icons */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.tools.map((tool) => {
                  const iconUrl = TECH_ICON_MAP[tool];
                  return (
                    <div key={tool} className="relative group/tool">
                      {iconUrl ? (
                        <div className="w-8 h-8 rounded-lg bg-background-tertiary border border-white/6 p-1.5 flex items-center justify-center hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                          <img src={iconUrl} alt={tool} className="w-full h-full object-contain" loading="lazy" />
                        </div>
                      ) : (
                        <span
                          className="px-2.5 py-1 text-xs font-body rounded-lg border"
                          style={{ borderColor: `${accent}30`, color: `${accent}cc`, backgroundColor: `${accent}08` }}
                        >
                          {tool}
                        </span>
                      )}
                      {/* Tooltip */}
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-white/10 text-white text-xs font-body rounded whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-opacity pointer-events-none z-30">
                        {tool}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-body font-semibold text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiGithub />
                    View on GitHub
                  </a>
                ) : (
                  <span className="text-sm font-body text-gray-600 italic">Private repository</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-black/55" />
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="A selection of projects I've built" />

        {/* Stacking cards container */}
        <div className="mt-16 pb-24 flex flex-col gap-6">
          {projects.map((project, index) => (
            <StackingCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
