<script>
    import { Card, Button, Row, Col , Badge , CardBody } from "@sveltestrap/sveltestrap";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';
    // Dynamically generated services from subfolders
    const serviceFolders = [
      "best-website-designing-companies-in-india-for-small-business",
      "best-website-designing-company-delhi-india",
      "best-wordpress-website-designing-company-in-delhi-ncr",
      "custom-web-application-development-services-in-india-using-nodejs",
      "custom-wordpress-website-designing-services-in-noida",
      "popular-internet-website-designers-in-delhi",
      "professional-website-development-services-hire-website-developers",
      "responsive-website-design-packages-in-india-mobile-friendly-websites",
      "responsive-website-designing-services-in-india",
      "top-rated-web-design-agency-in-india-award-winning-website-design-portfolio",
      "top-web-development-companies-in-india-for-startups",
      "top-website-designing-companies-in-delhi-near-me",
      "website-design-services-in-delhi-custom-website-design-company",
      "wordpress-ecommerce-website-development-services-in-india",
      "wordpress-plugin-development-services-in-delhi",
      "wordpress-website-migration-services-to-http-https",
      "wordpress-website-troubleshooting-and-maintenance-services"
    ];
    const services = serviceFolders.map(folder => ({
      title: folder.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      description: `Learn more about our ${folder.replace(/-/g, ' ')} service.`,
      icon: "bi bi-briefcase",
      link: `/services/${folder}`
    }));
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
      content="Explore our wide range of services including Website Development, SEO Optimization, ERP Solutions, CRM Services, Business Emails, Node.js Development, Web Scraping, and Web Hosting."
    />
    <meta
      name="keywords"
      content="Website Development, SEO Optimization, ERP Solutions, CRM Services, Business Emails, Node.js Development, Web Scraping, Web Hosting, BitBytesLab"
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
                  <Button color="primary" outline href={service.link}>Learn More</Button>
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