# GB Texcoat Website — Project Context

> Quick-reference for making changes without re-exploring the codebase.

---

## Business Overview

**GB Texcoat Solution** — advanced coated fabric & technical textile manufacturer.  
HQ: Research & Innovation Park, Block B, IIT Delhi, Hauz Khas, New Delhi 110016  
Founder: Dr. Neeraj Mandlekar  
Email: info@gbtexcoatsolution.com | Phone: +91 88518 68235

Core products: engineered coated/laminated fabrics for aerospace, defence, petrochemical, and industrial applications (aerostats, airship envelopes, fuel bladders, tensile membranes, industrial containment).

---

## Tech Stack

| Item | Value |
|------|-------|
| Framework | Next.js 16.2.6 (App Router) |
| React | 19.2.4 |
| Language | TypeScript 5 |
| Styling | Custom CSS (globals.css) — NO Tailwind, NO CSS modules |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (mono), Instrument Serif (italic accents) via next/font |
| State | React Context (TweaksContext) + localStorage for theme |
| Animations | CSS transitions + IntersectionObserver (scroll reveal), optional Lenis smooth scroll |
| Images | Raw `<img>` tags (no Next.js Image component) |
| Forms | useState hooks, no backend submission wired up |
| Path alias | `@/*` → project root |

**Scripts**: `dev`, `build`, `start`, `lint`

---

## Directory Structure

```
app/
  layout.tsx              Root layout — fonts, TweaksContext provider, Nav, Footer, ScrollProgress
  page.tsx                Home page (imports HomeHero + HomeSections)
  globals.css             ALL styles live here — design tokens, utilities, component classes
  favicon.ico
  about/page.tsx          Company mission, capabilities, timeline, principles
  products/page.tsx       Product families listing + custom formulation cycle
  products/[slug]/page.tsx  Dynamic product detail — specs, layers, applications, datasheet
  rd/page.tsx             R&D streams, test infrastructure, workflow, live lab telemetry
  investors/page.tsx      Market thesis, demand chart, use of funds
  contact/page.tsx        Contact form, founder card, locations, SVG map

components/
  Nav.tsx                 Sticky header, product dropdown, theme toggle, mobile hamburger
  Footer.tsx              Minimal footer with links + contact info
  ScrollProgress.tsx      Fixed top progress bar driven by scroll
  TweaksContext.tsx       Context: mode/hero/density/theme — applied as body classes
  TweaksPanel.tsx         Floating settings drawer (safe|bold, hero visual, density)
  ui.tsx                  Shared primitives (see UI Library section below)
  home/
    HomeHero.tsx          Animated hero, conditional visuals, HUD readout, metrics
    HomeSections.tsx      All 11 home page sections as named exports

lib/
  products.ts             Product data array + Product interface — single source of truth

public/
  images/
    aerostat.jpg, airship.jpg, balloon.jpg
    fuel.jpg, fuel_bladder.jpg, fuel_medium.jpg, fuel_portable.jpg, fuel_tank.jpg
```

---

## Routes & Pages

| URL | File | Purpose |
|-----|------|---------|
| `/` | `app/page.tsx` | Home — hero, ticker, industries, products, R&D teaser, CTA |
| `/about` | `app/about/page.tsx` | Company info, capabilities, timeline |
| `/products` | `app/products/page.tsx` | All 4 product families |
| `/products/lightweight` | `app/products/[slug]/page.tsx` | GBT-LS detail |
| `/products/uv-resist` | `app/products/[slug]/page.tsx` | GBT-UV detail |
| `/products/tear-strength` | `app/products/[slug]/page.tsx` | GBT-TS detail |
| `/products/fuel` | `app/products/[slug]/page.tsx` | GBT-FX detail |
| `/rd` | `app/rd/page.tsx` | R&D lab, research streams, telemetry |
| `/investors` | `app/investors/page.tsx` | Market analysis, investment thesis |
| `/contact` | `app/contact/page.tsx` | Contact form + info |

---

## Product Data (`lib/products.ts`)

```typescript
interface Product {
  code: string           // e.g. "GBT-LS"
  n: string              // e.g. "01 / 04"
  title: string
  subtitle: string
  hero: string           // Long marketing description
  img: string            // Image path (from /public)
  imgLabel: string       // e.g. "AEROSTAT · IN-SERVICE PLATFORM"
  accentSpecs: Array<{ v: string; u: string; k: string }>  // Key metrics
  applications: Array<{ t: string; d: string; img?: string }>
  benefits: Array<{ t: string; d: string }>
  spec: Array<{ k: string; v: string }>   // Datasheet rows
  layers: string[]       // Material layer names (top → bottom)
}
```

**4 Products:**

| Slug | Code | Title | Key Specs |
|------|------|-------|-----------|
| `lightweight` | GBT-LS | Lightweight Aerospace Fabric | 450 gsm, 2400 N tear, 0.78 mm |
| `uv-resist` | GBT-UV | UV-Resistant Membrane | 620 gsm, 25-yr UV, PVDF-laminated PVC |
| `tear-strength` | GBT-TS | High Tear-Strength Fabric | 900 gsm, 3200 N tear, ripstop weave |
| `fuel` | GBT-FX | Flexible Fuel Container | 500–10k L, STANAG 4775, fluoropolymer barrier |

---

## UI Library (`components/ui.tsx`)

**Hooks:**
- `useReveal()` — IntersectionObserver; adds `.in` class to `.reveal` elements → triggers CSS animation
- `useSmoothScroll()` — Initializes Lenis from `window.Lenis` if available

