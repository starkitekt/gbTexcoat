'use client';
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // @ts-ignore
    if (typeof window.Lenis === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // @ts-ignore
    const lenis = new window.Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, smoothTouch: false });
    let raf: number;
    const tick = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    // @ts-ignore
    window.__scrollTo = (target: unknown, opts: unknown) => lenis.scrollTo(target, opts);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
}
