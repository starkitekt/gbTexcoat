# Technical Architecture — GB Texcoat Website

## Overview

Static Next.js site (App Router) deployed on Vercel. No backend, no database — all product data is compiled into the bundle via `src/lib/products.ts`.

```
Browser ──► Vercel Edge ──► Next.js SSG pages
                              │
                              ├── /                  (HomeHero + HomeSections)
                              ├── /about
                              ├── /products          (product grid)
                              ├── /products/[slug]   (dynamic, statically pre-rendered)
                              ├── /rd
                              ├── /investors
                              └── /contact
```

## Rendering strategy

All pages are statically generated at build time (`generateStaticParams` on `[slug]`). No server-side rendering, no API routes.

## Component hierarchy

```
RootLayout (layout.tsx)
├── ScrollProgress
├── Nav
│   └── Icon, Btn  ← from ui/
├── {page children}
│   └── Section, PageHead, Eyebrow, Stat, ...  ← from ui/
└── Footer
```

## Design system

CSS custom properties defined in `src/app/globals.css`. Key token families:

| Category | Tokens |
|----------|--------|
| Color | `--bg-0..3`, `--text-0..3`, `--accent`, `--cyan`, `--line` |
| Typography | `--f-display`, `--f-sg`, `--f-inter`, `--f-mono` |
| Spacing | `--pad`, `--section-pad` |
| Radius | `--r`, `--r-lg` |

Body carries mode (`mode-safe` / `mode-bold`) and density (`density-compact` / `density-regular` / `density-spacious`) classes, toggled via `TweaksContext`.

## Data flow

```
src/types/products.ts     ← interface definitions
        ▼
src/lib/products.ts       ← PRODUCTS map + PRODUCT_LIST array
        ▼
src/app/products/page.tsx           ← listing page
src/app/products/[slug]/page.tsx    ← detail page
```

## Scroll & animation

- `useReveal` — `IntersectionObserver` adds `.in` to `.reveal` elements on entry.
- `useSmoothScroll` — Lenis smooth scroll (CDN, optional; gracefully skipped if absent).
- `ScrollProgress` — thin top progress bar tracking `scrollTop / scrollHeight`.
