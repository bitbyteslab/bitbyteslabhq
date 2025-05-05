<script>
  // Replace with actual content or fetch from an API
  const aboutUsContent = `
    BitBytesLab is a creative, new-age web agency dedicated to delivering innovative digital solutions. 
    We blend technology, creativity, and strategy to help brands stand out in the digital world. 
    Our team crafts modern websites, apps, and experiences that drive results and delight users.
  `;
</script>

<div class="about-us-bg">
  <div class="about-us-overlay">
    <h2 class="about-heading mb-3">We Are a Creative New Age Web Agency</h2>
    <p class="mb-4">{aboutUsContent}</p>
    <a href="/aboutus" class="btn btn-secondary">Read More</a>
  </div>
</div>

<style>
  .about-us-bg {
    width: 100vw;
    min-height: 320px;
    background: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80') center center/cover no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
  .about-us-overlay {
    background: rgba(255, 251, 230, 0.92);
    border-radius: 14px;
    padding: 2.5rem 2rem;
    max-width: 700px;
    width: 90%;
    text-align: center;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    margin: 2rem 0;
  }
  .about-heading {
    font-weight: 700;
    font-size: 2rem;
    color: #333;
  }
  @media (max-width: 600px) {
    .about-us-bg {
      min-height: 220px;
    }
    .about-us-overlay {
      padding: 1.2rem 0.7rem;
      font-size: 1rem;
    }
    .about-heading {
      font-size: 1.2rem;
    }
  }
</style>