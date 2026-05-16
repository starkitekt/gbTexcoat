'use client';
import { useRouter } from 'next/navigation';
import { Section, PageHead, Eyebrow, Btn, Icon, ContactStrip } from '@/components/ui';
import { useReveal } from '@/components/ui';

export default function AboutPage() {
  const router = useRouter();
  const ref = useReveal();

  return (
    <main ref={ref as any}>
      <PageHead
        title={<>Engineering coated fabric for the next industrial decade.</>}
        subtitle="GB Texcoat Solution Pvt Ltd is an advanced coated fabric and technical textile company. We engineer materials for aerostats, airships, fuel storage, tensile architecture and other applications where conventional textiles fail."
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/products')}>Product systems</Btn>
            <Btn kind="ghost" onClick={() => router.push('/rd')}>Inside the lab</Btn>
          </div>
        }
      />

      {/* Mission */}
      <Section>
        <div className="grid-2" style={{ gap: 80, alignItems: 'start' }}>
          <div className="reveal">
            <Eyebrow num="02">Mission</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>Building India&apos;s coated-fabric supply chain — <span>from raw weave to certified system.</span></h2>
          </div>
          <div className="reveal delay-2">
            <p className="lead" style={{ marginBottom: 20 }}>GB Texcoat Solution specializes in manufacturing lightweight and high-performance coated and laminated fabrics for diverse industries — aerospace, petrochemicals, telecommunication, defence &amp; strategy, recreation and advertisement.</p>
            <p style={{ color: 'var(--text-2)' }}>We develop customized fabrics for Lighter-Than-Air (LTA) platforms such as aerostats, airships, large tethered balloons and inflatable structures — using high-performance materials and state-of-the-art technologies to deliver products that are lightweight, high-strength, safe, durable and suitable for extreme outdoor conditions.</p>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 64, position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about.jpg" alt="Facility at R&I Park, IIT Delhi" style={{ width: '100%', display: 'block', maxHeight: 560, objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,15,28,0.7) 100%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 24, left: 24, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--cyan)' }}>FACILITY · R&amp;I PARK, IIT DELHI</div>
        </div>
      </Section>

      {/* Pillars */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <Eyebrow num="03">What we do</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>Four capabilities. <span>One platform.</span></h2>
        </div>
        <div className="grid-4">
          {[
            { t: 'Material science', d: 'Coating chemistry, polymer formulation and substrate-weave compatibility.', i: Icon.atom },
            { t: 'Process engineering', d: 'Knife-coating, laminating, RF welding and seam reinforcement at scale.', i: Icon.layers },
            { t: 'Testing & QC', d: 'In-house tear, tensile, UV-aging and chemical-compatibility test rigs.', i: Icon.shield },
            { t: 'Systems integration', d: 'From specification to delivered hull, bladder or membrane assembly.', i: Icon.beam },
          ].map((c, i) => {
            const Ic = c.i;
            return (
              <div key={i} className={`spec-card reveal delay-${i + 1}`}>
                <div className="icon"><Ic /></div>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="grid-2" style={{ gap: 64, alignItems: 'start' }}>
          <div className="reveal">
            <Eyebrow num="04">Where we are</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 24px 0' }}>Inside the IIT Delhi <span>innovation ecosystem.</span></h2>
            <p className="lead" style={{ marginBottom: 24 }}>Our lab and office are inside the Research &amp; Innovation Park at IIT Delhi — adjacent to materials science, polymer engineering and aerospace research groups.</p>
            <div className="card" style={{ padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 12 }}>FACILITY</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7 }}>Research &amp; Innovation Park<br />Block B, 2nd Floor, 2B-4F<br />Indian Institute of Technology Delhi<br />Hauz Khas, New Delhi 110016</p>
              <div style={{ marginTop: 20 }}><Btn kind="ghost" onClick={() => router.push('/contact')}>Plan a visit</Btn></div>
            </div>
          </div>
          <div className="reveal delay-2">
            <Eyebrow num="05">Trajectory</Eyebrow>
            <div className="timeline" style={{ marginTop: 24 }}>
              <div className="marker"><div className="dot" /><div className="ln" /></div>
              <div>
                {[
                  { yr: 'INCEPTION', t: 'Founded as a research-led coated-fabric venture', d: 'Established within the R&I Park, IIT Delhi to pursue indigenous coated-fabric manufacturing.' },
                  { yr: 'PHASE 01', t: 'First coating chemistries', d: 'Initial UV-stable polymer coatings, characterised against ASTM weathering protocols.' },
                  { yr: 'PHASE 02', t: 'Aerostat hull material', d: 'Lightweight high-strength formulation targeting aerostat and airship envelopes.' },
                  { yr: 'PHASE 03', t: 'Fuel storage program', d: 'Portable, leak-resistant fuel containment for defence and field-operations clients.' },
                  { yr: 'NOW', t: 'Scaling for tender response', d: 'Test documentation, certifications and capacity build-out for institutional customers.' },
                ].map((r, i) => (
                  <div key={i} className="timeline-row">
                    <div className="yr">/{r.yr}</div>
                    <h4>{r.t}</h4>
                    <p>{r.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section style={{ background: 'var(--bg-0)' }} tight>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="06">Operating principles</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>How we work with <span>engineering teams.</span></h2>
        </div>
        <div className="grid-3">
          {[
            { n: '01', t: 'Specification first', d: 'We work from the engineering requirement backward — load case, environment, lifetime — not from a catalogue forward.' },
            { n: '02', t: 'Documentation as product', d: 'Every batch ships with traceable test data, formulation lot ID, and ageing curves. Audit-ready.' },
            { n: '03', t: 'Co-development welcome', d: 'For non-standard specs, we run a paid characterisation cycle with the customer. The IP and the data are shared.' },
          ].map(v => (
            <div key={v.n} className="card reveal" style={{ padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', marginBottom: 14 }}>/{v.n}</div>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 12px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{v.t}</h4>
              <p style={{ color: 'var(--text-2)', margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <ContactStrip onContact={() => router.push('/contact')} />
    </main>
  );
}
