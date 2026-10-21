"use client";
import { motion, useScroll, useTransform } from "motion/react";

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [
      "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.15) 0%, #050505 55%)",
      "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.12) 0%, #050505 55%)",
      "radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.10) 0%, #050505 55%)",
      "radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.08) 0%, #050505 55%)",
    ]
  );

  return (
    <motion.div
      aria-hidden
      style={{ background }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
