# Acme Design System — Figma

- **File:** [Acme Design System](https://www.figma.com/design/mujPrD4AdCQhg3uRwFcNJK/Acme-Design-System)
- **File key:** `mujPrD4AdCQhg3uRwFcNJK`
- **Account:** Forefront Consulting (Pro plan)

## Scope

The Figma file is a **component library** — foundations and reusable components only. Application screens (e.g. the Acme Portal dashboard) live in the React app and Storybook, not in Figma.

## Collections

| Collection | Purpose | Modes |
|------------|---------|-------|
| `tokens` | Primitives (`blue-500`, `font-sans`, `space-4`) | Brand Alpha, Brand Beta, Brand Alpha · Dark, Brand Beta · Dark |
| `semantic` | Aliases used by components (`color-action-primary`, `font-family-sans`) | Brand Alpha, Brand Beta, Brand Alpha · Dark, Brand Beta · Dark |

`tokens` and `semantic` are **not** alternatives you pick between — both apply at once. Brand + theme are chosen by setting the **same mode name** in each collection.

### How to switch brands and themes

**Easiest:** open a preview page (modes are pre-set on the page):

| Page | Mode | Contents |
|------|------|----------|
| `Preview · Brand Alpha` | Alpha · light | All 9 Button variants, 4 Badge variants, Card, Input, Toggle, Select, Modal |
| `Preview · Brand Beta` | Beta · light | Same layout |
| `Preview · Brand Alpha · Dark` | Alpha · dark | Same layout on `color-bg-page` dark background |
| `Preview · Brand Beta · Dark` | Beta · dark | Same layout on dark background |

**Manual:** in Local variables, switch the mode dropdown **separately** for `tokens` and `semantic` (both must match). Or select a frame → right panel → variable mode overrides.

Dark semantic values mirror `packages/tokens/dark/` (Alpha) and `packages/tokens/dark/` + `dark/brand-beta/` (Beta).

See the **How to switch brands** frame on the `Foundations` page for in-file instructions.

In code, dark mode is additionally scoped with `[data-mode="dark"]` on `<html>`.

## Pages

| Page | Contents |
|------|----------|
| `Foundations` | Token architecture documentation |
| `Button` | Button variant set (primary, secondary, destructive) — bound to semantic variables |
| `Card` | Card component |
| `Input` | Input component |
| `Badge` | Badge variant set (default, secondary, destructive, outline) |
| `Toggle` | Toggle variant set (State Off/On × Disabled False/True) |
| `Select` | Select variant set (default, filled, error, disabled) |
| `Modal` | Modal variant set (title + body, with footer, body only) |

## Text styles

| Style | Font (Brand Alpha) | Token | Weight |
|-------|-------------------|-------|--------|
| `Acme/Heading` | Jost | `font-size-heading` | Semi Bold |
| `Acme/Body` | Jost | `font-size-body` | Regular |
| `Acme/Label` | Jost | `font-size-label` | Medium |
| `Acme/Badge` | Jost | `font-size-badge` | Medium |
| `Acme/Button Label/Alpha` | JetBrains Mono | `font-size-label` | Medium, uppercase |
| `Acme/Button Label/Beta` | Outfit | `font-size-label` | Medium |

Brand Beta switches `font-family-sans` to Outfit and `font-family-mono` to IBM Plex Mono via variable modes. Button labels use `font-family-button-label` (mono for Alpha, sans for Beta).

All component text layers bind to semantic `font-size-*` and `font-family-*` variables.

## Font variables

| Variable | Brand Alpha | Brand Beta |
|----------|-------------|------------|
| `font-sans` | Jost | Outfit |
| `font-mono` | JetBrains Mono | IBM Plex Mono |
| `font-family-sans` | → `font-sans` | → `font-sans` |
| `font-family-mono` | → `font-mono` | → `font-mono` |
| `font-family-button-label` | → `font-mono` | → `font-sans` |

## Sync status

- Variables: `tokens` primitives + `semantic` aliases with Brand Alpha / Brand Beta modes
- Font families: bound on all component text via `font-family-*` semantic variables
- Semantic variables have WEB code syntax: `var(--color-action-primary)` etc.
- One Figma page per component (Button, Card, Input, Badge, Toggle, Select, Modal)
- Toggle, Select and Modal added to match the React components in `packages/acme-app/src/components/`; all colors, spacing, radii and type bound to the same `semantic` variables, and included on all four `Preview ·` brand pages
- Token JSON in `packages/tokens/` remains the Style Dictionary build source of truth
- Dark mode: Figma modes `Brand Alpha · Dark` / `Brand Beta · Dark` + code `[data-mode="dark"]`
- Dark semantic tokens reconciled with code (2026-06): `color-accent-soft`, `color-action-primary` (Beta dark → teal-500), `color-bg-surface-alt`, `color-border-default`
- Primitives added in Figma `tokens` collection: `palette-accent-soft`, `slate-750`, `slate-600`, `red-700`, `orange-500`, `orange-600`, `teal-500`, `teal-600`, `violet-400`, `palette-chart-bar`
- Semantic added: `color-accent-soft`, `color-feedback-error-strong`, `color-chart-bar`, `color-badge-default-bg`, `color-badge-default-foreground`, `color-feedback-error-subtle-foreground`
- Alpha dark: `color-action-primary` → `orange-500`, `color-text-on-action` → `ink-900`, default Badge → `palette-accent-soft` + `violet-400`
- Beta dark: `color-action-primary` → `teal-500`; destructive Badge text → `color-feedback-error-subtle-foreground` (white on `#DC2626`)
- Badge default variant bound to `color-badge-default-*`; destructive text bound to `color-feedback-error-subtle-foreground`
- Dashboard / composition examples: React app (`packages/acme-app/`) and Storybook
