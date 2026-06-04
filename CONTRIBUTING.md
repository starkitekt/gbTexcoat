# Contributing

## Development setup

```bash
npm install
npm run dev
```

## Conventions

- **Imports**: use `@/` alias (maps to `src/`). No relative `../../` imports across feature boundaries.
- **Styling**: CSS custom properties only — no Tailwind, no inline style objects for layout concerns. Add tokens to `globals.css`.
- **Components**: co-locate sub-components inside the owning feature folder. Shared primitives go in `src/components/ui/`.
- **Types**: product domain types live in `src/types/products.ts`. Re-exported from `src/lib/products.ts` for consumer convenience.
- **Hooks**: custom hooks in `src/hooks/`. File name must start with `use`.

## Branch & PR

- Branch from `main`: `feat/`, `fix/`, `chore/` prefixes.
- One logical change per PR. Keep diffs reviewable.
- Run `npm run type-check` and `npm run build` before opening a PR.
