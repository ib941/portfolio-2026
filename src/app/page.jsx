'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import {
  ArrowRight,
  Layers,
  Cpu,
  Code2,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section Container with Liquid Glass Effect */}
      <section className="relative flex flex-col items-center text-center p-8 sm:p-14 md:p-16 max-w-5xl mx-auto w-full liquid-glass-section">
        {/* Hero Title (H1) - Completely free of any small pill badges, solid black */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.08] mb-6 max-w-4xl"
        >
          Creative Web Developer & Systems Architect
        </motion.h1>

        {/* Hero Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-10"
        >
          Engineering high-performance web applications, automated commerce systems, and fluid digital experiences.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/work"
            className="group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white liquid-btn-primary active:scale-98"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#09090b] liquid-glass-pill hover:bg-white/60 transition-all"
          >
            <span>Get in Touch</span>
          </Link>
        </motion.div>
      </section>

      {/* Metric Counters Strip - Liquid Glass Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { metric: '5+ Years', label: 'Engineering Experience', sub: 'Production web apps', color: 'text-blue-600' },
          { metric: '100%', label: 'Type-Safe & Scalable', sub: 'Clean architecture', color: 'text-pink-600' },
          { metric: '60fps', label: 'Motion Dynamics', sub: 'Fluid interactions', color: 'text-blue-600' },
          { metric: '<100ms', label: 'Time to Interactive', sub: 'Optimized performance', color: 'text-pink-600' },
        ].map((item, idx) => (
          <GlassCard key={idx} variant="subtle" className="p-6 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b] mb-1">
              {item.metric}
            </div>
            <div className={`text-xs font-semibold ${item.color}`}>{item.label}</div>
            <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
          </GlassCard>
        ))}
      </section>

      {/* Core Engineering Disciplines - Liquid Glass Section */}
      <section className="p-8 sm:p-12 liquid-glass-section flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b]">
            Crafted with modern frontend precision
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Combining scalable system architecture with polished, responsive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-7 flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-600 mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2">
                Modern Component Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Building scalable, maintainable applications with React 19, Next.js App Router, and TypeScript.
                Modular design systems that grow with your product.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700 gap-1">
              <span>Next.js & React</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 ml-auto" />
            </div>
          </GlassCard>

          <GlassCard className="p-7 flex flex-col justify-between h-full group" variant="accent">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-600 mb-5 shadow-[0_0_20px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(255,255,255,0.95)] group-hover:scale-105 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2">
                Fluid Micro-Interactions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Intuitive layout animations, subtle state transitions, and light-themed liquid glass surfaces
                that make software feel responsive and enjoyable to use.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-pink-100/70 flex items-center text-xs font-semibold text-slate-700 gap-1">
              <span>Framer Motion & Tailwind</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 ml-auto" />
            </div>
          </GlassCard>

          <GlassCard className="p-7 flex flex-col justify-between h-full group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-600 mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#09090b] mb-2">
                Automated Commerce & Systems
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Designing resilient commerce flows, automated APIs, and operations workflows that run
                reliably at scale with minimum latency.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700 gap-1">
              <span>Python & API Workflows</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 ml-auto" />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Featured Project Showcase Teaser - Liquid Glass Card */}
      <section className="relative">
        <GlassCard className="p-8 sm:p-10" variant="prominent">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Featured Project
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Z Fakhama — Custom Web Architecture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom web architecture and high-performance user interface engineering built for speed,
                responsiveness, and visual distinction.
              </p>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-3 pt-1">
                <span>Next.js</span>
                <span>•</span>
                <span>React</span>
                <span>•</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/work"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white liquid-btn-primary"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
