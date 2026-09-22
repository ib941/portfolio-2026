'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-white/70 bg-white/40 backdrop-blur-2xl [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95)]">
      {/* Ambient glass top line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 via-pink-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-sm font-bold tracking-tight text-[#09090b]">
              Ibrahim Alkabsi
            </span>
            <p className="text-xs text-slate-600 max-w-sm mt-0.5">
              Creative Web Developer & Systems Architect specializing in high-performance web applications and fluid digital experiences.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="flex items-center gap-6 text-xs text-slate-700 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/work" className="hover:text-pink-600 transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white/50 hover:bg-white/80 border border-white/70 [box-shadow:0_8px_20px_-4px_rgba(15,23,42,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.95)] hover:text-[#09090b] transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-slate-500 group-hover:text-blue-600 transition-colors group-hover:-translate-y-0.5 transform duration-200" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-white/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Ibrahim Alkabsi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Available for hire & consulting</span>
            <span>•</span>
            <span>Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
