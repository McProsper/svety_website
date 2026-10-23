import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const poemes = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: new URL("./content/poemes", import.meta.url),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    illustration: z.string().url(),
    altIllustration: z.string(),
    theme: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { poemes };
