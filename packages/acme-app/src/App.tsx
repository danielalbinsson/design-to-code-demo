import { ThemeProvider } from './providers/ThemeProvider'
import { Dashboard } from './pages/Dashboard'

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}
