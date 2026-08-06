"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Badge from "@/Components/Badge";
import { 
  Target, 
  BrainCircuit,
  GraduationCap,
  ChevronRight,
  Search,
  ArrowLeft
} from 'lucide-react';

const SEMESTERS = ['1st', '3rd', '5th'];

const MOCK_SUBJECTS = {
  '1st': [
    { id: 'cs101', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs102', name: 'Engineering Mathematics-I', code: 'BAS103', pyqCount: 0, difficulty: 'Hard' },
    { id: 'cs103', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs104', name: 'Fundamentals of Mechanical Engineering', code: 'BME101', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs105', name: 'Fundamentals of Electronics Engineering', code: 'BEC201', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs106', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs107', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs108', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs109', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
  ],
  '2nd': [
    { id: 'cs201', name: 'Engineering Physics', code: 'BAS101', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs202', name: 'Engineering Chemistry', code: 'BAS202', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs203', name: 'Fundamentals of Electrical Engineering', code: 'BEE101', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs204', name: 'Fundamentals of Mechanical Engineering', code: 'BME101', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs205', name: 'Engineering Mathematics-II', code: 'BAS203', pyqCount: 0, difficulty: 'Hard' },
    { id: 'cs206', name: 'Fundamentals of Electronics Engineering', code: 'BEC201', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs207', name: 'Programming for Problem Solving', code: 'BCS201', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs208', name: 'Environment and Ecology', code: 'BAS204', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs209', name: 'Soft Skills', code: 'BAS105', pyqCount: 0, difficulty: 'Easy' }
  ],
  '3rd': [
    { id: 'cs301', name: 'Mathematics-IV', code: 'BAS303', pyqCount: 0, difficulty: 'Hard' },
    { id: 'cs302', name: 'Universal Human Values and Professional Ethics', code: 'BVE301', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs303', name: 'Data Structure', code: 'BCS301', pyqCount: 0, difficulty: 'Hard' },
    { id: 'cs304', name: 'Computer Organization and Architecture', code: 'BCS302', pyqCount: 0, difficulty: 'Hard' },
    { id: 'cs305', name: 'Discrete Structures & Theory of Logic', code: 'BCS303', pyqCount: 0, difficulty: 'Medium' },
    { id: 'cs306', name: 'Technical communication', code: 'BAS301', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs307', name: 'Energy Science and Enineering', code: 'BOE304', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs308', name: 'Python Programming', code: 'BCC302', pyqCount: 0, difficulty: 'Easy' }
  ],
  '4th': [
    { id: 'cs401', name: 'Operating Systems', code: 'KCS401', pyqCount: 195, difficulty: 'Medium' },
    { id: 'cs402', name: 'TAFL', code: 'KCS402', pyqCount: 140, difficulty: 'Hard' },
    { id: 'cs403', name: 'Python Programming', code: 'KNC402', pyqCount: 110, difficulty: 'Easy' }
  ],
  '5th': [
    { id: 'cs501', name: 'Database Management System', code: 'BCS501', pyqCount: 144, difficulty: 'Medium' },
    { id: 'cs502', name: 'Design and alalysis of algorithm', code: 'BCS503', pyqCount: 144, difficulty: 'Hard' },
    { id: 'cs503', name: 'Introduction to Data analytics and visualization', code: 'BCDS501', pyqCount: 94, difficulty: 'Easy' },
    { id: 'cs504', name: 'Application of soft computing', code: 'BCS056', pyqCount: 119, difficulty: 'Medium' },
    { id: 'cs507', name: 'Business intellignece and analytics', code: 'BCDS051', pyqCount: 72, difficulty: 'Medium' },
    { id: 'cs505', name: 'Essence of The Indian culture', code: 'BNC502', pyqCount: 164, difficulty: 'Easy' },
    { id: 'cs506', name: 'Constitution of India', code: 'BNC501', pyqCount: 189, difficulty: 'Easy' }
  ],
  '6th': [
    { id: 'cs601', name: 'Software Engineering', code: 'KCS601', pyqCount: 150, difficulty: 'Easy' },
    { id: 'cs602', name: 'Web Technology', code: 'KCS602', pyqCount: 175, difficulty: 'Medium' },
    { id: 'cs603', name: 'Computer Networks', code: 'KCS603', pyqCount: 190, difficulty: 'Medium' }
  ]
};


export default function StartPrepPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [semester, setSemester] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSemesterSelect = (sem) => {
    setSemester(sem);
    setStep(2);
  };

  const handleSubjectSelect = (sub) => {
    router.push(`/StartPrep/analysis?subjectId=${sub.id}`);
  };

  const currentSubjects = semester 
    ? (MOCK_SUBJECTS[semester] || [])
    : [];

  const filteredSubjects = currentSubjects.filter(sub => 
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sub.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/30 selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

      <Navbar mode="prep" />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 my-12">
        <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {step === 1 ? (
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
                    <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Step 1 of 2</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight text-white">What semester are you in?</h1>
                  <p className="text-zinc-400 text-sm">Select your current semester to view compatible courses.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  {SEMESTERS.map((sem) => (
                    <Card 
                      key={sem} 
                      hover 
                      onClick={() => handleSemesterSelect(sem)}
                      className="p-6 text-center border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all"
                    >
                      <div className="text-2xl font-bold text-white mb-1">{sem}</div>
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">Semester</div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer self-start"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Semesters
                  </button>
                  <div className="text-sm text-zinc-400">
                    Selected: <span className="font-semibold text-white">{semester} Semester</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">Choose your subject</h2>
                    <p className="text-zinc-400 text-sm">We will retrieve the expected questions and difficulty ratings for this subject.</p>
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
                        className="p-5 flex flex-col justify-between border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all"
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