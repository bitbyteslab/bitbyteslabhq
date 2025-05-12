<script lang="ts">
  export let title = "BitBytesLab Blog";
  export let description = "Insights, tutorials, and updates from BitBytesLab.";
  let today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  const emoji = "📝";
  const catchy = "Stay curious. Stay updated. Discover tech insights!";
</script>

<div class="blog-sub-header">
  <div class="emoji-date">
    <span class="emoji" aria-label="blog emoji">{emoji}</span>
    <span class="date">{today}</span>
  </div>
  <h2>{title}</h2>
  <p class="catchy">{catchy}</p>
  <p>{description}</p>
</div>

<style>
.blog-sub-header {
  background: linear-gradient(90deg, #0a174e 0%, #19398a 60%, #0070f3 100%);
  color: #fff;
  padding: 1.2rem 1.2rem 0.7rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 1.3rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  text-align: center;
  position: relative;
}
.emoji-date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  opacity: 0.92;
}
.emoji {
  font-size: 1.6rem;
  transition: transform 0.2s;
  cursor: pointer;
}
.emoji:hover {
  transform: scale(1.18) rotate(-10deg);
}
.date {
  font-size: 1.05rem;
  color: #c7e0ff;
  font-weight: 500;
}
.blog-sub-header h2 {
  margin: 0 0 0.3rem 0;
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -1px;
}
.catchy {
  margin: 0 0 0.3rem 0;
  font-size: 1.08rem;
  font-weight: 500;
  color: #ffe066;
  text-shadow: 0 1px 4px rgba(10,23,78,0.13);
}
.blog-sub-header p {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 400;
  opacity: 0.93;
}
@media (max-width: 600px) {
  .blog-sub-header {
    padding: 0.8rem 0.7rem 0.5rem 0.7rem;
  }
  .blog-sub-header h2 {
    font-size: 1.25rem;
  }
  .catchy {
    font-size: 0.98rem;
  }
}
</style>