# Badge

## Intent

Compact status indicator for labels such as Active, Pending, or Error. Styled like shadcn/ui badges: pill shape, subtle destructive background, outline variant.

## Variants

- `default` — primary emphasis. `color-badge-default-bg` background with `color-badge-default-foreground` text (Alpha dark uses blueish-purple label on soft violet fill; other themes follow action colors).
- `secondary` — neutral. `color-bg-surface-alt` background.
- `destructive` — errors/warnings. Subtle `color-feedback-error-subtle` background with `color-feedback-error-subtle-foreground` text (dark red in light mode, white in dark mode).
- `outline` — bordered. Transparent surface with `color-border-default` border.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Visual style |
| children | `ReactNode` | — | Badge text |
| className | `string` | — | Optional extra classes |

## Tokens Used

- `--color-badge-default-bg`, `--color-badge-default-foreground` (default)
- `--color-bg-surface-alt`, `--color-text-primary` (secondary)
- `--color-feedback-error-subtle`, `--color-feedback-error-subtle-foreground` (destructive)
- `--color-bg-surface`, `--color-border-default`, `--color-text-primary` (outline)
- `--font-size-badge` (12px / xs)
- `--space-inline-sm`, `--space-badge-y`
- `--radius-badge` (pill)

## Usage Rules

- Keep text short (one or two words)
- Prefer `variant` over ad-hoc `className` color overrides
- Use `destructive` for errors, not `default`

## Accessibility

- Use alongside visible text in tables; do not rely on color alone
