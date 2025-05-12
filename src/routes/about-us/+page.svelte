<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
</script>

<Header />

<main>
  <h2>About BitBytesLab</h2>
  <p>BitBytesLab is a leading web development and digital solutions agency, specializing in professional website development, e-commerce solutions, SEO optimization, and innovative digital strategies. Our mission is to empower businesses to thrive online with cutting-edge technology, creative design, and proven growth tactics.</p>
  <section class="company-details">
    <h3>Who We Are</h3>
    <p>Founded by passionate tech experts, BitBytesLab has delivered high-performance websites and digital products for startups, SMEs, and global brands. Our team combines technical excellence with creative vision to deliver measurable results and lasting partnerships.</p>
    <ul>
      <li>Expert Web Development & Design</li>
      <li>SEO & Digital Marketing Specialists</li>
      <li>Custom E-Commerce Solutions</li>
      <li>Client-Centric Approach</li>
      <li>Proven Track Record of Success</li>
    </ul>
  </section>
  <section class="resources">
    <h3>Explore More</h3>
    <nav class="about-nav">
      <a href="/blog" class="about-link">Our Blog</a>
      <a href="/wiki" class="about-link">Wiki</a>
      <a href="/faq" class="about-link">FAQ</a>
    </nav>
  </section>
  <section class="contact-details">
    <h3>Contact & Company Info</h3>
    <p>Email: <a href="mailto:info@bitbyteslab.com">info@bitbyteslab.com</a></p>
    <p>Location: Global (Remote-first)</p>
    <p>Follow us on <a href="https://linkedin.com/company/bitbyteslab" target="_blank">LinkedIn</a> | <a href="https://twitter.com/bitbyteslab" target="_blank">Twitter</a></p>
  </section>
  <section class="seo-keywords">
    <h4>Why Choose BitBytesLab?</h4>
    <ul>
      <li>Top-rated web development agency</li>
      <li>Best website developers for hire</li>
      <li>Professional e-commerce solutions</li>
      <li>SEO-optimized web design</li>
      <li>Custom digital strategy for business growth</li>
      <li>Trusted by leading brands worldwide</li>
    </ul>
  </section>
</main>

<Footer />

<style>
main {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}
.company-details, .resources, .contact-details, .seo-keywords {
  margin-bottom: 24px;
}
.about-nav {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}
.about-link {
  color: #0070f3;
  text-decoration: underline;
  font-weight: 500;
}
.about-link:hover {
  color: #005bb5;
}
ul {
  padding-left: 20px;
}
@media (max-width: 600px) {
  main {
    padding: 12px 2px;
  }
  .about-nav {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
  