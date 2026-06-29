export type DashboardView = 'overview' | 'accounts' | 'settings'

export type StatItem = {
  title: string
  value: string
  delta: string
  trend: 'up' | 'down'
}

export type ChartBar = {
  label: string
  value: number
}

export type ActivityItem = {
  id: string
  message: string
  time: string
  type: 'success' | 'info' | 'error'
}

export type AccountStatus = 'Active' | 'Pending' | 'Error'

export type Account = {
  id: string
  name: string
  plan: string
  status: AccountStatus
  owner: string
  updated: string
}

export const navItems: { id: DashboardView; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'accounts', label: 'Accounts' },
  { id: 'settings', label: 'Settings' },
]

export const viewTitles: Record<DashboardView, string> = {
  overview: 'Overview',
  accounts: 'Accounts',
  settings: 'Settings',
}

export const stats: StatItem[] = [
  { title: 'Total Users', value: '12,480', delta: '+8.2%', trend: 'up' },
  { title: 'MRR', value: '$84,200', delta: '+12.4%', trend: 'up' },
  { title: 'Active Sessions', value: '1,024', delta: '-1.4%', trend: 'down' },
  { title: 'Conversion', value: '3.8%', delta: '+0.6%', trend: 'up' },
]

export const chartData: ChartBar[] = [
  { label: 'W1', value: 62 },
  { label: 'W2', value: 58 },
  { label: 'W3', value: 71 },
  { label: 'W4', value: 65 },
  { label: 'W5', value: 78 },
  { label: 'W6', value: 82 },
  { label: 'W7', value: 74 },
  { label: 'W8', value: 88 },
  { label: 'W9', value: 91 },
  { label: 'W10', value: 85 },
  { label: 'W11', value: 94 },
  { label: 'W12', value: 100 },
]

export const activityItems: ActivityItem[] = [
  { id: '1', message: 'Northwind Labs account created', time: '2 min ago', type: 'success' },
  { id: '2', message: 'Monthly report exported to CSV', time: '18 min ago', type: 'info' },
  { id: '3', message: 'Payment failed for Orbit Systems', time: '1 hr ago', type: 'error' },
  { id: '4', message: 'Summit Analytics upgraded to Pro', time: '3 hr ago', type: 'success' },
  { id: '5', message: 'New teammate invited to workspace', time: '5 hr ago', type: 'info' },
  { id: '6', message: 'Vertex Health marked as pending', time: 'Yesterday', type: 'info' },
  { id: '7', message: 'API rate limit warning triggered', time: 'Yesterday', type: 'error' },
  { id: '8', message: 'Blue Harbor Co. onboarding completed', time: '2 days ago', type: 'success' },
]

export const accounts: Account[] = [
  { id: '1', name: 'Northwind Labs', plan: 'Pro', status: 'Active', owner: 'Alex Chen', updated: 'Jun 2, 2026' },
  { id: '2', name: 'Blue Harbor Co.', plan: 'Starter', status: 'Pending', owner: 'Morgan Lee', updated: 'Jun 4, 2026' },
  { id: '3', name: 'Summit Analytics', plan: 'Enterprise', status: 'Active', owner: 'Jordan Park', updated: 'Jun 5, 2026' },
  { id: '4', name: 'Orbit Systems', plan: 'Pro', status: 'Error', owner: 'Sam Rivera', updated: 'Jun 7, 2026' },
  { id: '5', name: 'Vertex Health', plan: 'Starter', status: 'Pending', owner: 'Casey Kim', updated: 'Jun 8, 2026' },
  { id: '6', name: 'Lumen Digital', plan: 'Pro', status: 'Active', owner: 'Taylor Brooks', updated: 'Jun 9, 2026' },
  { id: '7', name: 'Cascade Media', plan: 'Enterprise', status: 'Active', owner: 'Riley Nguyen', updated: 'Jun 10, 2026' },
  { id: '8', name: 'Pioneer Works', plan: 'Starter', status: 'Active', owner: 'Drew Patel', updated: 'Jun 11, 2026' },
  { id: '9', name: 'Atlas Robotics', plan: 'Pro', status: 'Pending', owner: 'Jamie Ortiz', updated: 'Jun 12, 2026' },
  { id: '10', name: 'Harbor Freight AI', plan: 'Enterprise', status: 'Active', owner: 'Quinn Walsh', updated: 'Jun 13, 2026' },
  { id: '11', name: 'Nova Biotech', plan: 'Pro', status: 'Error', owner: 'Avery Stone', updated: 'Jun 14, 2026' },
  { id: '12', name: 'Clearpath Logistics', plan: 'Starter', status: 'Active', owner: 'Blake Harper', updated: 'Jun 15, 2026' },
  { id: '13', name: 'Ember Studio', plan: 'Pro', status: 'Active', owner: 'Finley Cross', updated: 'Jun 16, 2026' },
  { id: '14', name: 'Redwood Partners', plan: 'Enterprise', status: 'Pending', owner: 'Sage Monroe', updated: 'Jun 17, 2026' },
  { id: '15', name: 'Helix Networks', plan: 'Starter', status: 'Active', owner: 'Rowan Ellis', updated: 'Jun 18, 2026' },
]

export const planOptions = [
  { value: 'starter', label: 'Starter' },
  { value: 'pro', label: 'Pro' },
  { value: 'enterprise', label: 'Enterprise' },
]

export const roleOptions = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
]

export const timezoneOptions = [
  { value: 'utc', label: 'UTC (GMT+0)' },
  { value: 'est', label: 'Eastern (GMT-5)' },
  { value: 'pst', label: 'Pacific (GMT-8)' },
  { value: 'cet', label: 'Central Europe (GMT+1)' },
]

export const statusFilterOptions = [
  { value: 'all', label: 'All statuses' },
  { value: 'Active', label: 'Active' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Error', label: 'Error' },
]
