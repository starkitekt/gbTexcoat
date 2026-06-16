'use client';
import { ReactNode, useState, useEffect } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Btn } from './Button';

export function Eyebrow({ num, children, noBar }: { num?: string; children?: ReactNode; noBar?: boolean }) {
  return (
    <span className={`eyebrow${noBar ? ' no-bar' : ''}`}>
      {num && <span className="num">{num}</span>}
      {children}
    </span>
  );
}

export function Section({ id, children, className = '', tight, style }: {
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
  style?: React.CSSProperties;
}) {
  const ref = useReveal();
  return (
    <section id={id} ref={ref as React.Ref<HTMLElement>} className={`section${tight ? ' tight' : ''} ${className}`} style={style}>
      <div className="container">{children}</div>
    </section>
  );
}

export function PageHead({ title, subtitle, extra }: {
  title: ReactNode;
  subtitle?: string;
  extra?: ReactNode;
}) {
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

type HeroImage = { src: string; alt: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  extra,
  images,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  extra?: ReactNode;
  images: HeroImage[];
}) {
  const [current, setCurrent] = useState(0);
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    setWarm(true);
    const id = setInterval(() => setCurrent(c => (c + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="page-hero">
      {images.map((img, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={i === 0 || warm ? img.src : undefined}
          alt={img.alt}
          className="page-hero-img"
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        />
      ))}
      <div className="page-hero-grad" />
      <div className="page-hero-content">
        <div className="container">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-lead">{subtitle}</p>}
          {extra && <div style={{ marginTop: 32 }}>{extra}</div>}
        </div>
      </div>
    </div>
  );
}

export function Stat({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div>
      <div className="v">{value}{unit && <span className="unit">{unit}</span>}</div>
      <div className="k">{label}</div>
    </div>
  );
}

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
