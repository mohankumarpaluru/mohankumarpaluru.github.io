
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle, hoverGradientText, cardScrim } from '../SectionUtils';
import { GlowCard } from '../GlowCard';

export const Projects: React.FC = () => {
  const sectionData = portfolioData.sections.projects;

  return (
    <Section index={PortfolioState.PROJECTS}>
        <div className="flex flex-col h-full w-full">
        <div className="text-center mb-4 md:mb-8 shrink-0">
            <div className="flex justify-center mb-2">
                <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
            </div>
            <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white" />
        </div>
        
        <ScrollableContent className="pb-20">
            <div className="bg-white/50 dark:bg-black/60 backdrop-blur-md rounded-xl p-4 md:p-6 border border-slate-200 dark:border-white/10 transition-colors duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {portfolioData.projects.map((proj, i) => (
                <GlowCard 
                    as="a"
                    href={proj.link} 
                    target="_blank" 
                    rel="noreferrer"
                    key={i} 
                    className="flex flex-col min-h-[180px] group relative"
                >
                    <div className={cardScrim}></div>
                    <div className="relative z-10 p-5 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className={`font-bold text-base md:text-lg text-slate-800 dark:text-slate-100 ${hoverGradientText} transition-all`}>{proj.title}</h3>
                            <span className="text-xs font-mono border border-slate-300 dark:border-white/20 rounded px-1.5 py-0.5 text-slate-500 dark:text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 group-hover:border-purple-500/50 transition-colors">↗</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 opacity-95 mb-4 flex-grow leading-relaxed line-clamp-4 font-medium tracking-wide">{proj.description}</p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                            {proj.tags.map(tag => (
                                <span key={tag} className="text-[10px] md:text-xs font-mono text-indigo-600 dark:text-indigo-300 bg-slate-100 dark:bg-black/30 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/10 group-hover:border-indigo-500/20">#{tag}</span>
                            ))}
                        </div>
                    </div>
                </GlowCard>
                ))}
            </div>
            </div>
        </ScrollableContent>
        </div>
    </Section>
  );
};
