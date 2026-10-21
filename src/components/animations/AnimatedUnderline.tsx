"use client";
import { motion } from "motion/react";

export function AnimatedUnderline({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`origin-left h-[1px] bg-gradient-to-r from-accent via-accent-soft/60 to-transparent ${className}`}
    />
  );
}
