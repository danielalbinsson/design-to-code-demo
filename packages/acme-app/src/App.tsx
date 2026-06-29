import { DemoControls } from './dashboard/DemoControls'
import { Dashboard } from './pages/Dashboard'
import { ThemeProvider } from './providers/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <DemoControls />
        <Dashboard />
      </div>
    </ThemeProvider>
  )
}
