
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle, hoverGradientText, cardScrim } from '../SectionUtils';
import { GlowCard } from '../GlowCard';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
    const sectionData = portfolioData.sections.projects;

    // Separate featured and regular projects, limit to 8 total (3 featured + 5 regular)
    const featuredProjects = portfolioData.projects.filter(p => p.featured).slice(0, 3);
    const regularProjects = portfolioData.projects.filter(p => !p.featured).slice(0, 5);

    return (
        <Section index={PortfolioState.PROJECTS}>
            <div className="flex flex-col h-full w-full">
                {/* Header */}
                <div className="mb-4 md:mb-6 shrink-0">
                    <div className="flex items-center mb-2">
                        <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                    </div>
                    <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white" />
                </div>

                <ScrollableContent className="pb-3">
                    {/* Background Container - Match Experience/Knowledge */}
                    <div className="bg-slate-50 dark:bg-black/70 backdrop-blur-md p-2 md:p-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl transition-colors duration-500">
                        {/* Asymmetric Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-2 md:gap-3 auto-rows-fr">

                            {/* Featured Project 1 - Large */}
                            {featuredProjects[0] && (
                                <div className="md:col-span-4 lg:col-span-6 md:row-span-2">
                                    <GlowCard
                                        as="a"
                                        href={featuredProjects[0].link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative h-full min-h-[200px] md:min-h-[300px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(8,12,24,0.12)] dark:hover:shadow-[0_16px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(59,130,246,0.18)] hover:border-blue-500/25"
                                    >
                                        <div className={cardScrim}></div>

                                        <div className="relative z-10 w-full h-28 md:h-40 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 overflow-hidden">
                                            {featuredProjects[0].image ? (
                                                <img
                                                    src={featuredProjects[0].image}
                                                    alt={featuredProjects[0].title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-5xl md:text-7xl opacity-30">🚀</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 p-3 md:p-4 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 ${hoverGradientText} transition-all pr-2`}>{featuredProjects[0].title}</h3>
                                                <ExternalLink
                                                    size={18}
                                                    className="shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                                />
                                            </div>
                                            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 opacity-95 mb-3 flex-grow leading-relaxed">{featuredProjects[0].description}</p>
                                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                                {featuredProjects[0].tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-mono text-[#2563eb]/92 dark:text-blue-300 bg-[#2563eb]/10 dark:bg-black/30 px-2 py-0.5 rounded border border-[#2563eb]/[0.18] dark:border-white/10 group-hover:border-blue-500/30 transition-colors">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>
                            )}

                            {/* Featured Project 2 - Medium */}
                            {featuredProjects[1] && (
                                <div className="md:col-span-2 lg:col-span-3 md:row-span-1">
                                    <GlowCard
                                        as="a"
                                        href={featuredProjects[1].link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative h-full min-h-[170px] md:min-h-[140px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(8,12,24,0.12)] dark:hover:shadow-[0_16px_32px_rgba(0,0,0,0.45)] hover:border-blue-500/25"
                                    >
                                        <div className={cardScrim}></div>

                                        <div className="relative z-10 w-full h-16 md:h-18 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 overflow-hidden">
                                            {featuredProjects[1].image ? (
                                                <img
                                                    src={featuredProjects[1].image}
                                                    alt={featuredProjects[1].title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-4xl opacity-30">📅</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 p-3 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-bold text-sm md:text-base text-slate-800 dark:text-slate-100 ${hoverGradientText} pr-1`}>{featuredProjects[1].title}</h3>
                                                <ExternalLink size={14} className="shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all" />
                                            </div>
                                            <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-200 mb-2 line-clamp-2">{featuredProjects[1].description}</p>
                                            <div className="flex flex-wrap gap-1 mt-auto">
                                                {featuredProjects[1].tags.map(tag => (
                                                    <span key={tag} className="text-[9px] font-mono text-[#2563eb]/92 dark:text-blue-300 bg-[#2563eb]/10 dark:bg-black/30 px-1.5 py-0.5 rounded border border-[#2563eb]/[0.18] dark:border-white/10">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>
                            )}

                            {/* Regular Projects - First 2 */}
                            {regularProjects.slice(0, 2).map((proj, i) => (
                                <div key={i} className="md:col-span-2 lg:col-span-3">
                                    <GlowCard
                                        as="a"
                                        href={proj.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative h-full min-h-[100px] md:min-h-[140px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:border-slate-300 dark:hover:border-white/20"
                                    >
                                        <div className={cardScrim}></div>
                                        <div className="relative z-10 p-3 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-semibold text-xs md:text-sm text-slate-800 dark:text-slate-100 ${hoverGradientText} pr-1`}>{proj.title}</h3>
                                                <ExternalLink size={12} className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all" />
                                            </div>
                                            <p className="text-[10px] text-slate-600 dark:text-slate-300 mb-2 line-clamp-2 flex-grow">{proj.description}</p>
                                            <div className="flex flex-wrap gap-1 mt-auto">
                                                {proj.tags.map(tag => (
                                                    <span key={tag} className="text-[9px] font-mono text-[#2563eb]/92 dark:text-blue-300 bg-[#2563eb]/10 dark:bg-black/30 px-1.5 py-0.5 rounded border border-[#2563eb]/[0.18] dark:border-white/10">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>
                            ))}

                            {/* Featured Project 3 - Medium */}
                            {featuredProjects[2] && (
                                <div className="md:col-span-3 lg:col-span-4">
                                    <GlowCard
                                        as="a"
                                        href={featuredProjects[2].link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative h-full min-h-[160px] md:min-h-[140px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(8,12,24,0.12)] dark:hover:shadow-[0_16px_32px_rgba(0,0,0,0.45)] hover:border-blue-500/25"
                                    >
                                        <div className={cardScrim}></div>

                                        <div className="relative z-10 w-full h-20 md:h-24 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20 overflow-hidden">
                                            {featuredProjects[2].image ? (
                                                <img
                                                    src={featuredProjects[2].image}
                                                    alt={featuredProjects[2].title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <div className="text-4xl opacity-30">💍</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 p-3 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-bold text-sm md:text-base text-slate-800 dark:text-slate-100 ${hoverGradientText} pr-1`}>{featuredProjects[2].title}</h3>
                                                <ExternalLink size={14} className="shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all" />
                                            </div>
                                            <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-200 mb-2 line-clamp-2">{featuredProjects[2].description}</p>
                                            <div className="flex flex-wrap gap-1 mt-auto">
                                                {featuredProjects[2].tags.map(tag => (
                                                    <span key={tag} className="text-[9px] font-mono text-[#2563eb]/92 dark:text-blue-300 bg-[#2563eb]/10 dark:bg-black/30 px-1.5 py-0.5 rounded border border-[#2563eb]/[0.18] dark:border-white/10">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>
                            )}

                            {/* Remaining Regular Projects */}
                            {regularProjects.slice(2, 4).map((proj, i) => (
                                <div key={i + 2} className="md:col-span-2 lg:col-span-4">
                                    <GlowCard
                                        as="a"
                                        href={proj.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative h-full min-h-[100px] md:min-h-[140px] flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:border-slate-300 dark:hover:border-white/20"
                                    >
                                        <div className={cardScrim}></div>
                                        <div className="relative z-10 p-3 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className={`font-semibold text-xs md:text-sm text-slate-800 dark:text-slate-100 ${hoverGradientText} pr-1`}>{proj.title}</h3>
                                                <ExternalLink size={12} className="shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all" />
                                            </div>
                                            <p className="text-[10px] text-slate-600 dark:text-slate-300 mb-2 line-clamp-2 flex-grow">{proj.description}</p>
                                            <div className="flex flex-wrap gap-1 mt-auto">
                                                {proj.tags.map(tag => (
                                                    <span key={tag} className="text-[9px] font-mono text-[#2563eb]/92 dark:text-blue-300 bg-[#2563eb]/10 dark:bg-black/30 px-1.5 py-0.5 rounded border border-[#2563eb]/[0.18] dark:border-white/10">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlowCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollableContent>
            </div>
        </Section>
    );
};
