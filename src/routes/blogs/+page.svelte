<script context="module" lang="ts">
    import { loadBlogs } from '$lib/utils/blogLoader';
    import { Card, Button, Row, Col, ListGroup, ListGroupItem, Badge } from '@sveltestrap/sveltestrap';
  
    export const load = async () => {
      try {
        const blogs = await loadBlogs();
        const tags = [...new Set(blogs.flatMap((blog) => blog.meta.tags))];
        const categories = [...new Set(blogs.flatMap((blog) => blog.meta.categories))];
  
        return {
          blogs,
          tags,
          categories,
        };
      } catch (error) {
        console.error('Error loading blogs:', error);
        return {
          blogs: [],
          tags: [],
          categories: [],
        };
      }
    };
  </script>