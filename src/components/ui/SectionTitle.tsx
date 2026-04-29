'use client';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="font-display font-bold text-4xl md:text-5xl text-white leading-tight"
      >
        {title}
      </motion.h2>

      {/* Gold underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        className="w-16 h-0.5 bg-primary mx-auto mt-4 rounded-full origin-center"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="font-body text-sm text-gray-500 mt-3 tracking-wide uppercase"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
