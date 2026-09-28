// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 独自ドメインを取得したら SITE_URL 環境変数（Vercel の Environment Variables）で上書きする
const site = process.env.SITE_URL ?? 'https://omu-robocon-web.vercel.app';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [sitemap()],
	trailingSlash: 'never',
	build: { format: 'file' },
});
