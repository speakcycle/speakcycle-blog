import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.speakcycle.com',
  base: '/blog',
  integrations: [tailwind()],
  output: 'static',
});
