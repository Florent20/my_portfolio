"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ParallaxSection({
    children, speed = 0.2, className = "",
}: { children: React.ReactNode; speed?: number; className?: string }) {
    const wrap = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(
                inner.current,
                { yPercent: -speed * 100 },
                {
                    yPercent: speed * 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrap.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }, wrap);
        return () => ctx.revert();
    }, [speed]);

    return (
        <div ref={wrap} className={`relative overflow-hidden ${className}`}>
            <div ref={inner} className="will-change-transform">
                {children}
            </div>
        </div>
    );
}