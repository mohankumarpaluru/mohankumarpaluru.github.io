
import React, { useState, useEffect } from 'react';
import { PortfolioState, STATE_COUNT } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { useScrollStore } from '../../store/useScrollStore';
import { Section, ScrollableContent, ClarityHeader, RenderTitle, hoverGradientText, cardScrim } from '../SectionUtils';
import { GlowCard } from '../GlowCard';

type TabType = 'experience' | 'education';

export const Experience: React.FC = () => {
    const sectionData = portfolioData.sections.experience;
    const [activeTab, setActiveTab] = useState<TabType>('experience');
    const scrollProgress = useScrollStore(s => s.scrollProgress);

    // Reset tab when scrolling away to keep narrative linear
    useEffect(() => {
        const currentIndex = Math.round(scrollProgress * (STATE_COUNT - 1));
        if (currentIndex !== PortfolioState.EXPERIENCE) {
            setActiveTab('experience');
        }
    }, [scrollProgress]);

    return (
        <Section index={PortfolioState.EXPERIENCE}>
            <div className="relative z-30 w-full h-full">
                {/* Soft Radial Mask */}
                <div className="absolute -inset-8 z-[-1] rounded-[inherit] pointer-events-none opacity-0 lg:opacity-100
                bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_70%)]
                dark:bg-[radial-gradient(ellipse_at_center,rgba(6,8,12,0.94)_0%,rgba(6,8,12,0)_70%)]">
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 bg-slate-50 dark:bg-black/70 backdrop-blur-md p-4 md:p-8 rounded-2xl border border-slate-200 dark:border-white/5 shadow-2xl h-full overflow-hidden transition-colors duration-500">
                    {/* Left Column: Header & Permanent Certifications */}
                    <div className="flex flex-col shrink-0 md:shrink min-h-0 overflow-y-auto md:overflow-visible no-scrollbar">
                        <div className="mb-6 md:mb-8">
                            <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                            <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-slate-900 dark:text-white" />
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg">{sectionData.subtitle}</p>
                        </div>

                        {/* Permanent Certifications Block - Polished Vertical Rhythm */}
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                            <h4 className="text-cyan-600 dark:text-cyan-400 font-mono mb-4 text-xs tracking-wider opacity-90 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse"></span>
                                CERTIFICATIONS
                            </h4>
                            <div className="space-y-5">
                                {portfolioData.certifications.map((cert, i) => (
                                    <div key={i} className="flex flex-col border-l-2 border-slate-300 dark:border-white/10 pl-4 hover:border-cyan-500/50 transition-colors py-1 group cursor-default">
                                        <span className={`text-sm md:text-base font-bold text-slate-800 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 transition-colors`}>{cert.title}</span>
                                        <div className="flex justify-between items-center mt-1">
                                            <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">{cert.issuer}</span>
                                            <span className="text-[10px] text-slate-600 font-mono border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded font-semibold group-hover:border-cyan-500/20 transition-colors">{cert.year}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Tabbed Content */}
                    <div className="flex flex-col min-h-0">

                        {/* Tab Switcher */}
                        <div className="flex space-x-1 bg-slate-100 dark:bg-black/40 p-1 rounded-lg border border-slate-200 dark:border-white/10 w-fit mb-4 shrink-0 self-start md:self-auto transition-colors">
                            <button onClick={() => setActiveTab('experience')} className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${activeTab === 'experience' ? 'bg-white/80  dark:bg-white/10 text-cyan-600 dark:text-cyan-400 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'}`}>EXPERIENCE</button>
                            <button onClick={() => setActiveTab('education')} className={`px-4 py-1.5 text-xs font-mono rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${activeTab === 'education' ? 'bg-white/80  dark:bg-white/10 text-cyan-600 dark:text-cyan-400 shadow-sm font-bold' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-white/50 dark:hover:bg-white/5'}`}>EDUCATION</button>
                        </div>

                        <ScrollableContent className="space-y-4 pr-2">
                            {/* TAB 1: EXPERIENCE */}
                            {activeTab === 'experience' && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
                                    {portfolioData.experience.map((exp, i) => (
                                        <GlowCard
                                            key={i}
                                            className="p-4 md:p-5 overflow-hidden relative group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500/50 rounded-xl"
                                            tabIndex={0}
                                            role="article"
                                        >
                                            <div className={cardScrim}></div>
                                            <div className="relative z-10">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                                    <h4 className={`text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight ${hoverGradientText} transition-all`}>
                                                        {exp.title}
                                                    </h4>
                                                    <span className="text-xs font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded mt-1 md:mt-0 whitespace-nowrap border border-slate-200 dark:border-white/5 font-semibold">{exp.period}</span>
                                                </div>
                                                <div className="text-indigo-600 dark:text-indigo-400 text-xs md:text-sm font-medium mb-3">{exp.company}</div>
                                                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 opacity-95 leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </GlowCard>
                                    ))}
                                </div>
                            )}

                            {/* TAB 2: EDUCATION */}
                            {activeTab === 'education' && (
                                <div className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-300">
                                    {portfolioData.education.map((edu, i) => (
                                        <GlowCard
                                            key={i}
                                            className="p-4 overflow-hidden relative group hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-indigo-500/50"
                                            tabIndex={0}
                                            role="article"
                                        >
                                            <div className={cardScrim}></div>
                                            <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                                <div>
                                                    <h4 className={`text-base font-bold text-slate-800 dark:text-slate-200 leading-tight ${hoverGradientText} transition-all`}>
                                                        {edu.degree}
                                                    </h4>
                                                    <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1">{edu.institution}</div>
                                                </div>
                                                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded border border-slate-200 dark:border-white/5 shrink-0 self-start sm:self-center font-semibold">
                                                    {edu.year}
                                                </div>
                                            </div>
                                        </GlowCard>
                                    ))}
                                </div>
                            )}
                        </ScrollableContent>
                    </div>
                </div>
            </div>
        </Section>
    );
};
