import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Card title',
    imagePlaceholder: true,
    children: 'Card content uses semantic surface tokens.',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutTitle: Story = {
  args: { title: undefined, imagePlaceholder: true },
}

export const WithoutImage: Story = {
  args: { imagePlaceholder: false },
}
