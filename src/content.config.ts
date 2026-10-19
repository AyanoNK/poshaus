import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        order: z.number(),
        cover: z.object({ src: image(), alt: z.string() }),
        // A project with a gallery gets its own page. One without links to `url`.
        gallery: z.object({ src: image(), alt: z.string() }).optional(),
        url: z.url().optional(),
      })
      .refine((project) => project.gallery || project.url, {
        error: "A project needs a gallery or a url",
      }),
});

export const collections = { projects };
