
import React, { useMemo, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollStore } from '../store/useScrollStore';
import { useThemeStore } from '../store/useThemeStore';
import { PortfolioState, STATE_COUNT } from '../types';
import { generatePositions, PARTICLE_COUNT } from './morphLogic';

export const ParticleSystem: React.FC = () => {
  const { viewport, scene } = useThree();
  const theme = useThemeStore((state) => state.theme);
  const mousePosition = useScrollStore((state) => state.mousePosition);

  // Mobile Detection based on viewport width (R3F units)
  // Camera Z=12, FOV=35 -> Visible height approx 7.5 units at z=0
  const isMobile = viewport.width < 8;
  const activeParticleCount = isMobile ? 1800 : PARTICLE_COUNT;

  const pointsRef = useRef<THREE.Points>(null);
  const hoverRef = useRef({ x: 0, y: 0 });
  const currentZOffset = useRef(0);
  const currentOpacity = useRef(0.8);
  const currentColor = useRef(new THREE.Color(0x3b82f6)); // Init Blue 500
  const accumulatedRotation = useRef(0);

  // Define colors for Dark vs Light
  // Light mode needs slightly darker/more saturated particles to show up against light bg
  const colors = useMemo(() => ({
    dark: {
      blue: new THREE.Color(0x3b82f6), // Blue 500
      hero: new THREE.Color(0x60a5fa), // Blue 400
      signal: new THREE.Color(0xffffff), // White
      bg: new THREE.Color(0x0a1628)
    },
    light: {
      blue: new THREE.Color(0x2563eb), // Blue 600
      hero: new THREE.Color(0x2563eb), // Matching for coherence
      signal: new THREE.Color(0x0f172a), // Slate 900
      bg: new THREE.Color(0xf8fafc)
    }
  }), []);

  // Update Scene Background on Theme Change
  useEffect(() => {
    // Smoothly interpolate background if possible, or just set it
    // R3F scene.background is simple
    scene.background = theme === 'dark' ? colors.dark.bg : colors.light.bg;
  }, [theme, colors, scene]);

  const geometries = useMemo(() => {
    const states = Object.values(PortfolioState).filter((v) => typeof v === 'number') as number[];
    const result: Record<number, Float32Array> = {};
    states.forEach((s) => {
      result[s] = generatePositions(s);
    });
    return result;
  }, []);



  const currentPositions = useMemo(() => {
    // Slice the initial buffer to match the active count
    // Multiply by 3 because it's a flat array of x,y,z
    return new Float32Array(geometries[PortfolioState.HERO].slice(0, activeParticleCount * 3));
  }, [geometries, activeParticleCount]);

  const getZOffsetForState = (stateIndex: number) => {
    if (stateIndex === PortfolioState.ABOUT ||
      stateIndex === PortfolioState.EXPERIENCE ||
      stateIndex === PortfolioState.KNOWLEDGE ||
      stateIndex === PortfolioState.WRITING) {
      return -3.5;
    }
    return 0;
  };

  const getOpacityForState = (stateIndex: number) => {
    // Light mode might need slightly higher opacity to be visible, or lower to be subtle.
    // Let's keep relative logic but maybe scale it.
    let op = 0.5;
    switch (stateIndex) {
      case PortfolioState.HERO: op = 0.8; break;
      case PortfolioState.ABOUT: op = 0.5; break;
      case PortfolioState.EXPERIENCE: op = 0.35; break;
      case PortfolioState.PROJECTS: op = 0.65; break;
      case PortfolioState.KNOWLEDGE: op = 0.35; break;
      case PortfolioState.WRITING: op = 0.3; break;
      case PortfolioState.PERSONAL: op = 0.7; break;
      case PortfolioState.SIGNAL: op = 1.0; break;
      default: op = 0.5;
    }
    // In light mode, reduce opacity slightly to be more watermark-like
    // User Update: Light mode particles need to be slightly MORE visible now that we have warmer color
    if (theme === 'light') return op * 0.9;
    return op;
  };

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const scrollProgress = useScrollStore.getState().scrollProgress;
    const time = state.clock.getElapsedTime();
    const geometry = pointsRef.current.geometry;
    const positions = geometry.attributes.position.array as Float32Array;

    // --- SCROLL MATH ---
    const floatIndex = scrollProgress * (STATE_COUNT - 1);
    const currentIndex = Math.floor(floatIndex);
    const nextIndex = Math.min(currentIndex + 1, STATE_COUNT - 1);
    const blendFactor = floatIndex - currentIndex;

    const currentBuffer = geometries[currentIndex];
    const nextBuffer = geometries[nextIndex];

    const distanceToNearest = Math.abs(floatIndex - Math.round(floatIndex));
    const transitionIntensity = Math.min(1, distanceToNearest * 4);
    const settleFactor = 0.2 + (0.8 * transitionIntensity);

    // --- INTERPOLATION ---
    const currentStateZ = getZOffsetForState(currentIndex);
    const nextStateZ = getZOffsetForState(nextIndex);
    const targetZOffset = currentStateZ + (nextStateZ - currentStateZ) * blendFactor;

    const currentOp = getOpacityForState(currentIndex);
    const nextOp = getOpacityForState(nextIndex);
    const targetOpacity = currentOp + (nextOp - currentOp) * blendFactor;

    currentZOffset.current += (targetZOffset - currentZOffset.current) * 0.1;
    currentOpacity.current += (targetOpacity - currentOpacity.current) * 0.1;

    // --- COLOR INTERPOLATION (THEME AWARE) ---
    const palette = theme === 'dark' ? colors.dark : colors.light;
    let targetColor = palette.blue;

    if (floatIndex < 1.0) {
      targetColor = palette.hero.clone().lerp(palette.blue, floatIndex);
    } else if (floatIndex > 6.0) {
      const t = Math.max(0, floatIndex - 6.0);
      targetColor = palette.blue.clone().lerp(palette.signal, t);
    }

    currentColor.current.lerp(targetColor, 0.05);

    // --- MOUSE & SCALE ---
    hoverRef.current.x += (mousePosition.x * 5 - hoverRef.current.x) * 0.1;
    hoverRef.current.y += (mousePosition.y * 5 - hoverRef.current.y) * 0.1;
    const responsiveScale = viewport.width < 7 ? 0.72 : (viewport.width < 10 ? 0.88 : 1.0);

    // --- PARTICLE LOOP ---
    let swarmIntensity = 0;
    if (floatIndex > 5.5 && floatIndex < 7.0) {
      if (floatIndex <= 6.0) {
        swarmIntensity = (floatIndex - 5.5) * 2.0;
      } else {
        swarmIntensity = 1.0 - (floatIndex - 6.0);
      }
    }

    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 3;

      const x1 = currentBuffer[idx];
      const y1 = currentBuffer[idx + 1];
      const z1 = currentBuffer[idx + 2];

      const x2 = nextBuffer[idx];
      const y2 = nextBuffer[idx + 1];
      const z2 = nextBuffer[idx + 2];

      let tx = x1 + (x2 - x1) * blendFactor;
      let ty = y1 + (y2 - y1) * blendFactor;
      let tz = z1 + (z2 - z1) * blendFactor;

      if (currentIndex === PortfolioState.ABOUT || nextIndex === PortfolioState.ABOUT) {
        const noiseMix = 1.0 - Math.min(1.0, Math.abs(floatIndex - PortfolioState.ABOUT));
        tx += Math.sin(time + i) * 0.02 * noiseMix * settleFactor;
      }

      if (swarmIntensity > 0.01) {
        tx += (Math.sin(time * 0.5 + i * 0.1) * 0.5 + hoverRef.current.x * 0.5) * swarmIntensity;
        ty += (Math.cos(time * 0.3 + i * 0.1) * 0.5 - hoverRef.current.y * 0.5) * swarmIntensity;
      }

      if (currentIndex === PortfolioState.SIGNAL || nextIndex === PortfolioState.SIGNAL) {
        const signalIntensity = Math.max(0, floatIndex - (PortfolioState.SIGNAL - 1));
        const vib = 0.05 * settleFactor;
        tx += (Math.random() - 0.5) * vib * signalIntensity;
        ty += (Math.random() - 0.5) * vib * signalIntensity;
        tz += (Math.random() - 0.5) * vib * signalIntensity;
      }

      tz += currentZOffset.current;
      tx *= responsiveScale;
      ty *= responsiveScale;
      tz *= responsiveScale;

      positions[idx] = tx;
      positions[idx + 1] = ty;
      positions[idx + 2] = tz;
    }

    geometry.attributes.position.needsUpdate = true;

    accumulatedRotation.current += delta * 0.05 * settleFactor;
    pointsRef.current.rotation.y = accumulatedRotation.current;

    const material = pointsRef.current.material as THREE.PointsMaterial;
    material.color.set(currentColor.current);

    // Scale particles up slightly in signal state
    if (floatIndex > PortfolioState.SIGNAL - 0.5) {
      const signalMix = (floatIndex - (PortfolioState.SIGNAL - 0.5)) * 2;
      material.size = 0.04 + signalMix * 0.06;
      material.opacity = currentOpacity.current + (1.0 - currentOpacity.current) * signalMix;
    } else {
      material.size = 0.04;
      material.opacity = currentOpacity.current;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={activeParticleCount}
          array={currentPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={activeParticleCount < 2000 ? 0.055 : (theme === 'light' ? 0.05 : 0.04)}
        color="#3b82f6"
        transparent
        opacity={theme === 'light' ? 0.9 : 0.8}
        sizeAttenuation={true}
        blending={theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
};
