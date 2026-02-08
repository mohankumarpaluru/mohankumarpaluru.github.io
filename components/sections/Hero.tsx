
import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ClarityHeader, nameGradient, gradientText } from '../SectionUtils';

export const Hero: React.FC = () => {
  const nameParts = portfolioData.bio.name.split(' ');
  const lastName = nameParts.pop();
  const firstName = nameParts.join(' ');
  const [taglineRole, taglineMantra] = portfolioData.bio.title.split('\n');
  const sectionData = portfolioData.sections.hero;

  return (
    <Section index={PortfolioState.HERO}>
        <div className="text-center md:text-left py-4 md:py-10 h-full flex flex-col justify-center">
            <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-tight">
            <span className="text-slate-900 dark:text-white transition-colors">{firstName}</span> <br className="md:hidden" /> <span className={nameGradient}>{lastName}</span>
            </h1>
            <div className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-light border-l-2 border-indigo-500/50 pl-4 md:pl-6 space-y-2 transition-colors">
            <p>{taglineRole}</p>
            <p className={`${gradientText} italic font-medium`}>{taglineMantra}</p>
            </div>
            <div className="mt-8 md:mt-12 animate-bounce opacity-50 text-xs md:text-sm font-mono text-indigo-500 dark:text-indigo-200">
            {sectionData.tagline}
            </div>
        </div>
    </Section>
  );
};
