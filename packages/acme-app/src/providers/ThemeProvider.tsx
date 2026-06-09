import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Brand = 'brand-alpha' | 'brand-beta'
export type Mode = 'light' | 'dark'

type ThemeContextValue = {
  brand: Brand
  mode: Mode
  setBrand: (brand: Brand) => void
  toggleBrand: () => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [brand, setBrand] = useState<Brand>('brand-alpha')
  const [mode, setMode] = useState<Mode>('light')

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', brand)
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-mode', 'dark')
    } else {
      document.documentElement.removeAttribute('data-mode')
    }
  }, [brand, mode])

  const toggleBrand = useCallback(() => {
    setBrand((current) => (current === 'brand-alpha' ? 'brand-beta' : 'brand-alpha'))
  }, [])

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(
    () => ({ brand, mode, setBrand, toggleBrand, toggleMode }),
    [brand, mode, toggleBrand, toggleMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
