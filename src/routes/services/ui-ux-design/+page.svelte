<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const features = [
    'User research and persona development',
    'Wireframing and prototyping',
    'Usability testing',
    'Accessibility compliance',
    'Design system creation'
  ];
</script>

<svelte:head>
  <title>UI/UX Design Services | BitBytesLab</title>
  <meta name="description" content="Professional UI/UX design services to create intuitive digital experiences." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">UI/UX Design Services</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Our Approach</h2>
      <p>We create beautiful, intuitive interfaces that prioritize user experience and accessibility.</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src="/images/ui-ux.jpg" alt="UI/UX Design" class="img-fluid rounded" />
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