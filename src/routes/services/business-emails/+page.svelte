<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const features = [
    'Professional email setup (G Suite, Microsoft 365)',
    'Email migration services',
    'SPF/DKIM/DMARC configuration',
    'Email security best practices',
    'Ongoing email management'
  ];
</script>

<svelte:head>
  <title>Business Email Services | BitBytesLab</title>
  <meta name="description" content="Professional business email setup and management services." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">Business Email Services</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Our Approach</h2>
      <p>We help businesses establish professional email systems with proper security configurations and best practices.</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src="/images/email.jpg" alt="Business Emails" class="img-fluid rounded" />
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