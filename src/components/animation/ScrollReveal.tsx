import { motion, type Variant, useReducedMotion } from 'framer-motion';
import type { HTMLAttributes, ReactNode } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  y = 24,
  x = 0,
  delay = 0,
  duration = 0.6,
  scale,
  once = true,
  className,
  ...props
}: ScrollRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  const hidden: Variant = { opacity: 0, y, x, ...(scale ? { scale } : {}) };
  const visible: Variant = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
