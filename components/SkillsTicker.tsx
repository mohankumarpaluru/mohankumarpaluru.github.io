
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { portfolioData } from '../data/portfolioData';

export const SkillsTicker: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            containScroll: false,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
            })
        ]
    );

    // Respect prefers-reduced-motion
    useEffect(() => {
        if (!emblaApi) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const autoScroll = emblaApi.plugins()?.autoScroll;

        if (prefersReducedMotion && autoScroll) {
            autoScroll.stop();
        }
    }, [emblaApi]);

    // Use complete tech stack and duplicate items for seamless infinite scroll
    const skills = [...portfolioData.completeTechStack, ...portfolioData.completeTechStack];

    return (
        <div
            className="w-full overflow-hidden py-4"
            role="region"
            aria-label="Technical Skills Marquee"
        >
            <div className="embla" ref={emblaRef}>
                <div className="embla__container flex gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="embla__slide flex-[0_0_auto] group cursor-default"
                            tabIndex={0}
                            role="listitem"
                            aria-label={skill.name}
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-slate-50 dark:bg-black/60 
                            border border-slate-200 dark:border-white/10 
                            shadow-sm
                            transition-all duration-300
                            group-hover:shadow-md group-hover:scale-105
                            group-focus:outline-none group-focus:ring-2 group-focus:ring-teal-500/50">
                                <img
                                    src={skill.logo}
                                    alt=""
                                    className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    aria-hidden="true"
                                />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
