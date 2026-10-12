// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { gitLastmod } from './scripts/git-lastmod.mjs';

export default defineConfig({
  site: 'https://branding.alexmerced.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // lastmod is the last commit that touched the page's source, not the
      // build time, so a rebuild does not re-date every page.
      serialize(item) {
        const lastmod = gitLastmod(item.url);
        if (lastmod) item.lastmod = lastmod.toISOString();
        else delete item.lastmod;
        return item;
      },
    }),
  ],
});
