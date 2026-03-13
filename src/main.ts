import './style.scss';

// ════════════════════════════════════════════════════════
//  Portfolio — TypeScript entry
//  Scroll reveals, nav scroll shadow, smooth anchor links
// ════════════════════════════════════════════════════════

// ── Types ─────────────────────────────────────────────
interface RevealObserverOptions {
  threshold: number;
  rootMargin: string;
}

// ── Scroll reveal via IntersectionObserver ─────────────
function initScrollReveal(): void {
  const options: RevealObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
  };

  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  const revealElements: NodeListOf<Element> = document.querySelectorAll('.reveal');
  revealElements.forEach((el: Element) => observer.observe(el));
}

// ── Nav scroll shadow ────────────────────────────────
function initNavScroll(): void {
  const nav: HTMLElement | null = document.getElementById('nav');
  if (!nav) return;

  let ticking = false;

  const onScroll = (): void => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 20) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Smooth scroll for anchor links ───────────────────
function initSmoothScroll(): void {
  const anchorLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link: HTMLAnchorElement) => {
    link.addEventListener('click', (e: Event) => {
      const href: string | null = link.getAttribute('href');
      if (!href || href === '#') return;

      const target: HTMLElement | null = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ── Hover tilt effect on project cards ───────────────
function initCardTilt(): void {
  const cards: NodeListOf<HTMLElement> = document.querySelectorAll('.project-card');

  cards.forEach((card: HTMLElement) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect: DOMRect = card.getBoundingClientRect();
      const x: number = e.clientX - rect.left;
      const y: number = e.clientY - rect.top;
      const centerX: number = rect.width / 2;
      const centerY: number = rect.height / 2;

      const rotateX: number = ((y - centerY) / centerY) * -3;
      const rotateY: number = ((x - centerX) / centerX) * 3;

      card.style.transform = `translateY(-4px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── Stat counter animation ───────────────────────────
function initStatCounters(): void {
  const statNumbers: NodeListOf<HTMLElement> = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const raw: string = el.textContent?.trim() ?? '';
          const hasPlus: boolean = raw.includes('+');
          const hasPercent: boolean = raw.includes('%');
          const numericValue: number = parseInt(raw.replace(/[^0-9]/g, ''), 10);

          if (isNaN(numericValue)) return;

          const duration = 1200;
          const startTime: number = performance.now();

          const animate = (currentTime: number): void => {
            const elapsed: number = currentTime - startTime;
            const progress: number = Math.min(elapsed / duration, 1);
            const eased: number = 1 - Math.pow(1 - progress, 3);
            const current: number = Math.round(eased * numericValue);

            let display: string = current.toString();
            if (hasPlus) display += '+';
            if (hasPercent) display += '%';

            el.textContent = display;

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  statNumbers.forEach((el: Element) => observer.observe(el));
}

// ── Parallax on hero visual rings ────────────────────
function initHeroParallax(): void {
  const heroVisual: HTMLElement | null = document.querySelector('.hero-visual');
  if (!heroVisual) return;

  let ticking = false;

  const onMouseMove = (e: MouseEvent): void => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const x: number = (e.clientX / window.innerWidth - 0.5) * 20;
        const y: number = (e.clientY / window.innerHeight - 0.5) * 20;
        heroVisual.style.transform = `translate(${x}px, ${y}px)`;
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });
}

// ── Terminal typing effect ───────────────────────────
function initTerminalTyping(): void {
  const terminalCode: HTMLElement | null = document.querySelector('.terminal-code code');
  if (!terminalCode) return;

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.3 },
  );

  terminalCode.style.opacity = '0';
  terminalCode.style.transition = 'opacity 0.6s ease';
  observer.observe(terminalCode);
}

// ── Initialize everything ────────────────────────────
function init(): void {
  initScrollReveal();
  initNavScroll();
  initSmoothScroll();
  initCardTilt();
  initStatCounters();
  initHeroParallax();
  initTerminalTyping();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
