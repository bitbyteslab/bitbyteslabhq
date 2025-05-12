<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const features = [
    'Shopify store setup and customization',
    'WooCommerce integration',
    'Payment gateway configuration',
    'Inventory management solutions',
    'Performance optimization for e-commerce'
  ];
</script>

<svelte:head>
  <title>E-Commerce Services | BitBytesLab</title>
  <meta name="description" content="Professional e-commerce solutions to grow your online business." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">E-Commerce Services</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Our Approach</h2>
      <p>We build high-converting e-commerce stores with seamless checkout experiences and optimized product pages.</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src="/images/ecommerce.jpg" alt="E-Commerce" class="img-fluid rounded" />
    </div>
  </div>
</main>

<Footer />

<style>
  .list-group-item {
    border-left: none;
    border-right: none;
    padding-left: 0;
  }
</style>