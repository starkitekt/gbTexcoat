'use client';
import { useRouter } from 'next/navigation';
import { Section, Eyebrow, Btn, Icon, FabricPlaceholder } from '../ui';

/* ===== TICKER ===== */
export function TickerBar() {
  const items = ['AEROSPACE', 'DEFENCE & STRATEGY', 'PETROCHEMICAL', 'TELECOMMUNICATION', 'RECREATION', 'ADVERTISEMENT', 'TENSILE ARCHITECTURE', 'FIELD FUEL STORAGE'];
  const doubled = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((t, i) => <span key={i} className="ticker-item"><span className="dot" />{t}</span>)}
      </div>
    </div>
  );
}

/* ===== INDUSTRIES ===== */
export function IndustriesSection() {
  const router = useRouter();
  const items = [
    { n: '01', t: 'Aerospace', d: 'Aerostat envelopes, airship hulls and high-altitude tethered platforms.', icon: Icon.wind },
    { n: '02', t: 'Defence & Strategy', d: 'Mission-grade portable fuel storage, rapid-deploy inflatables and surveillance platforms.', icon: Icon.shield },
    { n: '03', t: 'Petrochemical', d: 'Chemically resistant fuel bladders and containment systems for field operations.', icon: Icon.drop },
    { n: '04', t: 'Telecommunication', d: 'Lightweight elevated platforms for line-of-sight relay and emergency communications.', icon: Icon.globe },
    { n: '05', t: 'Tensile architecture', d: 'High-tear-strength coated fabrics for membrane structures and shade systems.', icon: Icon.layers },
    { n: '06', t: 'Recreation & Advertisement', d: 'Inflatable boats, branded inflatables and weather-resistant signage textiles.', icon: Icon.beam },
  ];
  return (
    <Section id="industries">
      <div className="between" style={{ alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 32 }}>
        <div className="reveal">
          <Eyebrow num="02">Industries we serve</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '14ch' }}>One material platform. <span style={{ color: 'var(--text-2)' }}>Six demanding domains.</span></h2>
        </div>
        <p className="lead reveal delay-2" style={{ maxWidth: '38ch' }}>Our coated fabric chemistry is engineered to perform where regular textiles fail: high altitude, harsh UV, structural loads, and prolonged fuel contact.</p>
      </div>
      <div>
        {items.map(it => (
          <div key={it.n} className="industry-row reveal" onClick={() => router.push('/products')}>
            <span className="n">/{it.n}</span>
            <span className="t">{it.t}</span>
            <span className="d">{it.d}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===== ENGINEERING SOLUTIONS ===== */
export function EngineeringSolutions() {
  const cards = [
    { n: '01', t: 'Lightweight engineering', d: 'High strength-to-weight ratios from optimised weave + coating composites.', icon: Icon.weight },
    { n: '02', t: 'Environmental durability', d: 'Coating chemistries resist UV degradation, ozone, salt fog and temperature swings from –40 °C to +80 °C.', icon: Icon.sun },
    { n: '03', t: 'Tear & burst resistance', d: 'Ripstop weave geometries and reinforced seams hold pressurised loads under cyclic stress.', icon: Icon.thread },
    { n: '04', t: 'Chemical compatibility', d: 'Fluoropolymer and elastomeric coatings rated for diesel, kerosene, jet-A1 and aviation gasoline contact.', icon: Icon.flame },
    { n: '05', t: 'Joinability & repair', d: 'RF, hot-air and adhesive welding compatible. Field-repair kits supplied with every batch.', icon: Icon.layers },
    { n: '06', t: 'Regulatory readiness', d: 'Test reports aligned to ASTM, MIL-STD and STANAG procedures for defence and aerospace specification.', icon: Icon.atom },
  ];
  return (
    <Section id="solutions" className="bg-grid-fine" style={{ background: 'var(--bg-0)' }}>
      <div style={{ marginBottom: 56 }} className="reveal">
        <Eyebrow num="03">Engineering solutions</Eyebrow>
        <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>The fabric is just the substrate. The <span style={{ color: 'var(--accent)' }}>engineering</span> is what we sell.</h2>
      </div>
      <div className="grid-3">
        {cards.map((c, i) => {
          const Ic = c.icon;
          return (
            <div key={c.n} className={`spec-card reveal delay-${i % 3 + 1}`}>
              <div className="icon"><Ic /></div>
              <div className="num">/{c.n} · CAPABILITY</div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ===== TECHNICAL ADVANTAGES ===== */
export function TechnicalAdvantages() {
  const advantages = [
    { v: '2.1×', l: 'Higher tear strength vs. industry baseline at the same areal weight.' },
    { v: '–32%', l: 'Weight reduction on aerostat envelope vs. legacy PVC-coated specs.' },
    { v: '25 yr', l: 'UV-rated service life under continuous outdoor exposure.' },
    { v: 'MIL-STD', l: 'Test compliance to ASTM, MIL-STD and STANAG procedures.' },
  ];
  return (
    <Section id="advantages" tight style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="grid-4" style={{ gap: 0 }}>
        {advantages.map((a, i) => (
          <div key={i} className={`reveal delay-${i + 1}`} style={{ padding: '32px 28px', borderLeft: i === 0 ? 'none' : '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(36px,4vw,56px)', letterSpacing: '-0.03em' }}>{a.v}</div>
            <p style={{ margin: 0, color: 'var(--text-2)', fontSize: 14, maxWidth: '32ch' }}>{a.l}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===== PRODUCT SYSTEMS ===== */
export function ProductSystems() {
  const router = useRouter();
  const tiles = [
    { to: '/products/lightweight', code: 'GBT-LS · 01', title: 'Lightweight & High-Strength Coated Fabric', d: 'High-performance fabric engineered for strength, durability and lightweight construction.', specs: [{ v: '450', u: 'gsm', k: 'Weight' }, { v: '2400', u: 'N', k: 'Tear MD' }, { v: '0.78', u: 'mm', k: 'Thickness' }], img: '/images/aerostat.jpg' },
    { to: '/products/uv-resist', code: 'GBT-UV · 02', title: 'UV-Resistant Coated & Laminated Fabric', d: 'Engineered to withstand harsh environments with superior weather protection and longevity.', specs: [{ v: '25', u: 'yr', k: 'UV life' }, { v: '+80', u: '°C', k: 'Max temp' }, { v: 'ISO', u: '4892', k: 'Spec' }], img: '/images/balloon.jpg' },
    { to: '/products/tear-strength', code: 'GBT-TS · 03', title: 'High Tear-Strength Coated Tensile Fabric', d: 'Designed for extreme durability with exceptional tear resistance for demanding applications.', specs: [{ v: '3200', u: 'N', k: 'Tear MD' }, { v: '950', u: 'kg', k: 'Tensile' }, { v: '12', u: 'yr', k: 'Service' }], img: '/images/airship.jpg' },
    { to: '/products/fuel', code: 'GBT-FX · 04', title: 'High-Performance Flexible Fuel Storage', d: 'Durable, lightweight, leak-proof fuel storage containers for extreme environments.', specs: [{ v: '500–10k', u: 'L', k: 'Capacity' }, { v: 'STANAG', u: '', k: 'Certified' }, { v: 'JET-A1', u: '', k: 'Fluids' }], img: '/images/fuel.jpg' },
  ];
  return (
    <Section id="systems">
      <div className="between" style={{ alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 32 }}>
        <div className="reveal">
          <Eyebrow num="05">Engineered systems</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '16ch' }}>Four product families. <span>Built for harsh environments.</span></h2>
        </div>
        <Btn kind="ghost" onClick={() => router.push('/products')} className="reveal">All systems</Btn>
      </div>
      <div className="grid-2">
        {tiles.map((t, i) => (
          <div key={t.to} className={`product-tile reveal delay-${(i % 2) + 1}`} onClick={() => router.push(t.to)}>
            <div className="product-tile-media">
              {t.img ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,15,28,0.6) 100%)' }} />
                </>
              ) : <FabricPlaceholder />}
              <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.16em', color: 'var(--cyan)' }}>{t.code}</div>
            </div>
            <div className="product-tile-body">
              <div className="code">{t.code}</div>
              <h3>{t.title}</h3>
              <p>{t.d}</p>
              <div className="specs">
                {t.specs.map((s, j) => (
                  <div key={j}><div className="v">{s.v}{s.u && <span className="u">{s.u}</span>}</div><div className="k">{s.k}</div></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===== APPLICATION SHOWCASE ===== */
function AppSilhouette({ name }: { name: string }) {
  const common = { stroke: 'rgba(255,255,255,0.4)', strokeWidth: 1, fill: 'rgba(255,255,255,0.05)' };
  if (name === 'Aerostats' || name === 'Tethered balloons') return (
    <svg viewBox="0 0 200 200" width="60%">
      <ellipse cx="100" cy="80" rx="60" ry="40" {...common}/>
      <ellipse cx="100" cy="80" rx="40" ry="6" fill="none" stroke="rgba(59,130,246,0.4)"/>
      <line x1="100" y1="120" x2="100" y2="190" stroke="rgba(255,255,255,0.3)" strokeDasharray="2 3"/>
      <line x1="90" y1="115" x2="80" y2="190" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 3"/>
      <line x1="110" y1="115" x2="120" y2="190" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 3"/>
    </svg>
  );
  if (name === 'Airships') return (
    <svg viewBox="0 0 200 200" width="70%">
      <ellipse cx="100" cy="100" rx="80" ry="22" {...common}/>
      <rect x="80" y="118" width="40" height="10" rx="2" {...common}/>
      <line x1="60" y1="100" x2="55" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="6"/>
    </svg>
  );
  if (name === 'Tensile architecture') return (
    <svg viewBox="0 0 200 200" width="70%">
      <path d="M 30 140 Q 100 70 170 140" {...common}/>
      <line x1="30" y1="140" x2="30" y2="180" stroke="rgba(255,255,255,0.3)"/>
      <line x1="100" y1="70" x2="100" y2="180" stroke="rgba(255,255,255,0.3)"/>
      <line x1="170" y1="140" x2="170" y2="180" stroke="rgba(255,255,255,0.3)"/>
    </svg>
  );
  if (name === 'Fuel storage') return (
    <svg viewBox="0 0 200 200" width="70%">
      <rect x="40" y="80" width="120" height="60" rx="20" {...common}/>
      <circle cx="100" cy="110" r="6" fill="none" stroke="rgba(245,158,11,0.5)"/>
      <circle cx="100" cy="110" r="14" fill="none" stroke="rgba(245,158,11,0.3)"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 200 200" width="70%">
      <path d="M 30 110 Q 100 130 170 110 L 165 130 Q 100 145 35 130 Z" {...common}/>
      <line x1="20" y1="160" x2="180" y2="160" stroke="rgba(59,130,246,0.3)" strokeDasharray="3 4"/>
    </svg>
  );
}

export function ApplicationShowcase() {
  const apps = [
    { k: 'A01', t: 'Aerostats', d: 'Surveillance + telecom relay', color1: '#1e3a8a', color2: '#0c1322' },
    { k: 'A02', t: 'Airships', d: 'Heavy-lift cargo & monitoring', color1: '#0e7490', color2: '#0c1322' },
    { k: 'A03', t: 'Tethered balloons', d: 'High-altitude observation', color1: '#312e81', color2: '#0c1322' },
    { k: 'A04', t: 'Inflatable boats', d: 'Defence & rescue craft', color1: '#075985', color2: '#0c1322' },
    { k: 'A05', t: 'Tensile architecture', d: 'Membrane roof systems', color1: '#1e293b', color2: '#0c1322' },
    { k: 'A06', t: 'Fuel storage', d: 'Field-deployable bladders', color1: '#b45309', color2: '#0c1322' },
  ];
  return (
    <Section id="applications" style={{ background: 'var(--bg-0)' }}>
      <div style={{ marginBottom: 56 }} className="reveal">
        <Eyebrow num="06">Field applications</Eyebrow>
        <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>Where the material<br /><span>actually goes.</span></h2>
      </div>
      <div className="grid-3">
        {apps.map((a, i) => (
          <div key={a.k} className={`app-card reveal delay-${(i % 3) + 1}`}>
            <div className="top" style={{ background: `radial-gradient(ellipse at 30% 40%, ${a.color1} 0%, ${a.color2} 70%)` }}>
              <AppSilhouette name={a.t} />
            </div>
            <div className="bottom">
              <span className="k">/{a.k} · APPLICATION</span>
              <span className="t">{a.t}</span>
              <span style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 2 }}>{a.d}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===== WHY GB TEXCOAT ===== */
export function WhyTexcoat() {
  const reasons = [
    { t: 'Aerospace heritage', d: 'Our material chemistry is targeted at lighter-than-air platforms and aerial systems: high altitude, harsh UV, and prolonged exposure.' },
    { t: 'Lab-adjacent manufacturing', d: 'Co-located with IIT Delhi\'s polymer, materials and aerospace research groups. Hypotheses validated before they ship.' },
    { t: 'Engineered, not commodity', d: 'Every batch comes with traceable QC, test reports and engineering documentation, not just a bill of materials.' },
    { t: 'Defence-ready paperwork', d: 'Compliance to ASTM, MIL-STD and STANAG. Suitable for tender response and field certification.' },
  ];
  return (
    <Section id="why">
      <div className="grid-2" style={{ alignItems: 'start', gap: 80 }}>
        <div className="reveal" style={{ position: 'sticky', top: 100 }}>
          <Eyebrow num="07">Why GB Texcoat</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 24px 0' }}>A material partner, <span style={{ color: 'var(--text-2)' }}>not a textile vendor.</span></h2>
          <p className="lead">Engineering teams choose us because we treat coated fabric as a system: substrate, coating, weave and seam together. We document every variable.</p>
        </div>
        <div>
          {reasons.map((r, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1}`} style={{ padding: '28px 0', borderBottom: i === reasons.length - 1 ? 'none' : '1px solid var(--line)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 24 }}>
              <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em' }}>0{i + 1}</div>
              <div>
                <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{r.t}</h4>
                <p style={{ color: 'var(--text-2)', margin: 0 }}>{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ===== CLIENTS ===== */
export function ClientsSection() {
  const clients = [
    { name: 'Akashalabdhi',              src: '/Clients/Akashalabdhi.png' },
    { name: 'Arcship',                   src: '/Clients/Arcship.png' },
    { name: 'DRDO',                      src: '/Clients/DRDO.jpg' },
    { name: 'Empyreal Galaxy',           src: '/Clients/Empyreal galaxy.png' },
    { name: 'IIT Delhi',                 src: '/Clients/IIT Delhi.png' },
    { name: 'Indian Army Central Command', src: '/Clients/INdian Army_Central_Command.jpg' },
    { name: 'Kalam Labs',                src: '/Clients/kalam_labs.png' },
    { name: 'Susan Future Technology',   src: '/Clients/Susan Future technology.png' },
  ];
  const doubled = [...clients, ...clients];

  return (
    <Section id="clients" style={{ background: 'var(--bg-0)', overflow: 'hidden' }}>
      <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
        <Eyebrow num="08">Trusted by</Eyebrow>
        <h2 className="h-display h2" style={{ margin: '20px 0 16px 0' }}>
          Partners &amp; <span style={{ color: 'var(--accent)' }}>clients.</span>
        </h2>
        <p style={{ color: 'var(--text-2)', maxWidth: '52ch', margin: '0 auto' }}>
          Institutions and organisations across aerospace, defence, and research that trust GB Texcoat's engineered fabric systems.
        </p>
      </div>

      <div className="clients-track-wrap">
        <div className="clients-track">
          {doubled.map((c, i) => (
            <div key={i} className="client-logo-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.name} title={c.name} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ===== CONTACT CTA ===== */
export function ContactCTA() {
  const router = useRouter();
  return (
    <Section id="cta" tight>
      <div className="reveal" style={{ position: 'relative', padding: 'clamp(56px,8vw,96px) clamp(32px,5vw,64px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.10), transparent 60%)', pointerEvents: 'none' }} />
        <div className="between" style={{ flexWrap: 'wrap', gap: 32, position: 'relative' }}>
          <div>
            <Eyebrow num="09">Get in touch</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '14ch' }}>Have a hard material problem?<br /><span style={{ color: 'var(--text-2)' }}>Bring it to us.</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end' }}>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Book engineering consult</Btn>
            <span className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em' }}>Typical response · 24 hrs</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
