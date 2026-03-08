import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export function ScrollReveal({ children, y = 24, delay = 0, className = '' }: { children: ReactNode; y?: number; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
