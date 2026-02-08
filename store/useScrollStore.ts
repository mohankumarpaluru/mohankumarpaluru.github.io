import { create } from 'zustand';

interface ScrollState {
  scrollProgress: number; // 0 to 1 continuous
  setScrollProgress: (progress: number) => void;
  mousePosition: { x: number; y: number };
  setMousePosition: (x: number, y: number) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollProgress: 0,
  mousePosition: { x: 0, y: 0 },
  setScrollProgress: (progress) => {
    set({ scrollProgress: progress });
  },
  setMousePosition: (x, y) => set({ mousePosition: { x, y } })
}));
