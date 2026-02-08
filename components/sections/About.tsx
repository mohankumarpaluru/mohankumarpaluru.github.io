
import React, { useMemo } from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { useScrollStore } from '../../store/useScrollStore';
import { Section, ScrollableContent, ClarityHeader, RenderTitle } from '../SectionUtils';

export const About: React.FC = () => {
  const sectionData = portfolioData.sections.about;
  const scrollProgress = useScrollStore(s => s.scrollProgress);
  const mousePosition = useScrollStore(s => s.mousePosition);

  // Parallax Logic
  const imageTransform = useMemo(() => {
    const moveX = mousePosition.x * 12; // px
    const moveY = mousePosition.y * 12; // px
    const rotY = mousePosition.x * 1.5; // deg
    const rotX = -mousePosition.y * 1.5; // deg

    return {
        transform: `translate3d(${moveX}px, ${moveY}px, 0) rotateY(${rotY}deg) rotateX(${rotX}deg)`,
        transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
    };
  }, [mousePosition]);

  return (
    <Section index={PortfolioState.ABOUT}>
        <div className="bg-white/60 dark:bg-black/70 backdrop-blur-md p-6 md:p-10 rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-auto max-h-full transition-colors duration-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
            
            {/* Responsive Layout */}
            <div className="flex flex-col md:flex-row landscape:flex-row gap-6 md:gap-10 h-full min-h-0 items-center">
                
                {/* Mobile Image (Portrait Only): Top, smaller */}
                <div className="md:hidden landscape:hidden shrink-0 flex justify-center w-full max-h-[22vh]">
                    <div className="relative w-[140px] h-[140px]">
                        {/* Organic Shape Mask */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-30 blur-md animate-spin-slow" style={{ borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%' }}></div>
                        <div className="relative w-full h-full overflow-hidden shadow-2xl" style={{ borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%' }}>
                            <img src="/Assets/mohan.png" alt="Mohan Kumar Paluru" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col min-h-0 w-full md:w-[65%]">
                    <div className="shrink-0">
                        <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                        <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-slate-900 dark:text-white" />
                    </div>
                    
                    <ScrollableContent className="pr-2">
                        <div className="space-y-4 md:space-y-6 text-sm md:text-xl font-light leading-relaxed text-slate-700 dark:text-slate-200">
                        {portfolioData.bio.description.map((desc, i) => (
                            <p key={i} className="leading-relaxed">{desc}</p>
                        ))}
                        </div>
                    </ScrollableContent>
                </div>

                {/* Desktop / Landscape Image */}
                <div className="hidden md:flex landscape:flex w-[35%] landscape:w-[40%] items-center justify-center shrink-0 h-full perspective-1000">
                    <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[380px] landscape:w-[200px] landscape:h-[240px]" style={imageTransform}>
                            
                            <div className="absolute inset-0 rounded-[40px] blur-2xl opacity-40 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 pointer-events-none transform translate-z-[-20px]" />

                            <div 
                            className="absolute inset-[-10px] bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#f43f5e,#3b82f6)] opacity-35 blur-xl transition-all duration-1000"
                            style={{ 
                                borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%',
                                transform: 'rotate(-5deg)'
                            }}
                            />
                            <div 
                            className="relative w-full h-full overflow-hidden shadow-2xl transition-transform duration-75 ease-out"
                            style={{ 
                                borderRadius: '48% 52% 46% 54% / 55% 45% 55% 45%',
                                transform: `translateY(${scrollProgress * -20}px) scale(${1 + scrollProgress * 0.05}) rotate(-3deg)`
                            }}
                            >
                                <img src="/Assets/mohan.png" alt="Mohan Kumar Paluru" className="w-full h-full object-cover" style={{ filter: 'contrast(1.05) saturate(1.05)' }} />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};
