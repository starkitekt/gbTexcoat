'use client';
import { Section, Eyebrow } from '../ui';

const TESTIMONIALS = [
  {
    quote: 'GB Texcoat delivered exactly what we needed for our aerostat programme: consistent quality, traceable test data, and a team that understood our engineering constraints from day one.',
    name: 'Sidhhart Jena',
    role: 'Founder',
    org: 'AkashaLabdhi Pvt Ltd, Bangalore',
    logo: '/Clients/Akashalabdhi.png',
  },
  {
    quote: 'The material performance exceeded our expectations on UV resistance and tear strength. Their R&D team worked with us to fine-tune the coating formulation for our specific altitude requirements.',
    name: 'Harshit Awasthi',
    role: 'Co-Founder',
    org: "Kalam's Lab, Lucknow",
    logo: '/Clients/kalam_labs.png',
  },
  {
    quote: 'What sets GB Texcoat apart is the engineering documentation that comes with every batch. For defence procurement, that level of traceability is non-negotiable, and they deliver it as standard.',
    name: 'R R Pachauri',
    role: 'Senior Consultant',
    org: 'Empyreal Galaxy, Mumbai',
    logo: '/Clients/Empyreal galaxy.png',
  },
  {
    quote: 'We evaluated multiple coated-fabric suppliers before selecting GB Texcoat. Their strength-to-weight ratio at the specified gsm was the best we tested, and the turnaround time was competitive.',
    name: 'Kiran Kulkarni',
    role: 'Co-Founder',
    org: 'Haribon Aeronautics Pvt Ltd, Bangalore',
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <div className="reveal" style={{ marginBottom: 56 }}>
        <Eyebrow num="07">Client voices</Eyebrow>
        <h2 className="h-display h2" style={{ margin: '20px 0 0 0', maxWidth: '20ch' }}>
          Trusted by teams building <span style={{ color: 'var(--accent)' }}>what matters.</span>
        </h2>
      </div>
      <div className="grid-2">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={`card testimonial-card reveal delay-${(i % 2) + 1}`}>
            <div className="quote-mark">&ldquo;</div>
            <p className="quote-text">{t.quote}</p>
            <div className="divider" />
            <div className="person">
              <div className="avatar">
                {t.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.logo} alt={t.org} />
                ) : (
                  <div className="initials">
                    {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </div>
                )}
              </div>
              <div>
                <div className="name">{t.name}</div>
                <div className="role">{t.role} · {t.org}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
