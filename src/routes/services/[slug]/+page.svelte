<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  export let data;
  
  const service = {
    title: data?.params?.slug?.replace(/-/g, ' ') || 'Service',
    description: 'This is a detailed description of our service. In a real implementation, this would be fetched from a CMS or database.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4'
    ],
    image: '/images/service-placeholder.jpg'
  };
</script>

<svelte:head>
  <title>{service.title} | BitBytesLab</title>
  <meta name="description" content="Learn more about our " + service.title + " service." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">{service.title}</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Service Overview</h2>
      <p>{service.description}</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each service.features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src={service.image} alt={service.title} class="img-fluid rounded" />
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