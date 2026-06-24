import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'
import { Button } from '../Button/Button'
import { useState } from 'react'

type Props = { title?: string; children?: string; showFooter?: boolean }

const meta = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  render: function Render(args: Props) {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title={args.title}>
          {args.children ?? 'Modal body content goes here.'}
          {args.showFooter ? (
            <div className="flex items-center justify-end gap-inline-sm pt-stack-md">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </div>
          ) : null}
        </Modal>
      </>
    )
  },
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  args: { title: 'Modal title', children: 'This is a basic modal with just a title and body.' },
}

export const WithFooter: Story = {
  args: {
    title: 'Confirm action',
    children: 'Are you sure you want to proceed with this action?',
    showFooter: true,
  },
}

export const WithoutTitle: Story = {
  args: { children: 'A modal without a title bar — just the overlay and body content.' },
}
