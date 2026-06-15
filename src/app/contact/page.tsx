'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Section, Eyebrow, Btn, Icon, useReveal } from '@/components/ui';

export default function ContactPage() {
  const router = useRouter();
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', application: 'aerostat', topic: 'sample', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const doSubmit = () => setSubmitted(true);

  return (
    <main ref={ref as any}>
      {/* Contact Hero */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,120px) 0 clamp(56px,7vw,80px)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 70% 30%, rgba(59,130,246,0.10), transparent 70%), linear-gradient(180deg, var(--bg-0) 0%, var(--bg-1) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at 70% 30%, black 30%, transparent 90%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow num="01">Get in touch</Eyebrow>
          <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(44px,6vw,80px)', letterSpacing: '-0.03em', lineHeight: 1, margin: '20px 0 24px 0', maxWidth: '16ch', fontWeight: 500 }}>
            Engineering consult.<br /><span style={{ color: 'var(--text-2)' }}>Within 24 hours.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '52ch', marginBottom: 40, color: 'var(--text-1)' }}>
            Tell us about the application, the load case and the environment. We respond with sample swatches, a test plan and a quote.
          </p>
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', borderTop: '1px solid var(--line)', paddingTop: 32 }}>
            {[
              { icon: <Icon.clock />, k: 'Office hours', v: 'Mon to Fri, 10AM to 6PM IST' },
              { icon: <Icon.calendar />, k: 'Lab visits', v: '48 hr advance notice required' },
              { icon: <Icon.timer />, k: 'Sample turnaround', v: '7 to 10 working days' },
            ].map(f => (
              <div key={f.k} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-soft)', display: 'grid', placeItems: 'center', color: 'var(--accent)', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--f-mono)', fontSize: 9.5, color: 'var(--text-3)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 3 }}>{f.k}</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 14, letterSpacing: '-0.01em' }}>{f.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section>
        <div className="grid-2" style={{ gap: 56, alignItems: 'start' }}>
          {/* Form */}
          <div className="reveal">
            <Eyebrow num="02">Project brief</Eyebrow>
            <h2 className="h-display h3" style={{ margin: '16px 0 28px 0' }}>Tell us what you&apos;re building.</h2>

            {submitted ? (
              <div className="card pad" style={{ padding: 40, borderColor: 'var(--accent)' }}>
                <div className="badge live" style={{ marginBottom: 20 }}><span className="dot" /> RECEIVED</div>
                <h3 className="h-display" style={{ fontSize: 28, margin: '0 0 12px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>
                  Thanks, {form.name || 'engineer'}.
                </h3>
                <p style={{ color: 'var(--text-1)', margin: '0 0 24px 0' }}>
                  Your brief is in the queue. We respond within 24 hours, India working time.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Btn kind="ghost" onClick={() => { setSubmitted(false); setForm({ name: '', org: '', email: '', phone: '', application: 'aerostat', topic: 'sample', message: '' }); }}>
                    Submit another
                  </Btn>
                  <Btn kind="primary" onClick={() => router.push('/products')}>Browse product systems</Btn>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" required value={form.name} onChange={set('name')} placeholder="Full name" />
                  </div>
                  <div className="field">
                    <label htmlFor="org">Organisation</label>
                    <input id="org" value={form.org} onChange={set('org')} placeholder="Company or institution" />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={set('email')} placeholder="you@org.com" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input id="phone" value={form.phone} onChange={set('phone')} placeholder="+91 ..." />
                  </div>
                </div>
                <div className="grid-2" style={{ gap: 16 }}>
                  <div className="field">
                    <label htmlFor="application">Application</label>
                    <select id="application" value={form.application} onChange={set('application')}>
                      <option value="aerostat">Aerostat / airship hull</option>
                      <option value="tensile">Tensile architecture</option>
                      <option value="fuel">Fuel storage / bladder</option>
                      <option value="inflatable">Inflatable structure</option>
                      <option value="industrial">Industrial cover / membrane</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="topic">Reason for contact</label>
                    <select id="topic" value={form.topic} onChange={set('topic')}>
                      <option value="sample">Sample request</option>
                      <option value="quote">Quote / pricing</option>
                      <option value="custom">Custom formulation</option>
                      <option value="tender">Tender response</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Project brief</label>
                  <textarea id="message" value={form.message} onChange={set('message')} placeholder="Spec, environment, lifetime expectation, volume..." rows={5} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.1em' }}>
                    NDA AVAILABLE ON REQUEST · 24-HOUR RESPONSE
                  </div>
                  <Btn kind="primary" onClick={doSubmit}>Send brief</Btn>
                </div>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="reveal delay-2" style={{ display: 'grid', gap: 20 }}>
            <ContactCard
              icon={<Icon.pin />}
              k="Visit"
              t={<>Research &amp; Innovation Park<br />Block B, 2nd Floor, 2B-4F</>}
              sub={<>Indian Institute of Technology Delhi<br />Hauz Khas, New Delhi 110016</>}
            />
            <div style={{ display: 'grid', gap: 12, gridTemplateColumns: '1fr 1fr' }}>
              <ContactCard icon={<Icon.phone />} k="Call" t={<a className="footer-link" href="tel:+918851868235">+91 88518 68235</a>} />
              <ContactCard icon={<Icon.mail />} k="Email" t={<a className="footer-link" href="mailto:info@gbtexcoatsolution.com">info@gbtexcoatsolution.com</a>} />
            </div>
            <div className="card" style={{ overflow: 'hidden', position: 'relative', aspectRatio: '16/10' }}>
              <MapTile />
              <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.12em' }}>IIT-D · HAUZ KHAS</div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--text-3)', letterSpacing: '0.12em' }}>28.5450 N · 77.1925 E</div>
              <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <Btn kind="ghost" arrow={false} onClick={() => window.open('https://maps.google.com/?q=IIT+Delhi+Research+Innovation+Park', '_blank')}>
                  Open in Maps
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ContactCard({ icon, k, t, sub }: { icon: React.ReactNode; k: string; t: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <div className="card pad" style={{ padding: 28 }}>
      <div style={{ width: 38, height: 38, borderRadius: 8, background: 'var(--accent-soft)', display: 'grid', placeItems: 'center', color: 'var(--accent)', marginBottom: 18 }}>{icon}</div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 8 }}>{k.toUpperCase()}</div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, lineHeight: 1.4, letterSpacing: '-0.01em' }}>{t}</div>
      {sub && <div style={{ color: 'var(--text-2)', fontSize: 13.5, marginTop: 10, lineHeight: 1.6 }}>{sub}</div>}
    </div>
  );
}

