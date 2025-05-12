<script>
  import { onMount } from 'svelte';

  import HeaderHashtagBar from '$lib/components/HeaderHashtagBar.svelte';
  import HeaderBrand from '$lib/components/HeaderBrand.svelte';
  import HeaderNav from '$lib/components/HeaderNav.svelte';
  import HeaderMobileMenu from '$lib/components/HeaderMobileMenu.svelte';

  import HeaderServicesMenu from '$lib/components/HeaderServicesMenu.svelte';
  import HeaderActionButtons from '$lib/components/HeaderActionButtons.svelte';
  import menu from './menu.json';

  let showMobileMenu = false;

  function toggleMobileMenu() {
    showMobileMenu = !showMobileMenu;
  }

  function closeMobileMenu() {
    showMobileMenu = false;
  }
</script>
<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="BitBytesLab: Your web solutions partner. We offer cutting-edge web development, design, and marketing solutions for startups and businesses.">
    <meta name="keywords" content="web solutions, web development, web design, startups, responsive design, BitBytesLab">
    <meta name="author" content="BitBytesLab">
    <title>BitBytesLab - Web Solutions</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap">
</svelte:head>

<header class="header">
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top" style="background: linear-gradient(270deg, #1e3c72, #2a5298, #1e3c72); background-size: 200% 200%; animation: gradientAnimation 8s ease infinite;">
    <div class="container">
      <!-- Brand with Plain Text -->
      <HeaderBrand />
      <!-- Toggle Button for Mobile -->
      <button class="navbar-toggler" type="button" aria-label="Toggle navigation" on:click={toggleMobileMenu}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Desktop Menu -->
      <div class="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="/"><video src="https://cdn-icons-mp4.freepik.com/512/12525/12525029.mp4" autoplay loop muted playsinline style="width: 24px; height: 24px; background: white; border-radius: 50%; padding: 2px;"></video> घर</a>
          </li>
          <li class="nav-item">
            <HeaderServicesMenu />
          </li>
        </ul>
        <HeaderActionButtons />
      </div>
    </div>
  </nav>
  <div class="offers-bar d-none d-lg-block" style="background: linear-gradient(270deg, #002366, #0047ab, #002366); background-size: 200% 200%; animation: gradientAnimation 8s ease infinite; padding: 10px 0; text-align: center; color: white; font-weight: bold;">
    <div class="offer-container" style="display: flex; justify-content: space-around; align-items: center;">
      <style>
        .offer-item.static {
          animation: none !important;
        }

        .offer-item.movable {
          animation: floatLeftRight 6s ease-in-out infinite;
        }
      </style>
      <div class="offer-item" style="display: flex; align-items: center; gap: 8px;">
        🔥 <span style="font-size: 1.1em;">Offers Grab Now!</span> 🔥
      </div>
      <div class="offer-item" style="display: flex; align-items: center; gap: 8px;">
        🕸️ Web Starter @ ₹8999/- <span style="font-size: 0.9em;">(4 page business website)</span>
      </div>
      <div class="offer-item" style="display: flex; align-items: center; gap: 8px;">
        📚 Bulk Content Marketing - 50 articles @ ₹8000/-
      </div>
    </div>
  </div>
  <div class="mobile-promo-bars">
    <!-- <div class="promo-bar hot-sale-bar">
      <span class="hot-sale-item">🆕 New</span>
      <span class="hot-sale-item">🔥 Hot</span>
      <span class="hot-sale-item">🛍️ Sale</span>
      <span class="hot-sale-item">⏳ Limited</span>
    </div> -->
    <div class="promo-bar cta-bar">
      <button class="cta-btn">📞 Call Now</button>
      <button class="cta-btn">🎁 Grab Offer</button>
    </div>
    <div class="promo-bar offers-bar ">
      <span class="badge-item">🖥️ 4 Page Portfolio @ ₹8999/-</span>
      <span class="badge-item">✍️ 50 Articles @ ₹8999/-</span>
      <span class="badge-item">🤖 AI Automation Services</span>
      <span class="badge-item">📝 Quora/Blogspot Submissions</span>
    </div>
    <div class="promo-bar limited-offer">
      <button class="shake-btn">⏰ Limited Time! 📞 Call Now</button>
    </div>
  </div>
  <!-- Floating Mobile Menu -->
  <HeaderMobileMenu {showMobileMenu} {closeMobileMenu} />
  <!-- Hashtag bar below header -->
  <HeaderHashtagBar />
</header>

<style>
.services-menu {
  background: linear-gradient(270deg, #ffffff, #1e3c72, #2a5298, #ffffff);
  background-size: 200% 200%;
  animation: gradientAnimation 8s ease infinite;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mobile-promo-bars {
  display: none;
}

.cta-btn, .shake-btn {
  background: white;
  color: #1e3c72;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: bold;
  animation: shake 0.5s infinite;
}

.offers-bar, .limited-offer {
  padding: 10px 0;
  text-align: center;
  color: white;
  font-weight: bold;
  background: linear-gradient(270deg, #1e3c72, #2a5298);
  background-size: 200% 200%;
  animation: gradientAnimation 8s ease infinite;
}

@media (max-width: 991px) {
  .mobile-promo-bars {
    display: block;
    position: sticky;
    top: 70px;
    z-index: 1030;
  }
  
  .promo-bar {
    padding: 10px 0;
    text-align: center;
    color: white;
  }
  
  .hot-sale-bar, .moving-badge-bar {
    background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
    
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  
  .hot-sale-item {
    display: inline-block;
    margin: 0 15px;
    padding: 5px 15px;
    background: white;
    color: #1e3c72;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .cta-bar {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 10px;
  }
  
  .cta-btn {
    background: white;
    color: #1e3c72;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    animation: shake 0.5s infinite;
  }
}

.nav-link {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #1e3c72 !important;
  transition: color 0.3s, transform 0.2s;
  font-size: 1.08rem;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0 12px;
}
.nav-link:hover {
  color: #2a5298 !important;
  transform: translateY(-2px);
  text-decoration: underline;
}


:global(body) {
  padding-top: 70px;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

@keyframes scrollBadges {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

@keyframes floatDown {
  0% { transform: translateY(-30px) scale(0.98); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes floatLeftRight {
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
@media (min-width: 992px) {
  .mobile-menu, .mobile-menu-overlay {
    display: none !important;
  }
}
</style>