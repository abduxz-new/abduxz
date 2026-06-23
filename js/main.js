/* ═══════════════════════════════════════════════
   MAIN.JS — Cursor · Nav · Animations · Interactions
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── CUSTOM CURSOR ── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');

  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    function animRing() {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animRing);
    }
    animRing();

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        ring.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
        ring.classList.remove('hovered');
      });
    });
  }

  /* ── SCROLL NAV ── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── MOBILE MENU ── */
  const menuBtn    = document.getElementById('mobile-menu-btn');
  const closeBtn   = document.getElementById('mobile-close-btn');
  const navDrawer  = document.getElementById('nav-drawer');
  const menuIcon   = document.getElementById('menu-icon');
  const closeIcon  = document.getElementById('close-icon');

  function openMenu() {
    if (!navDrawer) return;
    navDrawer.classList.add('open');
    if (menuIcon)  menuIcon.style.display  = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }
  function closeMenu() {
    if (!navDrawer) return;
    navDrawer.classList.remove('open');
    if (menuIcon)  menuIcon.style.display  = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  }

  if (menuBtn) menuBtn.addEventListener('click', () =>
    navDrawer && navDrawer.classList.contains('open') ? closeMenu() : openMenu()
  );
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  document.querySelectorAll('#nav-drawer a').forEach(a =>
    a.addEventListener('click', closeMenu)
  );

  /* ── FADE-UP ON SCROLL ── */
  const faders = document.querySelectorAll('.fade-up');

  if (faders.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    faders.forEach(el => {
      // Hero elements trigger immediately
      if (el.closest('.hero') || el.closest('.contact-hero') || el.closest('.page-hero')) {
        el.classList.add('visible');
      } else {
        obs.observe(el);
      }
    });
  }

  /* ── STAGGER CHILDREN ── */
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    const delay = parseFloat(parent.dataset.stagger) || 0.1;
    parent.querySelectorAll(':scope > *').forEach((child, i) => {
      child.style.transitionDelay = (i * delay) + 's';
    });
  });

  /* ── COUNTER ANIMATION ── */
  function animateCount(el) {
    const target  = parseFloat(el.dataset.count);
    const suffix  = el.dataset.suffix || '';
    const dur     = 1600;
    const isFloat = target % 1 !== 0;
    let start     = null;

    function step(ts) {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - prog, 3); // ease-out-cubic
      const val  = ease * target;
      el.textContent = isFloat
        ? val.toFixed(1) + suffix
        : Math.floor(val) + suffix;
      if (prog < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

  /* ── PROJECT FILTER (projects.html only) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-type]');

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          const show = filter === 'all' || card.dataset.type === filter;
          card.style.opacity = show ? '1' : '0.25';
          card.style.pointerEvents = show ? '' : 'none';
        });
      });
    });
  }

  /* ── CONTACT FORM (contact.html only) ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-primary');
      const orig = btn.innerHTML;
      btn.innerHTML = `
        <svg class="icon icon-stroke" style="width:16px;height:16px"><use href="assets/icons.svg#icon-check"/></svg>
        Message Sent
      `;
      btn.style.background = 'var(--green)';
      btn.style.color = 'var(--obsidian)';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        btn.style.color = '';
        contactForm.reset();
      }, 3000);
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #nav-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      a.style.color = 'var(--gold)';
    }
  });

})();
