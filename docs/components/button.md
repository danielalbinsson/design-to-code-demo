# Button

## Intent

Primary user action trigger. Use for submitting forms, confirming dialogs, and forward navigation.

## Variants

- `primary` — main CTA. Uses `color-action-primary`.
- `secondary` — less prominent. Outlined, transparent background.
- `destructive` — irreversible actions. Uses `color-feedback-error`.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'primary' \| 'secondary' \| 'destructive'` | `'primary'` | Visual style |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| disabled | `boolean` | `false` | Disables interaction |
| children | `ReactNode` | — | Button label |

## Tokens Used

- `--color-action-primary` (primary background)
- `--color-action-primary-hover` (primary hover)
- `--color-text-on-action` (primary text)
- `--color-feedback-error` (destructive background)
- `--color-border-default` (secondary border)
- `--color-bg-surface-alt` (secondary hover)
- `--radius-button`
- `--space-inline-sm`, `--space-inline-md`, `--space-inline-lg`
- `--font-size-body`, `--font-size-label`

## Usage Rules

- One primary button per view
- Always provide a visible label (no icon-only without `aria-label`)
- Do not use destructive for non-destructive actions
- Do not nest buttons inside buttons

## Accessibility

- Renders as `<button>`
- `disabled` sets `aria-disabled="true"`
- Minimum touch target: 44×44px for `md` and `lg`
- Focus ring visible on keyboard navigation
