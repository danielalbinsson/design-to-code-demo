import { Badge } from '../../components/Badge'
import { Card } from '../../components/Card'
import type { ActivityItem } from '../mock-data'

type ActivityFeedProps = {
  items: ActivityItem[]
}

function activityBadge(type: ActivityItem['type']) {
  if (type === 'error') {
    return <Badge variant="destructive">Failed</Badge>
  }
  if (type === 'success') {
    return <Badge variant="default">Success</Badge>
  }
  return <Badge variant="secondary">Info</Badge>
}

export function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <Card title="Recent activity">
      <ul className="divide-y divide-border-default">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-wrap items-center justify-between gap-inline-sm py-inline-md first:pt-0 last:pb-0"
          >
            <div className="min-w-0 flex-1">
              <p className="text-body text-text-primary">{item.message}</p>
              <p className="text-label text-text-secondary">{item.time}</p>
            </div>
            {activityBadge(item.type)}
          </li>
        ))}
      </ul>
    </Card>
  )
}
