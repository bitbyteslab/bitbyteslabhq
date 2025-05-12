<script>
  export let services = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "SEO & Marketing", href: "/services/seo-marketing" },
    { label: "E-Commerce", href: "/services/e-commerce" },
    { label: "Business Emails", href: "/services/business-emails" }
  ];
  let showDropdown = false;
  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  function closeDropdown() {
    showDropdown = false;
  }
</script>
<div class="nav-item dropdown services-menu" on:mouseleave={closeDropdown}>
  <a class="nav-link dropdown-toggle" href="#" role="button" aria-haspopup="true" aria-expanded={showDropdown} on:click|preventDefault={toggleDropdown}>
    Services <i class="fas fa-angle-down ml-1"></i>
  </a>
  {#if showDropdown}
    <div class="dropdown-menu show">
      {#each services as service}
        <a class="dropdown-item" href={service.href}>{service.label}</a>
      {/each}
    </div>
  {/if}
</div>
<style>
.services-menu {
  position: relative;
}
.dropdown-menu {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(30,60,114,0.13);
  z-index: 1200;
  padding: 0.5rem 0;
  margin-top: 0.3rem;
}
.dropdown-item {
  color: #1e3c72;
  padding: 0.6rem 1.2rem;
  font-size: 1.05rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}
.dropdown-item:hover {
  background: #f1f5fa;
  color: #2a5298;
}
.dropdown-toggle::after {
  display: none;
}
</style>