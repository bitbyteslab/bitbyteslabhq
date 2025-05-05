<script>
    import {
      Accordion,
      AccordionItem,
      Badge,
      Row,
      Col,
      Button,
      Card,
      CardBody,
      CardTitle,
      CardText,
      ListGroup,
      ListGroupItem,
    } from "@sveltestrap/sveltestrap";
  
    // SEO Keywords grouped by category
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
      "General": [
        "Domain Name Services",
        "Email Services",
        "Billing Solutions",
        "Sales Solutions",
        "Affordable Web Solutions",
        "Simple Web Solutions",
        "SSL Secure",
        "Trusted Partner",
      ],
    };
  
    // Service badges with different colors
    const services = [
      { name: "CRM Services", color: "primary" },
      { name: "ERP Services", color: "success" },
      { name: "WordPress Services", color: "info" },
      { name: "Web Scraping", color: "warning" },
      { name: "Data Scraping", color: "danger" },
      { name: "VPS Migration", color: "secondary" },
      { name: "Website Migration", color: "light" },
      { name: "Bulk Data Analysis", color: "dark" },
      { name: "OCR Solutions", color: "primary" },
      { name: "Bulk PDF Compression", color: "success" },
      { name: "Bulk Image Compression", color: "info" },
      { name: "Server Space Optimization", color: "warning" },
    ];
  </script>
  
  <footer class="bg-dark text-white py-5">
    <div class="container">
      <!-- Combined Row for Services, Contact, Follow Us, and Trusted Partner -->
      <Row class="mb-4">
        <!-- Services Section -->
        <Col md="3" class="mb-4">
          <h5 class="text-uppercase">Our Services</h5>
          <div class="d-flex flex-wrap gap-2">
            {#each services as service}
              <Badge color={service.color} class="me-2 mb-2">
                {service.name}
              </Badge>
            {/each}
          </div>
        </Col>
  
        <!-- Contact Section -->
        <Col md="3" class="mb-4">
          <h5 class="text-uppercase">Contact Us</h5>
          <ListGroup flush>
            <ListGroupItem class="bg-dark text-white border-0">
              <i class="bi bi-geo-alt me-2"></i>
              Daftar Co-working, Gujranwalan Town, Delhi, India
            </ListGroupItem>
            <ListGroupItem class="bg-dark text-white border-0">
              <i class="bi bi-phone me-2"></i>
              <a href="tel:07838989113" class="text-white">078389 89113</a>
            </ListGroupItem>
            <ListGroupItem class="bg-dark text-white border-0">
              <i class="bi bi-envelope me-2"></i>
              <a href="mailto:hello@bitbyteslab.com" class="text-white"
                >hello@bitbyteslab.com</a
              >
            </ListGroupItem>
          </ListGroup>
        </Col>
  
        <!-- Follow Us Section -->
        <Col md="3" class="mb-4">
          <h5 class="text-uppercase mb-3">Follow Us</h5>
          <div class="d-flex flex-wrap gap-2">
            <a href="https://www.facebook.com/bitbyteslab/" target="_blank">
              <Badge color="primary" class="me-2 mb-2 fs-5">Facebook</Badge>
            </a>
            <a href="https://github.com/BitBytesLabHQ" target="_blank">
              <Badge color="secondary" class="me-2 mb-2 fs-5">GitHub</Badge>
            </a>
            <a href="https://bitbyteslab.blogspot.com/" target="_blank">
              <Badge color="success" class="me-2 mb-2 fs-5">Blogspot</Badge>
            </a>
            <a href="https://bitbyteslabhq.medium.com/" target="_blank">
              <Badge color="warning" class="me-2 mb-2 fs-5">Medium</Badge>
            </a>
            <a href="https://bitbyteslabhq.wordpress.com/" target="_blank">
              <Badge color="info" class="me-2 mb-2 fs-5">WordPress</Badge>
            </a>
            <a href="https://tumblr.com/bitbyteslab" target="_blank">
              <Badge color="danger" class="me-2 mb-2 fs-5">Tumblr</Badge>
            </a>
          </div>
        </Col>
  
        <!-- Trusted Partner Section -->
        <Col md="3" class="mb-4">
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">Trusted Partner</CardTitle>
              <CardText>
                We work with top-tier partners to deliver exceptional services.
              </CardText>
              <div class="d-flex gap-3">
                <img
                  src="https://via.placeholder.com/75"
                  alt="Trusted Partner Badge"
                  class="img-fluid"
                />
                <img
                  src="https://via.placeholder.com/75"
                  alt="SSL Secure Badge"
                  class="img-fluid"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
  
      <!-- Horizontal Rule for Separation -->
      <hr class="bg-light" />
  
      <!-- SEO Keywords Section -->
      <!-- <Row class="mt-4">
        <Col>
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">SEO Keywords</CardTitle>
              <div class="d-flex flex-wrap align-items-center">
                {#each Object.entries(seoKeywords) as [category, keywords], i}
                  <Badge color="primary" class="me-2 mb-1 text-uppercase">
                    {category}:
                  </Badge>
  
                  {#each keywords as keyword}
                    <Badge color="info" class="me-2 mb-1">
                      {keyword}
                    </Badge>
                  {/each}
                {/each}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row> -->
      <Row class="mt-4">
        <Col>
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">SEO Keywords</CardTitle>
              <Accordion flush>
                {#each Object.entries(seoKeywords) as [category, keywords], i}
                <AccordionItem>
                  <span slot="header" class="text-uppercase small-header">
                    🏷️ {category}
                  </span>
                  <div class="d-flex flex-wrap align-items-center mt-2">
                    {#each keywords as keyword}
                      <Badge color="info" class="me-2 mb-1">
                        {keyword}
                      </Badge>
                    {/each}
                  </div>
                </AccordionItem>
              {/each}
              </Accordion>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">SEO Keywords</CardTitle>
              <Accordion flush>
                {#each Object.entries(seoKeywords) as [category, keywords], i}
                <AccordionItem>
                  <span slot="header" class="text-uppercase small-header">
                    🏷️ {category}
                  </span>
                  <div class="d-flex flex-wrap align-items-center mt-2">
                    {#each keywords as keyword}
                      <Badge color="info" class="me-2 mb-1">
                        {keyword}
                      </Badge>
                    {/each}
                  </div>
                </AccordionItem>
              {/each}
              </Accordion>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">SEO Keywords</CardTitle>
              <Accordion flush>
                {#each Object.entries(seoKeywords) as [category, keywords], i}
                <AccordionItem>
                  <span slot="header" class="text-uppercase small-header">
                    🏷️ {category}
                  </span>
                  <div class="d-flex flex-wrap align-items-center mt-2">
                    {#each keywords as keyword}
                      <Badge color="info" class="me-2 mb-1">
                        {keyword}
                      </Badge>
                    {/each}
                  </div>
                </AccordionItem>
              {/each}
              </Accordion>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card class="bg-dark border-0">
            <CardBody>
              <CardTitle class="text-uppercase">SEO Keywords</CardTitle>
              <Accordion flush>
                {#each Object.entries(seoKeywords) as [category, keywords], i}
                <AccordionItem>
                  <span slot="header" class="text-uppercase small-header">
                    🏷️ {category}
                  </span>
                  <div class="d-flex flex-wrap align-items-center mt-2">
                    {#each keywords as keyword}
                      <Badge color="info" class="me-2 mb-1">
                        {keyword}
                      </Badge>
                    {/each}
                  </div>
                </AccordionItem>
              {/each}
              </Accordion>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <!-- Horizontal Rule for Separation -->
      <hr class="bg-light" />
  
      <!-- Copyright Section -->
      <Row class="mt-4">
        <Col class="text-center">
          <p class="mb-0">
            © {new Date().getFullYear()} BitBytesLab. All rights reserved. |
            Software Company | Consulting Agency | Information Technology Company
          </p>
        </Col>
      </Row>
    </div>
  </footer>
  
  <style>
    footer a {
      color: white !important;
      text-decoration: none;
      transition: color 0.3s ease;
    }
  
    footer a:hover {
      color: #ccc !important;
    }
    .small-header {
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
    .badge {
      cursor: pointer;
      transition: transform 0.2s ease;
    }
  
    .badge:hover {
      transform: scale(1.05);
    }
  
    /* Enforce badge colors */
    .badge.bg-primary {
      background-color: #007bff !important;
    }
    .badge.bg-success {
      background-color: #28a745 !important;
    }
    .badge.bg-info {
      background-color: #17a2b8 !important;
    }
    .badge.bg-warning {
      background-color: #ffc107 !important;
    }
    .badge.bg-danger {
      background-color: #dc3545 !important;
    }
    .badge.bg-secondary {
      background-color: #6c757d !important;
    }
    .badge.bg-light {
      background-color: #f8f9fa !important;
      color: #000 !important;
    }
    .badge.bg-dark {
      background-color: #343a40 !important;
    }
  
    /* Full-width SEO Keywords Section */
    .container {
      max-width: 100%;
      padding: 0 15px;
    }
  </style>