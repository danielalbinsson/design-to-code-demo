# Input

## Intent

Text field for single-line user input with an associated label.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | required | Visible label |
| error | `string` | — | Error message |
| disabled | `boolean` | `false` | Disables the field |
| ... | `InputHTMLAttributes` | — | Standard input attributes |

## Tokens Used

- `--color-border-default`
- `--color-bg-surface`
- `--color-text-primary`, `--color-text-secondary`
- `--color-feedback-error` (error state)
- `--radius-button`
- `--font-size-body`, `--font-size-label`
- `--space-inline-md`, `--space-stack-sm`

## Usage Rules

- Always provide a `label`
- Show `error` text for validation failures
- Do not use placeholder as the only label

## Accessibility

- Label is associated via `htmlFor` / `id`
- `aria-invalid` and `aria-describedby` when `error` is set
