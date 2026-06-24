import { createContext, useContext } from 'react'

export type Brand = 'brand-alpha' | 'brand-beta'
export type Mode = 'light' | 'dark'

export type ThemeContextValue = {
  brand: Brand
  mode: Mode
  setBrand: (brand: Brand) => void
  toggleBrand: () => void
  toggleMode: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
