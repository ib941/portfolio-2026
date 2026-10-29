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
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname() || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, toggleLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { name: t('nav.home'), path: `/${locale}`, key: 'home', icon: Compass },
    { name: t('nav.work'), path: `/${locale}/work`, key: 'work', icon: Briefcase },
    { name: t('nav.about'), path: `/${locale}/about`, key: 'about', icon: User },
    { name: t('nav.contact'), path: `/${locale}/contact`, key: 'contact', icon: Send },
  ];

  const isItemActive = (itemKey) => {
    if (itemKey === 'home') {
      return pathname === '/' || pathname === '/en' || pathname === '/ar';
    }
    return pathname.includes(`/${itemKey}`);
  };



  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const close = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        const toggle = document.querySelector('[aria-controls="mobile-menu"]');
        if (toggle instanceof HTMLElement) toggle.focus();
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label={isRTL ? 'التنقل الرئيسي' : 'Main navigation'}
          className="pointer-events-auto transition-all duration-300 rounded-2xl flex items-center justify-between gap-3 sm:gap-5 px-4 sm:px-5 py-2.5 bg-[#f7edd7]/95 backdrop-blur-md border border-black/10 shadow-sm"
        >
          {/* Main Logo: Ibrahim Alkabsi */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2.5 text-slate-900 hover:opacity-85 transition-opacity"
          >
            <div className="w-7 h-7 rounded-lg bg-[#2a2a2a] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              IA
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900">
              {isRTL ? 'إبراهيم الكبسي' : 'Ibrahim Alkabsi'}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isItemActive(item.key);
              const Icon = item.icon;

              return (
                <Link
                  key={item.key}
                  aria-current={isActive ? 'page' : undefined}
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

          {/* Desktop Actions: Language Toggle (EN / AR) & Action Button */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Language Switcher Toggle Button (Matching dark grey 3D button style) */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Toggle language between English and Arabic"
              title={locale === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              className="flex items-center justify-center px-3 py-2 bg-[#2a2a2a] text-white text-xs font-mono font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all cursor-pointer select-none"
            >
              <span className={locale === 'en' ? 'text-white font-bold' : 'text-slate-400'}>EN</span>
              <span className="text-slate-500 mx-1">/</span>
              <span className={locale === 'ar' ? 'text-white font-bold' : 'text-slate-400'}>AR</span>
            </button>

            {/* Desktop Action Button */}
            <Link
              href={`/${locale}/contact`}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
            >
              <span>{t('nav.getInTouch')}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
            </Link>
          </div>

          {/* Mobile Right Controls: Language Switcher & Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isRTL ? 'Switch to English' : 'التحويل إلى العربية'}
              className="flex items-center justify-center min-h-11 px-2.5 py-1.5 bg-[#2a2a2a] text-white text-xs font-mono font-medium rounded-lg shadow-[0_3px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[3px] transition-all cursor-pointer select-none"
            >
              <span>{locale === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={isRTL ? 'القائمة الرئيسية' : 'Main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="flex items-center justify-center w-11 h-11 rounded-lg bg-black/5 hover:bg-black/10 border border-black/10 text-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
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
            id="mobile-menu"
            className="fixed top-24 left-4 right-4 z-40 lg:hidden p-3 rounded-2xl bg-[#f7edd7]/95 backdrop-blur-xl border border-black/10 shadow-2xl text-slate-900"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = isItemActive(item.key);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.key}
                    aria-current={isActive ? 'page' : undefined}
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

              {/* Mobile Action Button */}
              <div className="pt-2 mt-1 border-t border-black/10 flex flex-col gap-2">
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#2a2a2a] text-white text-xs font-medium rounded-lg shadow-[0_4px_0_#1a1a1a] active:shadow-[0_0px_0_#1a1a1a] active:translate-y-[4px] transition-all"
                >
                  <span>{t('nav.getInTouch')}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
