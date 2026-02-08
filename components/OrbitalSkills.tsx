
import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
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
  const groups: OrbitGroup[] = useMemo(() => {
    const allSkills = portfolioData.techStack;
    const findSkill = (names: string[]) => 
      allSkills.filter(s => names.some(n => s.name.toLowerCase().includes(n.toLowerCase())));

    const core = findSkill(['Python', 'Pandas', 'OpenCV', 'PostgreSQL', 'MySQL', 'MongoDB']);
    const logic = findSkill(['FastAPI', 'Flask', 'Django', 'Airflow', 'dbt', 'Power BI']);
    const infra = findSkill(['AWS', 'Snowflake', 'Docker', 'Git', 'GitHub Actions', 'Bazel']);

    return [
      { id: 'core', items: core, radius: 75, speed: 25, direction: 1 },
      { id: 'logic', items: logic, radius: 135, speed: 40, direction: -1 },
      { id: 'infra', items: infra, radius: 195, speed: 60, direction: 1 },
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
      className="relative w-full h-full flex items-center justify-center overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Interactive Orbital Skills Visualization"
    >
      {/* Central Nucleus */}
      <div className="absolute z-20 w-16 h-16 rounded-full bg-white dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-cyan-500/30 flex items-center justify-center shadow-lg dark:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-colors duration-500">
         <img src="/Assets/icon-dev.svg" alt="Core Skills" className="w-8 h-8 opacity-80 invert dark:invert-0 transition-all duration-500" />
      </div>

      {/* Orbits */}
      {groups.map((group) => (
        <div key={group.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Orbit Ring */}
            <div 
                className="absolute rounded-full border border-slate-300/30 dark:border-white/15 shadow-none dark:shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] transition-colors duration-500"
                style={{
                    width: group.radius * 2,
                    height: group.radius * 2,
                }}
            />

            {/* Orbiting Items */}
            {group.items.map((item, i) => {
                const totalItems = group.items.length;
                const angleStep = (2 * Math.PI) / totalItems;
                const initialAngle = i * angleStep;
                
                const currentAngle = initialAngle + (time * group.direction * (10 / group.speed));
                
                const x = Math.cos(currentAngle) * group.radius;
                const y = Math.sin(currentAngle) * group.radius;

                const baseSize = 40; 
                const sizePx = Math.round(baseSize * ICON_SCALE);

                return (
                    <div
                        key={item.name}
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
                    >
                        {/* 
                           Icon Container: 
                           Shape: rounded-full (Circle) restored.
                           Light: bg-white, border-slate-200, shadow-md.
                           Dark: bg-white/5, border-white/10.
                        */}
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300
                                        bg-white dark:bg-white/5 
                                        border border-slate-200 dark:border-white/10 
                                        shadow-md dark:shadow-none
                                        backdrop-blur-sm
                                        group-hover:border-cyan-500/50 dark:group-hover:border-cyan-400/50 
                                        group-hover:scale-110 
                                        group-hover:shadow-lg dark:group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <img 
                                src={item.logo} 
                                alt="" 
                                className="w-3/5 h-3/5 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            
                            {/* Tooltip */}
                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-black/90 border border-slate-600 dark:border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none z-30 shadow-xl">
                                {item.name}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
      ))}
    </div>
  );
};
