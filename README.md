# GB Texcoat Solution

[![Live](https://img.shields.io/badge/Deployment-Live-brightgreen)](https://gbtexcoat.vercel.app)

**Live site**: [gbtexcoat.vercel.app](https://gbtexcoat.vercel.app)

GB Texcoat Solution Pvt Ltd manufactures advanced coated and laminated fabrics for aerospace, defence, and industrial applications. This repository contains the company's public-facing website.

---

## Product Systems

| Code | Name | Application |
|------|------|-------------|
| GBT-LS | Lightweight High-Strength | Aerostat envelopes, airship hulls |
| GBT-UV | UV-Resistant Laminated | Outdoor membranes, architectural systems |
| GBT-TS | High Tear-Strength Tensile | Structural membranes, tensile architecture |
| GBT-FX | Flexible Fuel Storage | Defence field ops, industrial fuel containment |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router) · TypeScript
- **Styling**: Raw CSS custom properties — no Tailwind
- **Fonts**: Space Grotesk, Inter, JetBrains Mono, Instrument Serif (Google Fonts)
- **Hosting**: Vercel

---

## Directory Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── investors/
│   ├── products/
│   │   └── [slug]/        # Dynamic product detail pages
│   ├── rd/
│   ├── globals.css        # Design tokens & global styles
│   └── layout.tsx         # Root layout (Nav, Footer)
│
├── components/
│   ├── layout/            # Nav, Footer
│   ├── home/              # HomeHero, HomeSections
│   ├── ui/                # Design system primitives (Button, Icons, Section, etc.)
│   ├── ScrollProgress.tsx
│   └── TweaksPanel.tsx    # Dev-mode design tweaks panel
│
├── context/
│   └── TweaksContext.tsx  # Theme / density / mode context
│
├── hooks/
│   ├── useReveal.ts       # IntersectionObserver scroll-reveal
│   └── useSmoothScroll.ts # Lenis smooth scroll
│
├── lib/
│   └── products.ts        # Product data (PRODUCTS map, PRODUCT_LIST)
│
└── types/
    └── products.ts        # TypeScript interfaces for product data

public/
├── images/                # Product and page images
├── Clients/               # Client logo assets
└── Hero Image/            # Hero section imagery
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm run type-check
```

---

## Contact

R&I Park, Block B · IIT Delhi · New Delhi 110016  
[info@gbtexcoatsolution.com](mailto:info@gbtexcoatsolution.com) · +91 88518 68235  
[gbtexcoat.vercel.app](https://gbtexcoat.vercel.app)
