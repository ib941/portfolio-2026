'use client';

import React from 'react';

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glowOnHover = false,
  variant = 'default',
  ...props
}) {
  const baseStyles =
    'relative overflow-hidden rounded-3xl border border-white/65 transition-all duration-500 ease-out';
  
  const variantStyles = {
    default:
      'bg-white/40 backdrop-blur-2xl border-white/65 shadow-xl shadow-slate-900/5 [box-shadow:0_20px_45px_-12px_rgba(15,23,42,0.08),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)]',
    subtle:
      'bg-white/35 backdrop-blur-xl border-white/60 shadow-lg shadow-slate-900/5 [box-shadow:0_16px_36px_-12px_rgba(15,23,42,0.06),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_0_rgba(255,255,255,0.35)]',
    prominent:
      'bg-white/45 backdrop-blur-3xl border-white/70 shadow-2xl shadow-slate-900/8 [box-shadow:0_25px_50px_-12px_rgba(15,23,42,0.1),inset_0_2px_2px_0_rgba(255,255,255,1),inset_0_-1px_2px_0_rgba(255,255,255,0.45)]',
    accent:
      'bg-white/45 backdrop-blur-2xl border-white/70 shadow-xl shadow-blue-500/10 [box-shadow:0_20px_45px_-12px_rgba(37,99,235,0.12),0_0_25px_-5px_rgba(236,72,153,0.15),inset_0_1.5px_1.5px_0_rgba(255,255,255,0.95),inset_0_-1px_2px_0_rgba(255,255,255,0.4)]',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-0.5 hover:bg-white/55 hover:backdrop-blur-3xl hover:border-white/85 hover:shadow-2xl hover:shadow-blue-500/15'
    : '';

  const glowStyles = glowOnHover
    ? 'hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.22),0_0_30px_-5px_rgba(236,72,153,0.2)]'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.default} ${hoverStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {/* Specular top light reflection line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/95 to-transparent" />
      
      {children}
    </div>
  );
}
