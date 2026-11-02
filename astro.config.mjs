import { defineConfig } from 'astro/config';

// Served from the root of its own address (Render now, Big Dipper's domain later).
// SITE is the public address, used for absolute links; set it in the host's environment.
export default defineConfig({
  site: process.env.SITE || 'https://bigdipper.onrender.com',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
});
