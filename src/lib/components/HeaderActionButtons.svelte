<script>
  export let buttons = [
    // Removed: { label: "Free Website Audit", href: "/free-website-audit", class: "btn-primary" },
    
    { label: "About Us", href: "/about-us", class: "btn-outline-light" },
    { label: "Resources", href: "/resources", class: "btn-outline-light" },
    { label: "Book a Call", href: "/book-a-call", class: "btn-primary", icon: "https://img.icons8.com/?size=100&id=58pGdHAS6Va3&format=png&color=000000" },
  ];
</script>
<div class="header-action-buttons d-flex align-items-center">
  {#each buttons as btn}
    <a href={btn.href} class={`btn mx-1 ${btn.class} shadow-sm action-btn d-flex align-items-center`}>{#if btn.icon}<img src={btn.icon} alt="" class="me-2" style="width: 20px; height: 20px" />{/if}{btn.label}</a>
  {/each}
</div>
<style>
.header-action-buttons .action-btn {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.02rem;
  border-radius: 8px;
  padding: 0.45rem 1.2rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.header-action-buttons .btn-primary {
  background: linear-gradient(90deg, #FF416C, #FF4B2B);
  color: #fff;
  border: none;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.header-action-buttons .btn-primary:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}
.header-action-buttons .btn-primary:hover {
  background: #2a5298;
  color: #fff;
  transform: translateY(-2px);
}
.header-action-buttons .btn-outline-light {
  border: 2px solid #1e3c72;
  color: #1e3c72;
  background: #fff;
}
.header-action-buttons .btn-outline-light:hover {
  background: #2a5298;
  color: #fff;
  transform: translateY(-2px);
}
@media (max-width: 991.98px) {
  .header-action-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  .header-action-buttons .action-btn {
    margin: 0.3rem 0;
    width: 100%;
  }
}
</style>