# Small Space Style — Home Decor Affiliate Blog

A free, static Astro blog for small-space / rental home decor affiliate
content. Target audience: US / UK / AU buyers. Written from India, in US
English, prices in $, measurements in inches first. Text-only, no facecam.

**Hosting:** GitHub Pages (free). **Cost to run:** $0 — no domain, no
Shopify, no paid hosting. A custom domain can be added later (see below).

## Run it locally

```sh
npm install
npm run dev      # dev server at http://localhost:4321/small-space-style/
npm run build    # production build into ./dist/
npm run preview  # preview the production build locally
```

Node 22+ required (see `engines` in `package.json`).

## Add a post

1. Create a new file in `src/content/posts/`, named after its slug, e.g.
   `src/content/posts/best-washable-rugs-pets-kids.md`.
2. Frontmatter (all fields required except `updatedDate`):

```yaml
---
title: "Best washable rugs for pets and kids — compared" # <= 70 chars, keyword first
description: "Washable rugs compared for pets and kids: pile, backing, sizes and what survives the wash." # <= 155 chars — this is the meta description
pubDate: 2026-11-25
tags: ["rugs", "pets", "kids"]
draft: false # true = not published, not in lists / sitemap / RSS
---
```

3. Write the post in Markdown. Slugs come from the file name:
   `best-washable-rugs-pets-kids.md` → `/blog/best-washable-rugs-pets-kids/`
4. Commit and push to `main` — the GitHub Actions workflow deploys it.

To publish a draft outline (posts 2–12 ship as `draft: true` outlines),
expand it to a full 1,200–1,500-word guide and set `draft: false`.

## Change the site URL / base

**Everything lives in one place: `astro.config.mjs`.**

- **Project Pages site (current setup):** repo `small-space-style` deploys to
  `https://thisisparth187.github.io/small-space-style/`.
  The GitHub username is set to `thisisparth187` in `astro.config.mjs`
  (and the same value in `src/consts.ts`, `public/robots.txt`, and the home
  page Organization JSON-LD). If the username is ever wrong, change it in
  those places. Keep `base: '/small-space-style/'`.
- **Custom domain later:** set `site: 'https://www.yourdomain.com'` and
  `base: '/'` in `astro.config.mjs`, update `SITE_URL` / `SITE_BASE` in
  `src/consts.ts` and the `Sitemap:` line in `public/robots.txt`, then add
  the domain in the repo's GitHub Pages settings.
- **User site instead** (repo named `thisisparth187.github.io`): set
  `site: 'https://thisisparth187.github.io'` and `base: '/'`.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds on every push to `main` using the
official Astro / GitHub Pages actions and deploys `./dist/`.

One-time repo setup (in GitHub, after creating the repo):

1. Create a repo named `small-space-style`, push this code to `main`.
2. Settings → Pages → **Build and deployment → Source: GitHub Actions**.
3. Push — the site goes live at
   `https://thisisparth187.github.io/small-space-style/`.

No secrets or tokens are needed for this workflow.

## SEO checklist — every post, every time

- [ ] Title 50–60 chars, keyword first; description ≤ 155 chars (frontmatter)
- [ ] Clean slug from the file name; one H1 (the title), H2s as search questions
- [ ] Meta description, canonical, Open Graph + Twitter cards — automatic via
      `src/components/Seo.astro`; Article JSON-LD is automatic on posts
- [ ] Alt text on every image; prices in $, measurements in inches/feet first
- [ ] Comparison table with price, size and material; hero / budget / splurge picks
- [ ] 5–7 affiliate links max, descriptive anchor text, no shorteners, no cloaking
- [ ] Disclosure at top of post — automatic via `PostLayout`; also linked in footer
- [ ] Price, rate and cookie **re-checked in the live affiliate dashboard today**
- [ ] Link tested in a private window — lands on the right product, tag present
- [ ] No copied merchant copy, no images you have no right to use, no fake
      discounts or fake reviews; no invented product names or prices
- [ ] Internal links to 2–3 other posts once they exist
- [ ] After publishing: 5 fresh Pinterest pins (2:3 vertical, keyword in the
      pin title's first words, `#ad` disclosure at the start of the description,
      link to the blog post, not the merchant), spread over 10–14 days

## Project structure

```text
astro.config.mjs          # site + base — the ONE place to change the URL
src/consts.ts             # site title, description, URL helpers
src/content.config.ts     # blog post collection schema (title/description/dates/tags/draft)
src/content/posts/        # Markdown posts; file name = slug
src/components/Seo.astro # title, meta, canonical, OG/Twitter, JSON-LD
src/layouts/BaseLayout.astro   # CALÇ theme, header/footer, hero animation (home only)
src/layouts/PostLayout.astro   # post wrapper + disclosure notice at top
src/pages/index.astro     # home (hero, latest posts)
src/pages/blog/index.astro
src/pages/blog/[...slug].astro
src/pages/rss.xml.ts      # RSS feed
src/pages/about.astro  contact.astro  privacy-policy.astro  disclosure.astro  disclaimer.astro
public/robots.txt         # points at sitemap-index.xml (update username with the URL change)
public/.nojekyll          # stops GitHub Pages treating the site as Jekyll
.github/workflows/deploy.yml
```

## Notes / limits

- Post 1 is a full guide; posts 2–12 are **draft outlines only** — expand
  before publishing, and verify every price/size in the retailer dashboard.
- Affiliate links are **placeholders** in post 1 (e.g.
  `[Wayfair affiliate link — add after CJ approval]`). Do not publish live
  affiliate links until the network/merchant approves you — a network
  account is not merchant approval.
- Vercel was considered and not used: its free Hobby plan is for personal,
  non-commercial use, and an earning affiliate site is commercial. GitHub
  Pages hosts this static site free with no such restriction.
- The `og-image.svg` in `public/` is a simple placeholder — replace it with
  a real 1200×630 image when you have one.
