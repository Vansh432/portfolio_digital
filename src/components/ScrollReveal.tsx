'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.65,
  className,
  direction = 'up',
  distance = 40,
  once = true,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px' });

  const hidden = {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : hidden}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
