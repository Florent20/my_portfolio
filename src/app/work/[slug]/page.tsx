import { notFound } from "next/navigation";
import { projects } from "#site/content";
import Image from "next/image";
import { RevealText } from "@/components/animations/RevealText";
import { ParallaxSection } from "@/components/animations/ParallaxSection";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug.replace("projects/", "") }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug.replace("projects/", "") === slug);
    if (!project) notFound();

    return (
        <article className="pt-40">
            <header className="mx-auto max-w-5xl px-6">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
                    {project.year} · {project.role}
                </div>
                <RevealText
                    text={project.title}
                    className="text-5xl md:text-7xl font-medium tracking-tight"
                />
                <p className="mt-8 text-xl text-white/60 max-w-2xl leading-relaxed">
                    {project.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    {project.demo && (
                        <a href={project.demo} className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium">
                            Live demo
                        </a>
                    )}
                    {project.repo && (
                        <a href={project.repo} className="px-5 py-2 rounded-full border border-white/15 text-sm">
                            Source
                        </a>
                    )}
                </div>
            </header>

            <div className="mt-20 mx-auto max-w-6xl px-6">
                <ParallaxSection speed={0.12} className="rounded-2xl">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                        <Image src={project.cover} alt={project.title} fill priority className="object-cover" />
                    </div>
                </ParallaxSection>
            </div>

            <div className="mx-auto max-w-3xl px-6 py-32 prose prose-invert prose-lg">
                {project.content}
            </div>
        </article>
    );
}