const nav = document.querySelector('.site-nav');
const updateNav = () => nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.72);
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

// Avoid overlapping audio when visitors move between showcase examples.
const videos = [...document.querySelectorAll('video')];
videos.forEach((video) => {
  video.addEventListener('play', () => {
    videos.forEach((other) => { if (other !== video && !other.paused) other.pause(); });
  });
});
