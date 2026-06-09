# Getting Started

## Prerequisites

- Node.js 20+
- pnpm 9+

## Install

```bash
pnpm install
```

## Build design tokens

```bash
pnpm build:tokens
```

This runs Style Dictionary and writes four theme CSS files to `packages/acme-tokens/build/`.

## Run the app

```bash
pnpm dev
```

The dev script builds tokens, copies CSS into the app, and starts Vite.

## Storybook

```bash
pnpm storybook
```

Use the toolbar to switch brand (Alpha/Beta) and mode (light/dark).

## Project layout

- `packages/tokens/` — DTCG JSON (source of truth for builds)
- `packages/acme-tokens/` — Style Dictionary pipeline
- `packages/acme-app/` — React dashboard and components
- `docs/` — AI-readable documentation
- [figma.md](../figma.md) — Figma file: Foundations + one page per component (Button, Card, Input, Badge)

Application screens (dashboard) are implemented in the React app and Storybook, not in Figma.
