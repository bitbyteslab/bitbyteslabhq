<script>
  import Layout from '$lib/components/Layout.svelte';
  export let data;
</script>

<Layout data={data}>
  <main>
    <h2>{data.article.title}</h2>
    <div>{@html data.article.content}</div>
  </main>
</Layout>

<style>
  main {
    padding: 20px;
  }
</style>