# Design Tokens

## Architecture

Tokens follow a three-layer model:

1. **Primitives** — raw values (`color.blue.500`, `space.4`, `radius.md`)
2. **Semantic** — intent-based aliases (`color.action-primary`, `space.inline-md`)
3. **Components** — consume semantic tokens via CSS custom properties or Tailwind utilities

## Brand overrides

Brand-specific primitive values live in:

- `packages/tokens/brand-alpha/`
- `packages/tokens/brand-beta/`

Shared primitives (spacing, typography sizes) live in `packages/tokens/primitive/`.

## Dark mode

Dark semantic overrides live in `packages/tokens/dark/semantic/`. Brand-specific dark overrides (e.g. `accent-soft`, `bg-surface`) live in `packages/tokens/dark/brand-alpha/` and `packages/tokens/dark/brand-beta/`. Style Dictionary merges them for dark builds and scopes output to:

```css
[data-theme="brand-alpha"][data-mode="dark"] { ... }
```

### Dark mode contrast rules

When adding or changing dark tokens, verify these pairs differ in **all four** theme CSS outputs (`brand-*.css`, `brand-*.dark.css`):

| Pair | Why |
|------|-----|
| `accent-soft` vs `bg-surface` | Stat cards |
| `chart-bar` vs `bg-page` | Revenue chart bars |
| `bg-surface-alt` vs `bg-surface` | Table headers, nav active state |
| `action-primary` vs `bg-surface` | Buttons |
| `border-default` vs `bg-surface` | Borders remain visible |

Define brand-specific `palette.accent-soft` in `dark/brand-*/color.json` — do not alias `accent-soft` to the same value as `bg-surface` in shared dark semantic.

### Mode-stable brand accents

`chart-bar` is defined once per brand in `palette.chart-bar` and is **not** overridden in dark mode, so revenue chart bars stay visually identifiable when toggling light/dark:

| Brand | `chart-bar` | Notes |
|-------|-------------|-------|
| Alpha | `#FF6B4A` | Coral-pink, matches header gradient |
| Beta | `#14B8A6` | Teal, matches Beta turquoise identity |

Beta dark mode overrides `action-primary` to `{color.teal.500}` in `dark/brand-beta/color.json` so primary buttons stay turquoise instead of inheriting shared dark indigo.

Alpha dark mode overrides `action-primary` to `{color.orange.500}` (same as `chart-bar`) with `{color.ink.900}` label text in `dark/brand-alpha/color.json`. Default badges in Alpha dark use `badge-default-foreground` (`{color.violet.400}`, `#A5B4FC`) on `badge-default-bg` (`accent-soft`) so Active labels stay distinct from orange primary buttons.

Dark mode destructive badges (shared `dark/semantic/color.json`): `feedback-error-subtle` is `#DC2626` with `feedback-error-subtle-foreground` set to white for both brands.

## Generated CSS

| File | Selector |
|------|----------|
| `brand-alpha.css` | `[data-theme="brand-alpha"]` |
| `brand-alpha.dark.css` | `[data-theme="brand-alpha"][data-mode="dark"]` |
| `brand-beta.css` | `[data-theme="brand-beta"]` |
| `brand-beta.dark.css` | `[data-theme="brand-beta"][data-mode="dark"]` |

Components must only reference semantic variable names such as `--color-action-primary`, never brand primitives directly.

## Typography

| Semantic token | Primitive | Size |
|----------------|-----------|------|
| `font-size-heading` | `font-size-xl` | 24px |
| `font-size-body` | `font-size-md` | 16px |
| `font-size-label` | `font-size-sm` | 14px |
| `font-size-badge` | `font-size-xs` | 12px |
| `font-size-card-title` | `font-size-lg` | 20px |

Figma text styles (`Acme/Heading`, `Acme/Body`, `Acme/Label`, `Acme/Badge`) bind to these variables. See [figma.md](../figma.md) for file structure (Foundations + one page per component).
