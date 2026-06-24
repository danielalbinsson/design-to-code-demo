import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Role',
    options: [
      { value: 'admin', label: 'Admin' },
      { value: 'editor', label: 'Editor' },
      { value: 'viewer', label: 'Viewer' },
    ],
    placeholder: 'Select a role…',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: 'editor',
  },
}

export const WithError: Story = {
  args: {
    error: 'Please select a role',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
