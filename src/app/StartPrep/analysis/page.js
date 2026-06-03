"use client"
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  ArrowRight,
  BrainCircuit,
  GraduationCap,
  AlertTriangle,
  BarChart as BarChartIcon,
  FileText,
  CheckCircle2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

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
    { id: 'cs308', name: 'Python Programming', code: 'BCC302', pyqCount: 0, difficulty: 'Easy' },
    { id: 'cs309', name: 'Cyber Security', code: 'BCC301', pyqCount: 0, difficulty: 'Easy' }
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

const getSubjectDetails = (id) => {
  for (const sem in MOCK_SUBJECTS) {
    const found = MOCK_SUBJECTS[sem].find(sub => sub.id === id);
    if (found) return { ...found, semester: sem };
  }
  return null;
};

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

const Card = ({ children, className = '', hover = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden ${hover ? 'hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

const SafeChart = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? children : <div className="w-full h-full" />;
};

const Navbar = () => (
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

const DashboardHero = ({ sessionData }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative pt-24 pb-12 overflow-hidden border-b border-white/10"
  >
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-black to-black -z-10" />
    
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">{sessionData.semester} Semester</Badge>
            <Badge>{sessionData.subject.code}</Badge>
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Analysis Updated
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            {sessionData.subject.name}
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl">
            We have analyzed past papers. Here is your optimized path to scoring high marks with minimum effort.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const UnitDifficulty = ({ data = [] }) => {
  const sortedData = [...data].sort((a, b) => a.id - b.id);
  
  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'danger';
      default: return 'default';
    }
  };

  const hardestUnit = [...data].sort((a, b) => b.difficultyScore - a.difficultyScore)[0];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="py-12 border-b border-white/10"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <BarChartIcon className="w-5 h-5 text-white" />
          <h2 className="text-2xl font-bold text-white">Unit Difficulty Analysis</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 lg:col-span-2 h-[350px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-medium text-zinc-400">Unit Difficulty Index (Higher = Harder)</h3>
              <span className="text-xs text-zinc-500">Weightage: 14 Marks each</span>
            </div>
            {data.length > 0 ? (
              <SafeChart>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sortedData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                    <Tooltip 
                      cursor={{ fill: '#27272a' }}
                      contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="difficultyScore" radius={[4, 4, 0, 0]}>
                      {sortedData.map((entry, index) => {
                        let fill = '#a1a1aa';
                        if (entry.difficulty.toLowerCase() === 'hard') fill = '#ef4444';
                        else if (entry.difficulty.toLowerCase() === 'medium') fill = '#f59e0b';
                        else if (entry.difficulty.toLowerCase() === 'easy') fill = '#10b981';
                        return <Cell key={`cell-${index}`} fill={fill} />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </SafeChart>
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-500 text-sm">No difficulty data available.</div>
            )}
          </Card>

          <div className="space-y-4">
            {sortedData.map((unit) => (
              <Card key={unit.name} className="p-4 flex items-center justify-between border-white/5 hover:border-white/10 transition-all">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">{unit.name}: {unit.title}</span>
                    <Badge variant={getDifficultyColor(unit.difficulty)} className="text-[10px] py-0 px-1.5">{unit.difficulty}</Badge>
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-1">{unit.advice}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] text-zinc-500">Marks</div>
                  <div className="font-bold text-white text-sm">{unit.expectedMarks} pts</div>
                </div>
              </Card>
            ))}
            
            {hardestUnit && (
              <Card className="p-4 border-red-950 bg-red-950/10">
                <div className="flex gap-3">
                  <BrainCircuit className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-white font-medium">Study Tip:</span> {hardestUnit.name} ({hardestUnit.title}) has the highest difficulty rating ({hardestUnit.difficultyScore}%). Allocate extra time for this unit's conceptual derivations.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ImportantQuestions = ({ data = [] }) => {
  const [selectedUnit, setSelectedUnit] = useState('1');

  const filteredQuestions = data.filter(q => q.unit === parseInt(selectedUnit));

  const tabs = ['1', '2', '3', '4', '5'];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-white" />
            <h2 className="text-2xl font-bold text-white">Most Expected Questions</h2>
          </div>
          
          {/* Unit Filter Tabs */}
          <div className="flex items-center gap-1 bg-zinc-950 p-1 border border-white/10 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedUnit(tab)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedUnit === tab 
                    ? 'bg-white text-black font-semibold' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Unit {tab}
              </button>
            ))}
          </div>
        </div>

        {filteredQuestions.length > 0 ? (
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredQuestions.map((q) => (
                <motion.div
                  key={q.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card hover className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {q.tags.map(tag => (
                          <Badge 
                            key={tag} 
                            variant={tag === 'HIGHLY REPEATED' ? 'warning' : tag === 'MOST EXPECTED' ? 'success' : 'default'}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-lg font-medium text-white mb-4 leading-snug group-hover:text-zinc-200">
                        {q.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1 font-medium text-zinc-400">
                          <BookOpen className="w-4 h-4 text-zinc-500" /> Unit {q.unit}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" /> {q.marks} Marks
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {q.frequency && <span className="text-xs text-zinc-500">{q.frequency} Exams</span>}
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{q.probability}%</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
            <AlertTriangle className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
            <p className="text-zinc-400">No expected questions found for this unit.</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

function AnalysisContent() {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  
  const [questions, setQuestions] = useState([]);
  const [unitDifficulty, setUnitDifficulty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const subjectDetails = subjectId ? getSubjectDetails(subjectId) : null;
  const sessionData = subjectDetails ? {
    semester: subjectDetails.semester,
    subject: subjectDetails
  } : null;

  useEffect(() => {
    if (!subjectId) {
      setError("No subject specified.");
      setLoading(false);
      return;
    }

    const fetchSubjectData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/subjects/${subjectId}`);
        if (!res.ok) {
          throw new Error('Failed to fetch preparation insights.');
        }
        const data = await res.json();
        setQuestions(data.questions || []);
        setUnitDifficulty(data.unitDifficulty || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 800);
      }
    };

    fetchSubjectData();
  }, [subjectId]);

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/30 selection:text-white">
      {sessionData && <Navbar />}
      
      <main>
        {loading ? (
          <div className="container mx-auto px-6 py-32 space-y-12">
            <div className="space-y-4 animate-pulse">
              <div className="h-6 w-32 bg-zinc-900 rounded" />
              <div className="h-12 w-96 bg-zinc-900 rounded" />
              <div className="h-6 w-128 bg-zinc-900 rounded" />
            </div>

            {/* Skeleton for Unit Difficulty */}
            <div className="space-y-6 pt-12">
              <div className="h-8 w-64 bg-zinc-900 rounded animate-pulse" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="h-[350px] lg:col-span-2 bg-zinc-950 border border-white/10 rounded-xl p-6 flex flex-col justify-end gap-2 animate-pulse">
                  <div className="h-4 w-1/3 bg-zinc-900 rounded mb-auto" />
                  <div className="flex items-end justify-between h-[200px] px-4">
                    <div className="h-[40%] w-12 bg-zinc-900 rounded-t" />
                    <div className="h-[90%] w-12 bg-zinc-800 rounded-t" />
                    <div className="h-[30%] w-12 bg-zinc-900 rounded-t" />
                    <div className="h-[75%] w-12 bg-zinc-900 rounded-t" />
                    <div className="h-[55%] w-12 bg-zinc-900 rounded-t" />
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="h-16 bg-zinc-950 border border-white/10 rounded-xl p-4 animate-pulse flex justify-between items-center">
                      <div className="space-y-2 w-1/2">
                        <div className="h-4 bg-zinc-900 rounded w-3/4" />
                        <div className="h-3 bg-zinc-900 rounded w-1/2" />
                      </div>
                      <div className="h-6 w-10 bg-zinc-900 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skeleton for Questions */}
            <div className="space-y-6">
              <div className="h-8 w-64 bg-zinc-900 rounded animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="h-48 bg-zinc-950 border border-white/10 rounded-xl p-6 animate-pulse flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-4 bg-zinc-900 rounded w-1/4" />
                      <div className="h-5 bg-zinc-900 rounded w-full" />
                      <div className="h-5 bg-zinc-900 rounded w-5/6" />
                    </div>
                    <div className="h-8 bg-zinc-900 rounded w-full mt-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="container mx-auto px-6 py-32 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Error Loading Analysis</h3>
            <p className="text-zinc-400 mb-6">{error}</p>
            <Link href="/StartPrep">
              <Button>Back to Selection</Button>
            </Link>
          </div>
        ) : sessionData ? (
          <>
            <DashboardHero sessionData={sessionData} />
            <UnitDifficulty data={unitDifficulty} />
            <ImportantQuestions data={questions} />
          </>
        ) : (
          <div className="container mx-auto px-6 py-32 text-center">
            <AlertTriangle className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Subject Not Found</h3>
            <p className="text-zinc-400 mb-6">The specified subject ID is invalid or has no data.</p>
            <Link href="/StartPrep">
              <Button>Back to Selection</Button>
            </Link>
          </div>
        )}
      </main>
      
      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/10">
        <p>© 2026 PrepAKTU. Study smart, not hard.</p>
      </footer>
    </div>
  );
}

export default function AnalysisPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-zinc-50 font-sans flex items-center justify-center">
        <div className="space-y-4 animate-pulse">
          <div className="h-6 w-32 bg-zinc-900 rounded" />
          <div className="h-12 w-96 bg-zinc-900 rounded" />
        </div>
      </div>
    }>
      <AnalysisContent />
    </Suspense>
  );
}

