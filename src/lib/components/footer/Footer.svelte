<script>
  // Example blog and inner page links (could be dynamic in a real app)
  const blogs = [
    { title: 'Modern JS DSA Logics', url: '/blog/js-dsa-logics' },
    { title: 'SvelteKit Best Practices', url: '/blog/sveltekit-best-practices' },
    { title: 'Building with BitBytesLab', url: '/blog/building-with-bitbyteslab' }
  ];
  const pages = [
    { title: 'About Us', url: '/aboutus' },
    { title: 'Services', url: '/services' },
    { title: 'Contact', url: '/contactus' },
    { title: 'Careers', url: '/careers' }
  ];
</script>

<footer class="footer mt-auto py-5 text-light" style="background: linear-gradient(90deg, #0a1128 0%, #001f54 100%);">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4 mb-md-0">
        <h5 class="fw-bold">BitBytesLab</h5>
        <p class="small">
          BitBytesLab is a dynamic and innovative software company dedicated to providing top-notch web solutions. We specialize in ERP, CRM, WooCommerce, and WordPress, delivering tailored services for unique client needs.
        </p>
      </div>
      <div class="col-md-4 mb-4 mb-md-0">
        <h6 class="fw-semibold">Blogs</h6>
        <ul class="list-unstyled">
          {#each blogs as blog}
            <li><a class="text-decoration-none text-info" href={blog.url}>{blog.title}</a></li>
          {/each}
        </ul>
      </div>
      <div class="col-md-4">
        <h6 class="fw-semibold">Inner Pages</h6>
        <ul class="list-unstyled">
          {#each pages as page}
            <li><a class="text-decoration-none text-info" href={page.url}>{page.title}</a></li>
          {/each}
        </ul>
      </div>
    </div>
    <hr class="border-secondary my-4" />
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <span class="small">&copy; {new Date().getFullYear()} BitBytesLab. All rights reserved.</span>
      <span class="small">Made with <span style="color:#ff4081;">&#10084;</span> using SvelteKit & Bootstrap inspiration</span>
    </div>
  </div>
</footer>

<style>
  .footer {
    background-color: #0a1128;
    color: #fff;
    letter-spacing: 0.02em;
    font-size: 1rem;
  }
  .footer a.text-info {
    color: #4fc3f7;
    transition: color 0.2s;
  }
  .footer a.text-info:hover {
    color: #90caf9;
    text-decoration: underline;
  }
  .footer h5, .footer h6 {
    color: #90caf9;
  }
  @media (max-width: 767px) {
    .footer .row > div {
      text-align: center;
    }
  }
</style>