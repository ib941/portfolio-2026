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

      {/* Primary Floating Icy Blue Mesh Node */}
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
        className="absolute -top-[10%] left-[15%] w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-sky-200/50 via-blue-200/40 to-transparent blur-[110px]"
      />

      {/* Secondary Soft Cool Gray & Powder Blue Node */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1.05, 1],
          x: [0, -70, 40, 0],
          y: [0, 70, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[30%] -right-[5%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-slate-200/60 via-sky-100/50 to-blue-200/35 blur-[120px]"
      />

      {/* Tertiary Lower Icy Cyan Glow Node */}
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
        className="absolute bottom-[2%] left-[8%] w-[620px] h-[620px] rounded-full bg-gradient-to-br from-blue-100/50 via-cyan-100/45 to-slate-200/40 blur-[100px]"
      />

      {/* Center Subtle Light Diffusion */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[45%] left-[35%] w-[550px] h-[550px] rounded-full bg-gradient-to-r from-white/70 via-sky-100/40 to-transparent blur-[100px]"
      />
    </div>
  );
}
