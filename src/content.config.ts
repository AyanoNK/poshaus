import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      cover: z.object({ src: image(), alt: z.string() }),
      // Projects without a gallery have no page of their own; see `redirects`
      // in astro.config.mjs.
      gallery: z.object({ src: image(), alt: z.string() }).optional(),
    }),
});

export const collections = { projects };
