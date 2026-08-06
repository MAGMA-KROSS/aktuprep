"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Button from "@/Components/Button";
import Badge from "@/Components/Badge";
import Card from "@/Components/Card";
import SafeChart from "@/Components/SafeChart";
import FadeIn from "@/Components/FadeIn";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  TrendingUp,
  Clock,
  Target,
  Zap,
  BarChart as BarChartIcon,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  BrainCircuit,
  Search,
  LayoutDashboard,
  GraduationCap
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const STATS = [
  { label: 'PYQs Analyzed', value: '3500+' },
  { label: 'Important Qs Predicted', value: '625+' },
  { label: 'Subjects Covered', value: '25+' },
  { label: 'Paper Analyzed', value: '270+' },
];

const SUBJECTS = [
  { name: 'Database Management Systems', code: 'KCS501', sem: '5th', pyqs: 124, priority: 'High' },
  { name: 'Operating Systems', code: 'KCS401', sem: '4th', pyqs: 156, priority: 'High' },
  { name: 'Computer Networks', code: 'KCS603', sem: '6th', pyqs: 112, priority: 'Medium' },
  { name: 'Computer Org. & Arch.', code: 'KCS302', sem: '3rd', pyqs: 98, priority: 'High' },
  { name: 'Data Structures', code: 'KCS301', sem: '3rd', pyqs: 210, priority: 'Critical' },
  { name: 'Web Technology', code: 'KCS602', sem: '6th', pyqs: 85, priority: 'Medium' },
];

const MOCK_CHART_DATA = [
  { unit: 'Unit 1', weight: 15, expected: 20 },
  { unit: 'Unit 2', weight: 25, expected: 25 },
  { unit: 'Unit 3', weight: 20, expected: 15 },
  { unit: 'Unit 4', weight: 10, expected: 10 },
  { unit: 'Unit 5', weight: 30, expected: 30 },
];

const MOCK_TREND_DATA = [
  { year: '2019', difficulty: 40 },
  { year: '2020', difficulty: 55 },
  { year: '2021', difficulty: 45 },
  { year: '2022', difficulty: 70 },
  { year: '2023', difficulty: 65 },
];



const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Subtle Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-6 border-zinc-700 bg-zinc-800/50 text-zinc-300">
            <Zap className="w-3 h-3 mr-1.5 text-zinc-100" />
            New: One Night Before Exam Mode
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            Score good marks in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              significantly less time.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop wasting hours searching for notes and analyzing PDFs. PrepAKTU uses data-driven insights to show you exactly what to study for your upcoming exams.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/StartPrep">
              <Button className="w-full cursor-pointer sm:w-auto text-base h-12 px-8 group">
                Start Preparing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/pyps">
              <Button variant="secondary" className="w-full cursor-pointer sm:w-auto text-base h-12 px-8">
                <Search className="w-4 h-4 mr-2" />
                Download PYQs
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Preview Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          {/* Decorative browser top */}
          <div className="rounded-t-xl border border-b-0 border-white/10 bg-zinc-950/80 backdrop-blur-xl h-8 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>

          <Card className="rounded-t-none border-t-0 p-1 bg-zinc-950">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 rounded-lg overflow-hidden">
              {/* Sidebar Mock */}
              <div className="hidden md:block col-span-1 bg-zinc-950 p-6 border-r border-white/5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center"><BrainCircuit className="w-4 h-4" /></div>
                  <span className="font-semibold text-sm">Smart Planner</span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 rounded bg-white/5 w-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>

              {/* Main Content Mock */}
              <div className="col-span-1 md:col-span-2 bg-zinc-950 p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-white font-medium">DBMS Analysis</h3>
                    <p className="text-xs text-zinc-500">Unit 1 - 5 Weightage Predictor</p>
                  </div>
                  <Badge>98% Accuracy</Badge>
                </div>

                <div className="h-[200px] w-full">
                  <SafeChart>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={MOCK_CHART_DATA}>
                        <XAxis dataKey="unit" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip
                          cursor={{ fill: '#27272a' }}
                          contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', borderRadius: '8px' }}
                        />
                        <Bar dataKey="weight" fill="#ffffff" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </SafeChart>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="text-xs text-zinc-500 mb-1">High Probability Topic</div>
                    <div className="text-sm text-white font-medium">Normalization (1NF-BCNF)</div>
                  </div>
                  <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="text-xs text-zinc-500 mb-1">Expected Marks</div>
                    <div className="text-sm text-white font-medium">25 - 30 Marks</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Gradient Glow under dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-500/10 via-white/5 to-zinc-500/10 blur-2xl -z-10 rounded-[2rem] opacity-50" />
        </motion.div>
      </div >
    </section >
  );
};

