"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <GraduationCap className="text-black w-5 h-5" />
          </div>

          <span className="text-white font-bold tracking-tight text-lg">
            PrepAKTU
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </a>

          <a
            href="#pyq-analysis"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            PYQ Analysis
          </a>

          <a
            href="#subjects"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Subjects
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>

          <Button>Start Preparing</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white py-2"
              >
                Features
              </a>

              <a
                href="#pyq-analysis"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white py-2"
              >
                PYQ Analysis
              </a>

              <a
                href="#subjects"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white py-2"
              >
                Subjects
              </a>

              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <Button
                  variant="secondary"
                  className="w-full justify-center"
                >
                  Sign In
                </Button>

                <Button className="w-full justify-center">
                  Start Preparing
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;