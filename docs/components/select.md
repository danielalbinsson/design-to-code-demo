# Select

## Intent

Dropdown selector for choosing one option from a list. Uses a native `<select>` element for accessibility and keyboard navigation.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | required | Visible label |
| options | `{value: string, label: string}[]` | required | Available options |
| placeholder | `string` | — | Unselected placeholder text |
| error | `string` | — | Error message |
| disabled | `boolean` | `false` | Disables interaction |
| ... | `SelectHTMLAttributes` | — | Standard select attributes |

## Tokens Used

- `--color-bg-surface`, `--color-border-default` (field)
- `--color-text-primary`, `--color-text-secondary` (text / placeholder)
- `--color-feedback-error` (error state)
- `--radius-button`
- `--font-size-body`, `--font-size-label`
- `--space-inline-md`, `--space-inline-sm`, `--space-inline-lg`, `--space-stack-sm`

## Usage Rules

- Always provide a `label`
- Show `error` text for validation failures
- Use `placeholder` to hint at selection, not as a substitute for label

## Accessibility

- Label is associated via `htmlFor` / `id`
- Renders as native `<select>` for full keyboard navigation
- `aria-invalid` and `aria-describedby` when `error` is set
- Chevron icon is `aria-hidden="true"`
