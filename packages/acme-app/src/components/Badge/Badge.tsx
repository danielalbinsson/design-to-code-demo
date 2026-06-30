import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  children: ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'border-transparent bg-badge-default-bg text-badge-default-foreground',
  secondary: 'border-transparent bg-bg-surface-alt text-text-primary',
  destructive: 'border-transparent bg-feedback-error-subtle text-feedback-error-subtle-foreground',
  outline: 'border-border-default bg-bg-surface text-text-primary',
}

export function Badge({
  variant = 'default',
  children,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-badge border px-inline-sm py-badge-y text-badge font-medium',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
