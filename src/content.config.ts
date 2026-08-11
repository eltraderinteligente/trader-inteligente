import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const LOCALE = z.enum(['es', 'en']);

// Blog posts. Files live at src/content/blog/<locale>/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: LOCALE,
      // Links a Spanish post to its English counterpart so the language
      // switcher can jump between them instead of falling back to /blog.
      translationKey: z.string(),
      author: z.string(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Course sales pages. Files live at src/content/courses/<locale>/<slug>.md
const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      lang: LOCALE,
      translationKey: z.string(),
      tier: z.enum(['basico', 'intermedio', 'avanzado', 'mentoria']),
      order: z.number(),
      // Key into src/config/offers.ts — the single place checkout URLs live.
      offerId: z.string(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      outcomes: z.array(z.string()).default([]),
      modules: z
        .array(z.object({ title: z.string(), summary: z.string() }))
        .default([]),
      faq: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
      draft: z.boolean().default(true),
    }),
});

// Customer reviews. Files live at src/content/reviews/<slug>.md
// Nothing here is published unless `approved` is explicitly true.
const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      photo: image().optional(),
      lang: LOCALE,
      // Matches a course `translationKey`, or 'mentoria'.
      course: z.string(),
      date: z.coerce.date(),
      rating: z.number().int().min(1).max(5),
      // Moderation gate. A review file existing is not consent to publish it.
      approved: z.boolean().default(false),
      // Explicit permission captured from the submission form.
      consentToPublish: z.boolean(),
      // FTC: any compensation, discount, or free access must be disclosed
      // on the review itself.
      compensated: z.boolean().default(false),
      compensationDetail: z.string().optional(),
      featured: z.boolean().default(false),
    }),
});

// Legal pages. Files live at src/content/legal/<locale>/<slug>.md
// Markdown rather than translation strings, because a lawyer will edit this
// text and should not have to open a JSON file to do it.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    lang: LOCALE,
    translationKey: z.string(),
    updatedDate: z.coerce.date(),
    /**
     * Defaults to false so the "not yet reviewed" warning appears on the page
     * unless someone deliberately turns it off. Forgetting is the failure mode
     * this guards against.
     */
    reviewedByLawyer: z.boolean().default(false),
  }),
});

export const collections = { blog, courses, reviews, legal };
