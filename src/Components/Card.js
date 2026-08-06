"use client";

import React from 'react';

const Card = ({ children, className = '', hover = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden ${hover ? 'hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

export default Card;
