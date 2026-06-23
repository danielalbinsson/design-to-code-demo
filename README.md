# Acme Design System — Design-to-Code Demo

Full pipeline from Figma variables to a multi-brand React app, with Style Dictionary, Storybook, and AI-readable docs. Figma holds foundations and components (one page per component); the dashboard lives in code.

## Quick start

```bash
CI=true corepack pnpm install
CI=true corepack pnpm dev          # http://localhost:5173
CI=true corepack pnpm storybook    # http://localhost:6006
CI=true corepack pnpm build        # tokens + app
CI=true corepack pnpm build:llms   # regenerate llms-full.txt
```

## Structure

| Path | Purpose |
|------|---------|
| [figma.md](./figma.md) | Figma component library (foundations + per-component pages) |
| [packages/tokens/](./packages/tokens/) | DTCG JSON (build source of truth) |
| [packages/acme-tokens/](./packages/acme-tokens/) | Style Dictionary → 4 theme CSS files |
| [packages/acme-app/](./packages/acme-app/) | React + Tailwind dashboard + Storybook |
| [docs/](./docs/) | Component and token documentation |
| [public/llms.txt](./public/llms.txt) | AI agent entry point |

## Theming

Set on `<html>`:

- `data-theme="brand-alpha"` | `brand-beta`
- `data-mode="dark"` for dark mode

Components use semantic CSS variables only — no hardcoded brand colors.

## Updating tokens

Edit DTCG JSON in `packages/tokens/`, then rebuild. Figma is visual reference only — changes are not auto-synced.

| Change | Where |
|--------|-------|
| Shared spacing, radius, typography | `packages/tokens/primitive/` |
| Brand-specific colors (and radius) | `packages/tokens/brand-alpha/`, `brand-beta/` |
| Semantic names components use | `packages/tokens/semantic/` |
| Dark mode overrides | `packages/tokens/dark/semantic/` |

**Common cases**

- **Brand color** — edit primitives in `brand-alpha/color.json` or `brand-beta/color.json`. Semantic aliases in `semantic/color.json` (e.g. `action-primary` → `{color.blue.500}`) pick up the change automatically.
- **Dark mode only** — edit `packages/tokens/dark/semantic/`.
- **New semantic token** — add under `semantic/`, optional dark override, then map in `packages/acme-app/src/index.css` (`@theme inline`) if you need a Tailwind utility. Update `docs/tokens.md` and component docs.

```bash
CI=true corepack pnpm build:tokens   # writes packages/acme-tokens/build/*.css
CI=true corepack pnpm dev            # build + copy CSS into app + start Vite
```

Do not hand-edit `packages/acme-app/src/tokens/*.css` — they are copied from the Style Dictionary build.

See [docs/tokens.md](./docs/tokens.md) for architecture and [docs/theming.md](./docs/theming.md) for adding a new brand.

## Verification

See [docs/verification.md](./docs/verification.md) for the AI-agent test checklist.

## CI/CD

[![CI](https://github.com/danielalbinsson/design-to-code-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/danielalbinsson/design-to-code-demo/actions/workflows/ci.yml)

On every push and PR, the CI pipeline:
1. Installs dependencies via pnpm
2. Builds design tokens with Style Dictionary
3. Builds the React app with TypeScript + Vite
4. Publishes to Chromatic for visual review and Storybook hosting
