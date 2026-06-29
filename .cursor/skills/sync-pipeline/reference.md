# Sync Pipeline — Reference

## Style Dictionary theme merge order

From `packages/acme-tokens/config.mjs`:

**Light (per brand):** primitive → brand → semantic

**Dark (per brand):** primitive → brand → semantic → `dark/semantic` → `dark/brand-*`

Later sources override earlier ones. Brand dark files should only override what differs from shared dark semantic.

## Generated CSS selectors

| File | Selector |
|------|----------|
| `brand-alpha.css` | `[data-theme="brand-alpha"]` |
| `brand-alpha.dark.css` | `[data-theme="brand-alpha"][data-mode="dark"]` |
| `brand-beta.css` | `[data-theme="brand-beta"]` |
| `brand-beta.dark.css` | `[data-theme="brand-beta"][data-mode="dark"]` |

## Contrast audit command

After token changes, inspect key semantics:

```bash
CI=true corepack pnpm build:tokens
grep -E "accent-soft|action-primary|bg-surface|bg-surface-alt|border-default" \
  packages/acme-tokens/build/brand-alpha.dark.css \
  packages/acme-tokens/build/brand-beta.dark.css
```

## Figma variable collections

| Collection | Maps to |
|------------|---------|
| `tokens` | Primitives (`packages/tokens/primitive/`, `brand-*/`) |
| `semantic` | `packages/tokens/semantic/` + dark overrides |

Both collections must use the **same mode name** for a given brand/theme.

## Dashboard compositions (code-only)

The Acme Portal dashboard in `packages/acme-app/src/dashboard/` is not in Figma. Token changes affect it via CSS utilities only — no Figma sync required unless the user asks to add screens to Figma.

## CI parity

GitHub Actions runs: `build:tokens` → app `build` → Storybook build → Chromatic. Local `pnpm build` + `pnpm build-storybook` must pass before pushing token changes.
