import { defineConfig } from astro/config;
import tailwindcss from @tailwindcss/vite;
import sitemap from @astrojs/sitemap;

// TODO: Update site URL before deploying
export default defineConfig({
  site: https://REPLACE_WITH_DOMAIN.com,
  server: { port: 4330, host: true },
  integrations: [sitemap()],
  vite: {
    server: { allowedHosts: [preview.spiritmediapublishing.com] },
    plugins: [tailwindcss()],
  },
});
