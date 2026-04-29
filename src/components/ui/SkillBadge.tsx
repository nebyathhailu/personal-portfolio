'use client';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  icon?: string;
}

export default function SkillBadge({ name, icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 bg-background-tertiary border border-white/6 rounded-lg text-sm font-body text-gray-300 hover:border-primary/40 hover:text-primary transition-all duration-200 cursor-default"
    >
      {icon && (
        <img src={icon} alt={name} className="w-4 h-4 object-contain" loading="lazy" />
      )}
      {name}
    </motion.div>
  );
}
