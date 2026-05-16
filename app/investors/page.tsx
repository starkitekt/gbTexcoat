'use client';
import { useRouter } from 'next/navigation';
import { Section, PageHead, Eyebrow, Btn, useReveal } from '@/components/ui';

export default function InvestorsPage() {
  const router = useRouter();
  const ref = useReveal();

  return (
    <main ref={ref as any}>
      <PageHead
        title={<>The coated-fabric market is a $28B engineering problem.</>}
        subtitle="GB Texcoat is building a vertically-integrated coated-fabric manufacturer for India's aerospace, defence and industrial supply chain — and for the export markets adjacent to it."
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Request investor brief</Btn>
            <Btn kind="ghost" arrow={false}>Download deck (PDF)</Btn>
          </div>
        }
      />

      {/* Market stats */}
      <Section tight style={{ background: 'var(--bg-0)', borderBottom: '1px solid var(--line)' }}>
        <div className="grid-4">
          {[
            { v: '$28B', k: 'Global market size · 2025' },
            { v: '6.8%', k: 'Sector CAGR · 2025–2032' },
            { v: '~70%', k: 'India demand · import-dependent' },
            { v: '$4.2B', k: 'India coated-fabric demand · 2030E' },
          ].map((s, i) => (
            <div key={i} className={`reveal delay-${i + 1}`} style={{ padding: '24px 0', borderLeft: i === 0 ? 'none' : '1px solid var(--line)', paddingLeft: i === 0 ? 0 : 28 }}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(32px, 3.4vw, 48px)', letterSpacing: '-0.025em', color: 'var(--accent)' }}>{s.v}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 8 }}>{s.k}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment thesis */}
      <Section>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div className="reveal" style={{ position: 'sticky', top: 100 }}>
            <Eyebrow num="01">Investment thesis</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '14ch' }}>
              Indigenous supply for a <span>strategic material.</span>
            </h2>
          </div>
          <div>
            {[
              { t: 'The category is structurally import-dependent', d: 'India consumes coated fabric for aerostats, defence inflatables, tensile architecture and fuel storage, but ~70% of high-performance demand is imported. Strategic sectors increasingly require indigenous supply.' },
              { t: 'R&D moat lives inside IIT Delhi', d: 'Co-location with university polymer, materials and aerospace labs lets us iterate coating chemistries faster than catalogue manufacturers. Test infrastructure that would cost $5–8M to recreate is across the corridor.' },
              { t: 'Tender-grade documentation as differentiator', d: 'Most domestic players cannot supply test certificates against MIL-STD, STANAG and ASTM specifications. We can, and that unlocks aerospace and defence tenders that are otherwise foreclosed.' },
              { t: 'Four-family product platform, not single-SKU', d: 'Lightweight hull material, UV-stable membrane, structural tensile and fuel storage families share substrate and coating IP — capex amortises across SKUs.' },
            ].map((r, i) => (
              <div key={i} className={`reveal delay-${i + 1}`} style={{ padding: '28px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--line)', display: 'grid', gridTemplateColumns: '40px 1fr', gap: 24 }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.16em' }}>0{i + 1}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{r.t}</h4>
                  <p style={{ color: 'var(--text-2)', margin: 0 }}>{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Demand chart */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="02">Sector trajectory</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>India coated-fabric <span>demand.</span></h2>
        </div>
        <div className="card" style={{ padding: 'clamp(24px, 4vw, 48px)' }}>
          <div className="between" style={{ marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em' }}>SEGMENT VOLUME · INR CRORE</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 28, letterSpacing: '-0.02em', marginTop: 8 }}>Aerospace + defence + industrial</div>
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              <LegendDot color="#3b82f6" label="Total demand" />
              <LegendDot color="#22d3ee" label="Domestic supply" />
              <LegendDot color="#f59e0b" label="Import gap" />
            </div>
          </div>
          <DemandChart />
        </div>
      </Section>

      {/* Use of funds */}
      <Section>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="03">Use of capital</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>
            Where the <span>next round</span> goes.
          </h2>
        </div>
        <div className="grid-4">
          {[
            { p: '40%', t: 'Production scale-up', d: 'Knife-coating, laminating and RF welding capacity expansion at the IIT-D facility.' },
            { p: '25%', t: 'Certification', d: 'Tender-grade compliance documentation — MIL-STD, STANAG, ASTM, ISO.' },
            { p: '20%', t: 'R&D platform', d: 'Additional test rigs and new chemistry programs — fluoropolymer barrier, aramid weave.' },
            { p: '15%', t: 'Go-to-market', d: 'Engineering sales for aerospace, defence and architectural channels.' },
          ].map((u, i) => (
            <div key={u.t} className={`card pad reveal delay-${i + 1}`}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, letterSpacing: '-0.03em', color: 'var(--accent)', lineHeight: 1 }}>{u.p}</div>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 20, margin: '20px 0 8px 0', fontWeight: 500, letterSpacing: '-0.01em' }}>{u.t}</h4>
              <p style={{ color: 'var(--text-2)', margin: 0, fontSize: 13.5 }}>{u.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investor relations CTA */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ padding: 'clamp(40px, 6vw, 72px)', background: 'linear-gradient(135deg, var(--bg-2) 0%, var(--bg-1) 100%)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: '40%', background: 'radial-gradient(ellipse at right, rgba(59,130,246,0.18), transparent 70%)', pointerEvents: 'none' }} />
          <div className="grid-2" style={{ alignItems: 'center', gap: 48, position: 'relative' }}>
            <div>
              <Eyebrow num="04">Investor relations</Eyebrow>
              <h2 className="h-display h2" style={{ margin: '20px 0 16px 0' }}>
                Want the deck and <span>unit economics?</span>
              </h2>
              <p className="lead">
                Detailed investor materials are shared under NDA with qualified investors and strategic partners. Reach out for a conversation.
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Btn kind="primary" onClick={() => router.push('/contact')}>Request investor brief</Btn>
                <Btn kind="ghost" onClick={() => router.push('/rd')}>How we test</Btn>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 12 }}>POINT OF CONTACT</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>
                <strong>Investor Relations</strong><br />
                <a className="footer-link" href="mailto:info@gbtexcoatsolution.com">info@gbtexcoatsolution.com</a><br />
                <a className="footer-link" href="tel:+918851868235">+91 88518 68235</a>
              </p>
              <div className="divider" style={{ margin: '24px 0' }} />
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 8 }}>REGISTERED ADDRESS</div>
              <p style={{ margin: 0, color: 'var(--text-1)', fontSize: 14, lineHeight: 1.7 }}>
                Research &amp; Innovation Park, Block B<br />
                IIT Delhi, Hauz Khas, New Delhi 110016
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--text-2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
      <span style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
      {label}
    </span>
  );
}

function DemandChart() {
  const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'];
  const total = [2200, 2400, 2700, 3000, 3300, 3650, 3950, 4280, 4600];
  const domestic = [600, 700, 800, 950, 1150, 1350, 1600, 1900, 2250];

  const W = 800, H = 280;
  const padL = 56, padR = 24, padT = 16, padB = 36;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const max = 5000;
  const colWidth = innerW / years.length;

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 320 }}>
        {[0, 1000, 2000, 3000, 4000, 5000].map(v => {
          const y = padT + innerH - (v / max) * innerH;
          return (
            <g key={v}>
              <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="rgba(148,163,184,0.08)" />
              <text x={padL - 8} y={y + 4} fill="#6b7280" fontSize="10" textAnchor="end" fontFamily="JetBrains Mono">{v.toLocaleString()}</text>
            </g>
          );
        })}
        {years.map((yr, i) => {
          const cx = padL + colWidth * i + colWidth / 2;
          const bw = Math.min(40, colWidth * 0.5);
          const tH = (total[i] / max) * innerH;
          const dH = (domestic[i] / max) * innerH;
          return (
            <g key={yr}>
              <rect x={cx - bw / 2} y={padT + innerH - tH} width={bw} height={tH - dH} fill="rgba(245,158,11,0.25)" />
              <rect x={cx - bw / 2} y={padT + innerH - dH} width={bw} height={dH} fill="#22d3ee" opacity="0.85" />
              <rect x={cx - bw / 2} y={padT + innerH - tH} width={bw} height={tH} fill="none" stroke="rgba(59,130,246,0.6)" strokeWidth="0.8" />
              <text x={cx} y={H - padB + 18} fill="#9ca3af" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">{yr}</text>
            </g>
          );
        })}
        <polyline
          points={years.map((_, i) => {
            const cx = padL + colWidth * i + colWidth / 2;
            const y = padT + innerH - (total[i] / max) * innerH;
            return `${cx},${y}`;
          }).join(' ')}
          stroke="#3b82f6" strokeWidth="1.5" fill="none"
        />
        {years.map((_, i) => {
          const cx = padL + colWidth * i + colWidth / 2;
          const y = padT + innerH - (total[i] / max) * innerH;
          return <circle key={i} cx={cx} cy={y} r="3" fill="#3b82f6" />;
        })}
      </svg>
    </div>
  );
}
