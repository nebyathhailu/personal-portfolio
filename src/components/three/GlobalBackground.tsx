'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

// ─── Main gold orb (hero region, right side) ────────────────────────────────
function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[2.2, 2, 0]}>
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

// ─── Wireframe accent orbs scattered down the page ──────────────────────────
function AccentOrb({
  position, color, speed, scale,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime * speed;
    meshRef.current.rotation.x = t * 0.5;
    meshRef.current.rotation.y = t;
  });
  return (
    <Float speed={speed * 1.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
    </Float>
  );
}

// ─── Slow drifting tetrahedron for projects/skills zone ─────────────────────
function DriftingShape({
  position, color, speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.6;
  });
  return (
    <Float speed={0.6} floatIntensity={0.5} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <tetrahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

// ─── Full-page particle field ────────────────────────────────────────────────
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const gold = new THREE.Color('#D4AF37');
    const white = new THREE.Color('#ffffff');
    const indigo = new THREE.Color('#6366F1');

    for (let i = 0; i < count; i++) {
      // Spread across a wide area — X: wide, Y: tall (covers all sections), Z: depth
      positions[i * 3]     = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; 
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const roll = Math.random();
      const c = roll > 0.7 ? gold : roll > 0.15 ? white : indigo;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.018;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Torus ring — floats in skills / contact zone ───────────────────────────
function TorusRing({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return (
    <Float speed={0.5} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[2.2, 0.04, 8, 60]} />
        <meshStandardMaterial color="#D4AF37" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

// ─── Scene ───────────────────────────────────────────────────────────────────
function SceneContent() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 8, 5]} intensity={1.1} color="#ffffff" />
      <pointLight position={[-4, 4, -4]} intensity={0.9} color="#D4AF37" />
      <pointLight position={[4, -8, 4]} intensity={0.4} color="#6366F1" />
      <pointLight position={[0, -18, 2]} intensity={0.5} color="#B8860B" />

      {/* Stars fill the depth */}
      <Stars radius={80} depth={50} count={700} factor={3} fade speed={0.4} />

      {/* Particle field — spans full page height */}
      <ParticleField />

      {/* Hero zone shapes (Y ≈ +2 to +4) */}
      <HeroOrb />
      <AccentOrb position={[-3.5, 3, -2]}  color="#D4AF37" speed={0.4} scale={0.5} />
      <AccentOrb position={[1, 0.5, -1]}   color="#ffffff" speed={0.3} scale={0.3} />

      {/* Projects zone shapes (Y ≈ -4 to -10) */}
      <DriftingShape position={[-5, -5, -3]}  color="#6366F1" speed={0.07} />
      <AccentOrb    position={[4.5, -7, -2]}  color="#D4AF37" speed={0.25} scale={0.45} />
      <TorusRing    position={[-3, -9, -4]} />

      {/* Skills zone shapes (Y ≈ -12 to -18) */}
      <DriftingShape position={[5, -13, -3]}  color="#10B981" speed={0.06} />
      <AccentOrb    position={[-4, -16, -2]}  color="#D4AF37" speed={0.2} scale={0.4} />
      <TorusRing    position={[3.5, -15, -3]} />

      {/* Contact zone shapes (Y ≈ -20 to -26) */}
      <DriftingShape position={[-4.5, -22, -3]} color="#D4AF37" speed={0.05} />
      <AccentOrb    position={[3.5, -24, -1]}   color="#ffffff" speed={0.22} scale={0.35} />
    </>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────
export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.9 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
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
