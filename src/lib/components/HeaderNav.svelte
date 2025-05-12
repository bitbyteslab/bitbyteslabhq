<script>
  import menu from './menu.json';
  export let closeMobileMenu = () => {};
  export let isMobile = false;
</script>

<!-- Desktop Navigation -->
{#if !isMobile}
  <ul class="navbar-nav ml-auto">
    {#each menu as item (item.label)}
      {#if !item.isButton}
        <li class="nav-item">
          <a class="nav-link" href={item.href}>{item.label}</a>
        </li>
      {/if}
    {/each}
  </ul>
  {#each menu as item (item.label)}
    {#if item.isButton}
      <a href={item.href} class="btn btn-outline-light ml-lg-3 shadow-sm quote-shake">{item.label}</a>
    {/if}
  {/each}
{:else}
  <ul>
    {#each menu as item (item.label)}
      <li>
        {#if item.isButton}
          <a href={item.href} class="btn btn-primary w-100 my-2 quote-shake" on:click={closeMobileMenu}>{item.label}</a>
        {:else}
          <a href={item.href} class="mobile-link" on:click={closeMobileMenu}>{item.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>

.btn-outline-light {
  border: 2px solid #fff;
  color: #fff;
  background: transparent;
  transition: all 0.3s ease;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
}
.btn-outline-light:hover, .btn-primary:hover {
  background-color: #fff;
  color: #1e3c72 !important;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.btn-primary {
  background: #fff;
  color: #1e3c72;
  border: 2px solid #1e3c72;
}
.quote-shake {
  animation: shake 1.2s infinite cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes shake {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
  100% { transform: none; }
}
</style>