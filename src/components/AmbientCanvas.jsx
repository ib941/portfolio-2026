'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientCanvas() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 liquid-mesh-background"
    >
      {/* Subtle fine geometric grid pattern for sub-pixel precision */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Primary Floating Electric Blue Mesh Node */}
      <motion.div
        animate={{
          scale: [1, 1.25, 0.95, 1],
          x: [0, 80, -50, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[12%] left-[12%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-sky-400/35 via-blue-500/30 to-indigo-400/20 blur-[110px]"
      />

      {/* Secondary Vibrant Fluid Pink Node */}
      <motion.div
        animate={{
          scale: [1, 1.28, 1.05, 1],
          x: [0, -70, 40, 0],
          y: [0, 70, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[25%] -right-[8%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-pink-500/30 via-fuchsia-400/25 to-rose-300/15 blur-[120px]"
      />

      {/* Tertiary Lower Electric Azure & Cyan Node */}
      <motion.div
        animate={{
          scale: [0.95, 1.2, 0.9, 0.95],
          x: [0, 50, -60, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-[2%] left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-sky-300/15 blur-[100px]"
      />

      {/* Center White & Pink/Blue Light Dispersion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.65, 0.9, 0.65],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[42%] left-[30%] w-[580px] h-[580px] rounded-full bg-gradient-to-r from-white/85 via-sky-50/60 to-pink-50/45 blur-[95px]"
      />
    </div>
  );
}
