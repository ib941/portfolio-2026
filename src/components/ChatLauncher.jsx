'use client';
import dynamic from 'next/dynamic';
import { useState, useRef, useCallback } from 'react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
const ChatWidget = dynamic(() => import('./ChatWidget'), { ssr: false });
export default function ChatLauncher() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const launcherRef = useRef(null);
  const dismiss = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);
  const { isRTL } = useLanguage();
  return <>
    <button ref={launcherRef} type="button" onClick={() => { setLoaded(true); setOpen(true); }} hidden={open}
      aria-label={isRTL ? 'فتح المساعد الذكي' : 'Open AI Assistant'}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-none bg-[#2a2a2a] text-white shadow-[0_4px_0_#1a1a1a] flex items-center justify-center">
      <MessageSquare className="w-6 h-6" />
    </button>
    {loaded && <ChatWidget isOpen={open} onDismiss={dismiss} />}
  </>;
}
