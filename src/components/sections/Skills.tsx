'use client';
import { motion } from 'framer-motion';
import { skills } from '@/data/content';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

const CATEGORY_CONFIG = [
  { key: 'languages' as const, label: 'Languages', color: '#D4AF37' },
  { key: 'frameworks' as const, label: 'Frameworks', color: '#6366F1' },
  { key: 'tools' as const, label: 'Tools & Platforms', color: '#10B981' },
  { key: 'libraries' as const, label: 'Libraries', color: '#F43F5E' },
];

function SkillIcon({ name, icon, color, index }: {
  name: string;
  icon: string;
  color: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          y: hovered ? -6 : 0,
          boxShadow: hovered ? `0 8px 24px ${color}40` : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.25 }}
        className="w-14 h-14 rounded-xl bg-background-tertiary border border-white/6 flex items-center justify-center p-3 relative overflow-hidden"
        style={{
          borderColor: hovered ? `${color}60` : 'rgba(255,255,255,0.06)',
          backgroundColor: hovered ? `${color}0d` : '#141414',
        }}
      >
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
          style={{
            filter: hovered ? 'brightness(1.1)' : 'brightness(0.85) saturate(0.8)',
            transition: 'filter 0.25s',
          }}
        />
      </motion.div>

      <span
        className="font-body text-xs font-medium transition-colors duration-200 text-center leading-tight max-w-[72px]"
        style={{ color: hovered ? color : 'rgba(156,163,175,0.8)' }}
      >
        {name}
      </span>
    </motion.div>
  );
}

function SkillCategory({ categoryKey, label, color }: {
  categoryKey: keyof typeof skills;
  label: string;
  color: string;
}) {
  const items = skills[categoryKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-60px' }}
      className="p-7 rounded-2xl bg-background-secondary border border-white/5"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-5 rounded-full" style={{ backgroundColor: color }} />
        <h3 className="font-display font-bold text-lg text-white">{label}</h3>
      </div>

      {/* Icons grid */}
      <div className="flex flex-wrap gap-5">
        {items.map((skill, i) => (
          <SkillIcon
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            color={color}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Warm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionTitle title="Skills & Tools" subtitle="Technologies I work with every day" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-16">
          {CATEGORY_CONFIG.map(({ key, label, color }) => (
            <SkillCategory key={key} categoryKey={key} label={label} color={color} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          className="text-center font-body text-sm text-gray-600 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Always learning and adding new tools to the stack.
        </motion.p>
      </div>
    </section>
  );
}
