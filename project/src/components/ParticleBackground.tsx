import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';

const ParticleBackground = () => {
  const points = useRef<THREE.Points>(null);
  const { mouse, viewport, size } = useThree();
  const [clicked, setClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Optimize particle count based on screen size
  const particleCount = Math.min(12000, Math.floor((size.width * size.height) / 1500));
  const noise3D = createNoise3D();
  
  // Configuration - Further reduced speeds and forces for smoother animation
  const config = {
    maxRadius: 25,
    particleSize: 0.12,
    noiseScale: 0.1,         // Reduced from 0.2
    noiseSpeed: 0.04,        // Reduced from 0.08
    springStrength: 0.01,    // Reduced from 0.02
    dampening: 0.95,         // Increased from 0.92 for more stability
    mouseForce: 0.05,        // Reduced from 0.1
    repulsionRadius: 0.8,
    repulsionStrength: 0.005, // Reduced from 0.01
    scrollEffect: 0.0002,     // Reduced from 0.0005
    colorChangeSpeed: 0.08,   // Reduced from 0.15
    easing: 0.02             // Reduced from 0.04
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize particle system
  const { positions, colors, velocities, originalPositions, targetPositions } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);
    const vels = new Float32Array(particleCount * 3);
    const origPos = new Float32Array(particleCount * 3);
    const targPos = new Float32Array(particleCount * 3);
    
    const baseColors = [
      new THREE.Color('#1E90FF'), // dodger blue
      new THREE.Color('#8A2BE2'), // blue violet
      new THREE.Color('#20B2AA'), // light sea green
    ];
    
    const highlightColors = [
      new THREE.Color('#FFD700'), // gold
      new THREE.Color('#FF4500'), // orange-red
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Generate position in a sphere with more particles towards the center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.3) * config.maxRadius; // Power of 0.3 creates denser center
      
      pos[i3] = origPos[i3] = targPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = origPos[i3 + 1] = targPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = origPos[i3 + 2] = targPos[i3 + 2] = r * Math.cos(phi);
      
      // Initialize velocities with slight inward bias
      vels[i3] = (Math.random() - 0.5) * 0.002;     // Reduced from 0.005
      vels[i3 + 1] = (Math.random() - 0.5) * 0.002; // Reduced from 0.005
      vels[i3 + 2] = (Math.random() - 0.5) * 0.002; // Reduced from 0.005
      
      // Assign base colors with slight variation
      const color = baseColors[Math.floor(Math.random() * baseColors.length)];
      const variation = 0.1;
      cols[i3] = color.r * (1 + (Math.random() - 0.5) * variation);
      cols[i3 + 1] = color.g * (1 + (Math.random() - 0.5) * variation);
      cols[i3 + 2] = color.b * (1 + (Math.random() - 0.5) * variation);
    }
    
    return { 
      positions: pos, 
      colors: cols, 
      velocities: vels, 
      originalPositions: origPos,
      targetPositions: targPos 
    };
  }, [particleCount]);

  useFrame((state) => {
    if (!points.current) return;
    
    const time = state.clock.getElapsedTime() * 0.25; // Reduced from 0.5
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    const colors = points.current.geometry.attributes.color.array as Float32Array;
    
    // Mouse position in 3D space with scroll offset
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2 + scrollY * config.scrollEffect;
    
    // Update particle positions and colors
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Current position
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];
      
      // Noise-based movement
      const noiseX = noise3D(
        x * config.noiseScale + time * config.noiseSpeed,
        y * config.noiseScale,
        z * config.noiseScale
      ) * 0.02; // Reduced from 0.05
      const noiseY = noise3D(
        x * config.noiseScale,
        y * config.noiseScale + time * config.noiseSpeed,
        z * config.noiseScale
      ) * 0.02; // Reduced from 0.05
      const noiseZ = noise3D(
        x * config.noiseScale,
        y * config.noiseScale,
        z * config.noiseScale + time * config.noiseSpeed
      ) * 0.02; // Reduced from 0.05
      
      // Spring force towards original position
      const springX = (originalPositions[i3] - x) * config.springStrength;
      const springY = (originalPositions[i3 + 1] - y) * config.springStrength;
      const springZ = (originalPositions[i3 + 2] - z) * config.springStrength;
      
      // Mouse interaction with easing
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dz = z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const mouseForce = Math.max(0, 1 - dist / 8) * config.mouseForce;
      
      // Calculate target position
      let targetX = x;
      let targetY = y;
      let targetZ = z;
      
      if (clicked) {
        // Disperse particles on click
        const angle = Math.atan2(dy, dx);
        targetX += Math.cos(angle) * 1.25; // Reduced from 2.5
        targetY += Math.sin(angle) * 1.25; // Reduced from 2.5
        targetZ += (Math.random() - 0.5) * 0.5; // Reduced from 1
      } else {
        // Attract to mouse
        targetX += dx * -mouseForce;
        targetY += dy * -mouseForce;
        targetZ += dz * -mouseForce * 0.5;
      }
      
      // Apply repulsion between particles
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const rdx = positions[j3] - x;
        const rdy = positions[j3 + 1] - y;
        const rdz = positions[j3 + 2] - z;
        const rDist = Math.sqrt(rdx * rdx + rdy * rdy + rdz * rdz);
        
        if (rDist < config.repulsionRadius) {
          const force = (1 - rDist / config.repulsionRadius) * config.repulsionStrength;
          targetX -= rdx * force;
          targetY -= rdy * force;
          targetZ -= rdz * force;
        }
      }
      
      // Update velocities with easing
      velocities[i3] = velocities[i3] * config.dampening + 
        (targetX - x) * config.easing + noiseX + springX;
      velocities[i3 + 1] = velocities[i3 + 1] * config.dampening + 
        (targetY - y) * config.easing + noiseY + springY;
      velocities[i3 + 2] = velocities[i3 + 2] * config.dampening + 
        (targetZ - z) * config.easing + noiseZ + springZ;
      
      // Update positions
      positions[i3] += velocities[i3];
      positions[i3 + 1] += velocities[i3 + 1];
      positions[i3 + 2] += velocities[i3 + 2];
      
      // Color animation based on velocity and interaction
      const speed = Math.sqrt(
        velocities[i3] * velocities[i3] + 
        velocities[i3 + 1] * velocities[i3 + 1] + 
        velocities[i3 + 2] * velocities[i3 + 2]
      );
      
      const interaction = Math.max(0, 1 - dist / 5);
      const colorPhase = (Math.sin(time * config.colorChangeSpeed + dist * 0.5) + 1) * 0.5;
      
      // Blend between base and highlight colors based on interaction
      colors[i3] = colors[i3] * (1 - interaction) + (1 - colorPhase) * interaction;
      colors[i3 + 1] = colors[i3 + 1] * (1 - interaction) + colorPhase * interaction * 0.7;
      colors[i3 + 2] = colors[i3 + 2] * (1 - interaction) + (1 - colorPhase) * interaction * 0.3;
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.geometry.attributes.color.needsUpdate = true;
    
    // Rotate based on scroll position with reduced speed
    points.current.rotation.y = time * 0.015 + scrollY * config.scrollEffect; // Reduced from 0.025
    points.current.rotation.x = scrollY * config.scrollEffect;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={config.particleSize}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default ParticleBackground;