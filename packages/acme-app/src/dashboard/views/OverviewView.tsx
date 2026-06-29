import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { Select } from '../../components/Select'
import { ActivityFeed } from '../patterns/ActivityFeed'
import { StatCard } from '../patterns/StatCard'
import { TokenBarChart } from '../patterns/TokenBarChart'
import {
  activityItems,
  chartData,
  roleOptions,
  stats,
} from '../mock-data'

type OverviewViewProps = {
  onInviteClick?: () => void
}

export function OverviewView({ onInviteClick }: OverviewViewProps) {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [inviteRole, setInviteRole] = useState('')

  function handleInviteOpen() {
    setInviteOpen(true)
    onInviteClick?.()
  }

  function handleInviteClose() {
    setInviteOpen(false)
    setInviteEmail('')
    setInviteRole('')
  }

  return (
    <div className="flex flex-col gap-stack-lg">
      <section className="grid gap-stack-md sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </section>

      <section className="grid gap-stack-lg lg:grid-cols-[2fr_1fr]">
        <TokenBarChart title="Revenue trend (12 weeks)" data={chartData} />
        <ActivityFeed items={activityItems} />
      </section>

      <section className="flex justify-end">
        <Button size="lg" onClick={handleInviteOpen}>
          Invite teammate
        </Button>
      </section>

      <Modal
        open={inviteOpen}
        onClose={handleInviteClose}
        title="Invite teammate"
        footer={
          <>
            <Button variant="secondary" onClick={handleInviteClose}>
              Cancel
            </Button>
            <Button onClick={handleInviteClose}>Send invite</Button>
          </>
        }
      >
        <div className="flex flex-col gap-stack-md">
          <p className="text-text-secondary">
            Add a colleague to your Acme Portal workspace.
          </p>
          <Input
            label="Email"
            type="email"
            placeholder="name@company.com"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
          />
          <Select
            label="Role"
            options={roleOptions}
            placeholder="Select a role…"
            value={inviteRole}
            onChange={(e) => setInviteRole(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  )
}
