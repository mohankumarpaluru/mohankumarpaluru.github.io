
import React, { useRef, useState } from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  onClick,
  as = 'div',
  href,
  target,
  rel,
  ...rest
}) => {
  const cardRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const Component = as as any;

  return (
    <Component
      ref={cardRef}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
      className={`
        relative overflow-hidden rounded-xl transition-all duration-300
        border 
        dark:border-white/10 dark:bg-black/40 dark:hover:border-white/20
        border-[#0c101c]/[0.05] bg-gradient-to-b from-white/96 to-white/92 hover:border-slate-300 hover:bg-white/80 shadow-[0_10px_24px_rgba(8,12,24,0.06),0_2px_6px_rgba(8,12,24,0.04)]
        backdrop-blur-sm
        ${className}
      `}
    >
      {/* Spotlight Gradient - Adapted for Dark/Light */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{ opacity }}
      >
        <div
          className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-teal-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 blur-xl"
          style={{
            maskImage: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </Component>
  );
};
