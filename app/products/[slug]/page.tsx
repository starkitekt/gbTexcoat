'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Section, PageHead, Eyebrow, Btn, Icon, ContactStrip, useReveal } from '@/components/ui';
import { PRODUCTS, PRODUCT_LIST } from '@/lib/products';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const ref = useReveal();
  const [tab, setTab] = useState('overview');

  const data = PRODUCTS[params.slug];

  if (!data) {
    return (
      <main>
        <Section><h1 className="h-display h2">Product not found.</h1></Section>
      </main>
    );
  }

  const otherProducts = PRODUCT_LIST.filter(p => p.slug !== params.slug);

  return (
    <main ref={ref as any}>
      <PageHead
        title={data.title}
        subtitle={data.hero}
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Request a sample</Btn>
            <Btn kind="ghost" arrow={false}>Download spec sheet (PDF)</Btn>
          </div>
        }
      />

      {/* Hero image */}
      {data.img && (
        <section style={{ position: 'relative', borderBottom: '1px solid var(--line)' }}>
          <div style={{ position: 'relative', height: 'clamp(280px, 40vh, 480px)', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.78) saturate(0.9)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,28,0.4) 70%, var(--bg-0) 100%)', pointerEvents: 'none' }} />
            <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', paddingBottom: 32 }}>
              <div className="between" style={{ width: '100%', flexWrap: 'wrap', gap: 16 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.16em' }}>{data.imgLabel}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em' }}>FIELD REFERENCE · GBT</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Accent specs strip */}
      <Section tight style={{ background: 'var(--bg-0)', borderBottom: '1px solid var(--line)' }}>
        <div className="grid-4">
          {data.accentSpecs.map((s, i) => (
            <div key={i} className={`reveal delay-${i + 1}`} style={{ padding: '24px 0', borderLeft: i === 0 ? 'none' : '1px solid var(--line)', paddingLeft: i === 0 ? 0 : 28 }}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(32px, 3.4vw, 48px)', letterSpacing: '-0.025em' }}>
                {s.v}{s.u && <span style={{ color: 'var(--accent)', fontSize: '0.5em', marginLeft: 4 }}>{s.u}</span>}
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>{s.k}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical overview with cross-section */}
      <Section>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div className="reveal" style={{ position: 'sticky', top: 100 }}>
            <Eyebrow num="01">Technical overview</Eyebrow>
            <h2 className="h-display h3" style={{ margin: '20px 0 0 0' }}>Layered construction.</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              A {data.layers.length}-layer composite — substrate, adhesion tie-layers, coatings and optional topcoats — engineered together as a single system.
            </p>
            <div style={{ marginTop: 24, display: 'grid', gap: 10 }}>
              {data.layers.map((l, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'center', gap: 16, padding: '12px 16px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 8 }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>L{i + 1}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--text-1)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal delay-2">
            <LayerSchematic layers={data.layers} />
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="02">Field applications</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>Where it <span>deploys.</span></h2>
        </div>
        <div className="grid-2">
          {data.applications.map((a, i) => (
            'img' in a && a.img ? (
              <div key={a.t} className={`card reveal delay-${(i % 2) + 1}`} style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--bg-1)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.92) saturate(0.95)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(10,15,28,0.55) 100%)' }} />
                  <div className="mono" style={{ position: 'absolute', top: 16, left: 16, fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.16em' }}>/0{i + 1}</div>
                </div>
                <div style={{ padding: 24 }}>
                  <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 20, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.01em' }}>{a.t}</h4>
                  <p style={{ color: 'var(--text-2)', margin: 0, fontSize: 14 }}>{a.d}</p>
                </div>
              </div>
            ) : (
              <div key={a.t} className={`card pad reveal delay-${(i % 2) + 1}`} style={{ display: 'flex', gap: 20, alignItems: 'start' }}>
                <div style={{ width: 44, height: 44, flexShrink: 0, background: 'var(--accent-soft)', borderRadius: 10, display: 'grid', placeItems: 'center', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em' }}>0{i + 1}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 20, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.01em' }}>{a.t}</h4>
                  <p style={{ color: 'var(--text-2)', margin: 0, fontSize: 14 }}>{a.d}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </Section>

      {/* Engineering benefits */}
      <Section>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div className="reveal">
            <Eyebrow num="03">Engineering benefits</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '14ch' }}>
              Why engineering teams <span>choose this material.</span>
            </h2>
          </div>
          <div>
            {data.benefits.map((b, i) => (
              <div key={i} className={`reveal delay-${i + 1}`} style={{ padding: '28px 0', borderBottom: i === data.benefits.length - 1 ? 'none' : '1px solid var(--line)', display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
                <div className="mono" style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.12em' }}>/0{i + 1}</div>
                <div>
                  <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{b.t}</h4>
                  <p style={{ color: 'var(--text-2)', margin: 0 }}>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Spec sheet with tabs */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 36 }}>
          <Eyebrow num="04">Specification</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}><span>Datasheet.</span></h2>
        </div>

        <div className="tabs">
          {['overview', 'mechanical', 'environmental', 'compliance'].map(t => (
            <span key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</span>
          ))}
        </div>

        <div className="grid-2" style={{ gap: 48 }}>
          <div>
            <table className="spec-table">
              <tbody>
                {data.spec.filter((_, i) => i < Math.ceil(data.spec.length / 2)).map(s => (
                  <tr key={s.k}><td>{s.k}</td><td>{s.v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <table className="spec-table">
              <tbody>
                {data.spec.filter((_, i) => i >= Math.ceil(data.spec.length / 2)).map(s => (
                  <tr key={s.k}><td>{s.k}</td><td>{s.v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em' }}>
            ALL VALUES TYPICAL · TESTED AT 23 °C · CONTACT ENGINEERING FOR LOT-SPECIFIC TEST CERTIFICATES
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tight>
        <div className="reveal" style={{ position: 'relative', padding: 'clamp(48px, 7vw, 80px) clamp(28px, 5vw, 56px)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.10), transparent 60%)' }} />
          <div className="between" style={{ flexWrap: 'wrap', gap: 32, position: 'relative' }}>
            <div>
              <Eyebrow num="05">Next step</Eyebrow>
              <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '18ch' }}>
                Test it in <span>your environment.</span>
              </h2>
              <p className="lead" style={{ marginTop: 16 }}>
                Sample swatches and engineering consult — free for qualified projects.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
              <Btn kind="primary" onClick={() => router.push('/contact')}>Request a sample</Btn>
              <Btn kind="ghost" onClick={() => router.push('/rd')}>How we test</Btn>
            </div>
          </div>
        </div>
      </Section>

      {/* Other products */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 32 }}>
          <Eyebrow num="06">Other product families</Eyebrow>
        </div>
        <div className="grid-3">
          {otherProducts.map(p => (
            <div key={p.slug} className="card interactive reveal" onClick={() => router.push(`/products/${p.slug}`)} style={{ padding: 28, cursor: 'pointer' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', marginBottom: 16 }}>{p.code}</div>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 8px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{p.title}</h4>
              <p style={{ color: 'var(--text-2)', margin: '0 0 24px 0', fontSize: 14 }}>{p.subtitle}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-0)', fontSize: 13 }}>
                <span>Explore</span><Icon.arrow />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactStrip onContact={() => router.push('/contact')} />
    </main>
  );
}

function LayerSchematic({ layers }: { layers: string[] }) {
  const total = layers.length;
  return (
    <div style={{ position: 'relative', aspectRatio: '5/6' }}>
      <div className="blueprint" style={{ aspectRatio: 'auto', height: '100%', overflow: 'hidden' }}>
        <svg viewBox="0 0 400 500" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="none">
          <defs>
            <pattern id="weavePat" x="0" y="0" width="10" height="6" patternUnits="userSpaceOnUse">
              <line x1="0" y1="3" x2="10" y2="3" stroke="rgba(148,163,184,0.5)" strokeWidth="1" />
              <line x1="5" y1="0" x2="5" y2="6" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
            </pattern>
          </defs>
          {layers.map((l, i) => {
            const isWeave = l.toLowerCase().includes('weave');
            const isCoat = l.toLowerCase().includes('coat') || l.toLowerCase().includes('topcoat');
            const isBarrier = l.toLowerCase().includes('barrier');
            const fill = isWeave ? 'url(#weavePat)' : isCoat ? 'rgba(59,130,246,0.25)' : isBarrier ? 'rgba(245,158,11,0.3)' : 'rgba(148,163,184,0.15)';
            const stroke = isWeave ? 'rgba(148,163,184,0.4)' : isCoat ? '#3b82f6' : isBarrier ? '#f59e0b' : 'rgba(148,163,184,0.4)';
            const h = isWeave ? 50 : isCoat ? 30 : isBarrier ? 28 : 14;
            return (
              <g key={i} transform={`translate(0 ${40 + i * (420 / total)})`}>
                <rect x="60" y="0" width="220" height={h} fill={fill} stroke={stroke} strokeWidth="0.6" />
                <path d={`M 290 ${h / 2} l 30 0 l 20 -${15 - i * 2}`} stroke="rgba(59,130,246,0.5)" strokeWidth="0.5" fill="none" />
                <circle cx="290" cy={h / 2} r="2" fill="#22d3ee" />
                <text x="345" y={h / 2 - 12 + i * 2} fill="#22d3ee" fontSize="9" fontFamily="JetBrains Mono">L{i + 1}</text>
              </g>
            );
          })}
          <g stroke="rgba(59,130,246,0.5)" strokeWidth="0.6" fill="none">
            <path d="M 30 50 L 30 450" />
            <path d="M 25 50 L 35 50" />
            <path d="M 25 450 L 35 450" />
            <text x="0" y="255" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(-90 12 255)">CROSS-SECTION</text>
          </g>
        </svg>
        <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--cyan)' }}>SECTION A-A · NTS</div>
        <div style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.12em', color: 'var(--text-3)' }}>REV 02.6</div>
      </div>
    </div>
  );
}
