// Highlight current page in nav
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  // Mobile hamburger nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // Close the menu after a link is tapped
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Animate any progress rings on the page: <div class="ring" data-pct="62">
  document.querySelectorAll('.ring').forEach(ring => {
    const pct = Math.min(100, Math.max(0, parseFloat(ring.dataset.pct || '0')));
    const circle = ring.querySelector('.fg');
    if (!circle) return;
    const r = circle.r.baseVal.value;
    const c = 2 * Math.PI * r;
    circle.style.strokeDasharray = c;
    circle.style.strokeDashoffset = c;
    requestAnimationFrame(() => {
      circle.style.transition = 'stroke-dashoffset 1.1s ease';
      circle.style.strokeDashoffset = c - (pct / 100) * c;
    });
  });
});
