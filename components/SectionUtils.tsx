
import React from 'react';
import { useScrollStore } from '../store/useScrollStore';
import { STATE_COUNT } from '../types';

// Logic to determine opacity based on continuous scroll progress
// "Plateau" behavior: remains 100% visible for a central range, then fades quickly.
export function useSectionOpacity(index: number, visibleRange = 0.45) {
  const scrollProgress = useScrollStore(s => s.scrollProgress);
  const currentFloatIndex = scrollProgress * (STATE_COUNT - 1);
  const distance = Math.abs(currentFloatIndex - index);

  // Define the plateau (fully visible range). 
  // 30% of the visible range is fully opaque on either side of center.
  const plateauRatio = 0.30;
  const plateauRange = visibleRange * plateauRatio;

  if (distance < plateauRange) {
    return 1;
  } else if (distance < visibleRange) {
    // Fade out over the remaining distance
    const fadeRange = visibleRange - plateauRange;
    const distanceIntoFade = distance - plateauRange;
    const normalizedFade = distanceIntoFade / fadeRange;

    // Pure quadratic easing for the smoothest possible fade-out
    return Math.max(0, 1 - Math.pow(normalizedFade, 2.0));
  }

  return 0;
}

// Internal scroll handler wrapper with flex-grow to fill available space
export const ScrollableContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const deltaY = e.deltaY;
    const isScrollUp = deltaY < 0;
    const isScrollDown = deltaY > 0;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= 1;

    if (isScrollUp && isAtTop) return;
    if (isScrollDown && isAtBottom) return;

    e.stopPropagation();
  };

  return (
    <div
      className={`overflow-y-auto custom-scrollbar flex-1 min-h-0 ${className || ''}`}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}

export const Section: React.FC<{ index: number; children: React.ReactNode; className?: string }> = ({ index, children, className }) => {
  const opacity = useSectionOpacity(index, 0.45);
  if (opacity < 0.01) return null;

  return (
    <div
      // Fixed Safe-Area padding: pt-24 (mobile) / pt-32 (desktop)
      className={`absolute inset-0 flex items-center justify-center pointer-events-none p-4 md:p-12 pt-24 md:pt-32 transition-opacity duration-75 ${className || ''}`}
      style={{ opacity }}
    >
      {/* 
         Container constrained to viewport height minus padding. 
         flex-col ensures children (Header + ScrollableContent) stack correctly without overflow.
      */}
      <div className="max-w-6xl w-full h-full max-h-[85vh] pointer-events-auto dark:text-slate-100 text-slate-800 flex flex-col transition-colors duration-500 shadow-sm relative z-10">
        {children}
      </div>
    </div>
  );
};

// Helper for Clarity Headers
export const ClarityHeader: React.FC<{ id: string; hint: string }> = ({ id, hint }) => (
  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2 md:mb-4 opacity-80 shrink-0">
    <h2 className="dark:text-blue-400 text-blue-600 text-xs md:text-sm font-mono tracking-widest">{id}</h2>
    <span className="hidden md:inline dark:text-slate-600 text-slate-400 font-mono text-sm">//</span>
    <span className="dark:text-slate-500 text-slate-500 font-mono text-[10px] md:text-xs uppercase tracking-wider">{hint}</span>
  </div>
);

// Shared Gradient Strings - Adjusted for visibility in both modes
export const gradientText = "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent";
export const hoverGradientText = "group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-600 group-hover:to-teal-600 dark:group-hover:from-blue-400 dark:group-hover:via-cyan-400 dark:group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent";
export const nameGradient = "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 dark:from-blue-200 dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent";

// Scrim for readability
// Dark mode: dark scrim. Light mode: subtle white fade or none needed if background is solid.
// We keep a very subtle gradient in light mode for depth.
export const cardScrim = "absolute inset-0 bg-gradient-to-b from-[var(--elevation-overlay-from)] to-[var(--elevation-overlay-to)] z-0 pointer-events-none transition-colors duration-500";

// Helper to render title with data-driven highlight
export const RenderTitle: React.FC<{ title: string; highlight?: string; className?: string }> = ({ title, highlight, className }) => {
  if (!highlight || !title.includes(highlight)) {
    return <h3 className={className}>{title}</h3>;
  }
  const parts = title.split(highlight);
  return (
    <h3 className={className}>
      {parts[0]}
      <span className={gradientText}>{highlight}</span>
      {parts[1]}
    </h3>
  );
};
