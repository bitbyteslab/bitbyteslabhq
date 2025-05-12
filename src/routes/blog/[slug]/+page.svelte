<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';
  import Layout from '../Layout.svelte';
  import BlogSidebar from '../BlogSidebar.svelte';
  import BlogBadge from '../BlogBadge.svelte';
  let post = null;
  let loading = true;
  let error = '';
  let slug = '';
  let blogs = [];

  $: slug = get(page).params.slug;

  async function fetchPost() {
    loading = true;
    error = '';
    try {
      const res = await fetch('/api/getblogs');
      if (!res.ok) throw new Error('Failed to fetch blogs');
      blogs = await res.json();
      post = blogs.find((p) => p.slug === slug);
      if (!post) throw new Error('Blog post not found');
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  function handleFilter(type: string, value: string) {
    goto(`/blog?${type}=${encodeURIComponent(value)}`);
  }

  onMount(() => {
    fetchPost();
  });
</script>

<svelte:head>
  {#if post}
    <title>{post.title} | BitBytesLab Blog</title>
    <meta name="description" content={`Read our latest blog post about ${post.title}`} />
  {/if}
</svelte:head>

<Layout>
  <div class="article-layout">
    <main class="article-main">
      <div class="mt-4 mb-4">
        <a href="/blog" class="btn btn-outline-primary">Back to Blog List</a>
      </div>
      {#if loading}
        <div>Loading...</div>
      {:else if error}
        <div class="alert alert-danger">{error}</div>
      {:else if post}
        <div class="article-header">
          {#if post.featuredImage}
            <img src={post.featuredImage} alt="{post.title}" class="featured-image" />
          {/if}
          <h1 class="article-title">{post.title}</h1>
          <div class="article-meta">
            <span class="author-avatar">{#if post.authorAvatar}<img src={post.authorAvatar} alt={post.author} />{/if}</span>
            <span class="author-name">{post.author}</span>
            <span class="article-date">{post.date}</span>
          </div>
          <div class="article-excerpt">{post.excerpt}</div>
        </div>
        <div class="article-content" bind:this={contentDiv}>
          {@html post.content}
        </div>
      {/if}
    </main>
    <aside class="article-sidebar">
      <BlogSidebar recentPosts={blogs.slice(0,5)} categories={post ? post.categories : []} tags={post ? post.tags : []} keywords={post ? post.keywords : []} on:filter={(e) => handleFilter(e.detail.type, e.detail.value)} />
    </aside>
  </div>
</Layout>

<style>
.article-layout {
  display: flex;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1rem 2rem 1rem;
  background: #0c0040;
}
.article-main {
  flex: 2 1 0;
  
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.2rem 2rem 2rem 2rem;
  color: #222;
}
.article-sidebar {
  flex: 1 1 0;
  min-width: 270px;
  max-width: 340px;
}
.article-header {
  margin-bottom: 2.2rem;
  text-align: left;
}
.featured-image {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  background: #23272f;
}
.article-title {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #00bfff;
  letter-spacing: -1px;
}
.article-meta {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.05em;
  color: #b0b0b0;
  margin-bottom: 0.7rem;
}
.author-avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
  border: 2px solid #23272f;
}
.article-excerpt {
  font-size: 1.15em;
  color: #b0b0b0;
  margin-bottom: 1.5rem;
}
.article-content {
  font-size: 1.13em;
  line-height: 1.7;
  color: #f1efef;
  margin-bottom: 2.2rem;
}
.article-badges {
  display: flex;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
}
.article-badges strong {
  color: #00bfff;
  margin-right: 0.5rem;
}
.btn-outline-primary {
  border: 1px solid #00bfff;
  color: #00bfff;
  background: transparent;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  transition: background 0.18s, color 0.18s;
}
.btn-outline-primary:hover {
  background: #00bfff;
  color: #fff;
}
.alert-danger {
  color: #fff;
  background: #d32f2f;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  margin-bottom: 1.2rem;
}
@media (max-width: 900px) {
  .article-layout {
    flex-direction: column;
    gap: 1.5rem;
  }
  .article-sidebar {
    max-width: 100%;
    min-width: 0;
  }
}
</style>