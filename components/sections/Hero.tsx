

import React from 'react';
import { PortfolioState } from '../../types';
import { portfolioData } from '../../data/portfolioData';
import { Section, ClarityHeader, nameGradient, gradientText } from '../SectionUtils';
import { useThemeStore } from '../../store/useThemeStore';

export const Hero: React.FC = () => {
  const nameParts = portfolioData.bio.name.split(' ');
  const lastName = nameParts.pop();
  const firstName = nameParts.join(' ');
  const [taglineRole, taglineMantra] = portfolioData.bio.title.split('\n');
  const sectionData = portfolioData.sections.hero;
  const theme = useThemeStore((state) => state.theme);

  return (
    <Section index={PortfolioState.HERO}>
      {/* Hero Headline Scrim - Light Mode Only - Atmospheric Fog */}
      {theme === 'light' && (
        <>
          {/* Desktop Scrim */}
          <div
            className="hero-headline-scrim pointer-events-none hidden md:block"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '18%',
              left: '-6%',
              width: '78%',
              height: '420px',
              zIndex: 12,
              borderRadius: '50%',
              filter: 'blur(18px)',
              background: 'radial-gradient(ellipse at 28% 40%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 22%, rgba(255,255,255,0.38) 44%, rgba(255,255,255,0.12) 66%, rgba(255,255,255,0.00) 86%)',
              opacity: 0.92,
            }}
          />

          {/* Mobile Scrim */}
          <div
            className="hero-headline-scrim pointer-events-none md:hidden"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '22%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '110%',
              height: '360px',
              zIndex: 12,
              borderRadius: '50%',
              filter: 'blur(16px)',
              background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.62) 28%, rgba(255,255,255,0.28) 52%, rgba(255,255,255,0.08) 72%, rgba(255,255,255,0.00) 90%)',
              opacity: 0.9,
            }}
          />
        </>
      )}

      <div className="text-center md:text-left py-4 md:py-10 h-full flex flex-col justify-center relative pointer-events-auto">
        <ClarityHeader id={sectionData.id} hint={sectionData.clarityHint} />

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-6 leading-tight max-w-[20ch] md:max-w-none mx-auto md:mx-0 text-balance dark:shadow-none shadow-[0_0_0.6px_rgba(15,23,42,0.35),0_2px_10px_rgba(255,255,255,0.65)]">
          <span className="text-[#0b1220] dark:text-white transition-colors antialiased">{firstName}</span> <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0d9488] to-[#0891b2] dark:from-teal-200 dark:via-teal-300 dark:to-cyan-300 saturate-[0.95] contrast-[0.98] dark:saturate-100 dark:contrast-100 dark:filter-none filter drop-shadow-[0_2px_14px_rgba(13,148,136,0.12)] dark:drop-shadow-none">{lastName}</span>
        </h1>

        <div className="text-lg md:text-2xl font-light border-l-2 border-teal-500/30 dark:border-teal-500/50 pl-4 md:pl-6 space-y-2 transition-colors">
          <p className="text-[#0a0e18]/80 dark:text-slate-300/90 font-medium">{taglineRole}</p>
          <p className={`${gradientText} italic opacity-100 dark:opacity-90 tracking-wide`}>{taglineMantra}</p>
        </div>

        <div className="mt-8 md:mt-12 animate-bounce opacity-50 dark:opacity-60 text-[10px] md:text-xs font-mono tracking-[0.15em] text-teal-600 dark:text-teal-300 uppercase">
          {sectionData.tagline}
        </div>
      </div>
    </Section>
  );
};
