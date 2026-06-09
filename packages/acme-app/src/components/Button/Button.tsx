import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-action-primary text-text-on-action hover:bg-action-primary-hover border-transparent',
  secondary:
    'bg-transparent text-text-primary border-border-default hover:bg-bg-surface-alt',
  destructive:
    'bg-feedback-error text-text-on-action hover:opacity-90 border-transparent',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-inline-sm py-inline-sm text-label min-h-9',
  md: 'px-inline-md py-inline-sm text-label min-h-11',
  lg: 'px-inline-lg py-inline-md text-label min-h-12',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={[
        'text-mono-label inline-flex items-center justify-center rounded-button border transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
