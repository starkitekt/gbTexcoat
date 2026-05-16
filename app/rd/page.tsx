'use client';
import { useRouter } from 'next/navigation';
import { Section, PageHead, Eyebrow, Btn, ContactStrip, useReveal } from '@/components/ui';

export default function RDPage() {
  const router = useRouter();
  const ref = useReveal();

  return (
    <main ref={ref as any}>
      <PageHead
        title={<>Where materials get characterised, not assumed.</>}
        subtitle="Our R&D arm operates inside the IIT Delhi Research & Innovation Park. Every coating chemistry is iterated against in-house and university-grade test infrastructure before it ships."
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Co-develop with us</Btn>
            <Btn kind="ghost" onClick={() => router.push('/products')}>Product systems</Btn>
          </div>
        }
      />

      {/* Research streams */}
      <Section>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <Eyebrow num="01">Active research streams</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>
            Four streams. <span>Always running.</span>
          </h2>
        </div>
        <div className="grid-2">
          {[
            { code: 'RS-01', t: 'Coating chemistry', d: 'Polymer formulation across PVC, TPU, PVDF and fluoropolymer systems. Focus on adhesion, weather resistance and joinability.', tags: ['TPU', 'PVDF', 'Fluoropolymer'] },
            { code: 'RS-02', t: 'Weave engineering', d: 'High-tenacity polyester and aramid weave geometries. Ripstop optimisation for tear-propagation resistance under load.', tags: ['Polyester', 'Aramid', 'Ripstop'] },
            { code: 'RS-03', t: 'Seam & joinability', d: 'RF, hot-air and adhesive seam systems. Targeting >90% base-fabric strength retention at the joint.', tags: ['RF weld', 'Hot-air', 'Adhesive'] },
            { code: 'RS-04', t: 'Lifetime modelling', d: 'Accelerated ageing protocols correlated to deployed field performance. Producing service-life data for tender response.', tags: ['ISO 4892', 'ASTM G154', 'Field corr.'] },
          ].map(s => (
            <div key={s.code} className="card pad reveal">
              <div className="between" style={{ marginBottom: 18 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em' }}>{s.code}</span>
                <span className="badge live"><span className="dot" /> Active</span>
              </div>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 24, margin: '0 0 12px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{s.t}</h4>
              <p style={{ color: 'var(--text-2)', margin: '0 0 20px 0' }}>{s.d}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {s.tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Test infrastructure */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div className="reveal">
            <Eyebrow num="02">Test infrastructure</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 24px 0' }}>
              Twelve test protocols, <span>in-house.</span>
            </h2>
            <p className="lead" style={{ marginBottom: 28 }}>
              We test materials before we sell them. Tear, tensile, peel adhesion, hydrostatic head, accelerated UV,
              fluid permeation and flex fatigue rigs all live in the lab — and the data sheet is built from each batch&apos;s own readings.
            </p>
          </div>
          <div className="reveal delay-2">
            <table className="spec-table">
              <tbody>
                {[
                  { k: 'Tear strength', v: 'ASTM D2261 / D1004' },
                  { k: 'Tensile strength', v: 'ASTM D751 / EN ISO 1421' },
                  { k: 'Peel adhesion', v: 'ASTM D751 (coat-to-fabric)' },
                  { k: 'Hydrostatic head', v: 'AATCC 127' },
                  { k: 'UV ageing', v: 'ISO 4892-3 / ASTM G154' },
                  { k: 'Fluid permeation', v: 'In-house Jet A-1 gravimetric' },
                  { k: 'Flex fatigue', v: 'ASTM D2097 (Bally flex)' },
                  { k: 'Cold flex', v: 'ASTM D2136 at –40 °C' },
                  { k: 'Salt fog corrosion', v: 'ASTM B117 (component-level)' },
                  { k: 'Fire behaviour', v: 'EN 13501-1 / ASTM E84' },
                ].map(s => (
                  <tr key={s.k}><td>{s.k}</td><td>{s.v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Process flow */}
      <Section>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="03">R&amp;D workflow</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>From spec to <span>production batch.</span></h2>
        </div>
        <div className="grid-6 reveal">
          {[
            { n: '01', t: 'Spec capture', d: 'Customer load case, environment, lifetime' },
            { n: '02', t: 'Bench trial', d: 'Coating formulation on lab-scale rig' },
            { n: '03', t: 'Characterise', d: 'Mechanical, environmental, chemical tests' },
            { n: '04', t: 'Iterate', d: 'Formulation tuning to targets' },
            { n: '05', t: 'Pilot batch', d: 'Production-scale coating run' },
            { n: '06', t: 'Sign-off', d: 'Customer test acceptance & lot release' },
          ].map(s => (
            <div key={s.n} style={{ position: 'relative' }}>
              <div className="card pad" style={{ padding: 20, height: '100%' }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', marginBottom: 14 }}>/{s.n}</div>
                <h5 style={{ fontFamily: 'var(--f-display)', fontSize: 16, margin: '0 0 8px 0', fontWeight: 500 }}>{s.t}</h5>
                <p style={{ color: 'var(--text-2)', margin: 0, fontSize: 12, lineHeight: 1.5 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lab telemetry */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 36 }}>
          <Eyebrow num="04">Lab telemetry</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>What&apos;s on the rigs <span>right now.</span></h2>
        </div>
        <div className="grid-3">
          <LabPanel title="UV CHAMBER 02" status="RUNNING" metric="3,840 hrs" sub="ISO 4892-3 cycle · Sample GBT-UV-26.05.B" chart={<UVChart />} />
          <LabPanel title="TEAR RIG 03" status="STANDBY" metric="2,412 N" sub="Last run · GBT-LS-26.04.D" chart={<TearChart />} />
          <LabPanel title="FUEL PERMEATION 01" status="RUNNING" metric="4.1 g/m²/day" sub="Jet A-1 · GBT-FX-26.05.A" chart={<PermeationChart />} />
        </div>
      </Section>

      <ContactStrip onContact={() => router.push('/contact')} />
    </main>
  );
}

function LabPanel({ title, status, metric, sub, chart }: { title: string; status: string; metric: string; sub: string; chart: React.ReactNode }) {
  return (
    <div className="card pad reveal">
      <div className="between" style={{ marginBottom: 18 }}>
        <span className="mono" style={{ fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.16em' }}>{title}</span>
        <span className={`badge ${status === 'RUNNING' ? 'live' : ''}`}><span className="dot" />{status}</span>
      </div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, letterSpacing: '-0.02em', marginBottom: 6 }}>{metric}</div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', marginBottom: 20 }}>{sub}</div>
      <div style={{ height: 100 }}>{chart}</div>
    </div>
  );
}

function UVChart() {
  return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
      {[...Array(10)].map((_, i) => <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="100" stroke="rgba(148,163,184,0.06)" />)}
      <path d="M 0 90 L 20 88 L 40 84 L 60 80 L 80 75 L 100 70 L 120 66 L 140 62 L 160 58 L 180 56 L 200 55" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M 0 90 L 20 88 L 40 84 L 60 80 L 80 75 L 100 70 L 120 66 L 140 62 L 160 58 L 180 56 L 200 55 L 200 100 L 0 100 Z" fill="rgba(59,130,246,0.15)" />
      <circle cx="180" cy="56" r="3" fill="#22d3ee" />
    </svg>
  );
}

function TearChart() {
  const bars = [40, 55, 70, 65, 80, 85, 78, 88, 95, 90];
  return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
      {bars.map((b, i) => (
        <rect key={i} x={i * 20 + 2} y={100 - b} width="16" height={b} fill={i === bars.length - 1 ? '#22d3ee' : 'rgba(59,130,246,0.5)'} />
      ))}
    </svg>
  );
}

function PermeationChart() {
  return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
      {[...Array(10)].map((_, i) => <line key={i} y1={i * 10} x1="0" y2={i * 10} x2="200" stroke="rgba(148,163,184,0.06)" />)}
      <path d="M 0 60 Q 50 30, 100 50 T 200 40" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <line x1="100" y1="0" x2="100" y2="100" stroke="rgba(245,158,11,0.4)" strokeDasharray="3 3" />
      <text x="105" y="14" fill="#f59e0b" fontSize="8" fontFamily="JetBrains Mono">SPEC 5.0</text>
      <circle cx="200" cy="40" r="3" fill="#22d3ee" />
    </svg>
  );
}
