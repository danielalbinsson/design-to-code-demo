import type { ReactNode } from 'react'

export type ToggleProps = {
  checked: boolean
  onChange?: (checked: boolean) => void
  label?: ReactNode
  disabled?: boolean
  id?: string
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
  id,
}: ToggleProps) {
  const toggleId = id ?? (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className="flex items-center gap-inline-sm">
      <button
        role="switch"
        id={toggleId}
        type="button"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => { if (onChange) onChange(!checked) }}
        className={[
          'relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
          'disabled:cursor-not-allowed disabled:opacity-50',
          checked ? 'bg-action-primary' : 'bg-border-default',
        ].join(' ')}
      >
        <span
          className={[
            'pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200',
            checked ? 'translate-x-4' : 'translate-x-0',
          ].join(' ')}
        />
      </button>
      {label ? (
        <label
          htmlFor={toggleId}
          className={[
            'cursor-pointer text-body text-text-primary',
            disabled ? 'cursor-not-allowed opacity-50' : '',
          ].join(' ')}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}
