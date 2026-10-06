import { projects } from "#site/content";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://yourname.dev";
    return [
        { url: base, lastModified: new Date(), priority: 1 },
        ...projects.map((p) => ({
            url: `${base}/work/${p.slug.replace("projects/", "")}`,
            lastModified: new Date(),
            priority: 0.8,
        })),
    ];
}