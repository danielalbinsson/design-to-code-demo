import type { Meta, StoryObj } from '@storybook/react-vite'
import { DemoControls } from '../dashboard/DemoControls'
import { Dashboard } from '../pages/Dashboard'
import { ThemeProvider } from '../providers/ThemeProvider'

const meta = {
  title: 'Dashboard/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <DemoControls />
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
