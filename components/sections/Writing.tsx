
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle, hoverGradientText, cardScrim } from '../SectionUtils';

export const Writing: React.FC = () => {
  const sectionData = portfolioData.sections.writing;

  return (
    <Section index={PortfolioState.WRITING}>
        <div className="bg-white/60 dark:bg-black/60 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl w-full h-full flex flex-col overflow-hidden transition-colors duration-500">
        <div className="mb-4 md:mb-8 border-b border-slate-200 dark:border-white/10 pb-4 flex flex-col md:flex-row md:items-baseline justify-between shrink-0">
            <div>
                <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white" />
            </div>
            <div className="text-xs font-mono text-slate-500 mt-2 md:mt-0">
                {sectionData.tagline}
            </div>
        </div>
        
        <ScrollableContent className="space-y-4 md:space-y-4 pr-2">
            {portfolioData.blogPosts.map((post, i) => (
                <a href={post.url} target="_blank" rel="noreferrer" key={i} className="block group relative rounded-lg overflow-hidden border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors bg-white/40 dark:bg-transparent">
                <div className={cardScrim}></div>
                <div className="relative z-10 p-4 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
                    <span className="font-mono text-[10px] md:text-xs text-slate-500 w-24 pt-1">{post.date}</span>
                    <div className="flex-1">
                        <h3 className={`text-base md:text-2xl font-medium text-slate-800 dark:text-slate-200 ${hoverGradientText} transition-colors`}>{post.title}</h3>
                        <p className="text-slate-600 dark:text-slate-200 opacity-90 text-xs md:text-base mt-1 md:mt-2 leading-relaxed max-w-2xl font-normal">{post.excerpt}</p>
                    </div>
                    <span className="text-[10px] md:text-xs bg-slate-100 dark:bg-white/5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-indigo-600 dark:text-indigo-300 border border-slate-200 dark:border-white/10 self-start md:self-center mt-2 md:mt-0 group-hover:border-purple-500/30 group-hover:text-purple-500 dark:group-hover:text-purple-200 transition-colors">{post.category}</span>
                </div>
                </a>
            ))}
        </ScrollableContent>
        </div>
    </Section>
  );
};
