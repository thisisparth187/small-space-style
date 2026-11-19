import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_DESCRIPTION, SITE_TITLE, SITE_BASE } from '../consts';

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // `context.site` is set from astro.config `site`. Base is prepended to links.
    site: context.site ?? new URL('https://thisisparth187.github.io'),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `${SITE_BASE}/blog/${post.id}/`,
    })),
  });
}
