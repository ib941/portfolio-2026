'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function SkipLink() {
  const { isRTL } = useLanguage();
  return <a href="#main-content" className="skip-link">{isRTL ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>;
}
