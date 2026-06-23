import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://miismarthome.pages.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
