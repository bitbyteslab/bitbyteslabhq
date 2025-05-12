<script lang="ts">
  export let recentPosts = [];
  export let categories = [];
  export let tags = [];
</script>

<aside class="sidebar">
  <div class="sidebar-section">
    <h4>Recent Posts</h4>
    <ul>
      {#each recentPosts as post}
        <li><a href={`/blog/${post.slug}`}>{post.title}</a></li>
      {/each}
    </ul>
  </div>
  <div class="sidebar-section">
    <h4>Categories</h4>
    <div class="sidebar-badges">
      {#each categories as cat}
        <span class="badge badge-category">{cat}</span>
      {/each}
    </div>
  </div>
  <div class="sidebar-section">
    <h4>Tags</h4>
    <div class="sidebar-badges">
      {#each tags as tag}
        <span class="badge badge-tag">{tag}</span>
      {/each}
    </div>
  </div>
</aside>

<style>
.sidebar {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 2rem;
}
.sidebar-section {
  margin-bottom: 2rem;
}
.sidebar-section h4 {
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  color: #0070f3;
  font-weight: 600;
}
.sidebar-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.badge-category {
  background: #e0f7fa;
  color: #00796b;
}
.badge-tag {
  background: #e3f2fd;
  color: #1565c0;
}
.badge {
  padding: 0.3em 0.8em;
  border-radius: 12px;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.badge:hover {
  opacity: 0.85;
}
</style>