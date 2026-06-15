'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Section, PageHero, Eyebrow, Btn, Icon, ContactStrip } from '@/components/ui';
import { useReveal } from '@/components/ui';

const MILESTONES: Array<{ date: string; event: string; detail: string; img?: string }> = [
  { date: 'OCT 2023', event: 'Company incorporation', detail: 'GB Texcoat Solutions Pvt Ltd established as a research-led coated fabric venture.' },
  { date: 'MAR 2024', event: 'TRL-6 achieved', detail: 'Technology validated in a relevant environment. Prototype coated fabrics meet target specs.' },
  { date: 'JUL 2024', event: 'Industry-scale production', detail: 'Manufacturing process optimised; outsourced production line operational for batch-scale delivery.' },
  { date: 'APR 2025', event: 'First DRDO order delivered', detail: 'First paid order delivered to the Defence Research and Development Organisation.' },
  { date: 'NOV 2025', event: 'NIDHI SSS fund', detail: 'National Initiative for Developing and Harnessing Innovations Seed Support System grant received.' },
  { date: 'JAN 2026', event: 'Startup India Seed Fund', detail: 'Government of India seed fund received under the Startup India initiative.' },
  { date: 'MAR 2026', event: 'Kotak BizLab Grant', detail: 'Selected for the Kotak Mahindra BizLab innovation grant program.' },
  { date: 'APR 2026', event: 'Rs 70L revenue, FY 25-26', detail: 'Annual revenue milestone crossed for the financial year 2025-26.' },
  { date: 'MAY 2026', event: 'APEX AEROTEX launched', detail: 'Product portfolio for aerospace and LTA platform applications formally launched.', img: '/journey/apex-aerotex.png' },
  { date: 'JUN 2026', event: 'Fuel tank field validation', detail: 'Flexible fuel storage tanks approved for field validation by the Indian Army.', img: '/journey/fuel-bag.jpg' },
  { date: 'JUN 2026', event: 'FUEL GUARDTEX launched', detail: 'Dedicated fuel containment product portfolio formally launched.', img: '/journey/fuel-guardtex.png' },
  { date: 'JUN 2026', event: 'AkashNetra aerostat tested', detail: 'Aerostat surveillance system (AkashNetra) tested and cleared for field validation.', img: '/journey/aerostat-balloon.jpg' },
];

const HOW_WE_WORK = [
  { n: '01', t: 'Requirement Assessment', d: 'Engage closely with customers to understand application requirements, operating conditions, performance expectations, and technical challenges.' },
  { n: '02', t: 'Engineering & Specification', d: 'Evaluate requirements and define detailed technical specifications, material architecture, and performance targets.' },
  { n: '03', t: 'Material Design & Formulation', d: 'Develop optimised multilayer textile structures by combining engineered fabrics, functional coatings, and barrier layers.' },
  { n: '04', t: 'Prototype & Pilot Validation', d: 'Pilot-scale trials and sample evaluations conducted in collaboration with the customer to validate performance.' },
  { n: '05', t: 'Manufacturing, Testing & QA', d: 'Advanced coated and laminated materials produced using controlled processes, followed by comprehensive quality checks.' },
  { n: '06', t: 'Delivery & Continuous Improvement', d: 'Technical support, performance monitoring, and feedback integration for continuous product improvement.' },
];

const CORE_TEAM = [
  { name: 'Neeraj Mandlekar', title: 'Co-Founder & CEO', qual: 'M.Sc., Ph.D (Functional Polymers) · 12 yr exp.', photo: '/team/neeraj.jpg' },
  { name: 'Sandeep Kumar', title: 'Textile Processing', qual: '11 yr experience in technical textiles', photo: '/team/sandeep.jpg' },
  { name: 'Anwar Hussain', title: 'NPD Manager', qual: 'M.Tech (Textile Processing)' },
  { name: 'Abhinav Aggrawal', title: 'Engineer', qual: 'B.Tech (Chemical Engineering)' },
];

const ADVISORY = [
  { name: 'Dr. Mangala Joshi', title: 'Technical Director & Mentor', qual: 'Professor, IIT Delhi', photo: '/team/mangala-joshi.jpg' },
  { name: 'Dr. B. S. Butola', title: 'Technical Mentor & Advisor', qual: 'Professor, IIT Delhi', photo: '/team/bs-butola.jpg' },
  { name: 'Mr. Manik Mukherjee', title: 'Defence Technology Advisor', qual: 'Former DRDO Director', photo: '/team/manik-mukherjee.jpg' },
  { name: 'Dr. Anita Rewar', title: 'Technical Advisor', qual: 'R&D Head, Coim' },
  { name: 'Mr. Anshul Garg', title: 'Chartered Accountant', qual: 'Garg & Shekher Company' },
];

