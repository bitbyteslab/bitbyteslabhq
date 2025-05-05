
<script>
  // You can fetch data from an API here if needed
  const services = [
    { name: 'Website Development', description: 'Custom website development tailored to your needs.', emoji: '💻', color: '#ffe066' },
    { name: 'SEO Optimization', description: 'Improve your search engine ranking with our SEO services.', emoji: '📈', color: '#b2f2ff' },
    { name: 'ERP Solutions', description: 'Enterprise Resource Planning solutions to streamline your business.', emoji: '🗂️', color: '#ffd6e0' },
    { name: 'CRM Solutions', description: 'Customer Relationship Management to enhance customer engagement.', emoji: '🤝', color: '#d3f9d8' },
    { name: 'Business Emails', description: 'Professional business email solutions.', emoji: '✉️', color: '#fff3bf' },
    { name: 'Node.js Development', description: 'Scalable and efficient Node.js application development.', emoji: '🟢', color: '#d0ebff' },
    { name: 'Web Scraping', description: 'Data extraction services to gather valuable information.', emoji: '🕸️', color: '#e7c6ff' },
    { name: 'Web Hosting', description: 'Reliable web hosting solutions for your website.', emoji: '🌐', color: '#c3fae8' },
  ];
</script>

<div class="row">
  {#each services as service}
    <div class="col-md-6 mb-4">
      <div class="card service-card h-100">
        <div class="card-body d-flex align-items-center">
          <div class="service-emoji me-3" style="background: {service.color}">{service.emoji}</div>
          <div>
            <h5 class="card-title mb-1">{service.name}</h5>
            <p class="card-text mb-2">{service.description}</p>
            <a href="/services/{service.name.toLowerCase().replace(' ', '-')}" class="btn btn-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .service-card {
    transition: transform 0.18s, box-shadow 0.18s;
    cursor: pointer;
  }
  .service-card:hover {
    transform: translateY(-6px) scale(1.025);
    box-shadow: 0 8px 24px rgba(0,0,0,0.10);
    border-color: #ffe066;
  }
  .service-emoji {
    font-size: 2.2rem;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    margin-right: 1rem;
    flex-shrink: 0;
    transition: background 0.2s;
  }
  .card-title {
    font-weight: 600;
  }
  @media (max-width: 600px) {
    .service-emoji {
      font-size: 1.6rem;
      width: 38px;
      height: 38px;
      margin-right: 0.7rem;
    }
    .card-body {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>