"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, 
  FileText, 
  Search, 
  ArrowLeft, 
  Home, 
  ChevronRight, 
  Download, 
  Loader2
} from 'lucide-react';
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Card from "@/Components/Card";
import Badge from "@/Components/Badge";
import Button from "@/Components/Button";

// Custom PDF and Folder icons styled for dark theme
const PDFIcon = () => (
  <div className="w-16 h-16 bg-red-950/20 border border-red-900/30 rounded-xl flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
    <FileText className="w-8 h-8" />
  </div>
);

const FolderIcon = () => (
  <div className="w-16 h-16 bg-amber-950/20 border border-amber-900/30 rounded-xl flex items-center justify-center text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
    <Folder className="w-8 h-8 fill-amber-500/20" />
  </div>
);

export default function PYQPage() {
  const [catalog, setCatalog] = useState({ semesters: {} });
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(["B.Tech"]);
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingFile, setDownloadingFile] = useState(null);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Fetch file system hierarchy from the dynamic API on mount
  useEffect(() => {
    fetch('/api/pyqs')
      .then(res => res.json())
      .then(data => {
        setCatalog(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching PYQ catalog:', err);
        setLoading(false);
      });
  }, []);

  const currentLevel = currentPath.length; // 1 = B.Tech Semesters, 2 = Subjects, 3 = Files
  const activeSemester = currentPath[1] || null;
  const activeSubject = currentPath[2] || null;

  // Retrieve folders dynamically based on user's current directory path
  const currentFolders = useMemo(() => {
    if (loading || !catalog.semesters) return [];

    if (currentLevel === 1) {
      // Return sorted semester names (e.g. B.Tech-1st Sem, B.Tech-2nd Sem...)
      return Object.keys(catalog.semesters)
        .sort((a, b) => a.localeCompare(b))
        .map(semName => ({ name: semName, type: 'semester' }));
    }
    
    if (currentLevel === 2) {
      const semObj = catalog.semesters[activeSemester];
      if (semObj && semObj.subjects) {
        return Object.keys(semObj.subjects)
          .sort((a, b) => a.localeCompare(b))
          .map(subName => ({ name: subName, type: 'subject' }));
      }
    }
    
    return [];
  }, [currentLevel, activeSemester, catalog, loading]);

  // Retrieve files inside the selected subject folder
  const currentFiles = useMemo(() => {
    if (currentLevel === 3 && catalog.semesters && activeSemester && activeSubject) {
      const semObj = catalog.semesters[activeSemester];
      if (semObj && semObj.subjects && semObj.subjects[activeSubject]) {
        return semObj.subjects[activeSubject];
      }
    }
    return [];
  }, [currentLevel, activeSemester, activeSubject, catalog]);

  // Scan flat list of all papers for full-catalog global search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || !catalog.semesters) return [];
    
    const results = [];
    Object.keys(catalog.semesters).forEach(semesterName => {
      const semObj = catalog.semesters[semesterName];
      Object.keys(semObj.subjects).forEach(subjectName => {
        const filesList = semObj.subjects[subjectName];
        filesList.forEach(file => {
          if (file.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            results.push({
              ...file,
              semesterName,
              subjectName
            });
          }
        });
      });
    });
    return results.sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, catalog]);

  // Navigations actions
  const navigateTo = (folderName) => {
    setCurrentPath(prev => [...prev, folderName]);
  };

  const navigateBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(prev => prev.slice(0, -1));
    }
  };

  const jumpToBreadcrumb = (index) => {
    setCurrentPath(prev => prev.slice(0, index + 1));
  };

  // Real static file download logic
  const handleDownload = (file) => {
    if (downloadingFile) return; // Prevent duplicate download triggers

    setDownloadingFile(file.name);
    setDownloadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
        setDownloadProgress(100);

        setTimeout(() => {
          // Trigger actual download of the file copied in the public folder
          const element = document.createElement("a");
          element.href = encodeURI(file.url);
          element.download = file.name;
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);

          // Hide modal and alert user
          setDownloadingFile(null);
          setToastMessage(`Downloaded ${file.name} successfully!`);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }, 300);
      } else {
        setDownloadProgress(progress);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-white/30 selection:text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <Navbar mode="prep" />

      {/* Main Container */}
      <main className="flex-1 container mx-auto px-6 py-12 max-w-5xl">
        
        {/* Title Block */}
        <div className="mb-10 text-center sm:text-left">
          <Badge className="mb-3 border-zinc-700 bg-zinc-800/40 text-zinc-300">
            Official AKTU PYP Explorer
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            B.Tech Previous Year Papers
          </h1>
          <p className="text-zinc-400 text-sm max-w-xl">
            Download official semester question papers directly from our repository scanned from your branch catalog.
          </p>
        </div>

        {/* Directory Breadcrumbs & Search Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            {currentLevel > 1 && (
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="gap-2 px-3 py-1.5 h-auto text-zinc-400 hover:text-white border border-white/5 bg-white/[0.01]"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </Button>
            )}
            
            {/* Breadcrumb links */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 overflow-x-auto whitespace-nowrap py-1 scrollbar-none">
              {currentPath.map((node, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-zinc-700 shrink-0" />}
                  <button 
                    onClick={() => jumpToBreadcrumb(index)}
                    className={`hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-medium ${
                      index === currentPath.length - 1 ? 'text-white font-bold' : ''
                    }`}
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 -mt-0.5" />}
                    <span>{node}</span>
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search subject or paper name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-zinc-950 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-white/30 w-full placeholder-zinc-600 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Content Directory View */}
        <Card className="p-8 border-white/10 bg-zinc-950/60 backdrop-blur-md min-h-[400px] flex flex-col justify-center">
          
          <AnimatePresence mode="wait">
            
            {loading ? (
              /* Loading Spinner */
              <motion.div 
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <Loader2 className="w-10 h-10 text-white animate-spin" />
                <p className="text-sm text-zinc-500 font-semibold animate-pulse">Scanning uploaded exam files...</p>
              </motion.div>
            ) : searchQuery.trim() ? (
              /* Search results grid */
              <motion.div
                key="searchResults"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 w-full h-full align-top self-start"
              >
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Search Results for "{searchQuery}"
                  </span>
                  <Badge variant="success" className="lowercase">{searchResults.length} papers found</Badge>
                </div>

                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {searchResults.map((paper, idx) => (
                      <Card 
                        key={idx}
                        hover
                        onClick={() => handleDownload(paper)}
                        className="p-5 flex flex-col justify-between border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                      >
                        <div className="flex gap-4 items-start mb-4">
                          <PDFIcon />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-white leading-relaxed truncate-2-lines mb-1.5" title={paper.name}>
                              {paper.name.replace('.pdf', '')}
                            </h4>
                            <div className="flex flex-wrap gap-1 text-[9px]">
                              <span className="bg-white/5 px-1.5 py-0.5 rounded text-zinc-400 font-semibold">{paper.semesterName}</span>
                              <span className="bg-white/5 px-1.5 py-0.5 rounded text-zinc-400 font-semibold">{paper.subjectName}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                          <span>{paper.size}</span>
                          <span className="text-white font-semibold group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                            <Download className="w-3 h-3" /> Download
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-500">
                    <FileText className="w-10 h-10 mb-3 text-zinc-700" />
                    <p className="text-sm font-medium">No previous year papers matching your query.</p>
                    <p className="text-xs text-zinc-600 mt-1">Try searching for subjects like Chemistry, DAA, or DBMS.</p>
                  </div>
                )}
              </motion.div>
            ) : (
              /* Normal Folder Explorer grid */
              <motion.div
                key={currentPath.join('/')}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="w-full h-full align-top self-start"
              >
                
                {/* Folders (Semesters and Subjects) */}
                {currentFolders.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {currentFolders.map((folder) => (
                      <Card
                        key={folder.name}
                        hover
                        onClick={() => navigateTo(folder.name)}
                        className="p-5 flex flex-col items-center justify-center text-center border-white/10 hover:border-white/20 hover:bg-white/[0.03] transition-all group"
                      >
                        <FolderIcon />
                        <span className="mt-4 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors leading-snug">
                          {folder.name}
                        </span>
                      </Card>
                    ))}
                  </div>
                )}

                {/* PDF Files in Subject Folder */}
                {currentFiles.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {currentFiles.map((file) => (
                      <Card
                        key={file.name}
                        hover
                        onClick={() => handleDownload(file)}
                        className="p-5 flex flex-col justify-between border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all group cursor-pointer"
                      >
                        <div className="flex gap-4 items-start mb-4">
                          <PDFIcon />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-white leading-relaxed truncate-2-lines mb-1" title={file.name}>
                              {file.name.replace('.pdf', '')}
                            </h4>
                            <span className="text-[10px] text-zinc-500 uppercase font-mono font-semibold">
                              {file.name.endsWith('.png') ? 'Syllabus Blueprint' : 'AKTU Exam Paper'}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-3 border-t border-white/5 text-[10px] text-zinc-500">
                          <span>{file.size}</span>
                          <span className="text-white font-semibold group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                            <Download className="w-3 h-3" /> Download
                          </span>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Empty directory alert */}
                {currentFolders.length === 0 && currentFiles.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-zinc-500">
                    <Folder className="w-10 h-10 mb-3 text-zinc-700 animate-pulse" />
                    <p className="text-sm font-medium">This folder is currently empty.</p>
                    <p className="text-xs text-zinc-600 mt-1">Uploads for this directory will appear shortly.</p>
                  </div>
                )}

              </motion.div>
            )}
            
          </AnimatePresence>
        </Card>
      </main>

      {/* Downloading Overlay Modal */}
      <AnimatePresence>
        {downloadingFile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-sm bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl text-center space-y-6"
            >
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <Loader2 className="w-16 h-16 text-white animate-spin absolute" strokeWidth={1} />
                <FileText className="w-6 h-6 text-red-500 animate-pulse" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">Preparing Document Download</h4>
                <p className="text-xs text-zinc-500 truncate px-4">{downloadingFile}</p>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-zinc-900 border border-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-white rounded-full" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${downloadProgress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <div className="text-[10px] font-mono text-zinc-500">{downloadProgress}% downloaded</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-emerald-800 text-emerald-400 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-semibold"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer simple={true} />
    </div>
  );
}
