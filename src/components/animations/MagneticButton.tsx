"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

export function MagneticButton({
    children, href, className = "",
}: { children: React.ReactNode; href?: string; className?: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
    const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

    const onMove = (e: React.MouseEvent) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
    };
    const reset = () => { x.set(0); y.set(0); };

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ x, y }}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className={`group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-medium text-sm overflow-hidden ${className}`}
        >
            <span className="relative z-10">{children}</span>
            <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.a>
    );
}