"use client";

import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: "border-zinc-800 bg-zinc-900/50 text-zinc-300",
    primary: "border-white/20 bg-white/10 text-white",
    success: "border-emerald-800 bg-emerald-950/50 text-emerald-400",
    warning: "border-amber-800 bg-amber-950/50 text-amber-400",
    danger: "border-red-800 bg-red-950/50 text-red-400",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase transition-colors ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
