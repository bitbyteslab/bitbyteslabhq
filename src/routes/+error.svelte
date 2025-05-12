<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  export let error;
  export let status;
  let searchQuery = '';
</script>

<Header />

<main style="padding: 2rem; text-align: center;">
  <h1>{status === 404 ? '404: Page Not Found' : `Error ${status}`}</h1>
  <p>{status === 404
    ? 'Sorry, the page you are looking for does not exist.'
    : error?.message || 'An unexpected error has occurred.'}
  </p>
  <form style="margin-bottom: 2rem;" on:submit|preventDefault={() => window.location.href = '/blog?search=' + encodeURIComponent(searchQuery)}>
    <input type="text" placeholder="Search our site..." bind:value={searchQuery} style="padding: 0.5rem; width: 220px; border-radius: 4px; border: 1px solid #ccc;" />
    <button type="submit" style="padding: 0.5rem 1rem; margin-left: 0.5rem; background: #0070f3; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Search</button>
  </form>
  <div style="margin-bottom: 2rem;">
    <strong>Popular Links:</strong>
    <ul style="list-style: none; padding: 0; margin: 0;">
      <li><a href="/" style="color: #0070f3; text-decoration: underline;">Home</a></li>
      <li><a href="/aboutus" style="color: #0070f3; text-decoration: underline;">About Us</a></li>
      <li><a href="/services" style="color: #0070f3; text-decoration: underline;">Services</a></li>
      <li><a href="/blog" style="color: #0070f3; text-decoration: underline;">Blog</a></li>
      <li><a href="/contactus" style="color: #0070f3; text-decoration: underline;">Contact Us</a></li>
    </ul>
  </div>
  <a href="/" style="color: #0070f3; text-decoration: underline;">Go to Home</a>
</main>

<Footer />

<style>
  main {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
    color: #666;
  }
</style>