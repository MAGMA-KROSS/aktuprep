"use client";

import React, { useState, useEffect } from 'react';

const SafeChart = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? children : <div className="w-full h-full" />;
};

export default SafeChart;
