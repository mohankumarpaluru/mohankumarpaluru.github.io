
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useScrollStore } from '../store/useScrollStore';
import { useThemeStore } from '../store/useThemeStore';
import { portfolioData } from '../data/portfolioData';
import { PortfolioState, STATE_COUNT } from '../types';
import { Home, User, Briefcase, Code2, FileText, FolderOpen, Sparkles, Send } from 'lucide-react';

interface FloatingNavProps {
  onNavigate: (index: number) => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ onNavigate }) => {
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const { theme, toggleTheme } = useThemeStore();

  // Derive active section from continuous progress
  const currentIndex = Math.min(
    STATE_COUNT - 1,
    Math.max(0, Math.round(scrollProgress * (STATE_COUNT - 1)))
  );

  const navItems = useMemo(() => {
    const items = [
      { index: PortfolioState.HERO, ...portfolioData.sections.hero },
      { index: PortfolioState.ABOUT, ...portfolioData.sections.about },
      { index: PortfolioState.EXPERIENCE, ...portfolioData.sections.experience },
      { index: PortfolioState.PROJECTS, ...portfolioData.sections.projects },
      { index: PortfolioState.KNOWLEDGE, ...portfolioData.sections.knowledge },
      { index: PortfolioState.WRITING, ...portfolioData.sections.writing },
      { index: PortfolioState.PERSONAL, ...portfolioData.sections.personal },
      { index: PortfolioState.SIGNAL, ...portfolioData.sections.signal },
    ];
    return items;
  }, []);

  // Icon mapping for mobile view
  const getIcon = (index: number) => {
    const iconProps = { size: 16, strokeWidth: 2, className: "shrink-0" };
    switch (index) {
      case PortfolioState.HERO: return <Home {...iconProps} />;
      case PortfolioState.ABOUT: return <User {...iconProps} />;
      case PortfolioState.EXPERIENCE: return <Briefcase {...iconProps} />;
      case PortfolioState.PROJECTS: return <FolderOpen {...iconProps} />;
      case PortfolioState.KNOWLEDGE: return <Code2 {...iconProps} />;
      case PortfolioState.WRITING: return <FileText {...iconProps} />;
      case PortfolioState.PERSONAL: return <Sparkles {...iconProps} />;
      case PortfolioState.SIGNAL: return <Send {...iconProps} />;
      default: return <Home {...iconProps} />;
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4 pointer-events-none">
      <div className="relative bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full pl-2 pr-2 py-2 pointer-events-auto shadow-[0_10px_26px_rgba(15,23,42,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center transition-colors duration-500">

        {/* Navigation Items - Scrollable */}
        <div className="flex-1 flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar mask-gradient px-1 md:px-4 scroll-smooth">
          {navItems.map((item) => {
            const isActive = currentIndex === item.index;
            return (
              <button
                key={item.index}
                onClick={() => onNavigate(item.index)}
                className={`
                            relative px-2 md:px-3 py-2 text-xs font-mono transition-all duration-300 whitespace-nowrap rounded-md group shrink-0
                            ${isActive
                    ? 'text-slate-900 dark:text-white bg-slate-200/50 dark:bg-white/10 font-bold'
                    : 'text-slate-500 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5'}
                        `}
              >
                {isActive && (
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                )}
                <span className={`flex items-center gap-2 ${isActive ? 'pl-3' : ''}`}>
                  {/* Mobile: Icon only */}
                  <span className="md:hidden flex items-center" aria-label={item.navLabel}>
                    {getIcon(item.index)}
                  </span>
                  {/* Desktop: Text label */}
                  <span className="hidden md:inline">{item.navLabel}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-slate-300 dark:bg-white/10 mx-0.5 md:mx-2 shrink-0 transition-colors"></div>

        {/* Resume Button */}
        <a
          href={portfolioData.resume.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-black/60 transition-all shrink-0 ml-0.5 md:ml-1 border border-slate-200 dark:border-transparent"
        >
          {/* Gradient Border Rim (Dark Mode) */}
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-red-500/40 opacity-0 dark:opacity-100 group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-red-400 transition-colors -z-10">
            <div className="w-full h-full bg-black/80 rounded-full" />
          </div>

          <span className="text-[10px] md:text-xs font-mono font-bold text-slate-700 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white flex items-center gap-2 transition-colors">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            <span className="hidden sm:inline">{portfolioData.resume.label.replace('Download ', '')}</span>
          </span>
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 transition-colors shrink-0"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        {/* Glowing Progress Line - Absolute Bottom */}
        <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-slate-200 dark:bg-white/5 overflow-hidden rounded-full pointer-events-none">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            style={{
              width: '100%',
              scaleX: scrollProgress,
              transformOrigin: 'left'
            }}
          />
        </div>
      </div>
    </div>
  );
};
