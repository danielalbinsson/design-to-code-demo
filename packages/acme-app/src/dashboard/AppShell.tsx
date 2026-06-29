import type { ReactNode } from 'react'
import { useTheme } from '../providers/theme-context'
import { navItems, viewTitles, type DashboardView } from './mock-data'

type AppShellProps = {
  activeView: DashboardView
  onViewChange: (view: DashboardView) => void
  primaryAction?: ReactNode
  children: ReactNode
}

const sidebarNavClass = (active: boolean) =>
  [
    'w-full rounded-button px-inline-sm py-inline-sm text-left text-body transition-colors',
    'hover:bg-bg-surface-alt',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
    active
      ? 'bg-bg-surface-alt font-medium text-text-primary'
      : 'text-text-secondary',
  ].join(' ')

const mobileNavClass = (active: boolean) =>
  [
    'shrink-0 rounded-button px-inline-sm py-inline-sm text-label transition-colors',
    'hover:bg-bg-surface-alt',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
    active
      ? 'bg-bg-surface-alt font-medium text-text-primary'
      : 'text-text-secondary',
  ].join(' ')

export function AppShell({
  activeView,
  onViewChange,
  primaryAction,
  children,
}: AppShellProps) {
  const { brand } = useTheme()

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-page text-text-primary">
      <header className="relative flex flex-wrap items-center justify-between gap-stack-md overflow-hidden border-b border-border-default bg-bg-surface px-inline-lg py-stack-md">
        {brand === 'brand-alpha' ? (
          <div
            className="pointer-events-none absolute -right-16 top-1/2 hidden h-32 w-64 -translate-y-1/2 rotate-12 rounded-card opacity-90 blur-sm bg-brand-gradient lg:block"
            aria-hidden="true"
          />
        ) : null}
        <div className="relative flex min-w-0 flex-wrap items-baseline gap-inline-md">
          <div className="hidden shrink-0 lg:block">
            <p className="text-mono-label text-label text-text-secondary">Acme Portal</p>
          </div>
          <h1 className="text-heading">{viewTitles[activeView]}</h1>
        </div>
        {primaryAction ? (
          <div className="relative flex flex-wrap items-center gap-inline-sm">
            {primaryAction}
          </div>
        ) : null}
      </header>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Mobile nav */}
        <nav
          className="flex gap-inline-sm overflow-x-auto border-b border-border-default bg-bg-surface px-inline-md py-inline-sm lg:hidden"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onViewChange(item.id)}
              aria-current={activeView === item.id ? 'page' : undefined}
              className={mobileNavClass(activeView === item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 flex-col border-r border-border-default bg-bg-surface lg:flex">
          <nav className="flex flex-1 flex-col gap-inline-sm p-stack-md" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onViewChange(item.id)}
                aria-current={activeView === item.id ? 'page' : undefined}
                className={sidebarNavClass(activeView === item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 overflow-y-auto px-inline-lg py-stack-lg">
          {children}
        </main>
      </div>
    </div>
  )
}
