"use client";
import { motion } from "motion/react";

export function LineDraw({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={`w-full h-10 ${className}`}
      fill="none"
    >
      <motion.path
        d="M0,20 Q300,0 600,20 T1200,20"
        stroke="rgba(167,139,250,0.4)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
