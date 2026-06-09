# Acme Design System — Figma

- **File:** [Acme Design System](https://www.figma.com/design/mujPrD4AdCQhg3uRwFcNJK/Acme-Design-System)
- **File key:** `mujPrD4AdCQhg3uRwFcNJK`
- **Account:** Forefront Consulting (Pro plan)

## Scope

The Figma file is a **component library** — foundations and reusable components only. Application screens (e.g. the Acme Portal dashboard) live in the React app and Storybook, not in Figma.

## Collections

| Collection | Modes |
|------------|-------|
| `tokens` | Brand Alpha, Brand Beta |
| `semantic` | Brand Alpha, Brand Beta |

Dark mode is implemented in code via Style Dictionary `dark/` semantic overrides, scoped with `[data-mode="dark"]`.

## Pages

| Page | Contents |
|------|----------|
| `Foundations` | Token architecture documentation |
| `Button` | Button variant set (primary, secondary, destructive) — bound to semantic variables |
| `Card` | Card component |
| `Input` | Input component |
| `Badge` | Badge variant set (default, secondary, destructive, outline) |

## Text styles

| Style | Token | Weight |
|-------|-------|--------|
| `Acme/Heading` | `font-size-heading` | Semi Bold |
| `Acme/Body` | `font-size-body` | Regular |
| `Acme/Label` | `font-size-label` | Medium |
| `Acme/Badge` | `font-size-badge` | Medium |

All component text layers bind to semantic `font-size-*` variables.

## Sync status

- Variables: `tokens` primitives + `semantic` aliases with Brand Alpha / Brand Beta modes
- Semantic variables have WEB code syntax: `var(--color-action-primary)` etc.
- One Figma page per component (Button, Card, Input, Badge)
- Token JSON in `packages/tokens/` remains the Style Dictionary build source of truth
- Dark mode: code-only via `packages/tokens/dark/` + `[data-mode="dark"]` (not a third Figma mode)
- Dashboard / composition examples: React app (`packages/acme-app/`) and Storybook
