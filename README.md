# The Morphing Lattice Portfolio

A cyber-minimalist, interactive portfolio website featuring a reactive 3D particle system that morphs into different shapes, powered by modern web technologies.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.0-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-CDN-38bdf8)

## ✨ Features

- **Reactive 3D Particle System**: A mesmerizing point cloud background that morphs between states (Lattice, Sphere, DNA, etc.) based on scroll position. Built with `three.js` and `@react-three/fiber`.
- **Cyber-Minimalist Aesthetic**: deep blacks (`#050505`), cool greys, and vibrant accents (`#38bdf8`) with a focus on typography (Inter & JetBrains Mono) and negative space.
- **Smooth Scrolling**: Integrated **Lenis** for buttery smooth scroll experiences that sync perfectly with 3D animations.
- **Dark & Light Mode**: Seamless theme transitions with specific color palettes for each mode.
- **Interactive Navigation**: A floating navigation bar and scroll-triggered section transitions.
- **High Performance**: Optimized particle rendering using custom shaders and instanced meshes.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **3D & Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), Custom GLSL Shaders
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Runtime/CDN), Custom CSS Variables
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.studio/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-morphing-lattice-portfolio.git
   cd the-morphing-lattice-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view it in the browser.

4. **Build for production**

   ```bash
   npm run build
   ```

## 📂 Project Structure

```
├── canvas/              # 3D scenes and components
│   ├── ParticleSystem.tsx # Main particle logic
│   └── morphLogic.ts    # Geometry transformation logic
├── components/          # React UI components
│   ├── FloatingNav.tsx  # Navigation bar
│   └── Overlay.tsx      # HTML content overlay
├── store/               # Zustand state stores
│   ├── useScrollStore.ts # Scroll position & mouse state
│   └── useThemeStore.ts  # Theme management
├── App.tsx              # Main application layout
├── index.html           # Entry point (Tailwind CDN config here)
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

### Theming

Colors are defined in `index.html` under the Tailwind configuration and in `App.tsx` for 3D environment syncing.

- `bg-dark`: `#050505`
- `bg-light`: `#f0f4f8`
- `accent`: `#38bdf8` (Sky 400)

### 3D Lattice

The particle system logic is located in `canvas/ParticleSystem.tsx`. You can adjust:

- **Particle Count**: In `ParticleSystem.tsx`
- **Morph Shapes**: In `canvas/morphLogic.ts`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
