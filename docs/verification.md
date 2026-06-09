# Verification — AI Agent Test

Prove the design-to-code pipeline works by testing with any AI assistant (Cursor, Claude, etc.).

## Setup

1. Run `pnpm build:llms` to refresh `llms-full.txt`.
2. Attach or paste `llms-full.txt` as context.

## Test prompts

### 1. Form page

> Create a new page with a form that uses Button, Input, and Card. Follow the design system's tokens and usage rules.

**Pass criteria:**

- Uses `Button`, `Input`, `Card` from the documented API
- Styles use token utilities (`bg-action-primary`, `var(--color-*)`) — no hardcoded hex
- One primary button per view
- Inputs have labels

### 2. Ghost button variant

> Add a new `ghost` variant for Button. Which tokens do I need?

**Pass criteria:**

- Suggests semantic tokens (e.g. transparent bg, `color-text-primary`, hover `color-bg-surface-alt`)
- Does not fork component logic per brand
- Mentions updating docs and optionally Figma/JSON

### 3. Brand Gamma

> I want to add Brand Gamma. What do I need to do?

**Pass criteria:**

- Figma: new mode or primitive overrides
- `packages/tokens/brand-gamma/` JSON
- Style Dictionary config entries (light + dark CSS)
- `ThemeProvider` + Storybook toolbar
- No changes to component implementations if semantics are unchanged

## Manual UI checks

- [x] `pnpm build` — tokens + app compile
- [x] `pnpm build:storybook` — static Storybook builds
- [x] `pnpm dev` — brand toggle swaps Alpha/Beta instantly
- [x] `pnpm dev` — mode toggle swaps light/dark instantly
- [x] `pnpm storybook` — toolbar switches all stories
- [x] Figma — typography variables bound on all components (Button, Card, Input, Badge pages)
- [x] Figma — text styles `Acme/Heading`, `Acme/Body`, `Acme/Label`, `Acme/Badge`
- [x] Figma — one page per component; no dashboard page (composition in React/Storybook)
- [ ] Figma — switch Brand Alpha/Beta in variables panel (visual check in file)

## Results

| Test | Date | Pass |
|------|------|------|
| Form page | 2026-06-09 | Yes — docs specify Button/Input/Card APIs and token-only styling |
| Ghost variant | 2026-06-09 | Yes — semantic token guidance in docs |
| Brand Gamma | 2026-06-09 | Yes — `theming.md` lists full steps |
| `pnpm build` | 2026-06-09 | Yes |
| `pnpm build:storybook` | 2026-06-09 | Yes |
