
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ScrollableContent, ClarityHeader, RenderTitle, hoverGradientText, cardScrim } from '../SectionUtils';
import { ExternalLink } from 'lucide-react';

export const Writing: React.FC = () => {
    const sectionData = portfolioData.sections.writing;

    // Show top 6 posts (3x2 grid)
    const topPosts = portfolioData.blogPosts.slice(0, 6);

    return (
        <Section index={PortfolioState.WRITING}>
            <div className="bg-slate-50 dark:bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl w-full h-full flex flex-col overflow-hidden transition-colors duration-500">
                <div className="mb-4 md:mb-6 border-b border-slate-200 dark:border-white/10 pb-3 flex flex-col md:flex-row md:items-baseline justify-between shrink-0">
                    <div>
                        <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
                        <RenderTitle title={sectionData.title} highlight={sectionData.highlight} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white" />
                    </div>
                    <div className="text-xs font-mono text-slate-500 mt-2 md:mt-0">
                        {sectionData.tagline}
                    </div>
                </div>

                <ScrollableContent className="pr-2">
                    {/* 3x2 Grid Layout with Smooth Expansion */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        {topPosts.map((post, i) => {
                            // Determine column position for expansion direction
                            const columnIndex = i % 3;
                            const isRightColumn = columnIndex === 2;

                            return (
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={i}
                                    className={`
                                        group relative rounded-lg overflow-hidden border border-slate-200 dark:border-white/10
                                        hover:border-blue-500/20 dark:hover:border-teal-400/50
                                        bg-white/60 dark:bg-transparent cursor-pointer
                                        hover:z-50 hover:shadow-2xl dark:hover:shadow-[0_8px_16px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.15)]
                                        md:hover:w-[calc(200%+1rem)]
                                        ${isRightColumn ? 'md:origin-right' : 'md:origin-left'}
                                    `}
                                    style={{
                                        transition: 'width 350ms ease-in-out, border-color 200ms ease-in-out, box-shadow 200ms ease-in-out'
                                    }}
                                >
                                    <div className={cardScrim}></div>

                                    {/* Flex container for horizontal layout on expansion */}
                                    <div className="relative z-10 flex flex-col md:group-hover:flex-row h-full">

                                        {/* Left Section: Original Card Content (Stays Same Size) */}
                                        <div className={`flex-shrink-0 ${isRightColumn ? 'md:group-hover:order-2' : 'md:group-hover:order-1'}`}>
                                            {/* Image - Full width by default, fixed width on hover */}
                                            <div
                                                className="w-full md:group-hover:w-[280px] h-32 md:h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden"
                                                style={{
                                                    transition: 'width 350ms ease-in-out'
                                                }}
                                            >
                                                {post.image ? (
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <div className="text-4xl md:text-5xl opacity-20 group-hover:opacity-30 transition-opacity">📝</div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Title & Meta */}
                                            <div className="p-3 md:p-4">
                                                {/* Date & Category */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">{post.date}</span>
                                                    <span className="text-[10px] bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full text-blue-600 dark:text-blue-300 border border-slate-200 dark:border-white/10 group-hover:border-blue-500/30 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">{post.category}</span>
                                                </div>

                                                {/* Title */}
                                                <h3 className={`text-sm md:text-base font-bold text-slate-800 dark:text-slate-200 ${hoverGradientText} transition-colors line-clamp-2`}>{post.title}</h3>
                                            </div>
                                        </div>

                                        {/* Right Section: Excerpt Area (Hidden → Revealed on Expansion) */}
                                        <div className={`
                                            hidden md:group-hover:flex flex-col justify-center flex-1 p-4 
                                            border-l border-slate-200 dark:border-white/10
                                            ${isRightColumn ? 'md:group-hover:order-1 border-l-0 border-r' : 'md:group-hover:order-2'}
                                        `}>
                                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">{post.excerpt}</p>
                                            <div className="flex items-center gap-1.5 text-teal-500 dark:text-teal-400 text-xs font-medium">
                                                <span>Read article</span>
                                                <ExternalLink size={12} className="transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </ScrollableContent>
            </div>
        </Section>
    );
};
