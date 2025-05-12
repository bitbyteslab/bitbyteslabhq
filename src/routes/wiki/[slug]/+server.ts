import { json } from '@sveltejs/kit';
import wikiData from '$lib/data/wiki.json';

export async function GET({ params }) {
  const article = wikiData.articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return json({ error: 'Article not found' }, { status: 404 });
  }
  
  return json({
    article,
    seo: {
      title: article.title,
      description: article.content.substring(0, 160),
      keywords: article.keywords.join(', ')
    }
  });
}

export async function POST({ request }) {
  const data = await request.json();
  // Add validation and persistence logic here
  return json({ success: true });
}