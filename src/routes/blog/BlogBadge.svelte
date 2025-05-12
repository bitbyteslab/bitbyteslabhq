<script lang="ts">
  export let type: 'category' | 'tag' | 'keyword' = 'tag';
  export let value: string = '';
</script>
<span class="blog-badge {type}">{value}</span>

<style>
.blog-badge {
  display: inline-block;
  padding: 0.32em 0.95em;
  border-radius: 14px;
  font-size: 0.92em;
  font-weight: 500;
  margin-right: 0.4em;
  margin-bottom: 0.3em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  user-select: none;
}
.blog-badge.category {
  background: #e0f7fa;
  color: #00796b;
  border: 1px solid #b2ebf2;
}
.blog-badge.tag {
  background: #e3f2fd;
  color: #1565c0;
  border: 1px solid #90caf9;
}
.blog-badge.keyword {
  background: #fff3e0;
  color: #ef6c00;
  border: 1px solid #ffb74d;
}
.blog-badge:hover {
  opacity: 0.85;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
</style>