// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Update to your new custom domain
  site: 'https://lowspeedspoon.com',
  // 2. Change this to just a forward slash
  base: '', 
  integrations: [tailwind()],
});