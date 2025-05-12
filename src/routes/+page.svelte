<script>
    import { onMount } from 'svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    import HomeServices from './Home_Services.svelte';
    import HomeBlogs from './Home_Blogs.svelte';
    import HomeContactUs from './Home_ContactUs.svelte';
    import HomeAboutUs from './Home_AboutUs.svelte';
    import ServicesBar from '$lib/components/ServicesBar.svelte';
    import { Carousel, CarouselItem, Card, Button, Row, Col } from "@sveltestrap/sveltestrap";

    onMount(() => {
      // Client-side JavaScript for dropdown toggles
      document.querySelectorAll('.dropdown-toggle').forEach((dropdownToggle) => {
        dropdownToggle.addEventListener('click', (event) => {
          event.preventDefault();
          const dropdownMenu = dropdownToggle.nextElementSibling;
          if (dropdownMenu) {
            dropdownMenu.classList.toggle('show');
          }
          dropdownToggle.setAttribute(
            'aria-expanded',
            dropdownToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
          );
        });
      });
    });


    // Carousel Images

  </script>
  
  <svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="BitBytesLab: Your web solutions partner. Specializing in ERP, CRM, WooCommerce, WordPress, Website Development, Business Emails, SEO, and more."
    />
    <meta
      name="keywords"
      content="ERP, CRM, WooCommerce, WordPress, Website Development, Business Emails, SEO, Node.Js, svelte, MERN Stack Development, Apis, web scrapping, Web Server Assets Compression, Domain, Web Hosting, DNS Management, Vps Manage, BitBytesLab"
    />
    <meta name="author" content="BitBytesLab" />
    <title>BitBytesLab - Web Solutions: ERP, CRM, Website Development, and More</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  </svelte:head>
  
  <Header />
  
  <main>
    <div class="row align-items-center mb-4">
      <div class="col-auto">
        <h2 class="display-6 font-weight-bold"><video src="https://cdn-icons-mp4.freepik.com/512/12205/12205141.mp4" autoplay loop muted playsinline style="width: 40px; height: 40px; display: inline-block; vertical-align: middle;"></video> Our Services</h2>
      </div>
      <div class="col">
        <ServicesBar />
      </div>
    </div>
    <!-- Hero Section -->


  
 
  
    <!-- Hero Section -->
    <section class="jumbotron text-center bg-gradient py-5">
      <div class="container">
        <h1 class="jumbotron-heading text-white animate__animated animate__fadeInDown">
          Welcome to BitBytesLab - Your Web Solutions Partner
        </h1>
        <p class="lead text-light animate__animated animate__fadeInUp">
          We are a leading software company and consulting agency specializing in providing cutting-edge web solutions.
          Our expertise includes ERP, CRM, WooCommerce, and WordPress development. We offer comprehensive services such as
          Website Development, Business Emails, SEO optimization, and more.
        </p>
        <p class="animate__animated animate__fadeInUp">
          <a href="/contactus" class="btn btn-primary btn-lg my-2 glow-on-hover">Contact Us Today</a>
          <a href="/aboutus" class="btn btn-outline-light btn-lg my-2">Learn More About Us</a>
        </p>
      </div>
    </section>

<!-- Two-Block Section -->


  <section class="py-5">
    <div class="container">
      <div class="row text-center mb-5">
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">💻</div>
          <h3 class="mb-2">Web Development</h3>
          <p class="text-muted mb-3">
            We create responsive, user-friendly websites tailored to your business needs.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">📈</div>
          <h3 class="mb-2">SEO Optimization</h3>
          <p class="text-muted mb-3">
            Boost your online presence with our expert SEO services.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">🔒</div>
          <h3 class="mb-2">Security Solutions</h3>
          <p class="text-muted mb-3">
            Protect your business with our robust security and data protection services.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">☁️</div>
          <h3 class="mb-2">Cloud Services</h3>
          <p class="text-muted mb-3">
            Scale your business with our reliable and secure cloud solutions.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">🤖</div>
          <h3 class="mb-2">Automation</h3>
          <p class="text-muted mb-3">
            Automate your workflows and boost productivity with our smart automation tools.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
        <div class="col-md-4 mb-4">
          <div class="emoji-icon mb-3">🛒</div>
          <h3 class="mb-2">E-Commerce</h3>
          <p class="text-muted mb-3">
            Grow your online store with our comprehensive e-commerce solutions.
          </p>
          <a href="/services" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  </section>
  
    <!-- Featured Services -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Our Featured Services</h2>
        <p class="text-center lead text-muted">
          BitBytesLab offers a wide array of services to help your business succeed online. From web development to SEO,
          we've got you covered.
        </p>
        <HomeServices />
      </div>
    </section>
  
    <!-- About Us Snippet -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">About BitBytesLab</h2>
        <HomeAboutUs />
      </div>
    </section>
  
    <!-- Recent Blog Posts -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">Recent Blog Posts</h2>
        <HomeBlogs />
      </div>
    </section>
  
    <!-- Contact Us Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <p class="text-center lead text-muted">
          Get in touch with BitBytesLab to discuss your project requirements and how we can help you achieve your business
          goals.
        </p>
        <HomeContactUs />
      </div>
    </section>
  </main>
  
  <Footer />
  
  <style>
    /* General Styles */
    body {
      font-family: 'Roboto', sans-serif;
      color: #333;
      background-color: #fff;
    }
    .emoji-icon {
    font-size: 4rem;
    line-height: 1;
  }
    main {
      padding: 20px 0;
    }
  
    .jumbotron {
      background: linear-gradient(90deg, #1e3c72, #2a5298);
      padding: 4rem 1rem;
      margin-bottom: 2rem;
    }
  
    .jumbotron-heading {
      font-size: 2.5rem;
      font-weight: 600;
    }
  
    .lead {
      font-size: 1.25rem;
      font-weight: 400;
    }
  
    .glow-on-hover {
      transition: box-shadow 0.3s ease;
    }
  
    .glow-on-hover:hover {
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
    }
  
    .bg-gradient {
      background: linear-gradient(90deg, #1e3c72, #2a5298);
    }
  
    .animate__animated {
      animation-duration: 1s;
    }
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .jumbotron-heading {
        font-size: 2rem;
      }
  
      .lead {
        font-size: 1rem;
      }
    }
  </style>