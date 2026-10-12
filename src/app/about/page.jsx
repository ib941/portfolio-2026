'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CORE_SKILLS = [
  {
    category: '01 / Frontend Architecture',
    title: 'Next.js & React Engineering',
    description:
      'Engineered for modularity, sub-second route transitions, and responsive scalability using React 19 and Next.js 15 App Router.',
    tags: ['React 19', 'Next.js App Router', 'TypeScript', 'SSR / SSG', 'Tailwind CSS'],
  },
  {
    category: '02 / Systems & Automation',
    title: 'Python Scripting & Task Runners',
    description:
      'Building headless background task runners, automated media generation pipelines, asynchronous batch operations, and system daemons.',
    tags: ['Python 3', 'AsyncIO', 'Data Pipelines', 'Headless Workflows', 'Automation'],
  },
  {
    category: '03 / Commerce Operations',
    title: 'Salla API & E-Commerce Logic',
    description:
      'End-to-end commerce automation, real-time Salla webhooks, catalog synchronization, and tailored storefront operations architecture.',
    tags: ['Salla Platform', 'Webhooks', 'Theme Customization', 'Catalog Automation'],
  },
  {
    category: '04 / Visual Execution',
    title: 'UI Architecture & Generative Media',
    description:
      'Precision design systems, strict geometric typography, studio-grade commercial product rendering, and fluid micro-interactions.',
    tags: ['Design Systems', 'Generative Media', 'Visual Direction', 'Geometric Layouts'],
  },
];

const TIMELINE = [
  {
    period: '2025 — Present',
    role: 'Internal Visual & E-Commerce Solutions Specialist',
    company: 'GHENA Luxury Perfumes',
    description:
      'Directing end-to-end digital operations, including Salla storefront management, AI-driven commercial media generation, visual brand architecture, and targeted marketing campaign execution.',
  },
  {
    period: '2024 — Present',
    role: 'Front-End Web Developer & Systems Architect',
    company: 'Independent / Freelance',
    description:
      'Architecting and deploying responsive, high-performance web applications and custom client platforms utilizing Next.js, React, Tailwind CSS, and Python automation scripts.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7edd7] text-slate-900 pt-28 sm:pt-36 pb-24 w-full max-w-4xl mx-auto px-5 sm:px-8">
      {/* Header Section */}
      <section className="border-b border-black/10 pb-12 sm:pb-16 mb-14 sm:mb-16">
        <span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase block mb-3">
          Profile &amp; Manifesto
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Bridging Code and Visual Geometry.
        </h1>
        
        {/* Exact Architectural Manifesto Body Copy */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
          Operating at the exact intersection of technical architecture and high-end visual design. My workflow combines robust web development in Next.js and Python with advanced graphic execution and cutting-edge AI tools. Whether it is configuring a complex e-commerce ecosystem, deploying a sleek progressive web app, or executing studio product photography, the philosophy remains the same: strip away the clutter, avoid soft edges, and build digital experiences anchored in strict architectural geometry.
        </p>
      </section>

      {/* SECTION 1: Technical Competencies & Stack */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Core technical disciplines spanning web architecture, headless automation, and commerce systems.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">01 — Capabilities</span>
        </div>

        {/* Minimal Grid without heavy white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {CORE_SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between border-b border-black/10 pb-8"
            >
              <div>
                <span className="text-xs font-mono text-slate-400 font-medium block mb-2">
                  {skill.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Professional Timeline */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Professional Timeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Hands-on operational and engineering background across commercial ecosystems.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">02 — Experience</span>
        </div>

        <div className="flex flex-col gap-8">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border-b border-black/10 pb-8 flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {item.role}
                </h3>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {item.period}
                </span>
              </div>
              <div className="text-xs font-mono font-semibold text-slate-700">
                {item.company}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Container */}
      <section className="border-t border-black/10 pt-16 sm:pt-20 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Interested in working together?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Available for custom web architecture, e-commerce automation, and full-stack development engagements.
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
