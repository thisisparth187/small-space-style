// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// SITE IDENTITY — change in ONE place, here:
//   GitHub username is 'thisisparth187' (Parth's GitHub login). If that is
//   ever wrong, change GITHUB_USERNAME below and the matching SITE_URL in
//   src/consts.ts, public/robots.txt and src/pages/index.astro (Organization
//   JSON-LD) — everything else derives from these two constants.
//   1. `base` must match the repo name: repo `small-space-style` deploys to
//      https://thisisparth187.github.io/small-space-style/
//      so base stays '/small-space-style/'.
//   2. Custom domain later? Set site to 'https://www.yourdomain.com'
//      and base to '/' — nothing else needs to change.
//   3. User site instead (repo named thisisparth187.github.io)?
//      Set site to 'https://thisisparth187.github.io' and base to '/'.
// ---------------------------------------------------------------------------
const GITHUB_USERNAME = 'thisisparth187';
const REPO_NAME = 'small-space-style';

// https://astro.build/config
export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPO_NAME}/`,
  integrations: [sitemap()],
});
