'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Sphere } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

// Main hero orb — distorted gold icosahedron
function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[2.2, 0, 0]}>
        <icosahedronGeometry args={[1.8, 4]} />
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.28}
          speed={1.2}
          roughness={0.05}
          metalness={0.95}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

// Smaller orbiting accent orbs
function AccentOrb({ position, color, speed, scale }: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime * speed;
      meshRef.current.rotation.x = t * 0.5;
      meshRef.current.rotation.y = t;
    }
  });

  return (
    <Float speed={speed * 1.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe={true}
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
}

// Floating particle ring
function ParticleRing() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const goldColor = new THREE.Color('#D4AF37');
    const dimColor = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 4 + Math.random() * 1.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      const mix = Math.random();
      const c = mix > 0.6 ? goldColor : dimColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, 2, -4]} intensity={0.8} color="#D4AF37" />
      <pointLight position={[4, -2, 4]} intensity={0.4} color="#B8860B" />

      <Stars radius={60} depth={40} count={600} factor={3} fade speed={0.5} />
      <ParticleRing />
      <HeroOrb />
      <AccentOrb position={[-3.5, 1.5, -2]} color="#D4AF37" speed={0.4} scale={0.5} />
      <AccentOrb position={[1, -2.5, -1]} color="#ffffff" speed={0.3} scale={0.3} />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0" style={{ opacity: 0.85 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
