"use client";

import React, { useState, useEffect } from 'react';

const SafeChart = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full min-w-0 min-h-0" />;

  return (
    <div className="w-full h-full min-w-0 min-h-0 relative" style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}>
      {children}
    </div>
  );
};

export default SafeChart;

