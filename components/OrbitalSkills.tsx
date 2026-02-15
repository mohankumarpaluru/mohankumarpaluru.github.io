
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { createPopper, Instance as PopperInstance } from '@popperjs/core';
import { portfolioData } from '../data/portfolioData';
import { TechItem } from '../types';

interface OrbitGroup {
  id: string;
  items: TechItem[];
  radius: number;
  speed: number;
  direction: 1 | -1;
}

const ICON_SCALE = 1.25; // Increased scale for icons

export const OrbitalSkills: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  // Grouping Logic - Radii increased by ~15% for better presence
  const groups = useMemo(() => {
    const currentStack = portfolioData.currentTechStack;

    // ORBIT_RADII would need to be defined elsewhere, e.g., as a constant array
    // For example: const ORBIT_RADII = [75, 135, 195];
    // Assuming ORBIT_RADII is defined in the scope where this component is used or imported.
    const ORBIT_RADII = [75, 135, 195]; // Placeholder for ORBIT_RADII

    return [
      {
        id: 'core',
        orbit: ORBIT_RADII[0], // Innermost - 75
        items: currentStack.filter(item => item.orbit === 'core'),
        animSpeed: 0.70, // 2x faster
      },
      {
        id: 'infra',
        orbit: ORBIT_RADII[1], // Middle - 135
        items: currentStack.filter(item => item.orbit === 'infra'),
        animSpeed: 0.50, // 2x faster
      },
      {
        id: 'logic',
        orbit: ORBIT_RADII[2], // Outermost - 195
        items: currentStack.filter(item => item.orbit === 'logic'),
        animSpeed: 0.30, // 2x faster
      },
    ];
  }, []);

  // Stable Animation Loop
  const animate = useCallback((timestamp: number) => {
    if (startTimeRef.current === undefined) startTimeRef.current = timestamp;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isPaused && !prefersReducedMotion) {
      setTime(prev => prev + 0.005);
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-visible scale-75 sm:scale-90 md:scale-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Interactive Orbital Skills Visualization"
    >
      {/* Central Nucleus */}
      <div className="absolute z-20 w-16 h-16 rounded-full bg-slate-50 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-teal-500/30 flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(45,212,191,0.15)] transition-colors duration-500">
        <img src="/assets/icon-dev.svg" alt="Core Skills" className="w-8 h-8 opacity-80 invert dark:invert-0 transition-all duration-500" />
      </div>

      {/* Orbits */}
      {groups.map((group) => (
        <div key={group.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="absolute rounded-full border border-slate-400/60 dark:border-white/15 shadow-none dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] transition-colors duration-500"
            style={{
              width: group.orbit * 2,
              height: group.orbit * 2,
            }}
          />

          {/* Orbiting Items */}
          {group.items.map((item, i) => {
            const totalItems = group.items.length;
            const angleStep = (2 * Math.PI) / totalItems;
            const initialAngle = i * angleStep;

            // Calculate current angle based on time and animSpeed
            const currentAngle = initialAngle + (time * group.animSpeed);

            const x = Math.cos(currentAngle) * group.orbit;
            const y = Math.sin(currentAngle) * group.orbit;

            const baseSize = 40;
            const sizePx = Math.round(baseSize * ICON_SCALE);

            // Determine graduated chip styles based on orbit
            const isOuterOrbit = group.id === 'infra';
            const isMiddleOrbit = group.id === 'logic';
            const isInnerOrbit = group.id === 'core';

            // Graduated dark mode chip styles
            const darkChipStyles = isOuterOrbit
              ? 'dark:bg-[#0b0f17]/95 dark:border-white/20 dark:shadow-[0_8px_24px_rgba(0,0,0,0.6)] dark:before:opacity-70'
              : isMiddleOrbit
                ? 'dark:bg-[#0b0f17]/90 dark:border-white/15 dark:shadow-[0_6px_20px_rgba(0,0,0,0.55)] dark:before:opacity-60'
                : 'dark:bg-[#0b0f17]/85 dark:border-white/12 dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] dark:before:opacity-50';

            return (
              <OrbitalIcon
                key={item.name}
                item={item}
                x={x}
                y={y}
                sizePx={sizePx}
                darkChipStyles={darkChipStyles}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

// Orbital Icon with Popper.js Tooltip
interface OrbitalIconProps {
  item: TechItem;
  x: number;
  y: number;
  sizePx: number;
  darkChipStyles: string;
}

const OrbitalIcon: React.FC<OrbitalIconProps> = ({ item, x, y, sizePx, darkChipStyles }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popperInstance = useRef<PopperInstance | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  // Initialize Popper on mount
  useEffect(() => {
    if (iconRef.current && tooltipRef.current) {
      popperInstance.current = createPopper(iconRef.current, tooltipRef.current, {
        placement: 'top',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['right', 'left', 'bottom'],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'viewport',
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      });
    }

    return () => {
      popperInstance.current?.destroy();
    };
  }, []);

  // Update Popper position when shown
  useEffect(() => {
    if (showTooltip) {
      popperInstance.current?.update();
    }
  }, [showTooltip]);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);
  const handleFocus = () => setShowTooltip(true);
  const handleBlur = () => setShowTooltip(false);

  return (
    <div
      ref={iconRef}
      className="absolute pointer-events-auto group focus:outline-none"
      style={{
        transform: `translate(${x}px, ${y}px)`,
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        marginLeft: `-${sizePx / 2}px`,
        marginTop: `-${sizePx / 2}px`,
      }}
      tabIndex={0}
      aria-label={item.name}
      aria-describedby={`tooltip-${item.name.replace(/\s+/g, '-')}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {/* Icon Container with Graduated Dark Mode Chips */}
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300
                    relative overflow-hidden
                    bg-white/95 ${darkChipStyles}
                    border-2 border-slate-300/80
                    shadow-lg
                    backdrop-blur-sm
                    group-hover:border-teal-500/70 dark:group-hover:border-teal-400/50 
                    group-hover:scale-110 
                    group-hover:shadow-xl dark:group-hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]
                    before:absolute before:inset-0 before:rounded-full 
                    before:bg-gradient-to-br before:from-slate-200/20 before:to-transparent 
                    before:opacity-100 dark:before:opacity-60 before:transition-opacity`}
      >
        <img
          src={item.logo}
          alt=""
          className="w-3/5 h-3/5 object-contain opacity-90 group-hover:opacity-100 transition-opacity relative z-10"
          aria-hidden="true"
        />
      </div>

      {/* Popper Tooltip */}
      <div
        ref={tooltipRef}
        id={`tooltip-${item.name.replace(/\s+/g, '-')}`}
        role="tooltip"
        className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap z-50 pointer-events-none transition-opacity duration-200
                    bg-slate-50 dark:bg-[#0b0f17]/95 
                    border border-slate-200 dark:border-white/10 
                    text-slate-800 dark:text-white
                    shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                    ${showTooltip ? 'opacity-100' : 'opacity-0'}`}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        {item.name}
        <div className="arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};
