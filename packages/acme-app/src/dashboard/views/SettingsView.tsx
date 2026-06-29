import { useState } from 'react'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { Select } from '../../components/Select'
import { Toggle } from '../../components/Toggle'
import { useTheme } from '../../providers/theme-context'
import { timezoneOptions } from '../mock-data'

export function SettingsView() {
  const { brand } = useTheme()
  const [name, setName] = useState('Alex Chen')
  const [timezone, setTimezone] = useState('pst')
  const [weeklyDigest, setWeeklyDigest] = useState(true)
  const [billingAlerts, setBillingAlerts] = useState(true)
  const [productUpdates, setProductUpdates] = useState(false)
  const [saved, setSaved] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex max-w-2xl flex-col gap-stack-lg">
      <Card title="Profile">
        <div className="flex flex-col gap-stack-md">
          <Input
            label="Display name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value="alex@acmeportal.com"
            disabled
          />
          <Select
            label="Timezone"
            options={timezoneOptions}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          />
          <div className="flex items-center gap-inline-sm">
            <Button onClick={handleSave}>Save changes</Button>
            {saved ? <Badge variant="default">Saved</Badge> : null}
          </div>
        </div>
      </Card>

      <Card title="Notifications">
        <div className="flex flex-col gap-stack-md">
          <div className="flex items-center justify-between gap-inline-md">
            <div>
              <p className="text-body font-medium text-text-primary">Weekly digest</p>
              <p className="text-label text-text-secondary">
                Summary of workspace activity every Monday
              </p>
            </div>
            <Toggle
              checked={weeklyDigest}
              onChange={setWeeklyDigest}
              aria-label="Toggle weekly digest"
            />
          </div>
          <div className="flex items-center justify-between gap-inline-md border-t border-border-default pt-stack-md">
            <div>
              <p className="text-body font-medium text-text-primary">Billing alerts</p>
              <p className="text-label text-text-secondary">
                Payment failures and invoice reminders
              </p>
            </div>
            <Toggle
              checked={billingAlerts}
              onChange={setBillingAlerts}
              aria-label="Toggle billing alerts"
            />
          </div>
          <div className="flex items-center justify-between gap-inline-md border-t border-border-default pt-stack-md">
            <div>
              <p className="text-body font-medium text-text-primary">Product updates</p>
              <p className="text-label text-text-secondary">
                New features and release notes
              </p>
            </div>
            <Toggle
              checked={productUpdates}
              onChange={setProductUpdates}
              disabled
              aria-label="Toggle product updates"
            />
          </div>
          <p className="text-label text-text-secondary">
            Product updates are managed by your workspace admin.
          </p>
        </div>
      </Card>

      <Card
        title="Brand preview"
        image={
          <div
            className="aspect-video w-full bg-brand-gradient"
            aria-hidden="true"
          />
        }
      >
        <p className="text-body text-text-secondary">
          Your workspace uses{' '}
          <strong className="text-text-primary">
            {brand === 'brand-alpha' ? 'Brand Alpha' : 'Brand Beta'}
          </strong>{' '}
          tokens. Switch brands from the header to preview how components adapt.
        </p>
      </Card>

      <Card title="Danger zone">
        <div className="flex flex-col gap-stack-md sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-body font-medium text-text-primary">Delete workspace</p>
            <p className="text-label text-text-secondary">
              Permanently remove all accounts and data
            </p>
          </div>
          <Button variant="destructive" onClick={() => setDeleteOpen(true)}>
            Delete workspace
          </Button>
        </div>
      </Card>

      <Modal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="Delete workspace"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => setDeleteOpen(false)}
            >
              Delete workspace
            </Button>
          </>
        }
      >
        <p>
          This will permanently delete your workspace and all associated data.
          Type your workspace name to confirm.
        </p>
        <div className="mt-stack-md">
          <Input label="Workspace name" placeholder="Acme Portal" />
        </div>
      </Modal>
    </div>
  )
}
