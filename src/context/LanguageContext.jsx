'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getDictionary } from '@/dictionaries';

const LanguageContext = createContext({
  locale: 'en',
  dir: 'ltr',
  isRTL: false,
  dict: {},
  t: (key) => key,
  toggleLanguage: () => {},
  setLanguage: () => {},
});

export function LanguageProvider({ children, initialLocale = 'en' }) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  // Determine current locale from pathname or fallback
  const currentLocale = useMemo(() => {
    if (pathname.startsWith('/ar')) return 'ar';
    if (pathname.startsWith('/en')) return 'en';
    return initialLocale || 'en';
  }, [pathname, initialLocale]);

  const [locale, setLocale] = useState(currentLocale);

  useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const isRTL = locale === 'ar';
  const dict = useMemo(() => getDictionary(locale), [locale]);

  // Synchronize document attributes (dir and lang)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = dir;
      if (isRTL) {
        document.documentElement.classList.add('font-arabic');
      } else {
        document.documentElement.classList.remove('font-arabic');
      }
    }
  }, [locale, dir, isRTL]);

  // Helper function to resolve nested keys like t('home.hero.headline')
  const t = (path) => {
    if (!path) return '';
    const keys = path.split('.');
    let result = dict;
    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        return path; // Fallback to key if not found
      }
    }
    return result;
  };

  const setLanguage = (newLocale) => {
    if (newLocale !== 'en' && newLocale !== 'ar') return;
    
    // Set cookie for persistence
    if (typeof document !== 'undefined') {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    }

    setLocale(newLocale);

    // Compute target path
    let newPath = pathname;
    if (pathname.startsWith('/en')) {
      newPath = pathname.replace(/^\/en/, `/${newLocale}`);
    } else if (pathname.startsWith('/ar')) {
      newPath = pathname.replace(/^\/ar/, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }

    if (newPath === '') newPath = `/${newLocale}`;
    router.push(newPath);
  };

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    setLanguage(nextLocale);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir,
        isRTL,
        dict,
        t,
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
