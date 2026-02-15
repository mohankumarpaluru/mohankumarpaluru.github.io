
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle } from '../SectionUtils';
import { OrbitalSkills } from '../OrbitalSkills';
import { SkillsTicker } from '../SkillsTicker';

export const Knowledge: React.FC = () => {
    const sectionData = portfolioData.sections.knowledge;

    return (
        <Section index={PortfolioState.KNOWLEDGE}>
            <ScrollableContent className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start w-full pb-8">

                    {/* LEFT COLUMN: Orbital Skills */}
                    <div className="lg:col-span-7 bg-slate-50 dark:bg-black/70 backdrop-blur-md p-6 md:p-8 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col relative overflow-hidden min-h-[500px] transition-colors duration-500 h-full">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50"></div>

                        {/* Header Block */}
                        <div className="z-10 relative mb-4 shrink-0 pointer-events-none">
                            <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                            <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-xl md:text-3xl font-bold mb-2 hidden md:block text-slate-900 dark:text-white" />
                        </div>

                        {/* Orbit Container */}
                        <div className="flex-1 w-full flex items-center justify-center relative min-h-[400px] h-full">
                            <div className="absolute inset-0">
                                <OrbitalSkills />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Credentials (Skills Bars) */}
                    <div className="lg:col-span-5 flex flex-col h-full">

                        {/* Skills Progress Bars - Modernized */}
                        <div className="bg-slate-50 dark:bg-black/70 backdrop-blur-md p-5 md:p-8 rounded-xl border border-slate-200 dark:border-white/10 flex-1 flex flex-col items-center justify-center transition-colors duration-500">
                            <h4 className="font-mono text-xs md:text-sm mb-6 text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-white/5 pb-3">Technical Proficiency</h4>
                            <div className="grid grid-cols-1 gap-6 w-full">
                                {portfolioData.skills.map((skill) => {
                                    // Determine proficiency label
                                    const getProficiencyLabel = (level: number): string => {
                                        if (level <= 25) return 'Beginner';
                                        if (level <= 50) return 'Intermediate';
                                        if (level <= 75) return 'Advanced';
                                        return 'Expert';
                                    };

                                    const proficiencyLabel = getProficiencyLabel(skill.level);
                                    const proficiencyColor = skill.level > 75
                                        ? 'text-cyan-600 dark:text-cyan-400'
                                        : skill.level > 50
                                            ? 'text-teal-600 dark:text-teal-400'
                                            : 'text-teal-600 dark:text-teal-400';

                                    return (
                                        <div key={skill.name} className="group">
                                            {/* Skill Name & Proficiency Label */}
                                            <div className="flex justify-between items-baseline mb-2">
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                                                        {skill.name}
                                                    </span>
                                                    <span className={`text-[10px] font-medium uppercase tracking-wide ${proficiencyColor} opacity-80`}>
                                                        {proficiencyLabel}
                                                    </span>
                                                </div>
                                                <span className="font-mono text-xs text-teal-500 dark:text-teal-300 opacity-80 font-semibold">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            {/* Segmented Track with Ticks */}
                                            <div className="relative h-2 bg-slate-200 dark:bg-white/5 rounded-full overflow-visible border border-slate-200 dark:border-white/5">
                                                {/* Tick Marks (5 segments for 0-100%) */}
                                                <div className="absolute inset-0 flex justify-between px-[2px]">
                                                    {[20, 40, 60, 80].map((tick) => (
                                                        <div
                                                            key={tick}
                                                            className="w-[1px] h-full bg-slate-300/50 dark:bg-white/10"
                                                        />
                                                    ))}
                                                </div>

                                                {/* Gradient Fill Bar with Soft Glow Fade */}
                                                <div
                                                    className="absolute inset-0 h-full rounded-full 
                                                           bg-gradient-to-r from-cyan-500 via-teal-600 to-teal-700 
                                                           group-hover:from-cyan-400 group-hover:via-teal-500 group-hover:to-teal-600 
                                                           transition-all duration-700 ease-out 
                                                           shadow-[0_0_16px_rgba(45,212,191,0.6)]
                                                           after:absolute after:right-0 after:inset-y-0 after:w-4
                                                           after:bg-gradient-to-r after:from-transparent after:to-teal-400/40
                                                           after:blur-sm"
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Full-Width Skills Ticker - Below Both Columns */}
                <div className="w-full mt-6 bg-slate-50 dark:bg-black/70 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-500">
                    <SkillsTicker />
                </div>
            </ScrollableContent>
        </Section>
    );
};
