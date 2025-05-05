<script>
    import { onMount } from 'svelte';
    let scrollContainer;
  
    function scrollLeft() {
      scrollContainer.scrollBy({ left: -120, behavior: 'smooth' });
    }
    function scrollRight() {
      scrollContainer.scrollBy({ left: 120, behavior: 'smooth' });
    }
  </script>
  
  <div class="header-hashtag-bar d-flex align-items-center">
    <button class="hashtag-scroll-btn" on:click={scrollLeft} aria-label="Scroll left">⏪</button>
    <div class="hashtag-scroll flex-grow-1 mx-2" bind:this={scrollContainer}>
      <span class="badge badge-primary mx-1 hashtag-badge">🚀 #WebDev</span>
      <span class="badge badge-success mx-1 hashtag-badge">🔒 #Security</span>
      <span class="badge badge-warning mx-1 hashtag-badge">📈 #SEO</span>
      <span class="badge badge-info mx-1 hashtag-badge">☁️ #Cloud</span>
      <span class="badge badge-danger mx-1 hashtag-badge">🤖 #Automation</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🛒 #ECommerce</span>
      <span class="badge badge-dark mx-1 hashtag-badge">💡 #Innovation</span>
      <span class="badge badge-light text-dark mx-1 hashtag-badge">🧑‍💻 #Tech</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🌐 #Digital</span>
      <span class="badge badge-success mx-1 hashtag-badge">📊 #Analytics</span>
      <span class="badge badge-light text-dark mx-1 hashtag-badge">🧑‍💻 #Tech</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🌐 #Digital</span>
      <span class="badge badge-success mx-1 hashtag-badge">📊 #Analytics</span>
    </div>
    <button class="hashtag-scroll-btn" on:click={scrollRight} aria-label="Scroll right">⏩</button>
  </div>
  
  <style>
    .header-hashtag-bar {
      background: #f8f9fa;
      min-height: 38px;
      padding: 0 0.5rem;
      border-bottom: 1px solid #e0e0e0;
      overflow: hidden;
    }
    .hashtag-scroll {
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .hashtag-scroll::-webkit-scrollbar {
      display: none;
    }
    .hashtag-badge {
      font-size: 1rem;
      padding: 0.5em 1em;
      white-space: nowrap;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      margin-bottom: 0;
      cursor: pointer;
      transition: transform 0.15s;
    }
    .hashtag-badge:hover {
      transform: scale(1.08);
      opacity: 0.9;
    }
    .hashtag-scroll-btn {
      background: none;
      border: none;
      font-size: 1.3rem;
      color: #444;
      padding: 0 0.5em;
      cursor: pointer;
      transition: color 0.2s;
      outline: none;
    }
    .hashtag-scroll-btn:hover {
      color: #007bff;
    }
    @media (max-width: 768px) {
      .header-hashtag-bar {
        min-height: 32px;
        font-size: 0.95rem;
      }
      .hashtag-badge {
        font-size: 0.95rem;
        padding: 0.4em 0.8em;
      }
    }
  </style>