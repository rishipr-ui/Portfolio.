"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function AbstractObject() {
  const mesh = useRef<Mesh>(null);
  const targetRotation = useRef({ x: 0.35, y: 0.55 });
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += (targetRotation.current.x - mesh.current.rotation.x) * delta * 4;
    mesh.current.rotation.y += (targetRotation.current.y - mesh.current.rotation.y) * delta * 4;
    targetRotation.current.y += delta * 0.18;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.4}>
      <RoundedBox
        ref={mesh}
        args={[2.2, 2.2, 2.2]}
        radius={0.18}
        smoothness={5}
        rotation={[0.35, 0.55, 0.1]}
        onPointerMove={(event) => {
          targetRotation.current.x = 0.35 - event.pointer.y * 0.42;
          targetRotation.current.y = 0.55 + event.pointer.x * 0.6;
        }}
        onPointerDown={(event) => {
          event.stopPropagation();
          targetRotation.current.x -= 0.25;
          targetRotation.current.y += 0.35;
        }}
      >
        <MeshTransmissionMaterial
          backside
          thickness={0.55}
          roughness={0.16}
          transmission={0.78}
          ior={1.45}
          chromaticAberration={0.06}
          anisotropy={0.18}
          color="#d54a38"
        />
      </RoundedBox>
    </Float>
  );
}

export function HeroObject() {
  return (
    <div className="hero-object" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 38 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[2, 3, 4]} intensity={2.4} color="#ffd2a0" />
        <pointLight position={[-3, -2, 2]} intensity={5} distance={7} color="#7a4de8" />
        <AbstractObject />
      </Canvas>
      <span className="object-caption">A small study in form / 01</span>
    </div>
  );
}
