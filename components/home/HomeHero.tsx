'use client';
import { useRouter } from 'next/navigation';
import { Btn, Eyebrow, Icon, Stat } from '../ui';
import { useTweaks } from '../TweaksContext';

function HeroSchematic() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', opacity: 0.8 }}>
      {[...Array(20)].map((_, i) => <line key={`gx${i}`} x1={i*40} y1="0" x2={i*40} y2="600" stroke="rgba(59,130,246,0.08)" strokeWidth="0.5"/>)}
      {[...Array(15)].map((_, i) => <line key={`gy${i}`} x1="0" y1={i*40} x2="800" y2={i*40} stroke="rgba(59,130,246,0.08)" strokeWidth="0.5"/>)}
      <g transform="translate(120 200)">
        <rect width="520" height="20" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="0.8"/>
        <rect y="20" width="520" height="40" fill="rgba(148,163,184,0.1)" stroke="rgba(148,163,184,0.5)" strokeWidth="0.5"/>
        <rect y="60" width="520" height="20" fill="rgba(59,130,246,0.18)" stroke="#3b82f6" strokeWidth="0.8"/>
        <text x="540" y="14" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">COATING · 0.18mm</text>
        <text x="540" y="44" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">SUBSTRATE · 0.42mm</text>
        <text x="540" y="74" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">COATING · 0.18mm</text>
      </g>
    </svg>
  );
}

function HeroVisual({ concept }: { concept: string }) {
  const photoMap: Record<string, { src: string; label: string }> = {
    aerostat: { src: '/images/aerostat.jpg', label: 'AEROSTAT · LTA PLATFORM' },
    airship: { src: '/images/airship.jpg', label: 'AIRSHIP · HEAVY-LIFT HULL' },
    balloon: { src: '/images/balloon.jpg', label: 'TETHERED BALLOON' },
  };
  const photo = photoMap[concept];

  return (
    <div className="hero-visual-layer" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '38%', pointerEvents: 'none', maskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 28%, black 100%)' }}>
      {photo ? (
        <div style={{ position: 'absolute', inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) contrast(1.05) saturate(0.85)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-1) 0%, rgba(10,15,28,0.3) 40%, transparent 70%), radial-gradient(ellipse at right, rgba(59,130,246,0.18), transparent 60%)' }} />
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <g stroke="#22d3ee" strokeWidth="0.7" fill="none" opacity="0.7">
              <path d="M 560 200 l 30 -20 l 40 0"/>
              <circle cx="560" cy="200" r="3" fill="#22d3ee" stroke="none"/>
              <text x="640" y="184" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">{photo.label}</text>
              <text x="640" y="196" fill="#9ca3af" fontSize="9" fontFamily="JetBrains Mono">GBT-LS · COATED FABRIC</text>
            </g>
          </svg>
        </div>
      ) : <HeroSchematic />}
    </div>
  );
}

export function HomeHero() {
  const router = useRouter();
  const { tweaks } = useTweaks();

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
      <HeroVisual concept={tweaks.hero} />
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
