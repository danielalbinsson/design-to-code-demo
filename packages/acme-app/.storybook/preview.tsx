import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Brand theme',
      defaultValue: 'brand-alpha',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'brand-alpha', title: 'Brand Alpha' },
          { value: 'brand-beta', title: 'Brand Beta' },
        ],
        dynamicTitle: true,
      },
    },
    mode: {
      name: 'Mode',
      description: 'Color mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, { globals }) => {
      const brand = globals.brand ?? 'brand-alpha'
      const mode = globals.mode ?? 'light'

      document.documentElement.setAttribute('data-theme', brand)
      if (mode === 'dark') {
        document.documentElement.setAttribute('data-mode', 'dark')
      } else {
        document.documentElement.removeAttribute('data-mode')
      }

      return (
        <div className="bg-bg-page p-stack-lg text-text-primary">
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
    },
  },
}

export default preview
