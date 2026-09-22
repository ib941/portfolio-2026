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
          className={`pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-between gap-3 px-5 py-2.5 border ${
            scrolled
              ? 'bg-white/55 backdrop-blur-2xl border-white/80 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12),inset_0_1.5px_1.5px_0_rgba(255,255,255,1),inset_0_-1px_2px_0_rgba(255,255,255,0.5)]'
              : 'bg-white/45 backdrop-blur-2xl border-white/70 shadow-[0_16px_36px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)]'
          }`}
        >
          {/* Main Logo: Ibrahim Alkabsi */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[#09090b] hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
              IA
            </div>
            <span className="text-sm font-bold tracking-tight text-[#09090b]">
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
                  className={`relative px-4 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#09090b] font-bold'
                      : 'text-slate-600 hover:text-[#09090b] hover:bg-white/40'
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
                      className="absolute inset-0 rounded-full bg-white/80 border border-white/95 shadow-[0_4px_16px_rgba(37,99,235,0.15),0_0_12px_rgba(236,72,153,0.12),inset_0_1px_1px_rgba(255,255,255,1)] -z-10"
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
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/50 hover:bg-white/80 border border-white/70 text-[#09090b] transition-colors"
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
            className="fixed top-20 left-4 right-4 z-40 md:hidden p-3 rounded-3xl bg-white/60 backdrop-blur-3xl shadow-2xl border border-white/80 [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.15),inset_0_1.5px_1.5px_0_rgba(255,255,255,1)]"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white/80 text-[#09090b] border border-white font-bold shadow-sm'
                        : 'text-slate-700 hover:bg-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}

              <div className="pt-2 mt-1 border-t border-white/50">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90 transition-opacity shadow-[0_4px_16px_rgba(37,99,235,0.25)]"
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
