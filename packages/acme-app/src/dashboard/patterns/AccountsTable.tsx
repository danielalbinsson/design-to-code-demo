import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import type { Account, AccountStatus } from '../mock-data'

type AccountsTableProps = {
  rows: Account[]
  onDelete: (account: Account) => void
}

function statusBadge(status: AccountStatus) {
  if (status === 'Error') {
    return <Badge variant="destructive">{status}</Badge>
  }
  if (status === 'Pending') {
    return <Badge variant="outline">{status}</Badge>
  }
  return <Badge variant="default">{status}</Badge>
}

export function AccountsTable({ rows, onDelete }: AccountsTableProps) {
  if (rows.length === 0) {
    return (
      <Card title="Accounts">
        <p className="py-stack-lg text-center text-body text-text-secondary">
          No accounts match your search. Try adjusting filters.
        </p>
      </Card>
    )
  }

  return (
    <Card title="Accounts">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[48rem] text-left text-body">
          <caption className="sr-only">
            Accounts with name, plan, status, owner, and last updated date
          </caption>
          <thead>
            <tr className="border-b border-border-default bg-bg-surface-alt text-mono-label text-label text-text-secondary">
              <th className="py-inline-sm pr-inline-md">Name</th>
              <th className="py-inline-sm pr-inline-md">Plan</th>
              <th className="py-inline-sm pr-inline-md">Status</th>
              <th className="py-inline-sm pr-inline-md">Owner</th>
              <th className="py-inline-sm pr-inline-md">Updated</th>
              <th className="py-inline-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-border-default last:border-0">
                <td className="py-inline-md pr-inline-md font-medium">{row.name}</td>
                <td className="py-inline-md pr-inline-md">{row.plan}</td>
                <td className="py-inline-md pr-inline-md">{statusBadge(row.status)}</td>
                <td className="py-inline-md pr-inline-md text-text-secondary">{row.owner}</td>
                <td className="py-inline-md pr-inline-md text-text-secondary">{row.updated}</td>
                <td className="py-inline-md">
                  <div className="flex flex-wrap gap-inline-sm">
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(row)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
