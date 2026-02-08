
import React from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Knowledge } from './sections/Knowledge';
import { Writing } from './sections/Writing';
import { Personal } from './sections/Personal';
import { Signal } from './sections/Signal';

export const Overlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Knowledge />
        <Writing />
        <Personal />
        <Signal />
    </div>
  );
};
