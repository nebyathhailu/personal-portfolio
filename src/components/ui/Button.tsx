'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function Button({ children, href, onClick, variant = 'primary', className = '' }: Props) {
  const base = 'inline-flex items-center gap-2 px-8 py-3.5 font-body font-bold text-sm rounded-full transition-all duration-300';
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary-light hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]',
    outline: 'border border-primary/50 text-primary hover:border-primary hover:bg-primary/8',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a href={href} className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}
