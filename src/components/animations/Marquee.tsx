"use client";
import { motion } from "motion/react";

export function Marquee({ items, speed = 30 }: { items: string[]; speed?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-10 border-y border-white/5">
      <motion.div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {doubled.map((it, i) => (
          <span key={i} className="text-3xl md:text-5xl font-medium text-white/15">
            {it}
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}