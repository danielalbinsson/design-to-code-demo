import { useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Modal } from '../../components/Modal'
import { Select } from '../../components/Select'
import { Toggle } from '../../components/Toggle'
import { AccountsTable } from '../patterns/AccountsTable'
import {
  accounts as initialAccounts,
  planOptions,
  statusFilterOptions,
  type Account,
} from '../mock-data'

type AccountsViewProps = {
  createOpen: boolean
  onCreateOpenChange: (open: boolean) => void
}

export function AccountsView({ createOpen, onCreateOpenChange }: AccountsViewProps) {
  const [accountList, setAccountList] = useState(initialAccounts)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [deleteTarget, setDeleteTarget] = useState<Account | null>(null)

  const [createName, setCreateName] = useState('')
  const [createPlan, setCreatePlan] = useState('')
  const [sendInvite, setSendInvite] = useState(true)
  const [nameError, setNameError] = useState('')
  const [planError, setPlanError] = useState('')

  const filteredAccounts = useMemo(() => {
    return accountList.filter((account) => {
      const matchesSearch =
        search === '' ||
        account.name.toLowerCase().includes(search.toLowerCase()) ||
        account.owner.toLowerCase().includes(search.toLowerCase())
      const matchesStatus =
        statusFilter === 'all' || account.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [accountList, search, statusFilter])

  function resetCreateForm() {
    setCreateName('')
    setCreatePlan('')
    setSendInvite(true)
    setNameError('')
    setPlanError('')
  }

  function handleCreateClose() {
    onCreateOpenChange(false)
    resetCreateForm()
  }

  function handleCreateSubmit() {
    const nameValid = createName.trim().length > 0
    const planValid = createPlan.length > 0

    setNameError(nameValid ? '' : 'Account name is required')
    setPlanError(planValid ? '' : 'Select a plan')

    if (!nameValid || !planValid) return

    const planLabel =
      planOptions.find((p) => p.value === createPlan)?.label ?? createPlan

    const newAccount: Account = {
      id: String(Date.now()),
      name: createName.trim(),
      plan: planLabel,
      status: 'Pending',
      owner: 'You',
      updated: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }

    setAccountList((prev) => [newAccount, ...prev])
    handleCreateClose()
  }

  function handleDeleteConfirm() {
    if (!deleteTarget) return
    setAccountList((prev) => prev.filter((a) => a.id !== deleteTarget.id))
    setDeleteTarget(null)
  }

  return (
    <div className="flex flex-col gap-stack-lg">
      <section className="flex flex-col gap-stack-md sm:flex-row sm:items-end">
        <div className="min-w-0 flex-1">
          <Input
            label="Search"
            placeholder="Search by name or owner…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select
            label="Status"
            options={statusFilterOptions}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
        </div>
      </section>

      <AccountsTable rows={filteredAccounts} onDelete={setDeleteTarget} />

      <Modal
        open={createOpen}
        onClose={handleCreateClose}
        title="New account"
        footer={
          <>
            <Button variant="secondary" onClick={handleCreateClose}>
              Cancel
            </Button>
            <Button onClick={handleCreateSubmit}>Create account</Button>
          </>
        }
      >
        <div className="flex flex-col gap-stack-md">
          <Input
            label="Account name"
            placeholder="Enter company name"
            value={createName}
            onChange={(e) => {
              setCreateName(e.target.value)
              if (nameError) setNameError('')
            }}
            error={nameError}
          />
          <Select
            label="Plan"
            options={planOptions}
            placeholder="Select a plan…"
            value={createPlan}
            onChange={(e) => {
              setCreatePlan(e.target.value)
              if (planError) setPlanError('')
            }}
            error={planError}
          />
          <div className="flex items-center justify-between rounded-card border border-border-default bg-bg-surface-alt px-stack-md py-stack-md">
            <div>
              <p className="text-body font-medium text-text-primary">Send invite email</p>
              <p className="text-label text-text-secondary">
                Notify the account owner on creation
              </p>
            </div>
            <Toggle checked={sendInvite} onChange={setSendInvite} aria-label="Send invite email" />
          </div>
        </div>
      </Modal>

      <Modal
        open={deleteTarget !== null}
        onClose={() => setDeleteTarget(null)}
        title="Delete account"
        footer={
          <>
            <Button variant="secondary" onClick={() => setDeleteTarget(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete account
            </Button>
          </>
        }
      >
        <p>
          Are you sure you want to delete{' '}
          <strong>{deleteTarget?.name}</strong>? This action cannot be undone.
        </p>
      </Modal>
    </div>
  )
}
