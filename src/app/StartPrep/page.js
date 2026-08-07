"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Badge from "@/Components/Badge";
import { BRANCHES, SEMESTERS, MOCK_SUBJECTS } from "@/data/mockSubjects";
import { 
  Target, 
  BrainCircuit,
  GraduationCap,
  ChevronRight,
  Search,
  ArrowLeft,
  Cpu,
  Zap,
  BookOpen,
  Sparkles
} from 'lucide-react';

export default function StartPrepPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState(null); // 'CSE' or 'ECE'
  const [semester, setSemester] = useState(null); // '1st', '3rd', '5th'
  const [searchQuery, setSearchQuery] = useState('');

  const handleBranchSelect = (selectedBranchId) => {
    setBranch(selectedBranchId);
    setStep(2);
  };

  const handleSemesterSelect = (sem) => {
    setSemester(sem);
    setStep(3);
  };

  const handleSubjectSelect = (sub) => {
    router.push(`/StartPrep/analysis?subjectId=${sub.id}`);
  };

  const currentSubjects = (branch && semester) 
    ? (MOCK_SUBJECTS[branch]?.[semester] || [])
    : [];

  const filteredSubjects = currentSubjects.filter(sub => 
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedBranchObj = BRANCHES.find(b => b.id === branch);

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/30 selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

      <Navbar mode="prep" />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 my-12">
        <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Branch Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black/50 mb-2">
                    <BrainCircuit className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Step 1 of 3</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white">Choose your Engineering Branch</h1>
                  <p className="text-zinc-400 text-sm">Select your branch to view customized AKTU subjects and expected papers.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {BRANCHES.map((b) => {
                    const isCSE = b.id === 'CSE';
                    const IconComponent = isCSE ? Cpu : Zap;

                    return (
                      <Card 
                        key={b.id} 
                        hover 
                        onClick={() => handleBranchSelect(b.id)}
                        className="p-6 flex flex-col justify-between border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition-all cursor-pointer group text-left relative overflow-hidden"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <Badge variant={isCSE ? "primary" : "warning"}>{b.badge}</Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                            {b.shortName}
                          </h3>
                          <p className="text-xs text-zinc-400 font-medium mb-3">{b.name}</p>
                          <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{b.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 text-xs text-zinc-400 group-hover:text-white transition-colors">
                          <span>Select Branch</span>
                          <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Semester Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer self-start"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Branches
                  </button>
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    Branch: <Badge variant="primary">{selectedBranchObj?.shortName}</Badge>
                    <button 
                      onClick={() => setStep(1)}
                      className="text-xs text-zinc-500 hover:text-white underline cursor-pointer"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black/50 mb-2">
                    <GraduationCap className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Step 2 of 3</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white">What semester are you in?</h1>
                  <p className="text-zinc-400 text-sm">Select your current semester for {selectedBranchObj?.shortName}.</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2">
                  {SEMESTERS.map((sem) => (
                    <Card 
                      key={sem} 
                      hover 
                      onClick={() => handleSemesterSelect(sem)}
                      className="p-6 text-center border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all cursor-pointer"
                    >
                      <div className="text-2xl font-bold text-white mb-1">{sem}</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Semester</div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Subject Selection */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                  <button 
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer self-start"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Semesters
                  </button>
                  <div className="text-sm text-zinc-400 flex items-center gap-2">
                    Selected: <span className="font-semibold text-white">{branch} • {semester} Semester</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black/50 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                      <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Step 3 of 3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Choose your subject</h2>
                    <p className="text-zinc-400 text-sm">We will retrieve the expected questions, PYQs, and difficulty ratings for this subject.</p>
                  </div>

                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Search subjects by name or code..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-black border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto pr-2 pt-2 scrollbar-thin">
                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((sub) => (
                      <Card 
                        key={sub.id} 
                        hover 
                        onClick={() => handleSubjectSelect(sub)}
                        className="p-5 flex flex-col justify-between border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <Badge>{sub.code}</Badge>
                          {sub.pyqCount > 0 && <span className="text-[10px] font-medium text-zinc-500">{sub.pyqCount} PYQs</span>}
                        </div>
                        <h4 className="text-base font-semibold text-white mb-4 line-clamp-2">{sub.name}</h4>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xs text-zinc-400 flex items-center gap-1">
                            <Target className="w-3 h-3 text-zinc-500" />
                            {sub.difficulty}
                          </span>
                          <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-full py-12 text-center text-zinc-500 text-sm">
                      No subjects found matching your search.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>

      <Footer simple={true} />
    </div>
  );
}