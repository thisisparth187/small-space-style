import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A shoppable product: the image IS the link, plus a Shop Now button.
// `link` is a retailer search page for now — swap for the real affiliate
// link once the program approves it. `image` is an Unsplash photo id.
const product = z.object({
  name: z.string(),
  badge: z.string().optional(),
  width: z.string(),
  price: z.string(),
  bestFor: z.string(),
  notFor: z.string().optional(),
  image: z.string(),
  retailer: z.string(),
  link: z.string(),
});

// A small "finish the look" decor piece (wall art, pillows, lamp, rug…).
const extra = z.object({
  name: z.string(),
  price: z.string(),
  image: z.string(),
  retailer: z.string(),
  link: z.string(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().max(70),
    // Keep descriptions <= ~155 characters: this is the meta description.
    description: z.string().max(160),
    heroImage: z.string(),
    heroCredit: z.string(),
    // Local AI-generated room image, e.g. "/images/sofas-hero-room.jpg".
    // When set, it replaces the Unsplash hero at the top of the post.
    heroLocal: z.string().optional(),
    products: z.array(product).default([]),
    extras: z.array(extra).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts are NOT published and do NOT appear in lists, sitemap or RSS.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
