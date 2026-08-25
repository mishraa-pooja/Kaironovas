'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  const toggle = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title={mounted ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-indigo-300 ${className}`}
    >
      {/* Render both, reveal based on theme to avoid hydration mismatch */}
      <Sun className={`h-[18px] w-[18px] ${mounted && isDark ? 'block' : 'hidden'}`} />
      <Moon className={`h-[18px] w-[18px] ${mounted && isDark ? 'hidden' : 'block'}`} />
    </button>
  )
}
