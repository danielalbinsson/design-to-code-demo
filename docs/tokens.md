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

Dark semantic overrides live in `packages/tokens/dark/semantic/`. Style Dictionary merges them for dark builds and scopes output to:

```css
[data-theme="brand-alpha"][data-mode="dark"] { ... }
```

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
