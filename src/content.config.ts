import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().max(70),
    // Keep descriptions <= ~155 characters: this is the meta description.
    description: z.string().max(160),
    heroImage: z.string(),
    heroCredit: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are NOT published and do NOT appear in lists, sitemap or RSS.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
