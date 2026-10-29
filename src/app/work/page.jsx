'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WEB_PROJECT_META = [
  { id: 'shourna', href: 'https://shourna.com' },
  { id: 'zfakhama', href: 'https://www.zfakhama.com/ar' },
  { id: 'gtf-plastics', href: 'https://www.gtf-plastics.com/ar' },
];

const SALLA_PROJECT_META = [
  { id: 'oud-jassar', href: 'https://oudjassar.com' },
  { id: 'ghena', href: 'https://ghena.sa' },
  { id: 'abat-rowa', href: 'https://salla.sa/AbatRowa' },
];

const VISUAL_MEDIA = [
  { id: 'visual-1', src: '/project-1.jpg', alt: 'GHENA Perfume - Studio Staging' },
  { id: 'visual-2', src: '/project-2.jpg', alt: 'GHENA Perfume - Textural Cream' },
  { id: 'visual-3', src: '/project-3.jpg', alt: 'RED NIGHT - Cinematic AI' },
];

export default function WorkPage() {
  const { locale, t, dict, isRTL } = useLanguage();

  const webProjects = (dict?.work?.section1?.projects || []).map((p) => ({
    ...p,
    ...WEB_PROJECT_META.find(meta => meta.id === p.id),
  }));

  const sallaProjects = (dict?.work?.section2?.projects || []).map((p) => ({
    ...p,
    ...SALLA_PROJECT_META.find(meta => meta.id === p.id),
  }));

  const visualItems = (dict?.work?.section3?.items || []).map((item) => ({
    ...item,
    ...VISUAL_MEDIA.find(meta => meta.id === item.id),
  }));

  return (
    <div className="min-h-screen bg-[#f7edd7] text-slate-900 pt-28 sm:pt-36 pb-24 w-full max-w-5xl mx-auto px-5 sm:px-8">
      {/* Header Section */}
      <section className="border-b border-black/10 pb-12 sm:pb-16 mb-16 sm:mb-20">
        <span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase block mb-3">
          {t('work.header.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
          {t('work.header.title')}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
          {t('work.header.description')}
        </p>
      </section>

      {/* SECTION 1: Digital Platforms & Architecture */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t('work.section1.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('work.section1.description')}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {t('work.section1.index')}
          </span>
        </div>

        {/* Minimalist 3-Column Grid without heavy white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {webProjects.map((project, idx) => (
            <motion.a
              id={project.id}
              key={project.id || idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="scroll-mt-32 group flex flex-col justify-between border-b border-black/10 pb-8 hover:border-black/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 text-slate-500 group-hover:text-black transition-transform ${isRTL ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-500 group-hover:text-black transition-colors flex items-center gap-1">
                  <span>↗</span>
                  <span>{project.url}</span>
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
              {t('work.section2.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('work.section2.description')}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {t('work.section2.index')}
          </span>
        </div>

        {/* Minimalist 3-Column Grid without heavy white cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {sallaProjects.map((project, idx) => (
            <motion.a
              id={project.id}
              key={project.id || idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="scroll-mt-32 group flex flex-col justify-between border-b border-black/10 pb-8 hover:border-black/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 text-slate-500 group-hover:text-black transition-transform ${isRTL ? 'rotate-[-90deg]' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-black transition-colors mb-1">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/5">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-xs font-mono text-slate-500 group-hover:text-black transition-colors flex items-center gap-1">
                  <span>↗</span>
                  <span>{project.url}</span>
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
              {t('work.section3.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('work.section3.description')}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            {t('work.section3.index')}
          </span>
        </div>

        {/* Responsive 3-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visualItems.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 group">
              <div className="aspect-square overflow-hidden rounded-xl bg-black/5 border border-black/10 relative">
                <Image
                  src={item.src}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 30vw, 100vw"
                  alt={isRTL ? item.caption : item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span className="font-medium text-slate-800">{item.caption}</span>
                <span className="text-slate-500">#{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Callout Section */}
      <section className="border-t border-black/10 pt-16 sm:pt-20 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          {t('work.cta.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          {t('work.cta.description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
        >
          <span>{t('work.cta.button')}</span>
          <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
        </Link>
      </section>
    </div>
  );
}
