
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ClarityHeader, hoverGradientText } from '../SectionUtils';

export const Signal: React.FC = () => {
  const sectionData = portfolioData.sections.signal;

  return (
    <Section index={PortfolioState.SIGNAL}>
        <div className="text-center w-full h-full flex flex-col justify-center">
            <div className="shrink-0 mb-8 md:mb-12">
                <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                <h1 className="text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-500 dark:from-white dark:to-slate-500 leading-tight">
                    {sectionData.title}
                </h1>
            </div>
            
            <div className="flex flex-col items-center gap-6 md:gap-8 font-mono text-sm">
                <a href={`mailto:${portfolioData.bio.contacts.email}`} className="relative group inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative border border-slate-200 dark:border-white/10 bg-white dark:bg-black text-slate-700 dark:text-slate-300 px-6 py-3 md:px-8 md:py-4 hover:text-black dark:hover:text-white transition-all text-sm md:text-lg flex items-center gap-2 rounded">
                    <span className={`${hoverGradientText} transition-all break-all`}>{portfolioData.bio.contacts.email}</span>
                </div>
                </a>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {Object.entries(portfolioData.bio.contacts.social).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white capitalize transition-colors text-sm md:text-lg hover:underline decoration-purple-500/50 underline-offset-4">
                    {key}
                    </a>
                ))}
                </div>

                {/* Secondary Resume CTA */}
                <a 
                href={portfolioData.resume.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-all text-xs tracking-widest flex items-center gap-2"
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    DOWNLOAD RESUME
                </a>
            </div>
            
            <div className="mt-12 md:mt-24 text-xs md:text-sm text-slate-400 dark:text-slate-600 font-mono">
                END_OF_TRANSMISSION // 2025
            </div>
        </div>
    </Section>
  );
};
