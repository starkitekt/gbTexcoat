'use client';
import { useEffect, useRef } from 'react';

const REVEAL_SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = [
      ...el.querySelectorAll(REVEAL_SELECTORS),
      ...(el.matches(REVEAL_SELECTORS) ? [el] : []),
    ];

    // Reduced motion: reveal everything immediately, skip the scroll animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(n => n.classList.add('in'));
      return;
    }

    // Toggle (not add-once) and keep observing, so reveals replay whether the
    // user scrolls down into an element OR back up into it.
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('in', e.isIntersecting)),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    targets.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}
