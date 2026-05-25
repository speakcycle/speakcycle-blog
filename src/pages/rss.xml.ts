import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'SpeakCycle Blog — Aprenda Inglês Americano',
    description: 'Dicas, guias e estratégias para brasileiros aprenderem inglês americano de verdade.',
    site: context.site ?? 'https://www.speakcycle.com',
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: '<language>pt-BR</language>',
  });
}
