import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/news' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.enum(['活動報告', '大会', '新歓', 'お知らせ', '技術メモ']).default('お知らせ'),
		summary: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { news };
