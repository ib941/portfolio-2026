'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-black/10 bg-transparent text-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              Ibrahim Alkabsi
            </span>
            <p className="text-xs text-slate-600 max-w-sm mt-0.5 font-normal">
              Creative Web Developer & Systems Architect specializing in high-performance web applications and fluid digital experiences.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="flex items-center gap-6 text-xs text-slate-700 font-medium">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/work" className="hover:text-black transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-black transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors group-hover:-translate-y-0.5 transform duration-200" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
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
