import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.1), transparent)`;

  const handleScrollToWork = () => {
    const nextSection = document.getElementById('showreel');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative px-6 pt-20 bg-white overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />
      
      {/* Static radial gradient for premium look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <span className="bg-slate-50 px-6 py-3 rounded-full text-sm font-medium text-blue-600 border border-blue-100 shadow-sm">
            ✨ Welcome to the Future of Digital Media
          </span>
        </motion.div>

        {/* Main Headline with Text Reveal Effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
        >
          <TextReveal text="Ibrahim Alkabsi" />
        </motion.h1>

        {/* Sub-headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-slate-600 mb-8"
        >
          Architecting Commerce & Generative Media
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Deploying end-to-end multi-modal AI systems, high-performance storefronts, 
          and hyper-realistic commercial production pipelines.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <motion.button
            onClick={handleScrollToWork}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore My Work
              <svg 
                className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll to explore - Animated Bouncing Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer"
            onClick={handleScrollToWork}
          >
            <span className="text-sm font-medium text-slate-500">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Text Reveal Component with DecryptedText-like effect
function TextReveal({ text }) {
  const letters = text.split('');
  
  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2 + (index * 0.03),
            ease: "easeOut" 
          }}
          className="inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}