**Components:**
- `Btn` — Button with variants: `primary` (blue filled), `ghost` (bordered), `mono` (monospace)
- `Eyebrow` — Numbered label (`01 —`, `02 —`, etc.)
- `Section` — Wrapper div with `useReveal()` applied
- `PageHead` — Page hero: eyebrow + title + subtitle + optional extra slot
- `Stat` — Metric: `{ v: value, u: unit, k: label }`
- `FabricPlaceholder` — Decorative woven-fabric SVG
- `ContactStrip` — CTA bar linking to /contact

**Icon exports** (SVG React components): `ArrowRight`, `Shield`, `Layers`, `Atom`, `Wind`, `Drop`, `Weight`, `Thread`, `Sun`, `Moon`, `Globe`, `Check`, `Pin`, `Phone`, `Mail`, `Play`, `Menu`, `Close`, `Sliders`

---

## Styling System (`app/globals.css`)

### Design Tokens (CSS custom properties on `:root`)

```css
--bg:        #06090f    /* Dark navy base */
--surface:   #0c1017    /* Card/panel background */
--border:    rgba(255,255,255,0.06)
--text:      #e2e8f0    /* Primary text */
--muted:     #64748b    /* Secondary text */
--accent:    #3b82f6    /* Blue accent */
--cyan:      #22d3ee    /* Cyan highlight */
--warn:      #f59e0b    /* Orange warning/live indicator */
--pad:       clamp(20px, 4vw, 56px)  /* Page horizontal padding */
--radius:    6px
```

**Light theme** overrides via `body.theme-light` class.

### Key CSS Classes

| Class | Purpose |
|-------|---------|
| `.reveal` | Hidden element that animates in when scrolled into view (opacity + translateY) |
| `.delay-1` … `.delay-6` | Stagger reveal animation by 100ms increments |
| `.h-display`, `.h1`–`.h4` | Heading size scale (fluid clamp sizing) |
| `.grid-2`, `.grid-3`, `.grid-4`, `.grid-6` | CSS grid layouts, collapse at 960px / 560px |
| `.card` | Bordered surface with hover lift |
| `.badge` | Small tag; `.badge.active` shows live pulse |
| `.spec-card` | Icon + title + description |
| `.product-tile` | 2-col media + content layout |
| `.app-card` | Application showcase card with gradient overlay |
| `.btn-primary`, `.btn-ghost`, `.btn-mono` | Button styles (used via `Btn` component) |

### Responsive Breakpoints

| Breakpoint | Behavior |
|------------|---------|
| 1080px | Nav links collapse to hamburger |
| 960px | `.grid-4` → 2 cols, many 2-col grids → 1 col |
| 760px | Hero layout adjusts, font sizes shrink |
| 560px | All grids → 1 col |
| 480px | Mobile padding reduction |

---

## TweaksContext

Manages 4 body-class-based settings, persists `theme` to localStorage:

| Key | Options | Body class applied |
|-----|---------|-------------------|
| `mode` | `safe` \| `bold` | `mode-safe` / `mode-bold` |
| `hero` | `aerostat` \| `airship` \| `balloon` \| `schematic` | `hero-aerostat` etc. |
| `density` | `compact` \| `regular` \| `spacious` | `density-compact` etc. |
| `theme` | `dark` \| `light` | `theme-light` (dark is default/no class) |

Use `useTweaks()` hook inside client components.

---

## Home Page Sections (`components/home/HomeSections.tsx`)

Named exports (rendered in order in `app/page.tsx`):

1. `TickerBar` — Looping CSS marquee of industry names
2. `IndustriesSection` — 6 sector rows (clickable, expand on hover)
3. `EngineeringSolutions` — 6 capability spec-cards
4. `ResearchInnovation` — R&D teaser (lab location, 3 infrastructure items, SVG graph)
5. `TechnicalAdvantages` — 4 stats (gsm range, temp range, tear spec, UV rating)
6. `ProductSystems` — 4 product tiles with image + specs
7. `ApplicationShowcase` — 6 application cards with silhouette images
8. `WhyTexcoat` — 4 differentiator cards
9. `InvestorTeaser` — 4 market KPIs + link to /investors
10. `ContactCTA` — Full-width CTA linking to /contact

---

## Conventions & Patterns

- **All pages are `'use client'`** — heavy use of hooks, browser APIs
- **No external component library** — everything is custom
- **Images**: Plain `<img>` with inline style filters (not Next.js `<Image>`)
- **Data**: All product data lives in `lib/products.ts`; pages import and map over it
- **Animations**: Add `.reveal` class + `useReveal()` in parent; stagger with `.delay-N`
- **New sections**: Follow pattern in `HomeSections.tsx` — self-contained exported function component
- **Italic accents in headings**: Wrap word in `<em>` or `<span className="serif-accent">` (renders as Instrument Serif italic)
- **Icon usage**: Import named SVG icon from `components/ui.tsx`

---

## Investor Page Data Points

| Metric | Value |
|--------|-------|
| Global market size | $28B |
| CAGR | 6.8% |
| India import dependency | 70% |
| India demand | $4.2B |
| Demand chart range | 2022–2030 |
| Use of funds | 40% production, 25% certification, 20% R&D, 15% sales |

---

## R&D Page Highlights

**Research Streams**: Coating chemistry, weave engineering, seam tech, lifetime modeling  
**Test Infrastructure**: 12+ protocols (UV chamber, tear rig, fuel permeation, etc.)  
**Live Telemetry Panels**: SVG charts for UV chamber, tear rig, fuel permeation test — all mock/static data

---

## Contact Form Fields

`name`, `org`, `email`, `phone`, `application` (dropdown), `topic` (dropdown), `message`  
No backend wired — form submission needs implementation.

---

## Things NOT Yet Implemented

- Contact form backend/API route
- Any server components or SSR data fetching
- Next.js `<Image>` optimization
- Analytics
- CMS or dynamic content
- Authentication
