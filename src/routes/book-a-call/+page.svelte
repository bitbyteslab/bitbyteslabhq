<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';
  // Placeholder for booking logic
</script>

<Header />

<main class="funnel-container">
  <section class="headline-section">
    <h1>Book a Free Strategy Call</h1>
    <p>Unlock your business growth with a personalized consultation. Let us show you how we can help you achieve your goals!</p>
  </section>

  <section class="trust-section">
    <h3>Trusted by Leading Brands</h3>
    <div class="logos">
      <span>Logo1</span>
      <span>Logo2</span>
      <span>Logo3</span>
      <!-- Replace with real logos -->
    </div>
  </section>

  <section class="value-section">
    <h2>What You'll Get:</h2>
    <ul>
      <li>Expert advice tailored to your business</li>
      <li>Actionable strategies for growth</li>
      <li>No obligation, just value</li>
    </ul>
  </section>

  <section class="cta-section">
    <form class="booking-form">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" placeholder="Your Name" required />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" placeholder="you@email.com" required />
      <label for="message">What do you want to achieve?</label>
      <textarea id="message" name="message" placeholder="Briefly describe your goals"></textarea>
      <button type="submit">Book My Free Call</button>
    </form>
    <p class="disclaimer">No spam. No hard sell. Just a friendly chat about your business.</p>
  </section>

  <section class="testimonials-section">
    <h3>What Our Clients Say</h3>
    <blockquote>
      "The strategy call gave us clarity and direction. Highly recommended!"<br />
      <span>- Happy Client</span>
    </blockquote>
    <!-- Add more testimonials as needed -->
  </section>
</main>

<Footer />

<style>
.funnel-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}
.headline-section {
  text-align: center;
  margin-bottom: 24px;
}
.trust-section {
  text-align: center;
  margin-bottom: 24px;
}
.logos span {
  display: inline-block;
  margin: 0 8px;
  background: #eee;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9em;
}
.value-section {
  margin-bottom: 24px;
}
.value-section ul {
  padding-left: 20px;
}
.cta-section {
  margin-bottom: 24px;
  text-align: center;
}
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
}
.booking-form input,
.booking-form textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}
.booking-form button {
  background: #0070f3;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background 0.2s;
}
.booking-form button:hover {
  background: #005bb5;
}
.disclaimer {
  font-size: 0.9em;
  color: #666;
}
.testimonials-section {
  margin-top: 32px;
  text-align: center;
}
blockquote {
  background: #f9f9f9;
  border-left: 4px solid #0070f3;
  margin: 0 auto 12px auto;
  padding: 16px;
  border-radius: 6px;
  font-style: italic;
  max-width: 400px;
}
@media (max-width: 600px) {
  .funnel-container {
    padding: 16px 4px;
  }
}
</style>