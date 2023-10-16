import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://shark.run',
  integrations: [
    preact(),
    sitemap(),
    robotsTxt(),
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ]
});