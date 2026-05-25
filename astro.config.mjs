import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.speakcycle.com',
  base: '/blog',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
