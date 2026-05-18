import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Line, Points, PointMaterial } from '@react-three/drei';

// Wireframe globe with gold styling
function WireframeGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const [nodeOpacity, setNodeOpacity] = useState(0.5);
  
  // Slow rotation - full rotation every 25 seconds
  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
    // Pulsing effect
    setNodeOpacity(0.4 + Math.sin(clock.getElapsedTime() * 0.8) * 0.2);
  });

  // Create latitude/longitude line points
  const latitudePoints = useMemo(() => {
    const allPoints: [number, number, number][][] = [];
    const radius = 2;
    
    // Latitude lines (horizontal circles)
    for (let lat = -60; lat <= 60; lat += 30) {
      const points: [number, number, number][] = [];
      const phi = (90 - lat) * (Math.PI / 180);
      const r = radius * Math.sin(phi);
      const y = radius * Math.cos(phi);
      
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        points.push([
          r * Math.cos(theta),
          y,
          r * Math.sin(theta)
        ]);
      }
      allPoints.push(points);
    }
    
    // Longitude lines (vertical arcs)
    for (let lng = 0; lng < 360; lng += 30) {
      const points: [number, number, number][] = [];
      const theta = lng * (Math.PI / 180);
      
      for (let i = 0; i <= 64; i++) {
        const phi = (i / 64) * Math.PI;
        points.push([
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ]);
      }
      allPoints.push(points);
    }
    
    return allPoints;
  }, []);

  // Create glowing nodes at intersections
  const nodePositions = useMemo(() => {
    const positions: Float32Array = new Float32Array(5 * 12 * 3); // 5 latitudes * 12 longitudes * 3 coords
    const radius = 2.02;
    let index = 0;
    
    for (let lat = -60; lat <= 60; lat += 30) {
      for (let lng = 0; lng < 360; lng += 30) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = lng * (Math.PI / 180);
        
        positions[index++] = radius * Math.sin(phi) * Math.cos(theta);
        positions[index++] = radius * Math.cos(phi);
        positions[index++] = radius * Math.sin(phi) * Math.sin(theta);
      }
    }
    
    return positions;
  }, []);

  return (
    <group ref={globeRef} position={[0, 0, 0]} rotation={[0.2, 0, 0.1]}>
      {/* Wireframe lines */}
      {latitudePoints.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#d4af37"
          lineWidth={0.5}
          transparent
          opacity={0.15}
        />
      ))}
      
      {/* Glowing nodes */}
      <Points positions={nodePositions} stride={3}>
        <PointMaterial
          color="#d4af37"
          size={0.08}
          transparent
          opacity={nodeOpacity}
          sizeAttenuation
        />
      </Points>
      
      {/* Outer glow sphere */}
      <mesh>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial 
          color="#d4af37"
          transparent
          opacity={0.02}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Gold light rays
function LightRays() {
  const raysRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (raysRef.current) {
      raysRef.current.rotation.z = clock.getElapsedTime() * 0.01;
    }
  });

  const rays = useMemo(() => {
    const rayData: { angle: number; length: number; opacity: number }[] = [];
    for (let i = 0; i < 12; i++) {
      rayData.push({
        angle: (i / 12) * Math.PI * 2,
        length: 3 + Math.random() * 2,
        opacity: 0.03 + Math.random() * 0.02,
      });
    }
    return rayData;
  }, []);

  return (
    <group ref={raysRef}>
      {rays.map((ray, i) => (
        <mesh key={i} rotation={[0, 0, ray.angle]}>
          <planeGeometry args={[0.02, ray.length]} />
          <meshBasicMaterial
            color="#d4af37"
            transparent
            opacity={ray.opacity}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
    }
    
    return positions;
  }, []);

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 100; i++) {
        positions[i * 3 + 1] += 0.002;
        if (positions[i * 3 + 1] > 4) {
          positions[i * 3 + 1] = -4;
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={particlesRef} positions={particlePositions} stride={3}>
      <PointMaterial
        color="#d4af37"
        size={0.03}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </Points>
  );
}

import { useState, Suspense } from 'react';

export default function GlobeBackground() {
  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.1 }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4af37" />
          <WireframeGlobe />
          <LightRays />
          <FloatingParticles />
        </Canvas>
      </Suspense>
    </div>
  );
}
