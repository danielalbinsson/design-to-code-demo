# Toggle

## Intent

Binary switch for enabling/disabling a setting. Uses `role="switch"` for accessibility.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean` | required | Current state |
| onChange | `(checked: boolean) => void` | — | Called when toggled |
| label | `ReactNode` | — | Optional label text |
| disabled | `boolean` | `false` | Disables interaction |

## Tokens Used

- `--color-action-primary` (on state)
- `--color-border-default` (off state)
- `--space-inline-sm`

## Usage Rules

- Prefer descriptive labels over vague ones ("Enable notifications" not "On/Off")
- Use `disabled` for conditions, not for static display
- Do not use toggle for non-binary choices (use radio group or select)

## Accessibility

- Renders as `<button role="switch">` with `aria-checked`
- Focus ring visible on keyboard navigation
- Associated label via `htmlFor` / `id`
- Animated transition between states (`duration-200`)
