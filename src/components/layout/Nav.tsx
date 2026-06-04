'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, Btn } from '@/components/ui';

const productLinks = [
  { href: '/products/lightweight', t: 'Lightweight High-Strength', d: 'GBT-LS / Aerospace-grade' },
  { href: '/products/uv-resist', t: 'UV-Resistant Laminated', d: 'GBT-UV / Weather-exposed' },
  { href: '/products/tear-strength', t: 'High Tear-Strength Tensile', d: 'GBT-TS / Architectural' },
  { href: '/products/fuel', t: 'Portable Fuel Solutions', d: 'GBT-FX / Defense & field ops' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('gbt-theme') as 'dark' | 'light' | null;
      if (saved) setTheme(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.body.classList.toggle('theme-light', theme === 'light');
    try { localStorage.setItem('gbt-theme', theme); } catch {}
  }, [theme]);

  const active = (href: string, prefix?: string) =>
    prefix ? pathname.startsWith(prefix) : pathname === href;

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" style={{ cursor: 'pointer' }}>
          <div className="mark">G<span style={{ color: 'rgba(255,255,255,0.6)' }}>B</span></div>
          <div>
            <div>GB Texcoat</div>
            <span className="sub">Coated Fabric Systems</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link href="/" className={`nav-link${active('/') ? ' active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link${active('/about') ? ' active' : ''}`}>About</Link>
          <div className="nav-link-wrap">
            <Link href="/products" className={`nav-link${active('', '/products') ? ' active' : ''}`}>Products</Link>
            <div className="nav-dropdown">
              {productLinks.map(p => (
                <Link key={p.href} href={p.href} className="nav-dropdown-item">
                  <span className="t">{p.t}</span>
                  <span className="d">{p.d}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/rd" className={`nav-link${active('/rd') ? ' active' : ''}`}>R&amp;D</Link>
          <Link href="/investors" className={`nav-link${active('/investors') ? ' active' : ''}`}>Investors</Link>
          <Link href="/contact" className={`nav-link${active('/contact') ? ' active' : ''}`}>Contact</Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="badge live nav-cta-mobile-hide" style={{ display: 'inline-flex' }}>
            <span className="dot" /> R&amp;I Park · IIT Delhi
          </span>
          <button
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
            aria-label="Toggle theme"
            style={{ width: 36, height: 36, border: '1px solid var(--line-strong)', borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'var(--text-0)', transition: 'background 0.2s', flexShrink: 0 }}
          >
            {theme === 'light' ? <Icon.moon /> : <Icon.sun />}
          </button>
          <span className="nav-cta-mobile-hide">
            <Btn kind="ghost" onClick={() => window.location.href = '/contact'}>Request a Sample</Btn>
          </span>
          <button className="menu-toggle btn btn-ghost" onClick={() => setOpen(!open)} style={{ padding: '10px 12px' }}>
            <Icon.menu />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--line)', padding: '12px var(--pad)' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/products', label: 'Products' },
            { href: '/rd', label: 'R&D' },
            { href: '/investors', label: 'Investors' },
            { href: '/contact', label: 'Contact' },
          ].map(r => (
            <Link key={r.href} href={r.href} className="nav-link" style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid var(--line)' }} onClick={() => setOpen(false)}>
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
