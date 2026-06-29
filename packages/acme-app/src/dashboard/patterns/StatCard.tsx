import { Badge } from '../../components/Badge'
import { Card } from '../../components/Card'
import type { StatItem } from '../mock-data'

type StatCardProps = {
  stat: StatItem
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <Card className="border-border-default bg-accent-soft">
      <div className="flex items-start justify-between gap-inline-sm">
        <p className="text-mono-label text-label text-text-secondary">{stat.title}</p>
        <Badge variant={stat.trend === 'up' ? 'secondary' : 'outline'}>
          {stat.delta}
        </Badge>
      </div>
      <p className="mt-stack-sm text-heading">{stat.value}</p>
    </Card>
  )
}
