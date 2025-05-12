<script>

  import { fade, fly } from 'svelte/transition';
  import menu from './menu.json';
  export let showMobileMenu = false;
  export let closeMobileMenu = () => {};
</script>
{#if showMobileMenu}
  {#if showMobileMenu}
  <div class="mobile-menu-overlay" on:click={closeMobileMenu}></div>
{/if}
  <nav class="mobile-menu bg-white shadow {showMobileMenu ? 'show' : ''}">
    <button class="close-btn" on:click={closeMobileMenu}>✕</button>
    <div class="container-fluid p-0">
     
      <div class="table-responsive">
        <table class="table table-borderless mb-0" style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); width: 100%; margin: 0 auto; border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);">
          <tbody>
            <tr>
              <td colspan="2" class="text-center py-3">
                <h3 class="mb-3" style="font-size: 2rem; font-weight: bold; color: #1e3c72;">Main Menu</h3>
              </td>
            </tr>
            {#each menu as item (item.label)}
            <tr>
              <td>
                <a href={item.href} class="mobile-link" on:click={closeMobileMenu} style="font-size: 1.2rem; font-weight: 500; color: #1e3c72;">{item.label}</a>
              </td>
            </tr>
            {/each}
            
            
          </tbody>
        </table>
      </div>
    </div>
  </nav>
{/if}

<style>
.mobile-menu-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 60, 114, 0.5);
  z-index: 1040;
}

.moving-badge-bar {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0;
  background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
  margin-bottom: 15px;
  animation: scrollBadges 20s linear infinite;
}

.badge-item {
  display: inline-block;
  margin: 0 15px;
  padding: 5px 15px;
  background: white;
  color: #1e3c72;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.offer-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  border-radius: 20px;
  color: white;
  font-weight: bold;
}

.hot-emoji {
  font-size: 1.5rem;
}

.offer-text {
  font-size: 1.2rem;
}

.badge {
  background: white;
  color: #ff4757;
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
}
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: #fff;
  z-index: 1050;
  padding: 2rem;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
}

.mobile-menu.show {
  transform: translateX(0);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #1e3c72;
}

.shake-btn {
  animation: shake 0.5s infinite;
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes scrollBadges {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

</style>