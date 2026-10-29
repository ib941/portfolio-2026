'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [source, setSource] = useState('');
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const { isRTL } = useLanguage();

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setReady(false);
      const saveData = /** @type {Navigator & { connection?: { saveData?: boolean } }} */ (navigator).connection?.saveData;
      setSource(motion.matches || saveData ? '' : mobile.matches ? '/hero-mobile.mp4' : '/hero-desktop.mp4');
    };
    update();
    motion.addEventListener('change', update);
    mobile.addEventListener('change', update);
    return () => { motion.removeEventListener('change', update); mobile.removeEventListener('change', update); };
  }, []);

  return <>
    <div className="absolute inset-0 bg-[#292b2a] pointer-events-none" aria-hidden="true">
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero-poster-mobile.webp" />
        <Image src="/hero-poster-desktop.webp" alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover" />
      </picture>
      {source && <video key={source} ref={videoRef} src={source} autoPlay loop muted playsInline preload="metadata"
        onPlaying={() => { setPlaying(true); setReady(true); }} onPause={() => setPlaying(false)}
        onError={() => { setReady(false); setPlaying(false); }}
        className={`absolute inset-0 w-full h-full object-cover ${ready ? 'opacity-100' : 'opacity-0'}`} />}
    </div>
    {source && <button type="button" onClick={() => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) video.play().catch(() => setPlaying(false));
      else video.pause();
    }} aria-label={isRTL ? (playing ? 'إيقاف حركة الخلفية' : 'تشغيل حركة الخلفية') : (playing ? 'Pause background animation' : 'Play background animation')}
      className="absolute bottom-5 left-5 z-20 min-w-11 min-h-11 flex items-center justify-center rounded-lg bg-[#2a2a2a] text-white border border-white/30">
      {playing ? <Pause size={18} /> : <Play size={18} />}
    </button>}
  </>;
}
