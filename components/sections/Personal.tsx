
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle } from '../SectionUtils';
import { GlowCard } from '../GlowCard';

export const Personal: React.FC = () => {
    const sectionData = portfolioData.sections.personal;

    return (
        <Section index={PortfolioState.PERSONAL}>
            <div className="text-center max-w-4xl mx-auto h-full flex flex-col">
                <div className="flex justify-center mb-4 md:mb-8 shrink-0">
                    <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                </div>
                <div className="mb-8 md:mb-12 text-slate-600 dark:text-slate-300 text-base md:text-xl font-light shrink-0">
                    <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="mb-2" />
                    <p>{sectionData.subtitle}</p>
                </div>

                <ScrollableContent className="pb-10">
                    {/* Unified box */}
                    <div className="bg-slate-50 dark:bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden text-left transition-colors duration-500">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {portfolioData.personalEndeavors.map((item, i) => (
                                <GlowCard key={i} className="p-5 md:p-6 group h-full">
                                    <div className={`text-2xl md:text-3xl mb-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform origin-left`}>✦</div>
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                                </GlowCard>
                            ))}
                        </div>
                    </div>
                </ScrollableContent>
            </div>
        </Section>
    );
};
