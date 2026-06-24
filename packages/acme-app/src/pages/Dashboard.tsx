import { useState } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { Select } from '../components/Select'
import { Toggle } from '../components/Toggle'
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
  const [exportOpen, setExportOpen] = useState(false)
  const [includeCharts, setIncludeCharts] = useState(true)
  const [selectedRole, setSelectedRole] = useState('')

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
              aria-label={`Switch to ${brand === 'brand-alpha' ? 'Beta' : 'Alpha'} brand`}
              className="border-border-default text-text-on-hero"
            >
              Brand: {brand === 'brand-alpha' ? 'Alpha' : 'Beta'}
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleMode}
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              className="border-border-default text-text-on-hero"
            >
              Mode: {mode === 'light' ? 'Light' : 'Dark'}
            </Button>
            <Button size="sm" onClick={() => setExportOpen(true)}>
              Export report
            </Button>
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
                <caption className="sr-only">Recent accounts with name, status, and last updated date</caption>
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
              <Select
                label="Category"
                options={[
                  { value: 'design', label: 'Design' },
                  { value: 'engineering', label: 'Engineering' },
                  { value: 'marketing', label: 'Marketing' },
                ]}
                placeholder="Select a category…"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Card>
        </section>

        <section className="flex items-center justify-between rounded-card border border-border-default bg-bg-surface px-stack-md py-stack-md">
          <div>
            <p className="text-body font-medium text-text-primary">Email notifications</p>
            <p className="text-label text-text-secondary">Receive weekly summary reports</p>
          </div>
          <Toggle
            checked={includeCharts}
            onChange={setIncludeCharts}
            aria-label="Toggle email notifications"
          />
        </section>
      </main>

      <Modal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        title="Export report"
        footer={
          <>
            <Button variant="secondary" onClick={() => setExportOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setExportOpen(false)}>
              Download
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-stack-md">
          <p>Choose the format and scope for your data export.</p>
          <Select
            label="Format"
            options={[
              { value: 'csv', label: 'CSV' },
              { value: 'xlsx', label: 'Excel (XLSX)' },
              { value: 'pdf', label: 'PDF' },
            ]}
            defaultValue="csv"
          />
          <div className="flex items-center justify-between">
            <span className="text-body text-text-primary">Include charts</span>
            <Toggle
              checked={includeCharts}
              onChange={setIncludeCharts}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}
