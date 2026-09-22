'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Layers, Cpu } from 'lucide-react';

const WEB_PROJECTS = [
  {
    id: 'z-fakhama',
    title: 'Z Fakhama',
    description: 'Custom Web Architecture & High-Performance UI.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    href: 'https://www.zfakhama.com/ar',
  },
  {
    id: 'gtf-plastics',
    title: 'GTF Plastics',
    description: 'B2B Web Development & Corporate Showcase.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    href: 'https://www.gtf-plastics.com/ar',
  },
  {
    id: 'abayat-rowa',
    title: 'Abayat Rowa',
    description: 'Digital Storefront Management & Catalog Optimization.',
    tags: ['Salla Platform', 'Store Operations'],
    href: 'https://salla.sa/AbatRowa',
  },
  {
    id: 'ghena',
    title: 'GHENA',
    description: 'E-Commerce Architecture & Digital Storefront Management.',
    tags: ['Salla Platform', 'Store Operations'],
    href: 'https://ghena.sa',
  },
];

const CASE_STUDIES = [
  {
    id: 'ghena-textural',
    title: 'GHENA - Textural Product Placement',
    category: 'Commercial Generative Pipeline',
    imageSrc: '/project-2.jpg',
    imageAlt: 'GHENA perfume bottle in organic cream studio setup with textural surfaces',
    imageAlignment: 'left',
    description:
      'A specialized generative product placement study crafted for GHENA luxury perfumes. The pipeline establishes an ultra-clean organic cream studio setup featuring natural stone plinths, micro-textured mineral surfaces, and diffuse ambient bounce. By implementing custom negative embedding geometry and multi-stage control masks, the workflow ensures strict bottle typography, cap reflection accuracy, and label material consistency across dozens of high-resolution e-commerce catalog renders.',
    keyPoints: [
      'Organic cream studio setup with tactile micro-textures',
      'Strict product and typography consistency across render batches',
      'Diffuse ambient lighting optimized for luxury e-commerce staging',
    ],
    tags: ['Diffusion Pipeline', 'Studio Staging', 'Product Consistency', 'Catalog Automation'],
  },
  {
    id: 'ghena-halo',
    title: 'GHENA - Precision Halo Lighting',
    category: 'Synthetic Studio Lighting',
    imageSrc: '/project-1.jpg',
    imageAlt: 'GHENA perfume bottle with custom precision halo lighting and golden accents',
    imageAlignment: 'right',
    description:
      'An advanced synthetic lighting architecture developed to capture the golden glass nuances of GHENA fragrances. Utilizing a custom generative pipeline tailored for high-dynamic-range reflections, the model orchestrates warm halo rim illumination, crisp specular highlights on golden metallic accents, and nuanced caustic depth on translucent perfume liquid—delivering photorealistic commercial assets without traditional studio setup overhead.',
    keyPoints: [
      'Custom generative pipeline engineered for studio lighting control',
      'Crisp specular reflections on golden metallic cap and label accents',
      'Warm precision halo backlighting isolating product contours',
    ],
    tags: ['Generative Pipeline', 'Halo Lighting', 'Specular Control', 'Commercial Assets'],
  },
  {
    id: 'red-night',
    title: 'RED NIGHT - Atmospheric Forest Staging',
    category: 'Cinematic Environment Synthesis',
    imageSrc: '/project-3.jpg',
    imageAlt: 'RED NIGHT perfume bottle in moody atmospheric forest staging with volumetric fog',
    imageAlignment: 'left',
    description:
      'A dark, cinematic environment generation framework built for the RED NIGHT edition. The model synthetically generates an immersive, misty forest landscape dominated by dense midnight foliage, volumetric fog scattering, and moody atmospheric lighting. Controlled depth-of-field and silhouette separation place dramatic focus on the hero bottle, demonstrating scalable generative staging for high-impact commercial campaigns.',
    keyPoints: [
      'Moody atmospheric lighting with deep volumetric fog dispersal',
      'Photorealistic dark forest environment generation with depth layering',
      'Dramatic commercial silhouette separation and product emphasis',
    ],
    tags: ['Atmospheric Lighting', 'Dark Forest Staging', 'Volumetric Fog', 'Cinematic AI'],
  },
];

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      {/* Header Container with True Liquid Glass Refraction */}
      <section className="p-8 sm:p-12 md:p-14 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] text-center max-w-4xl mx-auto w-full relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black mb-4">
          Selected Work
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
          Web architecture, automated commerce infrastructure, and photorealistic generative AI pipelines
          engineered for performance, precision, and modern aesthetics.
        </p>
      </section>

      {/* PART 1: Web Architecture (Text-Only Glass Cards) */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/50 pb-4">
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>Part 1</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b]">
              Web Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            Custom web platforms, corporate showcases, and enterprise digital operations.
          </p>
        </div>

        {/* Responsive Grid of Text-Only Glass Cards - 2x2 on Desktop, Stacking Vertically on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WEB_PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 border border-white/65 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/60 hover:border-white/90 hover:shadow-[0_28px_50px_-12px_rgba(15,23,42,0.12),0_0_28px_rgba(56,189,248,0.2),0_0_20px_rgba(236,72,153,0.15)] overflow-hidden cursor-pointer"
            >
              {/* Specular Top Reflection Line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />

              <div>
                {/* Header with Title and Top-Right Arrow Link Icon */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#09090b] group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2.5 rounded-2xl bg-white/60 border border-white/80 text-slate-700 group-hover:text-blue-600 group-hover:bg-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-8">
                  {project.description}
                </p>
              </div>

              {/* Tags Section */}
              <div className="pt-6 border-t border-slate-200/50 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-700 bg-white/60 border border-white/80 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* PART 2: Generative AI Case Studies (Scrollable Image Layout) */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/50 pb-4">
          <div>
            <div className="flex items-center gap-2 text-pink-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Part 2</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b]">
              Generative AI &amp; Commerce Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md">
            High-fidelity generative pipelines combining studio staging, precise lighting models, and commercial asset consistency.
          </p>
        </div>

        {/* Three Large Vertical Glassmorphism Containers - Alternating Left/Right */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {CASE_STUDIES.map((study, idx) => {
            const isImageLeft = study.imageAlignment === 'left';
            const accentColor = idx % 2 === 0 ? 'text-pink-600' : 'text-blue-600';
            const dotColor = idx % 2 === 0 ? 'bg-pink-500' : 'bg-blue-500';

            return (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl border border-white/70 bg-white/40 backdrop-blur-2xl [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.1),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-500 hover:border-white/90 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.14),0_0_35px_rgba(56,189,248,0.2),0_0_25px_rgba(236,72,153,0.18)]"
              >
                {/* Specular Top Reflection Line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-20" />

                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
                  {/* Edge-to-Edge Image Column */}
                  <div
                    className={`relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden lg:col-span-7 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={study.imageSrc}
                      alt={study.imageAlt || study.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Translucent Ambient Overlay */}
                    <div
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${
                        isImageLeft
                          ? 'lg:bg-gradient-to-r'
                          : 'lg:bg-gradient-to-l'
                      } from-slate-950/20 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity`}
                    />
                  </div>

                  {/* Case Study Content Column */}
                  <div
                    className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-between lg:col-span-5 bg-white/20 backdrop-blur-md ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Category Label */}
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${accentColor} block mb-2`}>
                        {study.category}
                      </span>

                      {/* Case Study Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b] mb-4 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>

                      {/* Case Study Detailed Copy */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                        {study.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <ul className="space-y-2 mb-8">
                        {study.keyPoints.map((point, pointIdx) => (
                          <li
                            key={pointIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium"
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} mt-2 shrink-0 shadow-xs`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags Section */}
                    <div className="pt-6 border-t border-slate-200/50 flex flex-wrap items-center gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-xl text-xs font-mono font-medium text-slate-700 bg-white/60 border border-white/80 [box-shadow:inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Inquiry Callout Container with True Glassmorphism */}
      <section className="p-8 sm:p-12 rounded-3xl border border-white/70 bg-white/45 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)] text-center flex flex-col items-center gap-4 max-w-2xl mx-auto w-full relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#09090b]">
          Interested in building something similar?
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          Available for custom web architecture, e-commerce automation, and generative AI production pipelines.
        </p>
        <Link
          href="/contact"
          className="mt-2 flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white liquid-btn-primary active:scale-98"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
