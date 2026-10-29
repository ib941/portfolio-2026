'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Template({ children }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
      transition={{
        duration: reducedMotion ? 0 : 0.25,
        ease: [0.22, 1, 0.36, 1], // Smooth Apple-standard cubic-bezier
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
