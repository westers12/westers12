import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects are "application notes" (AN-01, AN-02, ...), one Markdown file each.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    number: z.number().int(),
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()),
    // Signal chain for the block diagram, left to right.
    diagram: z.array(z.object({ label: z.string(), detail: z.string().optional() })),
    repo: z.string().url().optional(),
    // `placeholder: true` marks a note that still needs real content.
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { notes };
