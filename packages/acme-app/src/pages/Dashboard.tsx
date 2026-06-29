import { useState } from 'react'
import { Button } from '../components/Button'
import { Modal } from '../components/Modal'
import { Select } from '../components/Select'
import { Toggle } from '../components/Toggle'
import { AppShell } from '../dashboard/AppShell'
import type { DashboardView } from '../dashboard/mock-data'
import { AccountsView } from '../dashboard/views/AccountsView'
import { OverviewView } from '../dashboard/views/OverviewView'
import { SettingsView } from '../dashboard/views/SettingsView'

export function Dashboard() {
  const [activeView, setActiveView] = useState<DashboardView>('overview')
  const [exportOpen, setExportOpen] = useState(false)
  const [includeCharts, setIncludeCharts] = useState(true)
  const [createAccountOpen, setCreateAccountOpen] = useState(false)

  function handleViewChange(view: DashboardView) {
    setActiveView(view)
    if (view !== 'accounts') {
      setCreateAccountOpen(false)
    }
  }

  function renderPrimaryAction() {
    if (activeView === 'overview') {
      return (
        <Button size="sm" onClick={() => setExportOpen(true)}>
          Export report
        </Button>
      )
    }
    if (activeView === 'accounts') {
      return (
        <Button size="sm" onClick={() => setCreateAccountOpen(true)}>
          New account
        </Button>
      )
    }
    return null
  }

  function renderView() {
    switch (activeView) {
      case 'overview':
        return <OverviewView />
      case 'accounts':
        return (
          <AccountsView
            createOpen={createAccountOpen}
            onCreateOpenChange={setCreateAccountOpen}
          />
        )
      case 'settings':
        return <SettingsView />
    }
  }

  return (
    <>
      <AppShell
        activeView={activeView}
        onViewChange={handleViewChange}
        primaryAction={renderPrimaryAction()}
      >
        {renderView()}
      </AppShell>

      <Modal
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        title="Export report"
        footer={
          <>
            <Button variant="secondary" onClick={() => setExportOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setExportOpen(false)}>Download</Button>
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
            <Toggle checked={includeCharts} onChange={setIncludeCharts} />
          </div>
        </div>
      </Modal>
    </>
  )
}
