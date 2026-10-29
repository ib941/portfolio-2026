'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroVideo from '@/components/HeroVideo';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { locale, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col">
      {/* Full-Screen Hero Section with Background Video */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
        <HeroVideo />

        {/* Dark overlay over the video */}
        <div
          className="absolute inset-0 bg-black/45 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-32 pb-20 w-full">
          {/* Main Headline */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl drop-shadow-md"
          >
            {t('home.hero.headline')}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl mb-10 drop-shadow-sm"
          >
            {t('home.hero.subheadline')}
          </motion.p>

          {/* Action Buttons (Sharp Geometric Corners: rounded-none) */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              href={`/${locale}/work`}
              className="group relative flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#2a2a2a] text-white text-sm font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all tracking-wide"
            >
              <span>{t('home.hero.exploreWork')}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-black/20 border border-white/70 text-white text-sm font-medium rounded-lg hover:bg-black/40 transition-colors tracking-wide"
            >
              <span>{t('home.hero.getInTouch')}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections Below Hero - strictly #f7edd7 */}
      <div className="w-full bg-[#f7edd7] relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col gap-16 md:gap-24">
          {/* Featured work uses the same open layout and dividers as the Work page. */}
          <section id="featured-project" aria-labelledby="featured-heading" className="scroll-mt-32 border-b border-black/10 pb-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-xl">
                  <span className="text-xs font-mono font-medium uppercase tracking-widest text-slate-500">
                    {t('home.featured.badge')}
                  </span>
                  <h2 id="featured-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {t('home.featured.title')}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {t('home.featured.description')}
                  </p>
                  <div className="text-xs font-mono text-slate-500 flex items-center gap-3 pt-1">
                    <span>{t('home.featured.tech')}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Link
                    href={`/${locale}/work#zfakhama`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all tracking-wide"
                  >
                    <span>{t('home.featured.button')}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
          </section>

          {/* Engineering disciplines follow the Work page's border-led layout. */}
          <section aria-labelledby="engineering-heading">
            <div className="border-b border-black/10 pb-4 mb-8 sm:mb-12">
              <h2 id="engineering-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {t('home.engineering.heading')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {t('home.engineering.subheading')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {['card1', 'card2', 'card3'].map((key, index) => (
                <article key={key} className="flex flex-col justify-between border-b border-black/10 pb-8">
                  <div>
                    <span className="text-xs font-mono text-slate-500 font-medium block mb-3" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
                      {t('home.engineering.' + key + '.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                      {t('home.engineering.' + key + '.description')}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-black/5">
                    <span className="inline-block px-2 py-0.5 text-[11px] font-mono text-slate-600 bg-black/[0.03] border border-black/10 rounded">
                      {t('home.engineering.' + key + '.badge')}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
