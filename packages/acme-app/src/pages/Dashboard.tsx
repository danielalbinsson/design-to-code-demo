import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { useTheme } from '../providers/ThemeProvider'

const stats = [
  { title: 'Total Users', value: '12,480' },
  { title: 'Revenue', value: '$84,200' },
  { title: 'Active Sessions', value: '1,024' },
  { title: 'Conversion', value: '3.8%' },
]

const rows = [
  { name: 'Northwind Labs', status: 'Active', date: 'Jun 2, 2026' },
  { name: 'Blue Harbor Co.', status: 'Pending', date: 'Jun 4, 2026' },
  { name: 'Summit Analytics', status: 'Active', date: 'Jun 5, 2026' },
  { name: 'Orbit Systems', status: 'Error', date: 'Jun 7, 2026' },
  { name: 'Vertex Health', status: 'Pending', date: 'Jun 8, 2026' },
]

function statusBadge(status: string) {
  if (status === 'Error') {
    return <Badge variant="destructive">{status}</Badge>
  }
  if (status === 'Pending') {
    return <Badge variant="outline">{status}</Badge>
  }
  return <Badge variant="default">{status}</Badge>
}

export function Dashboard() {
  const { brand, mode, toggleBrand, toggleMode } = useTheme()

  return (
    <div className="min-h-screen bg-bg-page text-text-primary">
      <header className="relative overflow-hidden border-b border-border-default bg-bg-hero text-text-on-hero">
        {brand === 'brand-alpha' ? (
          <div
            className="pointer-events-none absolute -right-16 top-1/2 h-48 w-72 -translate-y-1/2 rotate-12 rounded-card opacity-90 blur-sm bg-brand-gradient"
            aria-hidden="true"
          />
        ) : null}
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-stack-md px-inline-lg py-stack-lg">
          <div>
            <p className="text-mono-label text-label text-text-on-hero/70">Acme Portal</p>
            <h1 className="text-heading">Dashboard</h1>
          </div>
          <div className="flex flex-wrap items-center gap-inline-sm">
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleBrand}
              className={
                brand === 'brand-alpha'
                  ? 'border-white/20 text-text-on-hero hover:bg-white/10'
                  : undefined
              }
            >
              Brand: {brand === 'brand-alpha' ? 'Alpha' : 'Beta'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleMode}
              className={
                brand === 'brand-alpha'
                  ? 'border-white/20 text-text-on-hero hover:bg-white/10'
                  : undefined
              }
            >
              Mode: {mode === 'light' ? 'Light' : 'Dark'}
            </Button>
            <Button size="sm">Export report</Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-stack-lg px-inline-lg py-stack-lg">
        <section className="grid gap-stack-md sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-border-default bg-accent-soft">
              <p className="text-mono-label text-label text-text-secondary">{stat.title}</p>
              <p className="mt-stack-sm text-heading">{stat.value}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-stack-lg lg:grid-cols-[2fr_1fr]">
          <Card title="Recent accounts">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] text-left text-body">
                <thead>
                  <tr className="border-b border-border-default bg-bg-surface-alt text-mono-label text-label text-text-secondary">
                    <th className="py-inline-sm pr-inline-md">Name</th>
                    <th className="py-inline-sm pr-inline-md">Status</th>
                    <th className="py-inline-sm">Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.name} className="border-b border-border-default last:border-0">
                      <td className="py-inline-md pr-inline-md">{row.name}</td>
                      <td className="py-inline-md pr-inline-md">{statusBadge(row.status)}</td>
                      <td className="py-inline-md text-text-secondary">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card title="Create item" imagePlaceholder>
            <form
              className="flex flex-col gap-stack-md"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input label="Name" placeholder="Enter item name" />
              <Input label="Email" type="email" placeholder="name@company.com" />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Card>
        </section>
      </main>
    </div>
  )
}
