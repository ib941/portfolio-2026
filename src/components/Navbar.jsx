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
          className={`pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between gap-3 px-5 py-2 border shadow-2xl ${
            scrolled
              ? 'bg-white/50 backdrop-blur-2xl border-white/70 shadow-slate-900/10'
              : 'bg-white/35 backdrop-blur-xl border-white/60 shadow-slate-900/5'
          }`}
        >
          {/* Main Logo: Ibrahim Alkabsi */}
          <Link
            href="/"
            className="flex items-center text-slate-900 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-semibold tracking-tight text-slate-900">
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
                  className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
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
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50/80 via-sky-50/70 to-blue-50/80 border border-blue-200/50 shadow-[0_2px_12px_rgba(56,171,247,0.15),inset_0_1px_1px_rgba(255,255,255,0.95)] -z-10"
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/40 hover:bg-white/70 border border-white/60 text-slate-700 transition-colors"
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
            className="fixed top-20 left-4 right-4 z-40 md:hidden p-3 rounded-2xl bg-white/45 backdrop-blur-2xl shadow-2xl border border-white/60"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50/70 text-blue-700 border border-blue-200/50 font-semibold'
                        : 'text-slate-600 hover:bg-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/40">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
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
