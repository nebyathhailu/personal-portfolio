'use client';
import { motion } from 'framer-motion';
import { profile } from '@/data/content';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-14 relative overflow-hidden border-t border-primary/10">
      <div className="absolute inset-0 bg-black/80" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 relative z-10">
        {/* Logo */}
        <span className="font-display text-2xl font-bold text-primary">
          {profile.name.split(' ')[0]}
        </span>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { href: profile.github, icon: <FiGithub />, label: 'GitHub' },
            { href: profile.linkedin, icon: <FiLinkedin />, label: 'LinkedIn' },
            { href: `mailto:${profile.email}`, icon: <FiMail />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 text-lg"
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-body text-gray-500">
          {['About', 'Projects', 'Skills', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-600 font-body">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
