// Example scroll or hover animations
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = 'crimson';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = 'white';
  });
});


// Example: Scroll animation placeholder
window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});