<script>
  // Replace with actual blog post data or fetch from an API
  const blogPosts = [
    { title: 'The Importance of SEO for Your Business', link: '/blog/seo' },
    { title: 'Choosing the Right CRM for Your Needs', link: '/blog/crm' },
    { title: 'Web Development Trends in 2024', link: '/blog/web-dev-trends' },
  ];
</script>

<ul class="list-group">
  {#each blogPosts as post}
    <li class="list-group-item">
      <a href={post.link}>{post.title}</a>
    </li>
  {/each}
</ul>
