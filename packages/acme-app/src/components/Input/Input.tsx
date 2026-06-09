import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

export function Input({
  label,
  error,
  id,
  className = '',
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-stack-sm">
      <label htmlFor={inputId} className="text-label font-medium text-text-secondary">
        {label}
      </label>
      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          'rounded-button border border-border-default bg-bg-surface px-inline-md py-inline-sm text-body text-text-primary',
          'placeholder:text-text-secondary',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error ? 'border-feedback-error' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error ? (
        <p id={`${inputId}-error`} className="text-label text-feedback-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
