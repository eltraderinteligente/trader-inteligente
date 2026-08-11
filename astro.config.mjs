// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// The domain is defined once, in src/config/site.ts, and read from there.
// It used to be written out again here, which meant changing it in one place
// left the sitemap pointing at a domain the pages did not use.
import { SITE } from './src/config/site.ts';

/** Pages rendered with `noindex`. Keep in step with the `noindex` prop. */
const NOINDEX_PATHS = ['/gracias/', '/en/thank-you/'];

// https://astro.build/config
export default defineConfig({
  site: SITE.url,

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish is the default locale and lives at the root (/cursos).
      // English is prefixed (/en/courses).
      prefixDefaultLocale: false,
    },
  },

  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // The thank-you pages carry <meta robots="noindex">. Listing them here
      // too would ask Google to crawl a page it is told not to index, which
      // Search Console reports as an error.
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ]
});