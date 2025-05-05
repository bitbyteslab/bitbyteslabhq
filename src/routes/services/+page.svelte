<script>
    import { Card, Button, Row, Col , Badge , CardBody } from "@sveltestrap/sveltestrap";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    // Services Data
    const services = [
      {
        title: "Website Development",
        description: "Custom website development tailored to your needs.",
        icon: "bi bi-code-slash",
      },
      {
        title: "SEO Optimization",
        description: "Improve your search engine ranking with our SEO services.",
        icon: "bi bi-search",
      },
      {
        title: "ERP Solutions",
        description: "Enterprise Resource Planning solutions to streamline your business.",
        icon: "bi bi-gear",
      },
      {
        title: "CRM Solutions",
        description: "Customer Relationship Management to enhance customer engagement.",
        icon: "bi bi-people",
      },
      {
        title: "Business Emails",
        description: "Professional business email solutions.",
        icon: "bi bi-envelope",
      },
      {
        title: "Node.js Development",
        description: "Scalable and efficient Node.js application development.",
        icon: "bi bi-node",
      },
      {
        title: "Web Scraping",
        description: "Data extraction services to gather valuable information.",
        icon: "bi bi-database",
      },
      {
        title: "Web Hosting",
        description: "Reliable web hosting solutions for your website.",
        icon: "bi bi-hdd",
      },
    ];
  
    // SEO Keywords
    const seoKeywords = {
      "Web Services": [
        "CRM Services",
        "ERP Services",
        "WordPress Services",
        "Web Scraping",
        "Data Scraping",
        "VPS Migration",
        "Website Migration",
        "WordPress Website Migration",
      ],
      "Data Solutions": [
        "Bulk Data Scraping",
        "Bulk Data Analysis",
        "OCR Solutions",
        "Bulk PDF Compression",
        "Bulk Image Compression",
        "JPEG Compression",
        "PNG Compression",
      ],
      "Optimization": [
        "Save Server Space",
        "Reduce Server Space",
        "Server Optimization",
        "Fixed Hacked Website",
      ],
    };
  </script>
    <Header />
  <svelte:head>
    <title>Our Services - BitBytesLab</title>
    <meta
      name="description"
      content="Explore our wide range of services including Website Development, SEO Optimization, ERP Solutions, CRM Solutions, Business Emails, Node.js Development, Web Scraping, and Web Hosting."
    />
    <meta
      name="keywords"
      content="Website Development, SEO Optimization, ERP Solutions, CRM Solutions, Business Emails, Node.js Development, Web Scraping, Web Hosting, BitBytesLab"
    />
  </svelte:head>
  
  <main>
    <!-- Hero Section -->
    <section class="jumbotron text-center bg-gradient py-5">
      <div class="container">
        <h1 class="display-4 text-white">Our Featured Services</h1>
        <p class="lead text-light">
          BitBytesLab offers a wide array of services to help your business succeed online. From web development to SEO,
          we've got you covered.
        </p>
      </div>
    </section>
  
    <!-- Services Listing -->
    <section class="py-5">
      <div class="container">
        <Row>
          {#each services as service}
            <Col md="6" lg="4" class="mb-4">
              <Card class="h-100 text-center hover-effect">
                <CardBody>
                  <i class={`${service.icon} display-4 text-primary mb-3`}></i>
                  <h3 class="h5">{service.title}</h3>
                  <p class="text-muted">{service.description}</p>
                  <Button color="primary" outline>Learn More</Button>
                </CardBody>
              </Card>
            </Col>
          {/each}
        </Row>
      </div>
    </section>
  
    <!-- About BitBytesLab -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-4">About BitBytesLab</h2>
        <p class="text-center lead text-muted">
          BitBytesLab is a dynamic and innovative software company dedicated to providing top-notch web solutions. With a
          focus on ERP, CRM, WooCommerce, and WordPress, we deliver tailored services that meet the unique needs of our
          clients. Our team is committed to excellence and customer satisfaction.
        </p>
      </div>
    </section>
  
    <!-- SEO Keywords Section -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">SEO Keywords</h2>
        <div class="d-flex flex-wrap justify-content-center">
          {#each Object.entries(seoKeywords) as [category, keywords]}
            <div class="mb-4">
              <h3 class="h5 text-primary">{category}</h3>
              <div class="d-flex flex-wrap gap-2">
                {#each keywords as keyword}
                  <Badge color="info">{keyword}</Badge>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </main>
  <Footer />
  <style>
    /* Custom Styles */
    .bg-gradient {
      background: linear-gradient(90deg, #1e3c72, #2a5298);
    }
  
    .display-4 {
      font-size: 2.5rem;
      font-weight: 600;
    }
  
    .lead {
      font-size: 1.25rem;
      font-weight: 400;
    }
  
    .hover-effect {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .hover-effect:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  
    .btn-primary {
      background-color: #1e3c72;
      border-color: #1e3c72;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
  
    .btn-primary:hover {
      background-color: #2a5298;
      transform: translateY(-2px);
    }
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .display-4 {
        font-size: 2rem;
      }
  
      .lead {
        font-size: 1rem;
      }
    }
  </style>