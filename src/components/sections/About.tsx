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
                        text="I'm a senior engineer with a decade of shipping products used by millions."
                        className="text-3xl md:text-5xl font-medium tracking-tight leading-tight"
                    />
                    <div className="mt-12 grid md:grid-cols-2 gap-8 text-white/60 leading-relaxed">
                        <p>
                            I specialize in performance-critical frontends, design systems, and
                            animation. I've led teams at seed-stage startups and scaled systems
                            to millions of users.
                        </p>
                        <p>
                            Outside work: film photography, analog synths, and trail running.
                            I write occasionally about animation and systems design.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { k: "10+", v: "Years shipping" },
                            { k: "40+", v: "Projects launched" },
                            { k: "3", v: "Companies scaled" },
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