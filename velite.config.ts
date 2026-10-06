import { defineConfig, defineCollection, s } from "velite";

const projects = defineCollection({
    name: "Project",
    pattern: "projects/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string(),
        summary: s.string(),
        year: s.number(),
        role: s.string(),
        stack: s.array(s.string()),
        cover: s.image(),
        demo: s.string().url().optional(),
        repo: s.string().url().optional(),
        featured: s.boolean().default(false),
        content: s.mdx(),
    }),
});

export default defineConfig({
    root: "content",
    output: { data: ".velite", assets: "public/static" },
    collections: { projects },
});