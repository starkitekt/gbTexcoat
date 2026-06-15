'use client';
import Link from 'next/link';

export function Footer() {
  const productLinks = [
    { href: '/products/lightweight', t: 'Lightweight High-Strength' },
    { href: '/products/uv-resist', t: 'UV-Resistant Laminated' },
    { href: '/products/tear-strength', t: 'Tear-Strength Tensile' },
    { href: '/products/fuel', t: 'Fuel Storage' },
  ];
  const companyLinks = [
    { href: '/about', t: 'About' },
    { href: '/rd', t: 'R&D' },
    { href: '/contact', t: 'Contact' },
  ];

  return (
    <footer className="footer-min">
      <div className="container">
        <div className="footer-min-top">
          <Link href="/" className="footer-min-brand">
            <div className="nav-logo">
              <div className="mark">G<span style={{ color: 'rgba(255,255,255,0.6)' }}>B</span></div>
              <div>
                <div>GB Texcoat</div>
                <span className="sub">Coated Fabric Systems</span>
              </div>
            </div>
          </Link>
          <nav className="footer-min-nav">
            <div className="footer-min-col">
              <h5>Products</h5>
              {productLinks.map(l => <Link key={l.href} href={l.href}>{l.t}</Link>)}
            </div>
            <div className="footer-min-col">
              <h5>Company</h5>
              {companyLinks.map(l => <Link key={l.href} href={l.href}>{l.t}</Link>)}
            </div>
            <div className="footer-min-col">
              <h5>Contact</h5>
              <a href="mailto:info@gbtexcoatsolution.com">info@gbtexcoatsolution.com</a>
              <a href="tel:+918851868235">+91 88518 68235</a>
              <span className="footer-min-addr">R&amp;I Park, IIT Delhi · New Delhi 110016</span>
            </div>
          </nav>
        </div>
        <div className="footer-min-bot">
          <span>© 2024 GB Texcoat Solutions Pvt Ltd</span>
          <span className="footer-min-bot-meta">
            <span>Made in India</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
