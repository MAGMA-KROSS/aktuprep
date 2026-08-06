"use client";

import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = ({ simple = false }) => {
  if (simple) {
    return (
      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/10 bg-black">
        <p>© 2026 PrepAKTU. Study smart, not hard.</p>
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <GraduationCap className="text-black w-4 h-4" />
              </div>
              <span className="text-white font-bold text-lg">PrepAKTU</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs mb-6">
              The modern preparation platform for AKTU students. Score better marks with data-driven insights.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors">𝕏</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors">in</div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors">gh</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Subjects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PYQ Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Syllabus</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-zinc-600">
          <p>© 2026 PrepAKTU. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Not officially affiliated with Dr. A.P.J. Abdul Kalam Technical University.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
