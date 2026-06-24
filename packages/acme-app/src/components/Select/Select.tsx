import type { SelectHTMLAttributes } from 'react'

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  options: SelectOption[]
  error?: string
  placeholder?: string
}

export function Select({
  label,
  options,
  error,
  placeholder,
  id,
  className = '',
  disabled,
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-stack-sm">
      <label htmlFor={selectId} className="text-label font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${selectId}-error` : undefined}
          className={[
            'w-full appearance-none rounded-button border bg-bg-surface px-inline-md py-inline-sm pr-inline-lg text-body text-text-primary',
            'placeholder:text-text-secondary',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error ? 'border-feedback-error' : 'border-border-default',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {error ? (
        <p id={`${selectId}-error`} className="text-label text-feedback-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
