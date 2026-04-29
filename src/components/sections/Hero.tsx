'use client';
import { motion, easeInOut } from 'framer-motion';
import { profile } from '@/data/content';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeInOut } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,transparent_20%,rgba(0,0,0,0.72)_100%)]" />

      {/* Content */}
      <motion.div
        className="relative z-10  w-full px-6 text-left md:text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3 md:justify-center">
          <span className="h-px w-10 bg-primary" />
          <span className="font-body text-primary text-sm font-semibold tracking-widest uppercase">
            AI / ML Engineer | Software Engineer
          </span>
          <span className="h-px w-10 bg-primary" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-8"
        >
          Hi, I&apos;m{' '}
          <span className="text-gold-shimmer">
            {profile.name.split(' ')[0]}
          </span>{' '}
          <span className="text-gold-shimmer">
            {profile.name.split(' ').slice(1).join(' ')}
          </span>
        </motion.h1>

        {/* Statement */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.statement}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-black font-body font-bold rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/50 text-primary font-body font-semibold rounded-full hover:border-primary hover:bg-primary/8 transition-all duration-300 text-sm"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center gap-5 justify-start md:justify-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors text-xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <div className="h-4 w-px bg-gray-700" />
          <span className="font-body text-xs text-gray-600 tracking-wide">
            {profile.email}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
