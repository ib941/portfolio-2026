'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WEB_ENGINEERING_PROJECTS = [
  {
    id: 'shourna',
    title: 'Shourna',
    subtitle: 'Corporate & Industrial Platform',
    description:
      'Custom multi-language industrial web infrastructure featuring bilingual localized routing (Arabic & English), responsive service directories, and high-performance asset delivery.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
    href: 'https://shourna.com',
    displayUrl: 'shourna.com',
  },
  {
    id: 'zfakhama',
    title: 'Z Fakhama',
    subtitle: 'Custom Web Architecture',
    description:
      'High-performance digital presence engineered for fast time-to-interactive, fluid micro-interactions, clean system architecture, and visual distinction.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Frontend Arch'],
    href: 'https://www.zfakhama.com/ar',
    displayUrl: 'zfakhama.com',
  },
  {
    id: 'gtf-plastics',
    title: 'GTF Plastics',
    subtitle: 'Industrial B2B Showcase',
    description:
      'Corporate B2B web infrastructure and manufacturing showcase engineered for high responsiveness, structured product presentation, and enterprise branding.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'B2B Enterprise'],
    href: 'https://www.gtf-plastics.com/ar',
    displayUrl: 'gtf-plastics.com',
  },
];

const SALLA_PROJECTS = [
  {
    id: 'oud-jassar',
    title: 'Oud Jassar',
    subtitle: 'Luxury Fragrance Storefront',
    description:
      'Bespoke digital storefront architecture on the Salla platform, featuring luxury fragrance catalog staging, streamlined checkout UX, and custom store configurations.',
    tags: ['Salla Platform', 'Theme Customization', 'Store Operations'],
    href: 'https://oudjassar.com',
    displayUrl: 'oudjassar.com',
  },
  {
    id: 'ghena',
    title: 'GHENA',
    subtitle: 'E-Commerce Architecture & Ops',
    description:
      'End-to-end luxury e-commerce operations, automated catalog workflows, custom storefront adjustments, and integrated digital commerce management.',
    tags: ['Salla Platform', 'Catalog Automation', 'Store Operations'],
    href: 'https://ghena.sa',
    displayUrl: 'ghena.sa',
  },
  {
    id: 'abat-rowa',
    title: 'Abat Rowa',
    subtitle: 'Digital Storefront Management',
    description:
      'High-volume digital fashion storefront management, catalog optimization, structured product taxonomy, and conversion flow optimization.',
    tags: ['Salla Platform', 'Storefront Architecture', 'Conversion Optimization'],
    href: 'https://salla.sa/AbatRowa',
    displayUrl: 'salla.sa/AbatRowa',
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f7edd7] text-slate-900 pt-28 sm:pt-36 pb-24 w-full max-w-5xl mx-auto px-5 sm:px-8">
      {/* Header Section */}
      <section className="border-b border-black/10 pb-12 sm:pb-16 mb-16 sm:mb-20">
        <span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase block mb-3">
          Archive &amp; Index
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
          Selected Work
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          High-performance web architecture, corporate digital infrastructure, and scalable e-commerce storefront configurations.
        </p>
      </section>

      {/* SECTION 1: Digital Platforms & Architecture */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Digital Platforms &amp; Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Custom engineering, high-performance web applications, and corporate platforms.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">01 — Web Engineering</span>
        </div>

        {/* Minimalist 3-Column Grid without heavy white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {WEB_ENGINEERING_PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between border-b border-black/10 pb-8 hover:border-black/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-400 group-hover:text-black transition-colors flex items-center gap-1">
                  <span>↗</span>
                  <span>{project.displayUrl}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SECTION 2: Salla Storefront Configurations */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Salla Storefront Configurations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              E-commerce architecture, bespoke Salla theme configurations, operations automation, and catalog management.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">02 — E-Commerce Systems</span>
        </div>

        {/* Minimalist 3-Column Grid without heavy white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {SALLA_PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col justify-between border-b border-black/10 pb-8 hover:border-black/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-400 group-hover:text-black transition-colors flex items-center gap-1">
                  <span>↗</span>
                  <span>{project.displayUrl}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SECTION 3: Visual Direction & Product Photography */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Visual Direction &amp; Product Photography
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Synthetic studio staging, generative commercial assets, and high-fidelity product rendering.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">03 — Visual Systems</span>
        </div>

        {/* Responsive 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              src: '/project-1.jpg',
              alt: 'GHENA Perfume - Precision Halo Lighting & Golden Accents',
              caption: 'Precision Halo Lighting',
              tag: 'Studio Staging',
            },
            {
              src: '/project-2.jpg',
              alt: 'GHENA Perfume - Textural Cream Mineral Surfaces',
              caption: 'Textural Product Placement',
              tag: 'Material Consistency',
            },
            {
              src: '/project-3.jpg',
              alt: 'RED NIGHT - Atmospheric Forest Staging & Volumetric Fog',
              caption: 'Atmospheric Forest Staging',
              tag: 'Cinematic AI',
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 group">
              <div className="aspect-square overflow-hidden rounded-xl bg-black/5 border border-black/10 relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span className="font-medium text-slate-800">{item.caption}</span>
                <span className="text-slate-400">#{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Callout Section (Standardized 3D dark button bg-[#2a2a2a] text-white rounded-lg, no gradients) */}
      <section className="border-t border-black/10 pt-16 sm:pt-20 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Interested in building something similar?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Available for custom web architecture, digital platforms, and e-commerce engineering engagements.
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
