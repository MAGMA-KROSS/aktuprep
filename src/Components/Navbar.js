"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X, ArrowLeft, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import Badge from "./Badge";

const Navbar = ({ mode = "home", subjectName = "", subjectId = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (mode !== "home") return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  if (mode === "prep") {
    return (
      <header className="w-full border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="text-black w-5 h-5" />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">PrepAKTU</span>
            </div>
          </Link>
          <span className="text-xs text-zinc-500 font-medium">Smart Preparation Assistant</span>
        </div>
      </header>
    );
  }

  if (mode === "analysis") {
    return (
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="text-black w-5 h-5" />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">PrepAKTU</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-zinc-400 mr-4">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Pro Analytics Active
            </div>
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
              <span className="text-xs font-bold text-white">S</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  if (mode === "question") {
    return (
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={`/StartPrep/analysis?subjectId=${subjectId}`}
              className="p-2 rounded-lg border border-white/5 hover:border-white/15 bg-white/[0.01] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-black w-5 h-5" />
                </div>
                <span className="text-white font-bold tracking-tight text-lg">PrepAKTU</span>
              </div>
            </Link>
          </div>
          {subjectName && <Badge variant="primary">{subjectName}</Badge>}
        </div>
      </header>
    );
  }

  // Default mode: "home"
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-black/80 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <GraduationCap className="text-black w-5 h-5" />
            </div>
            <span className="text-white font-bold tracking-tight text-lg">
              PrepAKTU
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/pyps"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            Previous Year Papers
          </Link>
          <a
            href="#features"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </a>
          <Link
            href="/StartPrep"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            PYQ Analysis
          </Link>
          <a
            href="#subjects"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Subjects
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Button variant="ghost">Sign In</Button> */}
          <Link href="/StartPrep">
            <Button>Start Preparing</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white cursor-pointer"
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
              <Link
                href="/pyps"
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white py-2 font-medium"
              >
                Previous Year Papers
              </Link>
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
                {/* <Button variant="secondary" className="w-full justify-center">
                  Sign In
                </Button> */}
                <Link href="/StartPrep">
                  <Button className="w-full justify-center">
                    Start Preparing
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;