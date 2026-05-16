'use client';
import { useEffect, useRef, ReactNode } from 'react';

// ===== Scroll reveal =====
export function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    if (el.classList.contains('reveal')) io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ===== Smooth scroll (Lenis) =====
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
    window.__scrollTo = (target: any, opts: any) => lenis.scrollTo(target, opts);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
}

// ===== Icons =====
type IconProps = React.SVGProps<SVGSVGElement>;
export const Icon = {
  arrow: (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  arrowUp: (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 12L12 4M6 4h6v6"/></svg>,
  plus: (p: IconProps) => <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M8 3v10M3 8h10"/></svg>,
  layers: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5" opacity="0.5"/></svg>,
  beam: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 12h18M12 3v18M5 5l14 14M19 5L5 19" opacity="0.4"/><circle cx="12" cy="12" r="4"/></svg>,
  shield: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/></svg>,
  flame: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3c2 4 6 6 6 11a6 6 0 01-12 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 2-10z"/></svg>,
  atom: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/></svg>,
  wind: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 8h12a3 3 0 100-6M3 14h16a3 3 0 110 6M3 11h8"/></svg>,
  drop: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 3s7 7 7 12a7 7 0 01-14 0c0-5 7-12 7-12z"/></svg>,
  weight: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M5 8h14l-1.5 12h-11L5 8zM8 8V5a4 4 0 018 0v3"/></svg>,
  thread: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 12c3-4 6-4 9 0s6 4 9 0M3 6c3-4 6-4 9 0s6 4 9 0M3 18c3-4 6-4 9 0s6 4 9 0"/></svg>,
  sun: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"/></svg>,
  moon: (p: IconProps) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M20 14a8 8 0 11-10-10 6 6 0 0010 10z"/></svg>,
  globe: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
  check: (p: IconProps) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 8l3 3 7-7"/></svg>,
  pin: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  phone: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 5c0 9 6 15 15 15l2-3-5-2-2 2c-2-1-4-3-5-5l2-2-2-5L4 5z"/></svg>,
  mail: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>,
  play: (p: IconProps) => <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" {...p}><path d="M4 3l9 5-9 5V3z"/></svg>,
  menu: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close: (p: IconProps) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 5l14 14M19 5L5 19"/></svg>,
  sliders: (p: IconProps) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/><circle cx="9" cy="18" r="2" fill="currentColor"/></svg>,
};

// ===== Button =====
interface BtnProps { children: ReactNode; kind?: 'primary' | 'ghost' | 'mono'; onClick?: () => void; arrow?: boolean; className?: string; [k: string]: any; }
export function Btn({ children, kind = 'primary', onClick, arrow = true, className = '', ...rest }: BtnProps) {
  const cls = kind === 'primary' ? 'btn btn-primary' : kind === 'mono' ? 'btn btn-mono' : 'btn btn-ghost';
  return (
    <button className={`${cls} ${className}`} onClick={onClick} {...rest}>
      <span>{children}</span>
      {arrow && <span className="arrow"><Icon.arrow /></span>}
    </button>
  );
}

// ===== Eyebrow =====
export function Eyebrow({ num, children, noBar }: { num?: string; children?: ReactNode; noBar?: boolean }) {
  return <span className={`eyebrow${noBar ? ' no-bar' : ''}`}>{num && <span className="num">{num}</span>}{children}</span>;
}

// ===== Section =====
export function Section({ id, children, className = '', tight, style }: { id?: string; children: ReactNode; className?: string; tight?: boolean; style?: React.CSSProperties }) {
  const ref = useReveal();
  return (
    <section id={id} ref={ref as any} className={`section${tight ? ' tight' : ''} ${className}`} style={style}>
      <div className="container">{children}</div>
    </section>
  );
}

// ===== PageHead =====
export function PageHead({ title, subtitle, extra }: { title: ReactNode; subtitle?: string; extra?: ReactNode }) {
  return (
    <div className="page-head">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="lead" style={{ marginTop: 28, maxWidth: '60ch' }}>{subtitle}</p>}
        {extra && <div style={{ marginTop: 36 }}>{extra}</div>}
      </div>
    </div>
  );
}

// ===== Stat =====
export function Stat({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div>
      <div className="v">{value}{unit && <span className="unit">{unit}</span>}</div>
      <div className="k">{label}</div>
    </div>
  );
}

// ===== FabricPlaceholder =====
export function FabricPlaceholder() {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <pattern id="weave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#0c1322"/>
          <path d="M0 5 L20 5 M0 15 L20 15" stroke="#1e2a44" strokeWidth="1"/>
          <path d="M5 0 L5 20 M15 0 L15 20" stroke="#1e2a44" strokeWidth="1" opacity="0.5"/>
        </pattern>
        <radialGradient id="glow" cx="50%" cy="40%">
          <stop offset="0%" stopColor="rgba(59,130,246,0.25)"/>
          <stop offset="100%" stopColor="rgba(59,130,246,0)"/>
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#weave)"/>
      <rect width="400" height="250" fill="url(#glow)"/>
    </svg>
  );
}

// ===== ContactStrip =====
export function ContactStrip({ onContact }: { onContact: () => void }) {
  return (
    <Section tight>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24, padding: '40px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <h3 className="h-display h3" style={{ margin: 0, maxWidth: '24ch' }}>Ready to discuss your spec?</h3>
        <Btn kind="primary" onClick={onContact}>Talk to engineering</Btn>
      </div>
    </Section>
  );
}
