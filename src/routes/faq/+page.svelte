<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  
  const faqs = [
    {
      question: 'What services does BitBytesLab offer?',
      answer: 'We offer web development, UI/UX design, SEO & marketing, e-commerce solutions, and business email services.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer both fixed-price projects and hourly rates depending on client needs and project scope.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, we offer monthly maintenance plans with different tiers based on your needs.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in modern web technologies including Svelte, React, Node.js, and various CMS platforms.'
    }
  ];
  
  let activeIndex = null;
  
  function toggleFAQ(index) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<svelte:head>
  <title>FAQ | BitBytesLab</title>
  <meta name="description" content="Frequently asked questions about BitBytesLab services and processes." />
</svelte:head>

<Header />

<main class="container py-5">
  <h1 class="text-center mb-5">Frequently Asked Questions</h1>
  
  <div class="accordion">
    {#each faqs as faq, index}
      <div class="accordion-item mb-3">
        <button 
          class="accordion-button {activeIndex === index ? '' : 'collapsed'}" 
          on:click={() => toggleFAQ(index)}
          aria-expanded={activeIndex === index}
        >
          {faq.question}
        </button>
        
        <div class="accordion-collapse {activeIndex === index ? 'show' : ''}">
          <div class="accordion-body">
            {faq.answer}
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<Footer />

<style>
  .accordion-button {
    width: 100%;
    text-align: left;
    padding: 1rem 1.25rem;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .accordion-button:not(.collapsed) {
    background: #1e3c72;
    color: white;
  }
  
  .accordion-collapse {
    overflow: hidden;
    transition: height 0.3s ease;
  }
  
  .accordion-body {
    padding: 1rem 1.25rem;
    border: 1px solid #dee2e6;
    border-top: none;
    border-radius: 0 0 0.25rem 0.25rem;
  }
</style>