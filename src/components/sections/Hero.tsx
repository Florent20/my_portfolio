"use client";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { RevealText } from "@/components/animations/RevealText";
import { MagneticButton } from "@/components/animations/MagneticButton";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
    ssr: false,
    loading: () => null,
});

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center overflow-hidden">
            {/* 3D layer */}
            <div className="absolute inset-0 -z-0 opacity-90">
                <HeroScene />
            </div>

            {/* Radial glow behind headline */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                    className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40"
                >
                    Frontend Engineer · React · Next.js · Available for work
                </motion.p>

                <h1 className="text-[13vw] md:text-[9vw] leading-[0.95] font-medium tracking-tight">
                    <RevealText text="Building" delay={2.1} className="block" />
                    <RevealText text="digital products" delay={2.2} className="block text-gradient" />
                    <RevealText text="that feel alive." delay={2.3} className="block text-white/40" />
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.7, duration: 0.8 }}
                    className="mt-12 flex flex-wrap items-center gap-6"
                >
                    <MagneticButton href="#work">
                        View selected work
                    </MagneticButton>
                    <a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors">
                        Get in touch →
                    </a>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/30"
            >
                Scroll
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="mx-auto mt-2 w-[1px] h-6 bg-white/30"
                />
            </motion.div>
        </section>
    );
}