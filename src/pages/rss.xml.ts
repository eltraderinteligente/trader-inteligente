import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';
import { getPosts } from '../lib/content';

export async function GET(context: APIContext) {
  // Through getPosts rather than its own query, so the feed cannot announce a
  // post the site itself is still holding back.
  const posts = await getPosts('es');

  return rss({
    title: `${SITE.name} — Blog`,
    description:
      'Educación sobre estructura de mercado y análisis técnico. Contenido educativo únicamente.',
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id.split('/').pop()}`,
      })),
    customData: '<language>es</language>',
  });
}
