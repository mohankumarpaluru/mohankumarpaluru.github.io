import { PortfolioState } from "../types";
import { portfolioData } from "../data/portfolioData";

export const PARTICLE_COUNT = 4000;

// Helper: Seeded random (simple linear congruential generator for reproducibility)
let seed = 1234;
function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Helper: 3D Noise approximation
function noise(x: number, y: number, z: number) {
    return Math.sin(x * 0.5) * Math.cos(y * 0.3) * Math.sin(z * 0.7);
}

// Generate positions for a specific state
export function generatePositions(state: PortfolioState): Float32Array {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const projectsCount = portfolioData.projects.length;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    let x = 0, y = 0, z = 0;
    const idx = i * 3;

    switch (state) {
      case PortfolioState.HERO:
        // Fibonacci Sphere
        const phi = Math.acos(1 - 2 * (i + 0.5) / PARTICLE_COUNT);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        const r = 4;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
        break;

      case PortfolioState.ABOUT:
        // Exploded Sphere / Cloud (Perlin-ish)
        const r2 = 5;
        const phi2 = Math.acos(1 - 2 * (i + 0.5) / PARTICLE_COUNT);
        const theta2 = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        
        // Base sphere
        x = r2 * Math.sin(phi2) * Math.cos(theta2);
        y = r2 * Math.sin(phi2) * Math.sin(theta2);
        z = r2 * Math.cos(phi2);
        
        // Add noise
        const ns = 0.8; // noise scale
        const nd = 2.5; // noise distance
        x += noise(x*ns, y*ns, i*0.1) * nd;
        y += noise(y*ns, z*ns, i*0.1) * nd;
        z += noise(z*ns, x*ns, i*0.1) * nd;
        break;

      case PortfolioState.EXPERIENCE:
        // Helix Tunnel
        const angle = i * 0.1;
        const radius = 3 + Math.random() * 2;
        const length = 25;
        z = (i / PARTICLE_COUNT) * length - length / 2;
        x = Math.cos(angle) * radius;
        y = Math.sin(angle) * radius;
        
        // Add randomness to wall thickness
        x += (random() - 0.5) * 1;
        y += (random() - 0.5) * 1;
        break;

      case PortfolioState.PROJECTS:
        // Clusters (Sub-spheres)
        const clusterIndex = i % projectsCount;
        // Arrange clusters in a circle
        const cAngle = (clusterIndex / projectsCount) * Math.PI * 2;
        const cRadius = 5;
        const cx = Math.cos(cAngle) * cRadius;
        const cy = Math.sin(cAngle) * cRadius;
        const cz = 0;

        // Particle pos within cluster
        const pr = 1.5; // cluster radius
        const pPhi = Math.acos(1 - 2 * random());
        const pTheta = Math.PI * 2 * random();
        
        x = cx + pr * Math.sin(pPhi) * Math.cos(pTheta);
        y = cy + pr * Math.sin(pPhi) * Math.sin(pTheta);
        z = cz + pr * Math.cos(pPhi);
        break;

      case PortfolioState.KNOWLEDGE:
        // Flat Grid / Plane with waves
        const gridSize = Math.sqrt(PARTICLE_COUNT);
        const spacing = 0.5;
        const row = Math.floor(i / gridSize);
        const col = i % gridSize;
        
        x = (col - gridSize / 2) * spacing;
        z = (row - gridSize / 2) * spacing;
        // Sine wave ripple
        y = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 1.5;
        break;

      case PortfolioState.WRITING:
        // Bar Chart / Cityscape
        const barGridSize = Math.floor(Math.sqrt(PARTICLE_COUNT));
        const bRow = Math.floor(i / barGridSize);
        const bCol = i % barGridSize;
        const bSpacing = 0.4;
        
        x = (bCol - barGridSize / 2) * bSpacing;
        z = (bRow - barGridSize / 2) * bSpacing;
        
        // Height based on "index" to look like data bars
        // Use modulus to create groups
        const barGroup = (bRow * bCol) % 20;
        y = (i % 20) * 0.4 - 4; // Vertical stack
        
        // Constrain to positive mostly
        if (y < -2) y = -2;
        break;

      case PortfolioState.PERSONAL:
        // Swarm / Organic / Scatter
        // Base cubic cloud
        const scatter = 12;
        x = (random() - 0.5) * scatter;
        y = (random() - 0.5) * scatter;
        z = (random() - 0.5) * scatter;
        break;

      case PortfolioState.SIGNAL:
        // Tight Singularity
        // Extremely concentrated point with minor variance for vibration effect
        const core = 0.05; 
        x = (random() - 0.5) * core;
        y = (random() - 0.5) * core;
        z = (random() - 0.5) * core;
        break;
    }

    positions[idx] = x;
    positions[idx + 1] = y;
    positions[idx + 2] = z;
  }

  return positions;
}