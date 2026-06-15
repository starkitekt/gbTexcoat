'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/components/ui';

const productLinks = [
  { href: '/products/lightweight', t: 'Lightweight High-Strength', d: 'GBT-LS / Aerospace-grade' },
  { href: '/products/uv-resist', t: 'UV-Resistant Laminated', d: 'GBT-UV / Weather-exposed' },
  { href: '/products/tear-strength', t: 'High Tear-Strength Tensile', d: 'GBT-TS / Architectural' },
  { href: '/products/fuel', t: 'Portable Fuel Solutions', d: 'GBT-FX / Defense & field ops' },
];

const SEARCH_INDEX = [
  { label: 'Home', href: '/', tags: 'home landing page' },
  { label: 'About', href: '/about', tags: 'about company mission team' },
  { label: 'Products', href: '/products', tags: 'products engineered systems families' },
  { label: 'R&D', href: '/rd', tags: 'research development innovation lab' },
  { label: 'Contact', href: '/contact', tags: 'contact email phone visit' },
  { label: 'Lightweight High-Strength Fabric', href: '/products/lightweight', tags: 'gbt-ls aerostat airship lightweight coating' },
  { label: 'UV-Resistant Laminated Fabric', href: '/products/uv-resist', tags: 'gbt-uv weather uv resistant membrane pvdf' },
  { label: 'High Tear-Strength Tensile Fabric', href: '/products/tear-strength', tags: 'gbt-ts tensile architecture membrane ripstop' },
  { label: 'Portable Fuel Storage', href: '/products/fuel', tags: 'gbt-fx fuel bladder storage defense stanag' },
  { label: 'Aerospace', href: '/#industries', tags: 'aerospace aerostat envelope airship hull' },
  { label: 'Defence & Strategy', href: '/#industries', tags: 'defence defense military portable fuel surveillance' },
  { label: 'Petrochemical', href: '/#industries', tags: 'petrochemical fuel bladder containment chemical' },
  { label: 'Telecommunication', href: '/#industries', tags: 'telecom relay communication elevated platform' },
  { label: 'Tensile Architecture', href: '/#industries', tags: 'tensile architecture membrane shade fabric' },
  { label: 'Lightweight Engineering', href: '/#solutions', tags: 'lightweight strength weight ratio weave coating' },
  { label: 'Environmental Durability', href: '/#solutions', tags: 'uv ozone salt fog temperature durability' },
  { label: 'Tear & Burst Resistance', href: '/#solutions', tags: 'tear burst ripstop reinforced seams' },
  { label: 'Chemical Compatibility', href: '/#solutions', tags: 'fluoropolymer diesel kerosene jet fuel chemical' },
  { label: 'Joinability & Repair', href: '/#solutions', tags: 'rf hot-air adhesive welding repair field' },
  { label: 'Regulatory Readiness', href: '/#solutions', tags: 'astm mil-std stanag compliance certification' },
  { label: 'Coating Chemistry', href: '/rd', tags: 'pvc tpu pvdf fluoropolymer adhesion formulation' },
  { label: 'Weave Engineering', href: '/rd', tags: 'polyester aramid ripstop weave geometry' },
  { label: 'Seam & Joinability', href: '/rd', tags: 'rf weld hot-air adhesive seam strength' },
  { label: 'Lifetime Modelling', href: '/rd', tags: 'ageing iso 4892 astm g154 field service life' },
];

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const router = useRouter();

  const results = query.length > 0
    ? SEARCH_INDEX.filter(item => {
        const q = query.toLowerCase();
        return item.label.toLowerCase().includes(q) || item.tags.includes(q);
      }).slice(0, 8)
    : [];

  const go = useCallback((href: string) => {
    onClose();
    setQuery('');
    router.push(href);
  }, [onClose, router]);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
      if (e.key === 'Enter' && results[active]) { e.preventDefault(); go(results[active].href); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, active, results, go, onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-dialog" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <Icon.search />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products, capabilities, pages…"
            className="search-input"
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>
        {results.length > 0 && (
          <div className="search-results">
            {results.map((r, i) => (
              <button
                key={r.href + r.label}
                className={`search-result${i === active ? ' active' : ''}`}
                onClick={() => go(r.href)}
                onMouseEnter={() => setActive(i)}
              >
                <span>{r.label}</span>
              </button>
            ))}
          </div>
        )}
        {query.length > 0 && results.length === 0 && (
          <div className="search-empty">No results for &ldquo;{query}&rdquo;</div>
        )}
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const active = (href: string, prefix?: string) =>
    prefix ? pathname.startsWith(prefix) : pathname === href;

  return (
    <>
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
            <Link href="/contact" className={`nav-link${active('/contact') ? ' active' : ''}`}>Contact</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={() => setSearchOpen(true)}
              title="Search (Ctrl+K)"
              aria-label="Search"
              className="nav-icon-btn"
            >
              <Icon.search />
            </button>
            <button
              onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
              title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
              aria-label="Toggle theme"
              className="nav-icon-btn"
            >
              {theme === 'light' ? <Icon.moon /> : <Icon.sun />}
            </button>
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
              { href: '/contact', label: 'Contact' },
            ].map(r => (
              <Link key={r.href} href={r.href} className="nav-link" style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid var(--line)' }} onClick={() => setOpen(false)}>
                {r.label}
              </Link>
            ))}
          </div>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
