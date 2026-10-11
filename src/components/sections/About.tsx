import { RevealText } from "@/components/animations/RevealText";

export function About() {
    return (
        <section id="about" className="relative py-32 md:py-48 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                        About
                    </div>
                </div>
                <div className="md:col-span-8">
                    <RevealText
                        text="I'm a frontend engineer focused on building fast, animated, and accessible web products."
                        className="text-3xl md:text-5xl font-medium tracking-tight leading-tight"
                    />
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-white/60 leading-relaxed">
                        <p>
                            I specialize in React, Next.js, and modern motion design. I care
                            about the details that make interfaces feel alive: smooth
                            transitions, sub-second loads, and code that other developers
                            enjoy reading.
                        </p>
                        <p>
                            Outside work, I explore new frontend tools, contribute to open
                            source, and study how great products are designed. I'm always
                            open to interesting projects and conversations.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { k: "3+", v: "Years coding" },
                            { k: "10+", v: "Projects built" },
                            { k: "100%", v: "Passion for UI" },
                            { k: "∞", v: "Cups of coffee" },
                        ].map((s) => (
                            <div key={s.v}>
                                <div className="text-4xl font-medium tracking-tight">{s.k}</div>
                                <div className="text-xs uppercase tracking-[0.25em] text-white/40 mt-2">
                                    {s.v}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}