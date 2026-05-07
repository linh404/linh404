// ─── NAV ───
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── SCROLL SPY ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerSpy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerSpy.observe(s));

// ─── FADE-IN ON SCROLL ───
const fadeEls = document.querySelectorAll('.fade-up');
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observerFade.observe(el));

// ─── STAGGER CHILDREN ───
document.querySelectorAll('[data-stagger]').forEach(parent => {
  Array.from(parent.children).forEach((child, i) => {
    child.classList.add('fade-up');
    child.dataset.delay = i * 80;
    observerFade.observe(child);
  });
});

// ─── TYPING EFFECT ───
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const phrases = [
    'Backend Developer',
    'API Engineer',
    'Full-stack Builder',
    'Systems Thinker',
  ];
  let pIdx = 0, cIdx = 0, deleting = false;

  function type() {
    const phrase = phrases[pIdx];
    if (!deleting) {
      typingEl.textContent = phrase.slice(0, ++cIdx);
      if (cIdx === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      typingEl.textContent = phrase.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 45 : 80);
  }
  type();
}
