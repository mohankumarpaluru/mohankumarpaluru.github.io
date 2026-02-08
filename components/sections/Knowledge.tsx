
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle } from '../SectionUtils';
import { OrbitalSkills } from '../OrbitalSkills';

export const Knowledge: React.FC = () => {
  const sectionData = portfolioData.sections.knowledge;

  return (
    <Section index={PortfolioState.KNOWLEDGE}>
        <ScrollableContent className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start w-full pb-8">
            
            {/* LEFT COLUMN: Visual Engine (Orbital Skills) */}
            <div className="lg:col-span-7 bg-white/50 dark:bg-black/60 backdrop-blur-md p-6 md:p-8 rounded-xl border border-slate-200 dark:border-white/10 flex flex-col relative overflow-hidden min-h-[500px] transition-colors duration-500">
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
            <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Skills Progress Bars */}
                <div className="bg-white/50 dark:bg-black/60 backdrop-blur-md p-5 md:p-8 rounded-xl border border-slate-200 dark:border-white/10 transition-colors duration-500">
                    <h4 className="font-mono text-xs md:text-sm mb-6 text-slate-500 dark:text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-white/5 pb-3">Technical Proficiency</h4>
                    <div className="grid grid-cols-1 gap-5">
                        {portfolioData.skills.map((skill) => (
                        <div key={skill.name} className="group">
                            <div className="flex justify-between text-xs mb-2 text-slate-600 dark:text-slate-300">
                                <span className="text-sm font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">{skill.name}</span>
                                <span className="font-mono text-indigo-500 dark:text-indigo-300 opacity-80">{skill.level}%</span>
                            </div>
                            
                            {/* Track */}
                            <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                                {/* Bar */}
                                <div 
                                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-purple-400 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(6,182,212,0.3)]" 
                                    style={{width: `${skill.level}%`}}
                                />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
            </div>
        </ScrollableContent>
    </Section>
  );
};
