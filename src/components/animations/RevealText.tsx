"use client";
import { motion } from "motion/react";

export function RevealText({
    text, className = "", delay = 0, as: Tag = "span",
}: { text: string; className?: string; delay?: number; as?: any }) {
    const words = text.split(" ");
    return (
        <Tag className={className}>
            {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.9, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {w}
                    </motion.span>
                </span>
            ))}
        </Tag>
    );
}