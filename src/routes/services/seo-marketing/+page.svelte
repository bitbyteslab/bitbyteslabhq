<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const features = [
    'Comprehensive SEO audits',
    'Keyword research and strategy',
    'Content optimization',
    'Technical SEO improvements',
    'Performance tracking and reporting'
  ];
</script>

<svelte:head>
  <title>SEO & Marketing Services | BitBytesLab</title>
  <meta name="description" content="Professional SEO and marketing services to grow your online presence." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">SEO & Marketing Services</h1>
  
  <div class="row">
    <div class="col-md-6">
      <h2>Our Approach</h2>
      <p>We implement data-driven SEO strategies to improve your search rankings and drive qualified traffic.</p>
      
      <h3 class="mt-4">Key Features</h3>
      <ul class="list-group list-group-flush">
        {#each features as feature}
          <li class="list-group-item">{feature}</li>
        {/each}
      </ul>
      
      <a href="/contactus" class="btn btn-primary mt-4">Get Started</a>
    </div>
    
    <div class="col-md-6">
      <img src="/images/seo.jpg" alt="SEO & Marketing" class="img-fluid rounded" />
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