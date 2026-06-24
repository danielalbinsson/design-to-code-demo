# Modal

## Intent

Overlay dialog for focused tasks such as confirming actions, showing detailed information, or capturing input without leaving the current page.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | `boolean` | required | Show/hide the modal |
| onClose | `() => void` | required | Called when user dismisses |
| title | `string` | — | Optional modal heading |
| children | `ReactNode` | — | Modal body content |
| footer | `ReactNode` | — | Optional footer content |

## Tokens Used

- `--color-bg-surface` (modal background)
- `--color-border-default` (borders)
- `--color-text-primary`, `--color-text-secondary`
- `--radius-card`
- `--space-stack-md`, `--space-inline-sm`, `--space-inline-md`
- `--font-size-card-title`
- `--color-bg-surface-alt` (close button hover)

## Usage Rules

- Always provide a descriptive `title` unless the content is self-explanatory
- Use `footer` for action buttons; one primary action per modal
- Close with `onClose` on Escape, overlay click, and close button
- Do not stack modals (nested modals break the focus trap)

## Accessibility

- Renders as `<div role="dialog" aria-modal="true">`
- Focus trapped inside modal while open
- Escape key dismisses
- Focus restored to trigger element on close
- Body scroll is locked while open
- Close button has `aria-label="Close modal"`
