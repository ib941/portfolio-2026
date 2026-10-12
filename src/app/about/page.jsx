'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { locale, t, dict, isRTL } = useLanguage();

  const skills = dict?.about?.section1?.skills || [];
  const timeline = dict?.about?.section2?.timeline || [];

  return (
    <div className="min-h-screen bg-[#f7edd7] text-slate-900 pt-28 sm:pt-36 pb-24 w-full max-w-4xl mx-auto px-5 sm:px-8">
      {/* Header Section */}
      <section className="border-b border-black/10 pb-12 sm:pb-16 mb-14 sm:mb-16">
        <span className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase block mb-3">
          {t('about.header.tag')}
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          {t('about.header.title')}
        </h1>
        
        {/* Exact Architectural Manifesto Body Copy */}
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
          {t('about.header.manifesto')}
        </p>
      </section>

      {/* SECTION 1: Technical Competencies & Stack */}
      <section className="mb-20 sm:mb-24">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-black/10 pb-4 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              {t('about.section1.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('about.section1.description')}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {t('about.section1.index')}
          </span>
        </div>

        {/* Minimal Grid without heavy white cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title || idx}
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
                {skill.tags?.map((tag) => (
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
              {t('about.section2.title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('about.section2.description')}
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {t('about.section2.index')}
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {timeline.map((item, idx) => (
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
          {t('about.cta.title')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md">
          {t('about.cta.description')}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2a2a2a] text-white text-xs sm:text-sm font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
        >
          <span>{t('about.cta.button')}</span>
          <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
        </Link>
      </section>
    </div>
  );
}
