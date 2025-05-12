<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const features = [
    'Custom website development',
    'Responsive design for all devices',
    'Performance optimization',
    'SEO-friendly structure',
    'Ongoing maintenance and support'
  ];
</script>

<svelte:head>
  <title>Web Development Services | BitBytesLab</title>
  <meta name="description" content="Professional web development services tailored to your business needs." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">Web Development Services</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Our Approach</h2>
      <p>We build modern, performant websites using cutting-edge technologies like SvelteKit, React, and Node.js.</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src="/images/web-dev.jpg" alt="Web Development" class="img-fluid rounded" />
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