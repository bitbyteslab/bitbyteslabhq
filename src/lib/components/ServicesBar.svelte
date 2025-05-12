<script>
  import services from '../data/services.json';
  import { onMount } from 'svelte';
  
  let isMobile = false;
  
  onMount(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });
  
  function checkScreenSize() {
    isMobile = window.innerWidth < 768;
  }
</script>

<div class="services-bar {isMobile ? 'mobile-layout' : 'd-flex justify-content-center align-items-center'} px-3 py-2 bg-light">
  {#each services.services as service}
    <div class="dropdown mx-2">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        {service.name}
      </button>
      <ul class="dropdown-menu">
        {#each service.children as child}
          <li><a class="dropdown-item" href="#">{child}</a></li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
.services-bar {
  border-bottom: 1px solid #e9ecef;
  z-index: 1000;
}

.mobile-layout {
  flex-direction: column;
  align-items: stretch;
}

.dropdown-menu {
  min-width: 200px;
}

@media (max-width: 768px) {
  .dropdown {
    width: 100%;
    margin: 0.25rem 0;
  }
  .dropdown-toggle {
    width: 100%;
    text-align: left;
    padding: 0.75rem 1rem;
  }
  .dropdown-menu {
    position: static;
    border: none;
    box-shadow: none;
    width: 100%;
  }
}
</style>