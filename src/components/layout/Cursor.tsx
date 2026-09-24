"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function Cursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
    const [variant, setVariant] = useState<"default" | "hover">("default");

    useEffect(() => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
        const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
        const over = (e: MouseEvent) =>
            setVariant((e.target as HTMLElement).closest("a, button, [data-cursor]") ? "hover" : "default");
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
        };
    }, [x, y]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block mix-blend-difference"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        >
            <motion.div
                className="rounded-full bg-white"
                animate={{
                    width: variant === "hover" ? 56 : 12,
                    height: variant === "hover" ? 56 : 12,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
        </motion.div>
    );
}