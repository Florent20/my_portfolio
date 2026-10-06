"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!ref.current) return;
        const { x, y } = state.pointer;
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.5, 0.05);
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.5, 0.05);
    });

    return (
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
            <mesh ref={ref} scale={1.35}>
                <icosahedronGeometry args={[1, 64]} />
                <MeshDistortMaterial
                    color="#8b5cf6"
                    emissive="#4c1d95"
                    emissiveIntensity={0.35}
                    distort={0.4}
                    speed={1.8}
                    roughness={0.15}
                    metalness={0.9}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const ref = useRef<THREE.Points>(null);
    const count = 400;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.02; });
    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#a78bfa" transparent opacity={0.7} sizeAttenuation />
        </points>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            dpr={[1, 1.75]}
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[3, 3, 3]} intensity={1.4} color="#c4b5fd" />
            <directionalLight position={[-3, -2, -2]} intensity={0.6} color="#7c3aed" />
            <Orb />
            <Particles />
            <Environment preset="night" />
            <EffectComposer>
                <Bloom intensity={0.9} luminanceThreshold={0.2} mipmapBlur />
                <Vignette eskil={false} offset={0.15} darkness={0.9} />
                <Noise premultiply opacity={0.35} />
            </EffectComposer>
        </Canvas>
    );
}