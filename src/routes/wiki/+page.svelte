<script>
  import { page } from '$app/stores';
  import wikiData from '$lib/data/wiki.json';
  import Layout from '$lib/components/Layout.svelte';

  // Sort articles alphabetically by title
  $: sortedArticles = wikiData.articles.sort((a, b) => a.title.localeCompare(b.title));
</script>

<svelte:head>
  <title>Wiki - BitBytesLab</title>
</svelte:head>

<Layout data={{ articles: sortedArticles }}>
  <main class="container py-5">
    <h1 class="mb-4">Wiki Articles</h1>
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Article Title</th>
            <th>Last Updated</th>
            <th>Keywords</th>
          </tr>
        </thead>
        <tbody>
          {#each sortedArticles as article}
            <tr>
              <td><a href={`/wiki/${article.slug}`}>{article.title}</a></td>
              <td>{article.lastUpdated}</td>
              <td>{article.keywords.join(', ')}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </main>
</Layout>

<style>
  .table-hover tbody tr:hover {
    background-color: #f8f9fa;
  }
  a {
    text-decoration: none;
    color: #0d6efd;
  }
  a:hover {
    text-decoration: underline;
  }
</style>