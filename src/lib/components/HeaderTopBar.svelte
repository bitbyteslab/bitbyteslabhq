<script>
  export let phone = "+1-234-567-8901";
  export let whatsapp = "+1-234-567-8901";
  export let email = "info@bitbyteslab.com";
  export let facebook = "https://facebook.com/bitbyteslab";
  export let twitter = "https://twitter.com/bitbyteslab";
  export let linkedin = "https://linkedin.com/company/bitbyteslab";
</script>
<div class="header-top-bar d-none d-md-flex justify-content-between align-items-center px-3 py-1">
  <div class="contact-info">
    <span class="mr-3"><i class="fas fa-phone-alt"></i> <a href={`tel:${phone}`}>{phone}</a></span>
    <span class="mr-3"><i class="fab fa-whatsapp"></i> <a href={`https://wa.me/${whatsapp.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener">WhatsApp</a></span>
    <span class="mr-3"><i class="fas fa-envelope"></i> <a href={`mailto:${email}`}>{email}</a></span>
  </div>
  <div class="social-links">
    <a href={facebook} target="_blank" rel="noopener" aria-label="Facebook" class="mx-2"><i class="fab fa-facebook-f"></i></a>
    <a href={twitter} target="_blank" rel="noopener" aria-label="Twitter" class="mx-2"><i class="fab fa-twitter"></i></a>
    <a href={linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" class="mx-2"><i class="fab fa-linkedin-in"></i></a>
  </div>
</div>
<style>
.header-top-bar {
  background: #f8f9fa;
  font-size: 0.97rem;
  color: #1e3c72;
  border-bottom: 1px solid #e9ecef;
  z-index: 1100;
}
.header-top-bar a {
  color: #1e3c72;
  text-decoration: none;
  transition: color 0.2s;
}
.header-top-bar a:hover {
  color: #2a5298;
  text-decoration: underline;
}
.header-top-bar .social-links a {
  font-size: 1.1rem;
  color: #1e3c72;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.header-top-bar .social-links a:hover {
  color: #2a5298;
}
@media (max-width: 767.98px) {
  .header-top-bar {
    display: none !important;
  }
}
</style>