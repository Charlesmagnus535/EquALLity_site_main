// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      // fr -> "/"   |   en -> "/en/"
      prefixDefaultLocale: false,
    },
  },
  site: 'https://equallity.fr',
  devToolbar: {
    enabled: false,
  },
});
