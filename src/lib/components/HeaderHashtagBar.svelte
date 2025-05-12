<script>
  // No JS needed for auto marquee
</script>

<div class="header-hashtag-bar d-flex align-items-center">
  <div class="marquee-wrapper flex-grow-1 mx-2">
    <div class="marquee">
      <span class="badge badge-primary mx-1 hashtag-badge">🚀 #WebDev</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🔒 #Security</span>
      <span class="badge badge-primary mx-1 hashtag-badge">📈 #SEO</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">☁️ #Cloud</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🤖 #Automation</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🛒 #ECommerce</span>
      <span class="badge badge-primary mx-1 hashtag-badge">💡 #Innovation</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🧑‍💻 #Tech</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🌐 #Digital</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">📊 #Analytics</span>
      <!-- Duplicate for seamless loop -->
      <span class="badge badge-primary mx-1 hashtag-badge">🚀 #WebDev</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🔒 #Security</span>
      <span class="badge badge-primary mx-1 hashtag-badge">📈 #SEO</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">☁️ #Cloud</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🤖 #Automation</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🛒 #ECommerce</span>
      <span class="badge badge-primary mx-1 hashtag-badge">💡 #Innovation</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">🧑‍💻 #Tech</span>
      <span class="badge badge-primary mx-1 hashtag-badge">🌐 #Digital</span>
      <span class="badge badge-secondary mx-1 hashtag-badge">📊 #Analytics</span>
    </div>
  </div>
</div>

<style>
  .header-hashtag-bar {
    background: #f8f9fa;
    min-height: 38px;
    padding: 0 0.5rem;
    border-bottom: 1px solid #e0e0e0;
    overflow: hidden;
  }
  .marquee-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .marquee {
    display: flex;
    width: max-content;
    animation: marquee 22s linear infinite;
    align-items: center;
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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
  .badge-primary {
    background-color: #007bff;
    color: #fff;
  }
  .badge-secondary {
    background-color: #e9ecef;
    color: #343a40;
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