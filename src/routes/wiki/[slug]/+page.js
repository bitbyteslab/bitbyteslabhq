import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const response = await fetch(`/wiki/${params.slug}`);
  
  if (!response.ok) {
    throw error(response.status, 'Article not found');
  }
  
  const { article, seo } = await response.json();
  
  return {
    article,
    seo: {
      title: `${article.title} | Wiki`,
      description: seo.description,
      keywords: seo.keywords
    }
  };
}