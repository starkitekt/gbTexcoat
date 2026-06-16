'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Btn, Eyebrow, Icon, Stat } from '../ui';

const SLIDES = [
  { src: '/hero/home/1.jpg', label: 'AEROSTAT · SPHERICAL PLATFORM', sub: 'GBT-LS · COATED ENVELOPE' },
  { src: '/hero/home/2.jpg', label: 'AEROSTAT · DAWN OPERATIONS', sub: 'GBT-LS · LAMINATED HULL' },
  { src: '/hero/home/3.jpg', label: 'LTA · HIGH-ALTITUDE SYSTEMS', sub: 'GBT-LS · ENVELOPE FABRIC' },
  { src: '/hero/home/4.jpg', label: 'BALLOON · SURVEILLANCE FLEET', sub: 'GBT-FX · BARRIER MEMBRANE' },
  { src: '/hero/home/5.jpg', label: 'AIRSHIP · HEAVY-LIFT HULL', sub: 'GBT-LS · COATED FABRIC' },
];

const INTERVAL = 5000;

export function HomeHero() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* Full-bleed image carousel */}
      {SLIDES.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt=""
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

      {/* Left-to-right gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: [
          'linear-gradient(to right, rgba(6,9,15,1) 0%, rgba(6,9,15,0.97) 12%, rgba(6,9,15,0.88) 22%, rgba(6,9,15,0.65) 32%, rgba(6,9,15,0.20) 40%, rgba(6,9,15,0) 52%)',
          'linear-gradient(180deg, rgba(6,9,15,0.4) 0%, transparent 30%, transparent 65%, rgba(6,9,15,0.7) 100%)',
        ].join(', '),
      }} />

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
          Engineered fabrics<br />for <span>specialized</span><br />applications.
        </h1>
        <p className="page-hero-lead">
          Advanced multifaceted textiles for mission-critical work — aerostats, airships, tethered platforms, portable fuel systems and tensile architecture. Built to perform precisely where conventional textiles fail.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
          <Btn kind="primary" onClick={() => router.push('/products')}>Explore engineered systems</Btn>
          <Btn kind="ghost" arrow={false} onClick={() => router.push('/rd')}>
            <Icon.play /> Inside the lab
          </Btn>
        </div>
        <div className="hero-meta">
          <Stat value="450" unit="gsm" label="Base areal weight" />
          <Stat value="2400" unit="N" label="Tear strength · MD" />
          <Stat value="25" unit="yr" label="UV-rated service life" />
          <Stat value="–40 / +80" unit="°C" label="Operating envelope" />
        </div>
      </div>
    </section>
  );
}
