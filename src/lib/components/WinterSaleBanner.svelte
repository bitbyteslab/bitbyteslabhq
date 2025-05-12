<script>
  import { onMount } from 'svelte';
  
  let showBanner = true;
  
  function closeBanner() {
    showBanner = false;
  }
</script>

{#if showBanner}
  <div class="winter-sale-banner">
    <div class="container d-flex justify-content-between align-items-center">
      <span class="text-white">
        <i class="fas fa-snowflake mr-2"></i> 20% OFF Winter Sale! Limited Time Offer
      </span>
      <button 
        class="btn btn-sm btn-outline-light" 
        on:click={closeBanner}
        aria-label="Close winter sale banner"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
{/if}

<style>
  .winter-sale-banner {
    background: linear-gradient(90deg, #1e3c72, #2a5298);
    padding: 0.5rem 0;
    position: relative;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .winter-sale-banner button {
    padding: 0.25rem 0.5rem;
  }
</style>