import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export function FloatingCard({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn('rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur', className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 6.5, delay, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
      }}
      className={cn('rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur', className)}
    >
      {children}
    </motion.div>
  );
}