function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const idx = Number(entry.target.getAttribute('data-idx'));
        setActiveIndices(prev => {
          const next = new Set(prev);
          if (entry.isIntersecting) next.add(idx);
          return next;
        });
      });
    }, { threshold: 0.2 });

    container.querySelectorAll('[data-idx]').forEach(n => observer.observe(n));

    const onScroll = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, viewH - rect.top);
      const total = rect.height + viewH;
      setFillHeight(Math.min(1, Math.max(0, scrolled / total)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="tl-wrap" ref={containerRef}>
      <div className="tl-spine-track">
        <div className="tl-spine-fill" style={{ transform: `scaleY(${fillHeight})` }} />
      </div>
      {MILESTONES.map((m, i) => (
        <div
          key={i}
          data-idx={i}
          className={`tl-entry${activeIndices.has(i) ? ' active' : ''}`}
        >
          <div className="tl-date">{m.date}</div>
          <div className="tl-node-col">
            <div className="tl-node" />
          </div>
          <div className="tl-content" style={{ transitionDelay: `${80 + (i % 3) * 60}ms` }}>
            {m.img && <div className="tl-tag">Product launch</div>}
            <div className="tl-event">{m.event}</div>
            <div className="tl-detail">{m.detail}</div>
            {m.img && (
              <div className="tl-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.img} alt={m.event} loading="lazy" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamCard({ person }: { person: { name: string; title: string; qual?: string; photo?: string } }) {
  const initials = person.name.split(' ').map(w => w[0]).join('').slice(0, 2);
  return (
    <div className="card team-card">
      {person.photo ? (
        <div className="photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={person.photo} alt={person.name} />
        </div>
      ) : (
        <div className="initials">{initials}</div>
      )}
      <div className="name">{person.name}</div>
      <div className="title">{person.title}</div>
      {person.qual && <div className="qual">{person.qual}</div>}
    </div>
  );
}

export default function AboutPage() {
  const router = useRouter();
  const ref = useReveal();

  return (
    <main ref={ref as any}>
      <PageHero
        eyebrow="Our story"
        title={<>Fabric built for<br /><span>industrial</span> extremes.</>}
        subtitle="We manufacture advanced multifaceted textiles for mission-critical applications across aerospace, defence, and high-performance industrial systems."
        extra={
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" onClick={() => router.push('/products')}>Product systems</Btn>
            <Btn kind="ghost" onClick={() => router.push('/rd')}>Inside the lab</Btn>
          </div>
        }
        images={[
          { src: 'https://images.unsplash.com/photo-yVRkR4G46sc?w=1920&q=85&auto=format&fit=crop', alt: 'Workers in industrial textile manufacturing facility' },
          { src: 'https://images.unsplash.com/photo-Kn2HI9oiNrw?w=1920&q=85&auto=format&fit=crop', alt: 'Worker at textile machine in factory' },
          { src: 'https://images.unsplash.com/photo-aC4p_vtJxLc?w=1920&q=85&auto=format&fit=crop', alt: 'Industrial factory production floor' },
          { src: 'https://images.unsplash.com/photo-xoxnfVIE7Qw?w=1920&q=85&auto=format&fit=crop', alt: 'Technical textile material close-up' },
          { src: 'https://images.unsplash.com/photo-PDhHgBYuktw?w=1920&q=85&auto=format&fit=crop', alt: 'Precision manufacturing at industrial machine' },
        ]}
      />

      {/* Mission */}
      <Section>
        <div className="grid-2" style={{ gap: 80, alignItems: 'start' }}>
          <div className="reveal">
            <Eyebrow num="02">Mission</Eyebrow>
            <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>Building India&apos;s coated-fabric supply chain, <span>from raw weave to certified system.</span></h2>
          </div>
          <div className="reveal delay-2">
            <p className="lead" style={{ marginBottom: 20 }}>GB Texcoat Solution specializes in manufacturing lightweight and high-performance coated and laminated fabrics for diverse industries: aerospace, petrochemicals, telecommunication, defence &amp; strategy, recreation and advertisement.</p>
            <p style={{ color: 'var(--text-2)' }}>We develop customized fabrics for Lighter-Than-Air (LTA) platforms such as aerostats, airships, large tethered balloons and inflatable structures using high-performance materials and state-of-the-art technologies to deliver products that are lightweight, high-strength, safe, durable and suitable for extreme outdoor conditions.</p>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 64, position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about.jpg" alt="Facility" style={{ width: '100%', display: 'block', maxHeight: 560, objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} />
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

      {/* Animated Timeline */}
      <Section>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <Eyebrow num="04">Our journey</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '16ch' }}>From incorporation to <span style={{ color: 'var(--accent)' }}>field validation.</span></h2>
        </div>
        <AnimatedTimeline />
      </Section>

      {/* How We Work */}
      <Section style={{ background: 'var(--bg-0)' }}>
        <div className="reveal" style={{ marginBottom: 48 }}>
          <Eyebrow num="05">How we work</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>Six steps from requirement to <span>continuous delivery.</span></h2>
        </div>
        <div className="grid-3">
          {HOW_WE_WORK.map(s => (
            <div key={s.n} className={`card reveal delay-${((Number(s.n) - 1) % 3) + 1}`} style={{ padding: 28 }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.16em', marginBottom: 14 }}>/{s.n}</div>
              <h4 style={{ fontFamily: 'var(--f-display)', fontSize: 22, margin: '0 0 12px 0', fontWeight: 500, letterSpacing: '-0.015em' }}>{s.t}</h4>
              <p style={{ color: 'var(--text-2)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="reveal" style={{ marginBottom: 56 }}>
          <Eyebrow num="06">Our team</Eyebrow>
          <h2 className="h-display h2" style={{ margin: '20px 0 0 0' }}>People behind the <span style={{ color: 'var(--accent)' }}>material.</span></h2>
        </div>

        <div style={{ marginBottom: 48 }}>
          <div className="mono reveal" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 24 }}>CORE TEAM</div>
          <div className="grid-4">
            {CORE_TEAM.map((p, i) => (
              <div key={p.name} className={`reveal delay-${(i % 4) + 1}`}>
                <TeamCard person={p} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mono reveal" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.12em', marginBottom: 24 }}>ADVISORY BOARD</div>
          <div className="grid-5">
            {ADVISORY.map((p, i) => (
              <div key={p.name} className={`reveal delay-${(i % 3) + 1}`}>
                <TeamCard person={p} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ContactStrip onContact={() => router.push('/contact')} />
    </main>
  );
}
