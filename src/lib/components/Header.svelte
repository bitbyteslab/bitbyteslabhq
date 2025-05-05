<script>
  import { onMount } from 'svelte';
  import HeaderHashtagBar from '$lib/components/HeaderHashtagBar.svelte';

  let showDropdown = false;

  function toggleDropdown(event) {
    event.preventDefault();
    showDropdown = !showDropdown;
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


<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top" style="background: linear-gradient(90deg, #1e3c72, #2a5298);">
    <div class="container">
      <!-- Brand with Logo -->
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="https://via.placeholder.com/40" alt="" class="mr-2" />
        <span class="font-weight-bold">BitBytesLab</span>
      </a>

      <!-- Toggle Button for Mobile -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/aboutus">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blogs">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact Us</a>
          </li>
        </ul>

        <!-- Get a Quote Button -->
        <button class="btn btn-outline-light ml-lg-3 shadow-sm">Get a Quote</button>
      </div>
    </div>
  </nav>
  <!-- Hashtag bar below header -->
  <HeaderHashtagBar />
</header>

<style>
/* Top bar styles */
.top-bar {
  background: #222;
  color: #fff;
  font-size: 0.95rem;
  height: 28px;
  min-height: 28px;
}
.top-link {
  color: #ffe066;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 500;
  font-size: 0.97rem;
}
.top-link:hover {
  color: #fffbe6;
  text-decoration: underline;
}
/* ...existing styles... */
.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.navbar-brand {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}
.nav-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8) !important;
  transition: color 0.3s ease, transform 0.2s ease;
}
.nav-link:hover {
  color: #fff !important;
  transform: translateY(-2px);
}
.nav-item.active .nav-link {
  color: #fff !important;
  font-weight: 600;
}
.btn-outline-light {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
}
.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: translateY(-2px);
}
:global(body) {
  padding-top: 70px;
}
</style>