const Stats = () => (
  <section className="border-y border-white/10 bg-white/[0.01]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
        {STATS.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.1} className="p-8 text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
            <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <Badge className="mb-4">Everything you need</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Designed for <span className="text-zinc-500">efficiency.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A complete suite of tools to transform how you prepare for AKTU end-semester examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Large Card 1 */}
          <FadeIn delay={0.1} className="md:col-span-2 row-span-2">
            <Card className="h-full p-8 group relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                  <BarChartIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Deep PYQ Analysis</h3>
                <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                  We don't just provide PDFs. We break down the last 10 years of question papers to show you exactly which topics repeat, their frequency, and weightage.
                </p>
              </div>

              {/* Abstract decorative graphic */}
              <div className="absolute bottom-0 right-0 w-2/3 h-1/2 translate-y-1/4 translate-x-1/4 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <SafeChart>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={MOCK_TREND_DATA}>
                      <defs>
                        <linearGradient id="colorDiff" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="difficulty" stroke="#ffffff" fillOpacity={1} fill="url(#colorDiff)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </SafeChart>
              </div>
            </Card>
          </FadeIn>

          {/* Small Card 1 */}
          <FadeIn delay={0.2} className="md:col-span-1 row-span-1">
            <Card className="h-full p-8 group hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unit Priority Matrix</h3>
              <p className="text-zinc-400 text-sm">
                Know exactly which unit to study first to maximize marks with minimum effort.
              </p>
            </Card>
          </FadeIn>

          {/* Small Card 2 */}
          <FadeIn delay={0.3} className="md:col-span-1 row-span-1">
            <Card className="h-full p-8 group hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Question Prediction</h3>
              <p className="text-zinc-400 text-sm">
                AI-driven insights that flag highly probable questions for the upcoming exam.
              </p>
            </Card>
          </FadeIn>

          {/* Small Card 3 */}
          <FadeIn delay={0.4} className="md:col-span-1 row-span-1">
            <Card className="h-full p-8 group hover:bg-white/[0.03] transition-colors">
              <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Study Planner</h3>
              <p className="text-zinc-400 text-sm">
                Generate a custom study schedule based on days left and current preparation level.
              </p>
            </Card>
          </FadeIn>

          {/* Medium Card (Spans 2 cols) */}
          <FadeIn delay={0.5} className="md:col-span-2 row-span-1">
            <Card className="h-full p-8 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Marks Coverage Estimator</h3>
                <p className="text-zinc-400 text-sm max-w-md">
                  Track your preparation dynamically. As you complete topics, see your expected score rise based on historical data.
                </p>
              </div>
              {/* Decorative progress bars */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 hidden lg:flex flex-col gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[85%] rounded-full" />
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-500 w-[60%] rounded-full" />
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-700 w-[40%] rounded-full" />
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const OneNightBefore = () => (
  <section className="py-24 relative overflow-hidden border-y border-white/10">
    <div className="absolute inset-0 bg-zinc-950" />
    {/* Subtle distress/noise pattern simulation via CSS */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-black mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-widest uppercase">Emergency Protocol</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Starting late? <br />
            <span className="text-zinc-500">It's still possible.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">
            Enter "One Night Before Exam" mode. We filter out the noise and give you a hyper-focused survival list of guaranteed questions and top-priority topics.
          </p>
          <ul className="space-y-4 mb-10">
            {['Top 20 absolute must-do questions', 'Quick revision cheat sheets', 'Highest weightage units identified', 'Skip the fluff, focus on passing marks'].map((item, i) => (
              <li key={i} className="flex items-center text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 mr-3 text-white/50" />
                {item}
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="h-12 px-6">
            <Zap className="w-4 h-4 mr-2" />
            Activate Survival Mode
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-md"
        >
          <Card className="bg-black border-zinc-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
              <div>
                <h4 className="text-white font-medium">Exam in 12 Hours</h4>
                <p className="text-xs text-zinc-500">Target: 40/70 Marks</p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-sm">40</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Priority 1 (Do Now)</div>

              <div className="group flex items-start gap-4 p-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer">
                <div className="mt-0.5 w-4 h-4 rounded border border-white/20 group-hover:border-white transition-colors" />
                <div>
                  <div className="text-sm text-white font-medium mb-1">Deadlock Avoidance (Banker's Algo)</div>
                  <div className="text-xs text-zinc-500">Expected: 10 Marks • Unit 3</div>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer">
                <div className="mt-0.5 w-4 h-4 rounded border border-white/20 group-hover:border-white transition-colors" />
                <div>
                  <div className="text-sm text-white font-medium mb-1">Paging vs Segmentation</div>
                  <div className="text-xs text-zinc-500">Expected: 7 Marks • Unit 4</div>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-3 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer opacity-50">
                <div className="mt-0.5 w-4 h-4 rounded border border-white/20" />
                <div>
                  <div className="text-sm text-white font-medium mb-1">Disk Scheduling (SSTF/SCAN)</div>
                  <div className="text-xs text-zinc-500">Expected: 10 Marks • Unit 5</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const Subjects = () => (
  <section id="subjects" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Supported Subjects
          </h2>
          <p className="text-zinc-400 text-lg">
            Comprehensive analysis available for major B.Tech branches.
          </p>
        </div>
        <Button variant="ghost" className="self-start md:self-auto group">
          View all subjects
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBJECTS.map((subject, index) => (
          <FadeIn key={subject.code} delay={index * 0.1}>
            <Card className="p-6 hover:bg-white/[0.03] transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <Badge className="bg-white/5 border-white/10">{subject.code}</Badge>
                <span className="text-xs text-zinc-500 font-medium">Sem {subject.sem}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-zinc-300 transition-colors">
                {subject.name}
              </h3>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Analyzed Qs</span>
                  <span className="text-sm font-medium text-white">{subject.pyqs} Questions</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Priority</span>
                  <span className={`text-sm font-medium ${subject.priority === 'Critical' ? 'text-white' :
                    subject.priority === 'High' ? 'text-zinc-300' : 'text-zinc-500'
                    }`}>
                    {subject.priority}
                  </span>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-white/[0.02]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
          Stop wasting time <br className="hidden sm:block" /> searching PDFs.
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Know exactly what to study before your AKTU exams. Join thousands of students studying smarter, not harder.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-14 px-8 text-lg w-full sm:w-auto">Get Started for Free</Button>
          <Button variant="secondary" className="h-14 px-8 text-lg w-full sm:w-auto">Explore Features</Button>
        </div>
      </motion.div>
    </div>
  </section>
);



export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 selection:bg-white/30 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <OneNightBefore />
        <Subjects />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}