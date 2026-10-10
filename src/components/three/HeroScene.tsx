"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
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
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={ref} scale={1.4}>
                <icosahedronGeometry args={[1, 16]} />
                <MeshDistortMaterial
                    color="#8b5cf6"
                    emissive="#4c1d95"
                    emissiveIntensity={0.4}
                    distort={0.35}
                    speed={1.6}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            dpr={[1, 1.25]}
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{
                antialias: false,
                alpha: true,
                powerPreference: "default",
                failIfMajorPerformanceCaveat: false,
            }}
        >
            <ambientLight intensity={0.4} />
            <directionalLight position={[3, 3, 3]} intensity={1.2} color="#c4b5fd" />
            <directionalLight position={[-3, -2, -2]} intensity={0.5} color="#7c3aed" />
            <Orb />
        </Canvas>
    );
}