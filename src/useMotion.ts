import { useEffect } from 'react';

const GLASS = '.glass, .glass-sky, .glass-sun';
const BEAT_MS = 110;

/* Cards below the fold enter one beat apart as they scroll into view, and
 * the light on the glass follows the pointer. Re-runs on every page change.
 * Does nothing under prefers-reduced-motion. */
export function useMotion(path: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // Cards already on screen stay put: with prerendered HTML this avoids a flash.
    // On a phone, cards in a sideways row (.snap-row) stay still: an entering card
    // would push the row taller than its box, and the ones off to the right
    // would never be seen by the observer.
    const phone = window.matchMedia('(max-width: 639px)').matches;
    const cards = [...document.querySelectorAll<HTMLElement>(GLASS)].filter(
      (card) =>
        card.getBoundingClientRect().top > window.innerHeight * 0.9 &&
        !card.classList.contains('reveal') &&
        !(phone && card.closest('.snap-row'))
    );
    cards.forEach((card) => {
      const siblings = card.parentElement ? [...card.parentElement.children].filter((el) => el.matches(GLASS)) : [];
      const beat = Math.min(Math.max(siblings.indexOf(card), 0), 5) * BEAT_MS;
      card.style.setProperty('--beat', `${beat}ms`);
      card.classList.add('reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target as HTMLElement;
          card.classList.add('is-visible');
          observer.unobserve(card);
          window.setTimeout(() => card.classList.add('reveal-done'), 1000 + BEAT_MS * 6);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.04 }
    );
    cards.forEach((card) => observer.observe(card));

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest?.(GLASS) as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, [path]);
}
