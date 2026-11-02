import { defineConfig } from 'astro/config';

// GitHub Pages serves the site under /bigdipper until Big Dipper's own domain is ready.
// With a custom domain: set SITE to it and BASE to '/'.
export default defineConfig({
  site: process.env.SITE || 'https://bryanhollingshead.github.io',
  base: process.env.BASE ?? '/bigdipper',
  trailingSlash: 'ignore',
});
