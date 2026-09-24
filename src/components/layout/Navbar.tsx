"use client";
import Link from "next/link";
import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
    const [hidden, setHidden] = useState(false);
    const [last, setLast] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (y) => {
        setHidden(y > last && y > 0.05);
        setLast(y);
    });

    return (
        <>
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-soft to-accent origin-left z-50"
            />
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: hidden ? -100 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 inset-x-0 z-40 backdrop-blur-md"
            >
                <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
                    <Link href="/" className="font-medium tracking-tight">
                        <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
                        Your Name
                    </Link>
                    <ul className="hidden md:flex items-center gap-8 text-sm text-white/60">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link href={l.href} className="hover:text-white transition-colors">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/resume.pdf"
                        className="text-sm px-4 py-2 rounded-full border border-white/15 hover:border-white/40 transition-colors"
                    >
                        Resume
                    </a>
                </nav>
            </motion.header>
        </>
    );
}