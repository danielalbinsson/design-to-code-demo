# Card

## Intent

Surface container for grouped content such as stats, tables, or forms.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | `string` | — | Optional card heading |
| children | `ReactNode` | — | Card body |
| image | `ReactNode` | — | Optional image above the body; replaces the default placeholder |
| imagePlaceholder | `boolean` | `false` | Show a token-styled image placeholder above the body |

## Tokens Used

- `--color-bg-surface`
- `--color-bg-surface-alt` (image placeholder)
- `--color-border-default`
- `--color-text-primary` (title)
- `--color-text-secondary` (placeholder icon)
- `--font-size-card-title` (title, maps to `font-size-lg` / 20px)
- `--radius-card`
- `--space-stack-sm`, `--space-stack-md`

## Usage Rules

- Use for logical content groups, not single inline elements
- Keep one primary action per card when possible

## Accessibility

- Use heading elements for titles when the card represents a distinct section
