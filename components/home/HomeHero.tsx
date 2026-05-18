'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Btn, Eyebrow, Icon, Stat } from '../ui';

const SLIDES = [
  { src: '/Hero Image/Aerostat Spherical.png',  label: 'AEROSTAT · SPHERICAL PLATFORM',  sub: 'GBT-LS · COATED ENVELOPE' },
  { src: '/Hero Image/Aerostat Top view.png',    label: 'AEROSTAT · AERIAL TOP VIEW',      sub: 'GBT-LS · COATED FABRIC' },
  { src: '/Hero Image/Airship image.png',        label: 'AIRSHIP · HEAVY-LIFT HULL',       sub: 'GBT-LS · LAMINATED SHELL' },
  { src: '/Hero Image/Fuel tank.png',            label: 'FUEL CONTAINER · PORTABLE',       sub: 'GBT-FX · BARRIER MEMBRANE' },
];

const INTERVAL = 4000;

function HeroVisual() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const go = (idx: number) => {
    setPrev(current);
    setCurrent(idx);
  };

  const handlePrev = () => { go((current - 1 + SLIDES.length) % SLIDES.length); setPaused(true); setTimeout(() => setPaused(false), INTERVAL); };
  const handleNext = () => { go((current + 1) % SLIDES.length); setPaused(true); setTimeout(() => setPaused(false), INTERVAL); };
  const handleDot  = (i: number) => { go(i); setPaused(true); setTimeout(() => setPaused(false), INTERVAL); };

  // Auto-advance: restarts whenever current changes or pause lifts
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearTimeout(id);
  }, [current, paused]);

  return (
    <div
      className="hero-visual-layer"
      style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, left: '38%',
        maskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)',
        overflow: 'hidden',
      }}
    >
      {SLIDES.map((slide, i) => {
        const isActive = i === current;
        const isPrev  = i === prev;
        return (
          <div
            key={slide.src}
            style={{
              position: 'absolute', inset: 0,
              opacity: isActive ? 1 : 0,
              transition: isActive || isPrev ? 'opacity 0.7s ease' : 'none',
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src} alt=""
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) contrast(1.05) saturate(0.85)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-1) 0%, rgba(10,15,28,0.3) 40%, transparent 70%), radial-gradient(ellipse at right, rgba(59,130,246,0.18), transparent 60%)' }} />
            <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <g stroke="#22d3ee" strokeWidth="0.7" fill="none" opacity="0.7">
                <path d="M 560 200 l 30 -20 l 40 0"/>
                <circle cx="560" cy="200" r="3" fill="#22d3ee" stroke="none"/>
                <text x="640" y="184" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">{slide.label}</text>
                <text x="640" y="196" fill="#9ca3af" fontSize="9" fontFamily="JetBrains Mono">{slide.sub}</text>
              </g>
            </svg>
          </div>
        );
      })}

      {/* Arrow controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous image"
        style={{
          position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(6,9,15,0.55)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 4, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#e2e8f0', transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.35)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(6,9,15,0.55)')}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={handleNext}
        aria-label="Next image"
        style={{
          position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(6,9,15,0.55)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 4, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#e2e8f0', transition: 'background 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.35)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(6,9,15,0.55)')}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: 6 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleDot(i)}
            style={{
              width: i === current ? 20 : 6, height: 6, borderRadius: 3, border: 'none',
              background: i === current ? '#3b82f6' : 'rgba(255,255,255,0.3)',
              cursor: 'pointer', padding: 0, transition: 'width 0.3s, background 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function HomeHero() {
  const router = useRouter();

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hud hud-tl">
        <div className="line">SECTOR · AEROSPACE &amp; DEFENSE</div>
        <div className="line">FACILITY · IIT-D R&amp;I PARK</div>
        <div className="line">STATUS · <span className="v">OPERATIONAL</span></div>
      </div>
      <div className="hud hud-tr">
        <div className="line">N 28°32&apos;42&quot; · E 77°11&apos;33&quot;</div>
        <div className="line">REL <span className="v">26.05.01</span></div>
        <div className="line"><span className="v">SCROLL ↓</span></div>
      </div>
      <HeroVisual />
      <div className="container hero-content">
        <Eyebrow num="GBT · EST. 2024">Crafting Excellence</Eyebrow>
        <h1 className="hero-title">
          Fabrics<br />for <span className="em">specialized</span><br />applications.
        </h1>
        <p className="lead" style={{ maxWidth: '58ch', marginTop: 12 }}>
          Innovative solutions for high-performance inflatable structures. Lightweight, high-strength, durable, weather-resistant coated and laminated fabrics — engineered for aerostats, airships, tethered balloons, fuel storage and tensile architecture.
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
