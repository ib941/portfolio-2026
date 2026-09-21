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
    'relative overflow-hidden rounded-3xl border border-white/50 transition-all duration-500 ease-out';
  
  const variantStyles = {
    default:
      'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl shadow-slate-900/5',
    subtle:
      'bg-white/30 backdrop-blur-xl border-white/50 shadow-lg shadow-slate-900/5',
    prominent:
      'bg-white/30 backdrop-blur-xl border-white/50 shadow-2xl shadow-slate-900/5',
    accent:
      'bg-white/30 backdrop-blur-xl border-white/50 shadow-xl shadow-blue-500/5',
  };

  const hoverStyles = hoverEffect
    ? 'hover:scale-[1.01] hover:bg-white/40 hover:backdrop-blur-2xl hover:border-white/70 hover:shadow-2xl hover:shadow-blue-500/10'
    : '';

  const glowStyles = glowOnHover
    ? 'hover:shadow-[0_25px_60px_-15px_rgba(56,171,247,0.25)]'
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
