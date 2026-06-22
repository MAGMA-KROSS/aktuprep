"use client"
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Presentation, 
  GraduationCap, 
  ArrowLeft, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Award,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  CornerDownRight
} from 'lucide-react';
import { getQuestionExplanation } from '@/data/questionExplanations';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Custom inline SVG Youtube icon
const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Reusable Components
const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-md";
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    secondary: "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-50",
    ghost: "hover:bg-zinc-800 hover:text-zinc-50 text-zinc-400",
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



function QuestionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const questionId = searchParams.get('questionId');

  const [question, setQuestion] = useState(null);
  const [subjectDetails, setSubjectDetails] = useState(null);
  const [allQuestions, setAllQuestions] = useState([]);
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Tabs state: 'summary', 'explanation', 'revision'
  const [activeTab, setActiveTab] = useState('summary');

  // Video Mode State: 'slides' or 'youtube'
  const [videoMode, setVideoMode] = useState('slides');

  // Slide Video Player States
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const duration = 240; // 4 minutes video mock
  const intervalRef = useRef(null);

  // AI Doubt solver state
  const [doubtText, setDoubtText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [typing, setTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Custom slide states (loaded statically from backend)
  const [customSlides, setCustomSlides] = useState([]); // holds array of image/pdf/embed URLs
  const [customSlidesType, setCustomSlidesType] = useState('none'); // 'none', 'pdf', 'images', 'embed'
  const [pdfLoading, setPdfLoading] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined' && window.pdfjsLib) {
        resolve(window.pdfjsLib);
        return;
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(window.pdfjsLib);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const loadPdfPages = async (pdfUrl) => {
    const pdfjsLib = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js');
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
    
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    const pages = [];
    
    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 2.0 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      
      await page.render({ canvasContext: context, viewport }).promise;
      pages.push(canvas.toDataURL('image/png'));
    }
    return pages;
  };

  // Auto load static slides from DB
  useEffect(() => {
    if (explanation) {
      if (explanation.pdfUrl) {
        setPdfLoading(true);
        loadPdfPages(explanation.pdfUrl)
          .then((pages) => {
            setCustomSlides(pages);
            setCustomSlidesType('images');
            setPdfLoading(false);
          })
          .catch((err) => {
            console.error("Failed to render PDF pages, falling back to direct iframe view", err);
            setCustomSlides([explanation.pdfUrl]);
            setCustomSlidesType('pdf');
            setPdfLoading(false);
          });
      } else if (explanation.embedUrl) {
        setCustomSlides([explanation.embedUrl]);
        setCustomSlidesType('embed');
      } else if (explanation.slideImages && explanation.slideImages.length > 0) {
        setCustomSlides(explanation.slideImages);
        setCustomSlidesType('images');
      } else {
        setCustomSlides([]);
        setCustomSlidesType('none');
      }
    }
  }, [explanation]);

  // Parse time helper
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Convert mm:ss string to seconds
  const parseTimeToSeconds = (timeStr) => {
    const parts = timeStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    return 0;
  };

  // Load Question & Subject Data
  useEffect(() => {
    if (!subjectId || !questionId) {
      setError("Missing query parameters.");
      setLoading(false);
      return;
    }

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/subjects/${subjectId}`);
        if (!res.ok) throw new Error("Failed to load subject information.");
        const data = await res.json();
        
        const qId = parseInt(questionId);
        const q = data.questions.find(item => item.id === qId);
        
        if (!q) throw new Error("Question not found in the subject's question bank.");
        
        setQuestion(q);
        setAllQuestions(data.questions);
        
        // Retrieve explanations and study resources
        const expData = getQuestionExplanation(subjectId, q);
        setExplanation(expData);
        setSubjectDetails(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [subjectId, questionId]);

  // Video player loop
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const step = (100 / (duration * 10)) * playbackSpeed;
          const next = prev + step;
          if (next >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return next;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, playbackSpeed]);

  // Reset player when switching questions
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setChatHistory([]);
  }, [questionId]);

  // Scroll to bottom of doubt solver
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, typing]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-zinc-50 font-sans flex items-center justify-center">
        <div className="space-y-6 text-center">
          <div className="w-12 h-12 rounded-full border-t-2 border-white border-r-2 border-r-white/10 border-t-white animate-spin mx-auto" />
          <p className="text-sm text-zinc-400 animate-pulse">Compiling detailed notes & explanations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-zinc-50 font-sans flex items-center justify-center p-6">
        <Card className="p-8 max-w-md text-center border-red-950/50 bg-red-950/5">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Failed to Load Content</h3>
          <p className="text-sm text-zinc-400 mb-6">{error}</p>
          <button 
            onClick={() => router.push('/StartPrep')}
            className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all text-sm cursor-pointer"
          >
            Go Back
          </button>
        </Card>
      </div>
    );
  }

  // Calculate slide index based on progress
  const slideCount = customSlidesType === 'images' ? customSlides.length : (explanation?.slides?.length || 4);
  const currentSlideIndex = Math.min(
    slideCount - 1,
    Math.floor((progress / 100) * slideCount)
  );
  const currentSlide = (customSlidesType === 'images' || !explanation?.slides) ? null : explanation.slides[currentSlideIndex];

  // Calculate current timestamp
  const currentSeconds = (progress / 100) * duration;

  // Handle slide clicks (jump to slide timestamp)
  const handleSlideSelect = (index) => {
    const segmentWidth = 100 / slideCount;
    setProgress(segmentWidth * index + 1); // jump to starting boundary
    setIsPlaying(false);
  };

  // AI Doubt solver responder
  const handleAskDoubt = (e) => {
    e.preventDefault();
    if (!doubtText.trim()) return;

    const userMessage = doubtText;
    setChatHistory(prev => [...prev, { sender: 'user', text: userMessage }]);
    setDoubtText('');
    setTyping(true);

    setTimeout(() => {
      let botResponse = `In regards to **${question.title}**, `;
      const textLower = userMessage.toLowerCase();

      if (textLower.includes('exam') || textLower.includes('important') || textLower.includes('marks')) {
        botResponse += `this question typically carries **${question.marks} marks** in the AKTU examination. Evaluation metrics award full marks for drawing the correct layout block diagram and summarizing the core mathematical dependencies. Make sure to review our "Quick Revision" tab for passing-marks checklists.`;
      } else if (textLower.includes('diagram') || textLower.includes('sketch') || textLower.includes('draw')) {
        botResponse += `drawing a neat schematic layout is highly recommended. For this topic, draft a clear 3-box vertical boundary (External, Conceptual, and Internal levels) mapping user-queries down to block storage files. Label all mappings clearly to secure the visual marks.`;
      } else if (textLower.includes('explain') || textLower.includes('concept') || textLower.includes('definition')) {
        botResponse += `the concept establishes the operational constraints under which the B.Tech syllabus defines this component. At its core, it ensures logical data translation, decoupling application scripts from underlying databases or physical layers.`;
      } else {
        botResponse += `that is an excellent question! In examinations, this is graded based on specifying (1) the basic definitions, (2) the structural diagram, and (3) a numerical or code-based example showing the practical implementation. Focus on memorizing these core criteria first.`;
      }

      setChatHistory(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setTyping(false);
    }, 1200);
  };

  // Unit questions excluding the active one
  const relatedQuestions = allQuestions.filter(q => q.unit === question.unit && q.id !== question.id);

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/30 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => router.push(`/StartPrep/analysis?subjectId=${subjectId}`)}
              className="p-2 rounded-lg border border-white/5 hover:border-white/15 bg-white/[0.01] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <GraduationCap className="text-black w-5 h-5" />
              </div>
              <span className="text-white font-bold tracking-tight text-lg">PrepAKTU</span>
            </div>
          </div>
          <Badge variant="primary">{explanation.subjectName}</Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-20">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href="/StartPrep" className="hover:text-white transition-colors">Start Prep</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href={`/StartPrep/analysis?subjectId=${subjectId}`} className="hover:text-white transition-colors">{explanation.subjectName}</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">{question.title}</span>
        </div>

        {/* Header Block */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="primary">Unit {question.unit}</Badge>
            <Badge variant="default">{question.marks} Marks</Badge>
            {question.tags.map(tag => (
              <Badge 
                key={tag} 
                variant={tag.includes('HIGH') || tag.includes('MOST') ? 'warning' : 'default'}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            {question.title}
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (Video Player + Study Tabs) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Custom Video Explanation Block */}
            <Card className="border-white/10 bg-zinc-950/80 backdrop-blur-sm p-1">
              {/* Tabs for choosing Custom Slide Lecture vs YouTube Video */}
              <div className="flex justify-between items-center bg-black p-1.5 border-b border-white/5 rounded-t-lg">
                <span className="text-xs font-semibold text-zinc-400 pl-3">VIDEO EXPLANATION</span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => setVideoMode('slides')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      videoMode === 'slides' 
                        ? 'bg-zinc-900 text-white border border-white/15' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Presentation className="w-3.5 h-3.5" />
                    Slide Presentation
                  </button>
                  <button 
                    onClick={() => setVideoMode('youtube')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
                      videoMode === 'youtube' 
                        ? 'bg-red-950/40 text-red-400 border border-red-900/30' 
                        : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                    YouTube Lecture
                  </button>
                </div>
              </div>

              {/* Video Interface Area */}
              <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
                {videoMode === 'slides' ? (
                  pdfLoading ? (
                    /* PDF Loader Animation */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-950 text-center">
                      <div className="w-10 h-10 rounded-full border-t-2 border-white border-r-2 border-r-white/10 animate-spin mb-4" />
                      <p className="text-sm font-semibold text-zinc-300">Rendering PPT slides page-by-page...</p>
                      <p className="text-xs text-zinc-500 mt-1">This will only take a couple of seconds.</p>
                    </div>
                  ) : customSlidesType === 'none' ? (
                    /* Premium Slide Placeholder when none are configured */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-zinc-950 text-center">
                      <Presentation className="w-12 h-12 text-zinc-700 mb-3 animate-pulse" />
                      <p className="text-sm font-semibold text-zinc-300">Presentation slides are being prepared</p>
                      <p className="text-xs text-zinc-500 mt-1 max-w-xs">
                        In the meantime, you can watch the YouTube Lecture by clicking the tab above.
                      </p>
                    </div>
                  ) : customSlidesType === 'pdf' ? (
                    /* PDF Embedded View */
                    <div className="w-full h-full relative">
                      <object 
                        data={customSlides[0]} 
                        type="application/pdf" 
                        className="w-full h-full"
                      >
                        <iframe 
                          src={customSlides[0]} 
                          className="w-full h-full border-0" 
                          title="Custom PDF presentation" 
                        />
                      </object>
                    </div>
                  ) : customSlidesType === 'embed' ? (
                    /* Web Embed Viewer (Google Slides, etc.) */
                    <div className="w-full h-full relative">
                      <iframe 
                        src={customSlides[0]} 
                        className="w-full h-full border-0" 
                        allowFullScreen={true} 
                        title="Embedded Presentation" 
                      />
                    </div>
                  ) : (
                    /* Slide Image Deck Carousel */
                    <div className="w-full h-full flex flex-col justify-between p-6 relative">
                      <div className="absolute inset-0 bg-black flex items-center justify-center">
                        <img 
                          src={customSlides[currentSlideIndex]} 
                          alt={`Slide ${currentSlideIndex + 1}`}
                          className="max-w-full max-h-[85%] object-contain"
                        />
                      </div>

                      {/* Header with slide count */}
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 border-b border-white/5 pb-2 relative z-10 bg-gradient-to-b from-black to-transparent p-4 -mx-6 -mt-6">
                        <span>PPT SLIDES DECK</span>
                        <div className="flex items-center gap-2">
                          <span>SLIDE {currentSlideIndex + 1} OF {slideCount}</span>
                        </div>
                      </div>

                      {/* Bottom navigation indicators */}
                      <div className="flex gap-1 pt-2 border-t border-white/5 text-[9px] font-medium text-zinc-600 relative z-10 bg-gradient-to-t from-black to-transparent p-4 -mx-6 -mb-6 mt-auto">
                        <div className="flex-1 grid grid-flow-col gap-1">
                          {Array.from({ length: Math.min(10, slideCount) }).map((_, index) => (
                            <div 
                              key={index} 
                              onClick={() => handleSlideSelect(index)}
                              className={`cursor-pointer h-1 rounded-full transition-all ${
                                index === currentSlideIndex 
                                  ? 'bg-white' 
                                  : index < currentSlideIndex 
                                    ? 'bg-zinc-700' 
                                    : 'bg-zinc-900'
                              }`} 
                            />
                          ))}
                        </div>
                        {slideCount > 10 && <span className="text-zinc-500 shrink-0 text-[8px] pl-1">{slideCount} total</span>}
                      </div>
                    </div>
                  )
                ) : (
                  /* YouTube Embed integration */
                  <div className="w-full h-full relative">
                    {explanation.youtubeId ? (
                      <iframe 
                        className="w-full h-full border-0"
                        src={(() => {
                          const id = explanation.youtubeId;
                          if (id.includes('?')) {
                            const [videoId, query] = id.split('?');
                            return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&${query}`;
                          }
                          return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;
                        })()}
                        title="YouTube Video Explanation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      /* Dynamic search embedding to load relevant AKTU videos automatically */
                      <iframe 
                        className="w-full h-full border-0"
                        src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(question.title + ' ' + explanation.subjectName + ' AKTU lecture')}`}
                        title="Search YouTube Video Explanation"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Slide Navigation Controls */}
              {videoMode === 'slides' && customSlidesType !== 'none' && (
                <div className="bg-black p-4 flex items-center justify-between rounded-b-lg border-t border-white/5">
                  <button
                    disabled={currentSlideIndex === 0}
                    onClick={() => handleSlideSelect(Math.max(0, currentSlideIndex - 1))}
                    className="px-4 py-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 disabled:opacity-30 disabled:pointer-events-none rounded-lg text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    ← Previous Slide
                  </button>

                  <span className="text-xs text-zinc-400 font-mono font-semibold uppercase tracking-wider">
                    Slide {currentSlideIndex + 1} of {slideCount}
                  </span>

                  <button
                    disabled={currentSlideIndex === slideCount - 1}
                    onClick={() => handleSlideSelect(Math.min(slideCount - 1, currentSlideIndex + 1))}
                    className="px-4 py-2 bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:pointer-events-none rounded-lg text-xs font-bold transition-all cursor-pointer"
                  >
                    Next Slide →
                  </button>
                </div>
              )}
            </Card>



            {/* Detailed Notes Tabs Panel */}
            <Card className="border-white/10 bg-zinc-950/80 backdrop-blur-sm overflow-hidden">
              {/* Tab Toggles */}
              <div className="flex border-b border-white/10 bg-black/60">
                {[
                  { id: 'summary', label: 'Summary', icon: BookOpen },
                  { id: 'explanation', label: 'Detailed Explanation', icon: FileText },
                  { id: 'revision', label: 'Quick Revision', icon: CheckCircle2 }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                        isActive 
                          ? 'border-white text-white bg-white/[0.02]' 
                          : 'border-transparent text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Contents */}
              <div className="p-6 sm:p-8 min-h-[300px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'summary' && (
                    <motion.div
                      key="summary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-400" />
                        Quick Summary
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
                            h2: ({node, ...props}) => <h2 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                            h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-white mt-5 mb-2" {...props} />,
                            p: ({node, ...props}) => <p className="text-zinc-300 leading-relaxed my-3 text-sm" {...props} />,
                            ul: ({node, ...props}) => <ul className="list-disc pl-6 my-2 text-zinc-300 space-y-1 text-sm" {...props} />,
                            ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-2 text-zinc-300 space-y-1 text-sm" {...props} />,
                            li: ({node, ...props}) => <li className="text-zinc-300" {...props} />,
                            table: ({node, ...props}) => (
                              <div className="overflow-x-auto my-6 border border-white/10 rounded-lg">
                                <table className="w-full text-left text-sm border-collapse" {...props} />
                              </div>
                            ),
                            thead: ({node, ...props}) => <thead className="border-b border-white/10 bg-white/[0.02]" {...props} />,
                            tr: ({node, ...props}) => <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors" {...props} />,
                            th: ({node, ...props}) => <th className="p-3 font-semibold text-white" {...props} />,
                            td: ({node, ...props}) => <td className="p-3 text-zinc-300" {...props} />
                          }}
                        >
                          {(() => {
                            const summaryData = explanation.summary;
                            if (typeof summaryData === 'string') {
                              return summaryData;
                            }
                            const notesData = explanation.notes;
                            if (Array.isArray(notesData)) {
                              return notesData.map(note => `* ${note}`).join('\n');
                            }
                            if (typeof notesData === 'string') {
                              return notesData;
                            }
                            return 'No summary available.';
                          })()}
                        </ReactMarkdown>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'explanation' && (
                    <motion.div
                      key="explanation"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="prose prose-invert max-w-none"
                    >
                       <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-white mt-8 mb-3 flex items-center gap-2" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-white mt-6 mb-2 flex items-center gap-1" {...props} />,
                          p: ({node, ...props}) => <p className="text-zinc-300 leading-relaxed my-3 text-sm" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-6 my-2 text-zinc-300 space-y-1" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-2 text-zinc-300 space-y-1" {...props} />,
                          li: ({node, ...props}) => <li className="text-zinc-300" {...props} />,
                          table: ({node, ...props}) => (
                            <div className="overflow-x-auto my-6 border border-white/10 rounded-lg">
                              <table className="w-full text-left text-sm border-collapse" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => <thead className="border-b border-white/10 bg-white/[0.02]" {...props} />,
                          tr: ({node, ...props}) => <tr className="border-b border-white/5 hover:bg-white/[0.01] transition-colors" {...props} />,
                          th: ({node, ...props}) => <th className="p-3 font-semibold text-white" {...props} />,
                          td: ({node, ...props}) => <td className="p-3 text-zinc-300" {...props} />
                        }}
                      >
                        {explanation.detailedExplanation}
                      </ReactMarkdown>
                    </motion.div>
                  )}

                  {activeTab === 'revision' && (
                    <motion.div
                      key="revision"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="p-4 rounded-xl border border-emerald-950 bg-emerald-950/10 flex gap-3 mb-6">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-1">One Night Before Exam Checklist</h4>
                          <p className="text-xs text-zinc-400 leading-relaxed">Focus on these high-yield highlights to optimize your passing-marks threshold in under 3 hours.</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {explanation.quickRevision.map((rev, index) => (
                          <div key={index} className="flex items-start gap-3 text-sm text-zinc-300 border border-white/5 p-3 rounded-lg bg-white/[0.005]">
                            <span className="text-zinc-600 shrink-0 font-bold font-mono">✓</span>
                            <span>{rev}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </div>

          {/* Sidebar Column (Insights + Related Questions + Doubt Solver) */}
          <div className="space-y-6">
            {/* Exam Statistics Gauge */}
            <Card className="p-6 border-white/10 bg-zinc-950/80 backdrop-blur-sm space-y-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3">Exam Priority Insights</h3>
              
              {/* Circular probability progress bar */}
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      cx="72" 
                      cy="72" 
                      r="60" 
                      stroke="#18181b" 
                      strokeWidth="10" 
                      fill="transparent" 
                    />
                    <motion.circle 
                      cx="72" 
                      cy="72" 
                      r="60" 
                      stroke="#ffffff" 
                      strokeWidth="10" 
                      fill="transparent"
                      strokeDasharray={377} // 2 * pi * r
                      initial={{ strokeDashoffset: 377 }}
                      animate={{ strokeDashoffset: 377 - (377 * question.probability) / 100 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-bold text-white font-mono">{question.probability}%</span>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Probability</p>
                  </div>
                </div>
              </div>

              {/* Data parameters */}
              <div className="grid grid-cols-2 gap-4 text-center border-t border-white/5 pt-6">
                <div className="border-r border-white/5">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Expected Marks</div>
                  <div className="text-xl font-bold text-white flex justify-center items-center gap-1.5">
                    <Award className="w-4 h-4 text-zinc-400" />
                    {question.marks} Pts
                  </div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Exam Frequency</div>
                  <div className="text-xl font-bold text-white flex justify-center items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-zinc-400" />
                    {question.frequency}
                  </div>
                </div>
              </div>
            </Card>

            {/* Related Unit Questions */}
            <Card className="p-6 border-white/10 bg-zinc-950/80 backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-white/5 pb-3">More from Unit {question.unit}</h3>
              {relatedQuestions.length > 0 ? (
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
                  {relatedQuestions.map((reqQ) => (
                    <div 
                      key={reqQ.id}
                      onClick={() => router.push(`/StartPrep/question?subjectId=${subjectId}&questionId=${reqQ.id}`)}
                      className="p-3 border border-white/5 bg-white/[0.005] hover:bg-white/5 hover:border-white/15 rounded-lg cursor-pointer transition-all flex justify-between items-start gap-3 group"
                    >
                      <span className="text-xs text-zinc-300 group-hover:text-white transition-colors line-clamp-2 leading-relaxed">{reqQ.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-xs text-zinc-500">No other questions found in this unit.</div>
              )}
            </Card>
            
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-zinc-600 border-t border-white/10 bg-black">
        <p>© 2026 PrepAKTU. Study smart, not hard.</p>
      </footer>
    </div>
  );
}

export default function QuestionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-zinc-50 font-sans flex items-center justify-center">
        <div className="space-y-4 animate-pulse text-center">
          <div className="w-12 h-12 rounded-full border-t-2 border-white animate-spin mx-auto mb-4" />
          <div className="h-6 w-32 bg-zinc-900 rounded mx-auto" />
        </div>
      </div>
    }>
      <QuestionContent />
    </Suspense>
  );
}
