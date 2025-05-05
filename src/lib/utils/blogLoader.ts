export async function loadBlogs() {
    // Use import.meta.glob to dynamically import all blog files
    const blogFiles = import.meta.glob('/src/routes/blogs/*.svelte', { eager: true });
    const blogs = [];
  
    for (const file in blogFiles) {
      if (file.endsWith('+page.svelte')) continue; // Skip the +page.svelte file
  
      const blog = blogFiles[file];
      const slug = file.split('/').pop()?.replace('.svelte', '');
  
      if (blog.meta) {
        blogs.push({
          slug,
          title: blog.meta.title,
          description: blog.meta.description,
          date: blog.meta.date,
          meta: {
            tags: blog.meta.tags || [],
            categories: blog.meta.categories || [],
          },
        });
      }
    }
  
    // Sort blogs by date (newest first)
    blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
    return blogs;
  }