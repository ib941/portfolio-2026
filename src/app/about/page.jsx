'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  ShoppingBag, 
  Palette, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

const CORE_SKILLS = [
  {
    title: 'Next.js & React',
    description:
      'Engineered for modularity, sub-second route transitions, and responsive scalability using React 19 and Next.js 15 App Router.',
    icon: Code2,
    tags: ['React 19', 'Next.js App Router', 'TypeScript', 'SSR / SSG'],
  },
  {
    title: 'Python Automation & Scripting',
    description:
      'Building headless background task runners, automated media generation pipelines, asynchronous batch operations, and system daemons.',
    icon: Terminal,
    tags: ['Python 3', 'AsyncIO', 'Data Pipelines', 'Headless Workflows'],
  },
  {
    title: 'Salla API & E-Commerce Logic',
    description:
      'End-to-end commerce automation, real-time Salla webhooks, catalog synchronization, and tailored storefront operations architecture.',
    icon: ShoppingBag,
    tags: ['Salla API', 'Webhooks', 'Catalog Automation', 'Commerce Ops'],
  },
  {
    title: 'Tailwind CSS / UI Architecture',
    description:
      'Precision design systems, light-theme liquid glassmorphism, accessible layouts, and fluid 60fps micro-interactions.',
    icon: Palette,
    tags: ['Tailwind CSS', 'Glassmorphism', 'Framer Motion', 'Design Systems'],
  },
];

const TIMELINE = [
  {
    year: '2025 — Present',
    role: 'Internal Visual & E-Commerce Solutions Specialist',
    company: 'GHENA Luxury Perfumes',
    description:
      'Directing end-to-end digital operations, including Salla storefront management, AI-driven commercial media generation, visual brand architecture, and targeted marketing campaign execution.',
  },
  {
    year: '2024 — Present',
    role: 'Junior Front-End Web Developer',
    company: 'Independent / Freelance',
    description:
      'Architecting and deploying responsive, high-performance web applications and custom client portfolios utilizing Next.js, React, Tailwind CSS, and Python automation scripts.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 max-w-4xl mx-auto w-full">
      {/* Page Header Container with True Liquid Glass Effect */}
      <section className="p-8 sm:p-12 md:p-14 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] text-center w-full relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
          Ibrahim Alkabsi
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Creative Web Developer &amp; Systems Architect focused on delivering fast, elegant web applications,
          automated systems, and fluid digital experiences.
        </p>
      </section>

      {/* Core Engineering & Architecture Bio Glass Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.1),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] p-8 sm:p-10 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-center shrink-0 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95),0_8px_20px_rgba(37,99,235,0.15)] text-blue-600">
            <Cpu className="w-8 h-8" />
          </div>

          <div className="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                Engineering Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                Core Engineering &amp; Architecture
              </h2>
            </div>

            <p className="text-slate-700 font-normal leading-relaxed">
              I bridge the gap between high-fidelity visual design and robust backend operations. Beyond writing modular React interfaces, I leverage Python scripting and automation to build the invisible infrastructure that powers modern commerce, from automated media delivery to complex Salla API integrations.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Whether architecting a custom corporate web platform, optimizing high-traffic digital storefront operations, or choreographing generative visual workflows, my focus remains on building software that is maintainable, deterministic, and delightful to interact with.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Grid of Liquid Glass Skill Badges/Cards */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-white/50 pb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#09090b] tracking-tight">
              Technical Competencies &amp; Core Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Specialized expertise across modern frontend engineering and backend automation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_SKILLS.map((skill, idx) => {
            const Icon = skill.icon;
            const accentText = idx % 2 === 0 ? 'text-blue-600' : 'text-pink-600';
            const iconBg = idx % 2 === 0 ? 'text-blue-600' : 'text-pink-600';

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl p-7 sm:p-8 border border-white/65 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/60 hover:border-white/90 hover:shadow-[0_28px_50px_-12px_rgba(15,23,42,0.12),0_0_25px_rgba(56,189,248,0.2)] flex flex-col justify-between overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/60 border border-white/80 flex items-center justify-center ${iconBg} shadow-xs group-hover:scale-105 transition-all [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)]`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      Core Domain
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#09090b] mb-2 group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200/50 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-xl text-[11px] font-mono font-medium text-slate-700 bg-white/60 border border-white/80 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Work Experience Section with Liquid Glass Container */}
      <section className="rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.1),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] p-8 sm:p-10 flex flex-col gap-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />

        <div className="flex items-center justify-between border-b border-white/50 pb-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#09090b] tracking-tight">
            Work Experience
          </h2>
          <span className="text-xs text-slate-500 font-mono font-semibold">Professional Timeline</span>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-blue-300/60 flex flex-col gap-8 mt-2">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Milestone Indicator Node with Blue/Pink Refraction */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 ${idx % 2 === 0 ? 'border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]' : 'border-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]'}`} />

              <div className="rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl [box-shadow:0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.95)] p-6 transition-all duration-300 hover:bg-white/60 hover:border-white/80">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-bold text-[#09090b]">{item.role}</h3>
                  <span className={`text-xs font-mono font-semibold ${idx % 2 === 0 ? 'text-blue-600' : 'text-pink-600'}`}>
                    {item.year}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mb-2">{item.company}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Container */}
      <section className="rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] p-8 sm:p-12 text-center flex flex-col items-center gap-4 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#09090b]">
          Interested in working together?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Available for custom web architecture, e-commerce automation, and full-stack development engagements.
        </p>
        <Link
          href="/contact"
          className="mt-2 flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white liquid-btn-primary active:scale-98"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
