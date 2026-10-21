import { RevealText } from "@/components/animations/RevealText";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Contact() {
    return (
        <section id="contact" className="relative py-32 md:py-48 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
                    Let&apos;s work together
                </div>
                <RevealText
                    text="Have a project in mind?"
                    className="text-6xl md:text-8xl font-medium tracking-tight"
                />
                <div className="mt-16 flex flex-wrap justify-center gap-6">
                    <MagneticButton href="mailto:louisflorentbwam@gmail.com">
                        louisflorentbwam@gmail.com
                    </MagneticButton>
                    <MagneticButton
                        href="https://linkedin.com/in/louisflorent"
                        className="!bg-transparent !text-white border border-white/15 hover:border-white/40"
                    >
                        LinkedIn
                    </MagneticButton>
                    <MagneticButton
                        href="https://github.com/Florent20"
                        className="!bg-transparent !text-white border border-white/15 hover:border-white/40"
                    >
                        GitHub
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}