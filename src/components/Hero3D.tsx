import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={ref} args={[1.4, 96, 96]}>
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.45}
          speed={1.8}
          roughness={0.2}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  );
}

function Orbits() {
  return (
    <>
      {[2.2, 2.8, 3.4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.4, 0]}>
          <torusGeometry args={[r, 0.008, 16, 120]} />
          <meshBasicMaterial color={i === 0 ? "#22d3ee" : i === 1 ? "#e879f9" : "#a78bfa"} />
        </mesh>
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1.2} color="#e879f9" />
        <pointLight position={[-3, -3, -3]} intensity={1} color="#22d3ee" />
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
        <Orbits />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Suspense>
    </Canvas>
  );
}
