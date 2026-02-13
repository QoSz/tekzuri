"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import type { Mesh } from "three";

interface ShapeProps {
  geometry: "icosahedron" | "octahedron" | "torus" | "tetrahedron" | "dodecahedron";
  position: [number, number, number];
  speed: number;
  floatIntensity?: number;
}

function WireframeShape({ geometry, position, speed, floatIntensity = 1 }: ShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * speed * 0.1;
    meshRef.current.rotation.y += delta * speed * 0.08;
  });

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 8, 16]} />;
      case "tetrahedron":
        return <tetrahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={floatIntensity}>
      <mesh ref={meshRef} position={position}>
        {geo}
        <meshBasicMaterial wireframe color="#ff3d00" transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

const allShapes: ShapeProps[] = [
  { geometry: "icosahedron", position: [-5, 2, -3], speed: 0.3, floatIntensity: 1.2 },
  { geometry: "octahedron", position: [5, -1, -4], speed: 0.4, floatIntensity: 0.8 },
  { geometry: "torus", position: [-3, -3, -5], speed: 0.25, floatIntensity: 1 },
  { geometry: "tetrahedron", position: [4, 3, -2], speed: 0.35, floatIntensity: 1.1 },
  { geometry: "dodecahedron", position: [0, -2, -6], speed: 0.2, floatIntensity: 0.9 },
];

function Shapes() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;
  const shapes = isMobile ? allShapes.slice(0, 3) : allShapes;

  return (
    <>
      {shapes.map((shape, i) => (
        <WireframeShape key={i} {...shape} />
      ))}
    </>
  );
}

export default function ServicesBackground3DScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        stencil: false,
        depth: false,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Shapes />
    </Canvas>
  );
}
