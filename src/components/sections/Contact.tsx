import { RevealText } from "@/components/animations/RevealText";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Contact() {
    return (
        <section id="contact" className="relative py-32 md:py-48 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
                    Let's work together
                </div>
                <RevealText
                    text="Have a project in mind?"
                    className="text-6xl md:text-8xl font-medium tracking-tight"
                />
                <div className="mt-16 flex flex-wrap justify-center gap-6">
                    <MagneticButton href="mailto:louisflorentbwam@gmail.com">
                        louisflorentbwam@gmail.com
                    </MagneticButton>
                    <a
                        href="https://linkedin.com/in/louisflorent"
                        className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/15 hover:border-white/40 text-sm transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Florent20"
                        className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-white/15 hover:border-white/40 text-sm transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}