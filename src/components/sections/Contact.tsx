'use client';
import { motion } from 'framer-motion';
import { profile } from '@/data/content';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const contactLinks = [
  {
    label: 'Email',
    value: 'nebyathhailu@gmail.com',
    href: `mailto:${profile.email}`,
    icon: <FiMail />,
    cta: 'Send a message',
    color: '#D4AF37',
  },
  {
    label: 'GitHub',
    value: 'github.com/nebyathhailu',
    href: profile.github,
    icon: <FiGithub />,
    cta: 'View code',
    color: '#ffffff',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nebyat-h-hailu',
    href: profile.linkedin,
    icon: <FiLinkedin />,
    cta: 'Connect',
    color: '#0A66C2',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Gold gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="font-body text-primary text-sm font-semibold tracking-widest uppercase">
            Let&apos;s Work Together
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-5">
            Get In Touch
          </h2>
          <p className="font-body text-gray-400 text-base leading-relaxed max-w-lg mx-auto mb-12">
            I&apos;m open to new opportunities. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-black font-body font-bold text-base rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group"
          >
            <FiMail className="text-lg" />
            Say Hello
            <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/6" />
          <span className="font-body text-xs text-gray-600 uppercase tracking-widest">or find me on</span>
          <div className="flex-1 h-px bg-white/6" />
        </div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactLinks.map(({ label, value, href, icon, cta, color }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-background-secondary border border-white/5 hover:border-white/15 transition-all duration-300 text-left flex flex-col gap-3"
              style={{
                '--hover-color': color,
              } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-500 group-hover:text-white transition-colors" style={{ color: 'inherit' }}>
                  {icon}
                </span>
                <FiArrowUpRight className="text-gray-700 group-hover:text-gray-300 text-sm transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <div className="font-body text-xs text-gray-500 uppercase tracking-wider mb-1">{label}</div>
                <div className="font-body text-sm text-gray-300 font-medium truncate">{value}</div>
              </div>
              <span className="font-body text-xs font-semibold" style={{ color }}>
                {cta} →
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
