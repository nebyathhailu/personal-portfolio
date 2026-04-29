'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { ProjectType } from '@/data/content';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Tech icon map — uses devicons CDN
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
};

interface Props {
  project: ProjectType;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Subtle parallax on the image
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const accent = project.accentColor ?? '#D4AF37';

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-80px' }}
        className="group relative bg-background-secondary border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500"
        style={{
          boxShadow: `0 0 0 1px ${accent}08`,
        }}
        whileHover={{ boxShadow: `0 8px 48px ${accent}18, 0 0 0 1px ${accent}30` }}
      >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />
          {/* Accent color bar */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
          {/* Index badge */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-black/60 backdrop-blur-sm flex items-center justify-center text-xs font-body font-bold text-gray-400">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
            {project.longDescription}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {project.tools.map((tool) => {
              const iconUrl = TECH_ICON_MAP[tool];
              return (
                <div key={tool} className="relative group/tool">
                  {iconUrl ? (
                    <div className="w-7 h-7 rounded-md bg-background-tertiary border border-white/5 p-1.5 flex items-center justify-center hover:border-primary/40 transition-all duration-200 cursor-default">
                      <img
                        src={iconUrl}
                        alt={tool}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        style={{ filter: 'brightness(0.9)' }}
                      />
                    </div>
                  ) : (
                    <span className="px-2 py-1 text-xs font-body border border-primary/20 text-primary/70 rounded-md bg-primary/5">
                      {tool}
                    </span>
                  )}
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-white/10 text-white text-xs font-body rounded whitespace-nowrap opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    {tool}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body font-semibold text-gray-400 hover:text-primary transition-colors"
              >
                <FiGithub className="text-base" />
                View Source
              </a>
            ) : (
              <span className="text-sm font-body text-gray-600">Private Project</span>
            )}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}30` }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
