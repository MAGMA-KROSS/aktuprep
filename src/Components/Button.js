"use client";

import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-md";
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-50",
    ghost: "hover:bg-zinc-800 hover:text-zinc-50 text-zinc-400",
    danger: "bg-red-950 text-red-100 border border-red-900 hover:bg-red-900",
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
