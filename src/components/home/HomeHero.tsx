'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Btn, Eyebrow, Icon } from '../ui';

const SLIDES = [
  { src: '/hero/home/1.webp', label: 'AIRSHIP · COATED ENVELOPE', sub: 'GBT-LS · LAMINATED HULL' },
  { src: '/hero/home/2.webp', label: 'AEROSTAT · PERSISTENT PLATFORM', sub: 'GBT-LS · COATED FABRIC' },
  { src: '/hero/home/3.webp', label: 'STRATOSPHERIC BALLOON · LAUNCH', sub: 'GBT-LS · ENVELOPE FABRIC' },
  { src: '/hero/home/4.webp', label: 'NEAR-SPACE · ORBITAL PLATFORM', sub: 'GBT · ADVANCED MEMBRANE' },
  { src: '/hero/home/5.webp', label: 'SATELLITE · DEPLOYMENT SYSTEM', sub: 'GBT · BARRIER LAMINATE' },
];

const INTERVAL = 5000;

export function HomeHero() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    setWarm(true);
    const id = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* Full-bleed carousel — first slide eager, rest deferred to after mount for fast first paint */}
      {SLIDES.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={i === 0 || warm ? slide.src : undefined}
          alt=""
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            zIndex: i === current ? 1 : 0,
            filter: 'brightness(0.72) saturate(0.85)',
          }}
        />
      ))}

      {/* Left-to-right gradient overlay (turns white in light mode via CSS) */}
      <div className="page-hero-grad" />

      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        backgroundImage: 'linear-gradient(to right,rgba(148,163,184,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(148,163,184,0.04) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 65%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* HUD overlays */}
      <div className="hud hud-tl" style={{ zIndex: 5 }}>
        <div className="line">SECTOR · AEROSPACE &amp; DEFENSE</div>
        <div className="line">FACILITY · IIT-D R&amp;I PARK</div>
        <div className="line">STATUS · <span className="v">OPERATIONAL</span></div>
      </div>
      <div className="hud hud-tr" style={{ zIndex: 5 }}>
        <div className="line">N 28°32&apos;42&quot; · E 77°11&apos;33&quot;</div>
        <div className="line">REL <span className="v">26.05.01</span></div>
        <div className="line"><span className="v">SCROLL ↓</span></div>
      </div>

      {/* Slide label — bottom right */}
      <div style={{
        position: 'absolute', bottom: 24, right: 24, zIndex: 5,
        fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em',
        textTransform: 'uppercase', textAlign: 'right', pointerEvents: 'none',
      }}>
        <div style={{ color: 'var(--cyan)' }}>{SLIDES[current].label}</div>
        <div style={{ color: 'var(--text-3)', marginTop: 2 }}>{SLIDES[current].sub}</div>
      </div>

      {/* Content */}
      <div className="container hero-content" style={{ position: 'relative', zIndex: 5 }}>
        <Eyebrow num="GBT · EST. 2024">Crafting Excellence</Eyebrow>
        <h1 className="page-hero-title">
          Coated textiles for<br />the world&apos;s most<br /><span>demanding</span> platforms.
        </h1>
        <p className="page-hero-lead">
          GB Texcoat engineers coated and laminated fabrics for aerospace, defence and industrial systems where material failure is not an option — built to tender-grade specification and validated against international standards.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <Btn kind="primary" onClick={() => router.push('/products')}>Explore engineered systems</Btn>
          <Btn kind="ghost" arrow={false} onClick={() => router.push('/rd')}>
            <Icon.play /> Inside the lab
          </Btn>
        </div>
      </div>
    </section>
  );
}
