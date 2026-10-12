'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Briefcase, 
  User, 
  Send, 
  Menu, 
  X, 
  ArrowUpRight
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/', icon: Compass },
  { name: 'Work', path: '/work', icon: Briefcase },
  { name: 'About', path: '/about', icon: User },
  { name: 'Contact', path: '/contact', icon: Send },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto transition-all duration-300 rounded-2xl flex items-center justify-between gap-3 sm:gap-6 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-black/10 shadow-sm"
        >
          {/* Main Logo: Ibrahim Alkabsi */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-slate-900 hover:opacity-85 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              IA
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900">
              Ibrahim Alkabsi
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-black font-semibold'
                      : 'text-slate-700 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{
                        type: 'spring',
                        stiffness: 450,
                        damping: 35,
                      }}
                      className="absolute inset-0 rounded-lg bg-black/5 border border-black/10 -z-10 shadow-xs"
                    />
                  )}
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-black' : 'text-slate-500'
                    }`}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Action Button (Solid flat dark grey bg-[#2a2a2a] with 3D click effect) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-black/5 hover:bg-black/10 border border-black/10 text-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden p-3 rounded-2xl bg-[#f7edd7]/95 backdrop-blur-xl border border-black/10 shadow-2xl text-slate-900"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-black/10 text-black border border-black/15 font-semibold shadow-xs'
                        : 'text-slate-800 hover:bg-black/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-slate-500'}`} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}

              {/* Mobile Action Button (Solid flat dark grey bg-[#2a2a2a] with 3D click effect) */}
              <div className="pt-2 mt-1 border-t border-black/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
