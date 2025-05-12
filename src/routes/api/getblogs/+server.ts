import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

const BLOG_PATH = path.resolve('src/lib/data/blog.json');

export const GET: RequestHandler = async ({ url }) => {
  try {
    const data = fs.readFileSync(BLOG_PATH, 'utf-8');
    const { posts } = JSON.parse(data);
    const tag = url.searchParams.get('tag');
    const category = url.searchParams.get('category');
    const keyword = url.searchParams.get('keyword');
    let filtered = posts;
    if (tag) {
      filtered = filtered.filter((post: any) => post.tags.includes(tag));
    }
    if (category) {
      filtered = filtered.filter((post: any) => post.categories.includes(category));
    }
    if (keyword) {
      filtered = filtered.filter((post: any) => post.keywords.includes(keyword));
    }
    return new Response(JSON.stringify(filtered), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Failed to load blogs' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};