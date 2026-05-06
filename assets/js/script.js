/* ============================================
   JEDIDIAH KRISTILERE — PORTFOLIO SCRIPTS
   Interactions: typed role, scroll reveals,
   nav state, dark/light toggle, mobile menu
   ============================================ */

/* ─── Theme Toggle ──────────────────────────── */
(function initTheme() {
  const body    = document.getElementById('body');
  const toggle  = document.getElementById('themeToggle');
  const stored  = localStorage.getItem('theme');

  if (stored === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }

  toggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light-mode');
    body.classList.toggle('light-mode', !isLight);
    body.classList.toggle('dark-mode',  isLight);
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
  });
})();

/* ─── Navigation ────────────────────────────── */
(function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    hamburger.querySelectorAll('span').forEach((s, i) => {
      if (open) {
        if (i === 0) { s.style.transform = 'rotate(45deg) translate(5px, 5px)'; }
        if (i === 1) { s.style.opacity = '0'; }
        if (i === 2) { s.style.transform = 'rotate(-45deg) translate(5px, -5px)'; }
      } else {
        s.style.transform = '';
        s.style.opacity   = '';
      }
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity   = '';
      });
    });
  });
})();

/* ─── Typed Role Animation ──────────────────── */
(function initTyped() {
  const el     = document.getElementById('typedRole');
  const cursor = document.querySelector('.hero-cursor');
  if (!el) return;

  const roles = [
    'AI Engineer',
    'ML Systems Builder',
    'LLM Developer',
    'Azure AI Specialist',
    'Financial AI Engineer',
  ];

  let roleIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  let paused   = false;

  function type() {
    const current = roles[roleIdx];

    if (!deleting && charIdx <= current.length) {
      el.textContent = current.slice(0, charIdx++);
      setTimeout(type, 75);
    } else if (!deleting && charIdx > current.length) {
      paused = true;
      setTimeout(() => { deleting = true; paused = false; type(); }, 2200);
    } else if (deleting && charIdx > 0) {
      el.textContent = current.slice(0, --charIdx);
      setTimeout(type, 40);
    } else {
      deleting = false;
      roleIdx  = (roleIdx + 1) % roles.length;
      setTimeout(type, 400);
    }
  }

  setTimeout(type, 800);
})();

/* ─── Scroll Reveal ─────────────────────────── */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();

/* ─── Active Nav Link on Scroll ─────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top    = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--accent)';
      }
    });
  }, { passive: true });
})();

/* ─── Contact Form (mailto fallback) ────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const subject = form.subject.value.trim() || 'Portfolio Inquiry';
    const message = form.message.value.trim();

    const body = encodeURIComponent(
      `Hi Jedidiah,\n\n${message}\n\nBest,\n${name}\n${email}`
    );
    const subj = encodeURIComponent(subject);

    window.location.href = `mailto:kristilere14@gmail.com?subject=${subj}&body=${body}`;
  });
})();

/* ─── Smooth Scroll for all anchor links ────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
