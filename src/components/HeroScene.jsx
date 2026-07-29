import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function Blob() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.1}>
      <Sphere ref={ref} args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.15}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  // Disable HeroScene
  return null;

  // Enable again by uncommenting below

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 3, 4]} intensity={40} color="#06b6d4" />
        <pointLight position={[-4, -2, -2]} intensity={25} color="#f43f5e" />
        <Suspense fallback={null}>
          <Blob />
        </Suspense>
      </Canvas>
    </div>
  );
}
