'use client';
import { useRouter } from 'next/navigation';
import { Section, PageHero, Eyebrow, Btn, FabricPlaceholder, ContactStrip } from '@/components/ui';
import { PRODUCT_LIST } from '@/lib/products';

export default function ProductsPage() {
  const router = useRouter();
  return (
    <main>
      <PageHero
        eyebrow="Product catalogue"
        title={<>Four fabric systems.<br /><span>One</span> engineering<br />platform.</>}
        subtitle="Each family targets a distinct failure mode — weight, weathering, tear or fluid containment. Speak to engineering when your specification falls outside the standard catalogue."
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Request a spec sheet</Btn>
            <Btn kind="ghost" onClick={() => router.push('/rd')}>How we test</Btn>
          </div>
        }
        images={[
          { src: '/hero/products/1.webp', alt: 'Close-up of technical woven fabric material' },
          { src: '/hero/products/2.webp', alt: 'Woven fabric texture detail' },
          { src: '/hero/products/3.webp', alt: 'Coarse technical cloth texture close-up' },
          { src: '/hero/products/4.webp', alt: 'Gray knitted fabric surface texture' },
          { src: '/hero/products/5.webp', alt: 'Industrial woven fabric weave pattern' },
        ]}
      />

      <Section>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="03">Product families</Eyebrow>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {PRODUCT_LIST.map((f, idx) => (
            <FamilyRow key={f.slug} family={f} idx={idx} onNavigate={() => router.push(`/products/${f.slug}`)} />
          ))}
        </div>
      </Section>

      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="grid-2" style={{ gap: 64, alignItems: 'center' }}>
          <div className="reveal">
            <Eyebrow num="04">Need something non-standard?</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 20px 0' }}>Custom <span style={{ color: 'var(--accent)' }}>formulation</span> programs.</h2>
            <p className="lead" style={{ marginBottom: 24 }}>Many engineering teams arrive with a spec that doesn&apos;t fit a catalogue. We run paid characterisation cycles with shared data. Typical lead time 6 to 14 weeks.</p>
            <Btn kind="primary" onClick={() => router.push('/contact')}>Start a custom program</Btn>
          </div>
          <div className="reveal delay-2">
            <div className="card" style={{ padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 16 }}>TYPICAL CYCLE</div>
              {[
                { w: '0–2', t: 'Spec review & joint statement of work' },
                { w: '2–5', t: 'Bench formulation & coating trials' },
                { w: '5–9', t: 'Test rig characterisation & iteration' },
                { w: '9–14', t: 'Pilot batch & customer sign-off' },
              ].map((p, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 20, padding: '16px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--line)' }}>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--accent)' }}>WK {p.w}</div>
                  <div style={{ fontSize: 14 }}>{p.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ContactStrip onContact={() => router.push('/contact')} />
    </main>
  );
}

function FamilyRow({ family, idx, onNavigate }: { family: typeof PRODUCT_LIST[0]; idx: number; onNavigate: () => void }) {
  const flip = idx % 2 === 1;
  return (
    <div className="card reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, overflow: 'hidden' }}>
      <div style={{ order: flip ? 2 : 1, position: 'relative', aspectRatio: '5/4', background: 'var(--bg-1)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={family.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(10,15,28,0.55) 100%)' }} />
        <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--cyan)' }}>{family.code} · /{family.n}</div>
        <div style={{ position: 'absolute', bottom: 20, left: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {family.bullets.map(b => <span key={b} className="badge">{b}</span>)}
        </div>
      </div>
      <div style={{ order: flip ? 1 : 2, padding: 'clamp(28px,4vw,48px)' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em' }}>{family.code}</div>
        <h3 className="h-display" style={{ fontSize: 'clamp(28px,3vw,40px)', margin: '14px 0 8px 0', fontWeight: 500, letterSpacing: '-0.02em' }}>{family.title}</h3>
        <div className="muted" style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.08em', marginBottom: 16 }}>{family.subtitle}</div>
        <p style={{ color: 'var(--text-1)', marginBottom: 28 }}>{family.d}</p>
        <table className="spec-table" style={{ marginBottom: 28 }}>
          <tbody>{family.specs.map(s => <tr key={s.k}><td>{s.k}</td><td>{s.v}</td></tr>)}</tbody>
        </table>
        <Btn kind="primary" onClick={onNavigate}>View product</Btn>
      </div>
    </div>
  );
}
