import { CountUp } from "@/components/animations/CountUp";
import { RevealText } from "@/components/animations/RevealText";
import { AnimatedUnderline } from "@/components/animations/AnimatedUnderline";
import { ParallaxSection } from "@/components/animations/ParallaxSection";

type Stat =
    | { label: string; to: number; suffix: string }
    | { label: string; value: string };

const stats: Stat[] = [
    { to: 3, suffix: "+", label: "Years coding" },
    { to: 10, suffix: "+", label: "Projects built" },
    { to: 100, suffix: "%", label: "Passion for UI" },
    { value: "∞", label: "Cups of coffee" },
];

export function About() {
    return (
        <section id="about" className="relative py-32 md:py-48 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        About
                    </div>
                    <AnimatedUnderline className="mt-4 w-16" />
                </div>
                <div className="md:col-span-8">
                    <RevealText
                        text="I'm a frontend engineer focused on building fast, animated, and accessible web products."
                        className="text-3xl md:text-5xl font-medium tracking-tight leading-tight"
                    />
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-white/60 leading-relaxed">
                        <ParallaxSection speed={0.05}>
                            <p>
                                I specialize in React, Next.js, and modern motion design. I care
                                about the details that make interfaces feel alive: smooth
                                transitions, sub-second loads, and code that other developers
                                enjoy reading.
                            </p>
                        </ParallaxSection>
                        <ParallaxSection speed={0.05}>
                            <p>
                                Outside work, I explore new frontend tools, contribute to open
                                source, and study how great products are designed. I&apos;m always
                                open to interesting projects and conversations.
                            </p>
                        </ParallaxSection>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div className="text-4xl font-medium tracking-tight">
                                    {"value" in s ? (
                                        <span>{s.value}</span>
                                    ) : (
                                        <CountUp to={s.to} suffix={s.suffix} />
                                    )}
                                </div>
                                <div className="text-xs uppercase tracking-[0.25em] text-white/40 mt-2">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}