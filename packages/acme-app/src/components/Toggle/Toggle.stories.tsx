import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from './Toggle'
import { useState } from 'react'

function StatefulToggle(props: { checked?: boolean; label?: string; ariaLabel?: string; disabled?: boolean }) {
  const [checked, setChecked] = useState(props.checked ?? false)
  return (
    <Toggle
      checked={checked}
      onChange={setChecked}
      label={props.label}
      ariaLabel={props.ariaLabel}
      disabled={props.disabled}
    />
  )
}

const meta = {
  title: 'Components/Toggle',
  component: StatefulToggle,
  tags: ['autodocs'],
} satisfies Meta<typeof StatefulToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {
  args: { label: 'Notifications' },
}

export const On: Story = {
  args: { checked: true, label: 'Notifications' },
}

export const Disabled: Story = {
  args: { disabled: true, label: 'Notifications' },
}

export const DisabledOn: Story = {
  args: { checked: true, disabled: true, label: 'Notifications' },
}

export const WithoutLabel: Story = {
  args: { ariaLabel: 'Notifications' },
}
