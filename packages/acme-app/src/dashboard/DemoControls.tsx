import { useTheme } from '../providers/theme-context'

const controlButtonClass =
  'rounded-button px-inline-sm py-inline-sm text-label text-text-secondary underline-offset-2 transition-colors hover:text-text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

export function DemoControls() {
  const { brand, mode, toggleBrand, toggleMode } = useTheme()

  return (
    <div
      className="flex flex-wrap items-center justify-between gap-inline-md border-b border-dashed border-border-default bg-bg-page px-inline-lg py-inline-sm"
      aria-label="Design system preview controls"
    >
      <p className="text-mono-label text-badge text-text-secondary">
        Design system preview
      </p>
      <div className="flex flex-wrap items-center gap-inline-md">
        <button
          type="button"
          onClick={toggleBrand}
          className={controlButtonClass}
          aria-label={`Switch to ${brand === 'brand-alpha' ? 'Beta' : 'Alpha'} brand`}
        >
          Brand: {brand === 'brand-alpha' ? 'Alpha' : 'Beta'}
        </button>
        <span className="text-text-secondary" aria-hidden="true">
          ·
        </span>
        <button
          type="button"
          onClick={toggleMode}
          className={controlButtonClass}
          aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
        >
          Mode: {mode === 'light' ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  )
}
