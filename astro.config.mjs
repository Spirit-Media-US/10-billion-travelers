import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://10btravelers.com',
  server: { port: 4330, host: true },
  integrations: [sitemap()],
  vite: {
    server: { allowedHosts: ['preview.spiritmediapublishing.com'] },
    plugins: [tailwindcss()],
  },
});
