import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Set the live URL
  site: 'https://armcclain.github.io',
  // 2. Set the sub-directory (your repo name)
  base: '/low-speed-spoon',
  integrations: [tailwind()],
});
