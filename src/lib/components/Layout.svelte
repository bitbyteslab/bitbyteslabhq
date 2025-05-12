<script>
  import Header from './Header.svelte';
  import Footer from './footer/Footer.svelte';
  
  export let data;
</script>

<Header />

<slot />

<Footer />

<style>
  /* Add any global layout styles here */
</style>