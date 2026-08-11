import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';

export async function GET(context: APIContext) {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.lang === 'es' && !data.draft,
  );

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
