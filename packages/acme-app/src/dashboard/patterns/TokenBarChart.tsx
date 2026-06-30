import { Card } from '../../components/Card'
import type { ChartBar } from '../mock-data'

type TokenBarChartProps = {
  title: string
  data: ChartBar[]
}

export function TokenBarChart({ title, data }: TokenBarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <Card title={title}>
      <div
        className="flex items-end gap-inline-sm rounded-button border border-border-default bg-bg-page p-inline-sm"
        role="img"
        aria-label={`${title}: 12-week revenue trend`}
      >
        {data.map((bar) => {
          const heightPercent = (bar.value / maxValue) * 100

          return (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-stack-sm">
              <div className="flex h-32 w-full items-end">
                <div
                  className="w-full rounded-button bg-chart-bar transition-colors"
                  style={{ height: `${heightPercent}%` }}
                  title={`${bar.label}: ${bar.value}%`}
                />
              </div>
              <span className="text-mono-label text-badge text-text-secondary">{bar.label}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
