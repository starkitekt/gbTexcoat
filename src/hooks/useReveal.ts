'use client';
import { useEffect, useRef } from 'react';

const REVEAL_SELECTORS = '.reveal, .reveal-left, .reveal-right, .reveal-scale';

export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll(REVEAL_SELECTORS).forEach(n => io.observe(n));
    if (el.matches(REVEAL_SELECTORS)) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
