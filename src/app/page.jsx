'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import {
  ArrowRight,
  ArrowLeft,
  Layers,
  Code2,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { locale, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col">
      {/* Full-Screen Hero Section with Background Video */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Layer: Responsive mobile and desktop videos */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Mobile Video: Vertical aspect ratio for phone screens */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="block md:hidden w-full h-full object-cover"
          >
            <source src="/hero-video-phone.mp4" type="video/mp4" />
            <source src="/public/hero-video-phone.mp4" type="video/mp4" />
          </video>

          {/* Desktop Video: Widescreen pixel art workspace animation */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden md:block w-full h-full object-cover"
          >
            <source
              src="/Pixel_art_creative_workspace_ani…_20261012170114.mp4"
              type="video/mp4"
            />
            <source
              src="/Pixel_art_creative_workspace_ani._20261012170114.mp4"
              type="video/mp4"
            />
            <source
              src="/public/Pixel_art_creative_workspace_ani…_20261012170114.mp4"
              type="video/mp4"
            />
            <source
              src="/Pixel_art_creative_workspace_ani_20261012170114.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Dark overlay over the video */}
        <div
          className="absolute inset-0 bg-black/30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-32 pb-20 w-full">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-4xl drop-shadow-md"
          >
            {t('home.hero.headline')}
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl mb-10 drop-shadow-sm"
          >
            {t('home.hero.subheadline')}
          </motion.p>

          {/* Action Buttons (Sharp Geometric Corners: rounded-none) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
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
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2a2a2a] text-white text-sm font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all tracking-wide"
            >
              <span>{t('home.hero.getInTouch')}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections Below Hero - strictly #f7edd7 */}
      <div className="w-full bg-[#f7edd7] relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col gap-16 md:gap-24">
          {/* Metric Counters Strip - Sharp Geometric Glass Cards */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                metric: t('home.metrics.exp.value'),
                label: t('home.metrics.exp.label'),
                sub: t('home.metrics.exp.sub'),
                color: 'text-blue-600',
              },
              {
                metric: t('home.metrics.typeSafe.value'),
                label: t('home.metrics.typeSafe.label'),
                sub: t('home.metrics.typeSafe.sub'),
                color: 'text-pink-600',
              },
              {
                metric: t('home.metrics.fps.value'),
                label: t('home.metrics.fps.label'),
                sub: t('home.metrics.fps.sub'),
                color: 'text-blue-600',
              },
              {
                metric: t('home.metrics.speed.value'),
                label: t('home.metrics.speed.label'),
                sub: t('home.metrics.speed.sub'),
                color: 'text-pink-600',
              },
            ].map((item, idx) => (
              <GlassCard key={idx} variant="subtle" rounded="rounded-none" className="p-6 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b] mb-1">
                  {item.metric}
                </div>
                <div className={`text-xs font-semibold ${item.color}`}>{item.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
              </GlassCard>
            ))}
          </section>

          {/* Core Engineering Disciplines - Sharp Geometric Container */}
          <section className="p-8 sm:p-12 liquid-glass-section !rounded-none flex flex-col gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#09090b]">
                {t('home.engineering.heading')}
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                {t('home.engineering.subheading')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard rounded="rounded-none" className="p-7 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-none bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-600 mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#09090b] mb-2">
                    {t('home.engineering.card1.title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('home.engineering.card1.description')}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700 gap-1">
                  <span>{t('home.engineering.card1.badge')}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 text-blue-500 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                </div>
              </GlassCard>

              <GlassCard rounded="rounded-none" className="p-7 flex flex-col justify-between h-full group" variant="accent">
                <div>
                  <div className="w-12 h-12 rounded-none bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-600 mb-5 shadow-[0_0_20px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(255,255,255,0.95)] group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#09090b] mb-2">
                    {t('home.engineering.card2.title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('home.engineering.card2.description')}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-pink-100/70 flex items-center text-xs font-semibold text-slate-700 gap-1">
                  <span>{t('home.engineering.card2.badge')}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 text-pink-600 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                </div>
              </GlassCard>

              <GlassCard rounded="rounded-none" className="p-7 flex flex-col justify-between h-full group">
                <div>
                  <div className="w-12 h-12 rounded-none bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-600 mb-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#09090b] mb-2">
                    {t('home.engineering.card3.title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('home.engineering.card3.description')}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-slate-700 gap-1">
                  <span>{t('home.engineering.card3.badge')}</span>
                  <CheckCircle2 className={`w-3.5 h-3.5 text-blue-500 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                </div>
              </GlassCard>
            </div>
          </section>

          {/* Featured Project Showcase Teaser - Sharp Geometric Glass Card */}
          <section className="relative">
            <GlassCard rounded="rounded-none" className="p-8 sm:p-10" variant="prominent">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex flex-col gap-3 max-w-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {t('home.featured.badge')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090b] tracking-tight">
                    {t('home.featured.title')}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t('home.featured.description')}
                  </p>
                  <div className="text-xs font-mono text-slate-500 flex items-center gap-3 pt-1">
                    <span>{t('home.featured.tech')}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Link
                    href={`/${locale}/work`}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all tracking-wide"
                  >
                    <span>{t('home.featured.button')}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
}
