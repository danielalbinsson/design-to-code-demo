# Theming

## How it works

The active theme is controlled by attributes on `<html>`:

- `data-theme="brand-alpha"` or `data-theme="brand-beta"`
- `data-mode="dark"` for dark mode (omit for light)

`ThemeProvider` in the React app sets these attributes. Storybook uses a decorator with the same behavior.

## Adding Brand Gamma

1. Add a `Brand Gamma` mode in Figma variable collections (visual reference on component pages).
2. Create `packages/tokens/brand-gamma/` with primitive overrides.
3. Add two entries to `packages/acme-tokens/config.mjs` (light + dark).
4. Run `pnpm build:tokens` and copy CSS into the app.
5. Extend `Brand` type in `ThemeProvider` and toolbar options in Storybook.
6. Add Tailwind theme mappings only if new semantic tokens are introduced.

No component code changes are required if components consume semantic tokens only.
