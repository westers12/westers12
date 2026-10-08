// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://semwester.nl',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/cv/') })],
});
