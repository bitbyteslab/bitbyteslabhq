<script>
  // Animated announcement text
  export let text = "12,000+ Success Stories & Counting - Let’s Drive Real Results for You!";
  let animated = false;
  // Optionally, you can add more props for future expansion
</script>

<div class="announcement-bar" aria-label="Announcement">
  <span class="animated-text" class:animated={animated}>{text}</span>
</div>

<style>
.announcement-bar {
  width: 100vw;
  min-height: 38px;
  background: linear-gradient(90deg, #1e3c72, #2a5298, #ffb347, #ff5e62, #1e3c72 90%);
  background-size: 300% 300%;
  animation: gradientMove 6s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', 'Roboto', Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #fff;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(30,60,114,0.08);
  z-index: 1100;
  position: relative;
  overflow: hidden;
}
.animated-text {
  background: linear-gradient(90deg, #fff 0%, #ffe259 30%, #ffa751 60%, #fff 100%);
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine 2.5s linear infinite;
  padding: 0 1rem;
  white-space: nowrap;
}
@keyframes gradientMove {
  0% {background-position: 0% 50%;}
  100% {background-position: 100% 50%;}
}
@keyframes textShine {
  0% {background-position: 0% 50%;}
  100% {background-position: 200% 50%;}
}
@media (max-width: 600px) {
  .announcement-bar {
    font-size: 0.98rem;
    min-height: 32px;
  }
  .animated-text {
    padding: 0 0.5rem;
  }
}
</style>