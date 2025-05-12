<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import BlogSidebar from './BlogSidebar.svelte';
  import BlogSubHeader from './BlogSubHeader.svelte';
  import BlogBadge from './BlogBadge.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  let blogs = [];
  let loading = true;
  let error = '';
  let filterType = '';
  let filterValue = '';
  
  let categories = [];
  let tags = [];

  async function fetchBlogs(params = {}) {
    loading = true;
    error = '';
    let url = '/api/getblogs';
    const search = new URLSearchParams(params).toString();
    if (search) url += '?' + search;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch blogs');
      blogs = await res.json();
      // Extract unique categories and tags for sidebar
      categories = Array.from(new Set(blogs.flatMap(b => b.categories || [])));
      tags = Array.from(new Set(blogs.flatMap(b => b.tags || [])));
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  function handleFilter(type: string, value: string) {
    filterType = type;
    filterValue = value;
    fetchBlogs({ [type]: value });
  }

  function clearFilter() {
    filterType = '';
    filterValue = '';
    fetchBlogs();
  }

  onMount(() => {
    fetchBlogs();
  });
</script>

<Header />

<svelte:head>
  <title>Blog | BitBytesLab</title>
  <meta name="description" content="Read the latest blog posts from BitBytesLab." />
</svelte:head>

<BlogSubHeader title="BitBytesLab Blog" description="Insights, tutorials, and updates from BitBytesLab." />

<div class="blog-layout">
  <main class="blog-main">
    <h1 class="blog-title">Blog</h1>
    {#if filterType}
      <div class="filter-bar">
        <span>Filtering by <strong>{filterType}</strong>: <strong>{filterValue}</strong></span>
        <button class="btn btn-sm btn-outline-secondary ml-2" on:click={clearFilter}>Clear Filter</button>
      </div>
    {/if}
    {#if loading}
      <div>Loading...</div>
    {:else if error}
      <div class="alert alert-danger">{error}</div>
    {:else if blogs.length === 0}
      <div>No blog posts found.</div>
    {:else}
      <ul class="blog-list">
        {#each blogs as post}
          <li class="blog-list-item">
            <h3 class="blog-post-title" on:click={() => goto(`/blog/${post.slug}`)}>{post.title}</h3>
            <div class="blog-meta">{post.date} by {post.author}</div>
            <div class="blog-excerpt">{post.excerpt}</div>
            <div class="blog-badges">
              {#each post.categories as cat}
                <BlogBadge type="category" value={cat} on:click={() => handleFilter('category', cat)} />
              {/each}
              {#each post.tags as tag}
                <BlogBadge type="tag" value={tag} on:click={() => handleFilter('tag', tag)} />
              {/each}
              {#each post.keywords as kw}
                <BlogBadge type="keyword" value={kw} on:click={() => handleFilter('keyword', kw)} />
              {/each}
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </main>
  <aside class="blog-sidebar">
    <BlogSidebar recentPosts={blogs.slice(0,5)} categories={categories} tags={tags} />
  </aside>
</div>

<Footer />

<style>
.blog-layout {
  display: flex;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem 1rem;
}
.blog-main {
  flex: 2 1 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.2rem 2rem 2rem 2rem;
}
.blog-sidebar {
  flex: 1 1 0;
  min-width: 270px;
  max-width: 340px;
}
.blog-title {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0070f3;
  letter-spacing: -1px;
}
.filter-bar {
  background: #f1f8ff;
  border-radius: 6px;
  padding: 0.7rem 1.2rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1.05em;
}
.blog-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.blog-list-item {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e3e3e3;
}
.blog-post-title {
  font-size: 1.45rem;
  font-weight: 600;
  color: #0070f3;
  margin: 0 0 0.5rem 0;
  cursor: pointer;
  transition: color 0.18s;
}
.blog-post-title:hover {
  color: #005bb5;
  text-decoration: underline;
}
.blog-meta {
  font-size: 0.98em;
  color: #888;
  margin-bottom: 0.7rem;
}
.blog-excerpt {
  font-size: 1.08em;
  margin-bottom: 0.9rem;
  color: #222;
}
.blog-badges {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
}
@media (max-width: 900px) {
  .blog-layout {
    flex-direction: column;
    gap: 1.5rem;
  }
  .blog-sidebar {
    max-width: 100%;
    min-width: 0;
  }
  .blog-main {
    padding: 1.2rem 0.7rem 1.5rem 0.7rem;
  }
}
</style>