function MapTile() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const lon = 77.1926;
  const lat = 28.5454;

  if (token) {
    const marker = `pin-l+3b82f6(${lon},${lat})`;
    const src = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/${marker}/${lon},${lat},15.5,0,0/600x380@2x?access_token=${token}`;
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src={src} alt="IIT Delhi Research & Innovation Park, Hauz Khas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    );
  }

  return (
    <svg viewBox="0 0 600 380" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="mapGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#0b1426" />
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.06)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="600" height="380" fill="url(#mapGrid)" />
      <path d="M 0 200 L 600 180" stroke="rgba(148,163,184,0.18)" strokeWidth="6" />
      <path d="M 0 200 L 600 180" stroke="rgba(148,163,184,0.35)" strokeWidth="0.6" />
      <path d="M 280 0 L 320 380" stroke="rgba(148,163,184,0.18)" strokeWidth="6" />
      <path d="M 280 0 L 320 380" stroke="rgba(148,163,184,0.35)" strokeWidth="0.6" />
      <path d="M 100 0 L 130 380" stroke="rgba(148,163,184,0.12)" strokeWidth="3" />
      <path d="M 450 0 L 480 380" stroke="rgba(148,163,184,0.12)" strokeWidth="3" />
      <path d="M 0 80 L 600 100" stroke="rgba(148,163,184,0.10)" strokeWidth="2" />
      <path d="M 0 300 L 600 320" stroke="rgba(148,163,184,0.10)" strokeWidth="2" />
      <rect x="340" y="120" width="120" height="60" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" />
      <rect x="180" y="220" width="80" height="80" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.15)" />
      <rect x="470" y="220" width="100" height="60" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.15)" />
      <g transform="translate(300 190)">
        <circle r="36" fill="rgba(59,130,246,0.12)" />
        <circle r="24" fill="rgba(59,130,246,0.2)" />
        <circle r="6" fill="#3b82f6" />
        <circle r="14" fill="none" stroke="#22d3ee" strokeWidth="1" />
        <circle r="22" fill="none" stroke="#22d3ee" strokeWidth="0.6" opacity="0.5" />
      </g>
      <g transform="translate(310 180)">
        <line x1="0" y1="0" x2="50" y2="-40" stroke="#3b82f6" strokeWidth="0.6" />
        <rect x="50" y="-58" width="160" height="32" fill="rgba(10,15,28,0.9)" stroke="rgba(59,130,246,0.4)" />
        <text x="58" y="-44" fill="#22d3ee" fontSize="10" fontFamily="JetBrains Mono">R&amp;I PARK · BLOCK B</text>
        <text x="58" y="-32" fill="#9ca3af" fontSize="9" fontFamily="JetBrains Mono">IIT DELHI · HAUZ KHAS</text>
      </g>
    </svg>
  );
}
