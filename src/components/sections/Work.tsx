import { projects } from "#site/content";
import Image from "next/image";
import Link from "next/link";
import { RevealText } from "@/components/animations/RevealText";
import { TiltCard } from "@/components/animations/TiltCard";
import { AnimatedUnderline } from "@/components/animations/AnimatedUnderline";

export function Work() {
    const featured = projects
        .filter((p) => p.featured)
        .sort((a, b) => b.year - a.year);

    return (
        <section id="work" className="relative py-32 md:py-48">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 flex items-end justify-between">
                    <div>
                        <RevealText
                            text="Selected work"
                            className="text-5xl md:text-7xl font-medium tracking-tight"
                        />
                        <AnimatedUnderline className="mt-6 w-24 md:w-40" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {featured.length} projects
                    </span>
                </div>

                <div className="grid gap-24">
                    {featured.map((p, i) => (
                        <ProjectRow key={p.slug} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
    const flipped = index % 2 === 1;
    return (
        <Link
            href={`/work/${project.slug.replace("projects/", "")}`}
            className="group grid md:grid-cols-12 gap-8 items-center"
        >
            <div className={`md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
                <TiltCard className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-ink-800">
                    <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </TiltCard>
            </div>
            <div className={`md:col-span-5 ${flipped ? "md:order-1" : ""}`}>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                    {project.year} · {project.role}
                </div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                    {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">{project.summary}</p>
                <ul className="flex flex-wrap gap-2">
                    {project.stack.map((t: string) => (
                        <li key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50">
                            {t}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    );
}