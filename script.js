const segments = document.querySelectorAll('.segment');
const numSegments = segments.length;
let mouseX = 0, mouseY = 0;
let delay = 0.1;

// Kursor harakatini kuzatish
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Har bir segmentga biroz kechikish bilan harakat berish
function animateRope() {
  let x = mouseX, y = mouseY;
  
  segments.forEach((segment, index) => {
    setTimeout(() => {
      const segmentX = parseFloat(segment.style.left) || 0;
      const segmentY = parseFloat(segment.style.top) || 0;

      const dx = x - segmentX;
      const dy = y - segmentY;

      segment.style.left = `${segmentX + dx * delay}px`;
      segment.style.top = `${segmentY + dy * delay}px`;

      // Keyingi segment uchun pozitsiyani yangilash
      x = segmentX;
      y = segmentY;
    }, index * 50); // Kechikish
  });

  requestAnimationFrame(animateRope);
}

animateRope();
