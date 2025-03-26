"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeTogglerMobile() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', icon: Sun },
    { value: 'dark', icon: Moon },
    { value: 'system', icon: Monitor }
  ]

  return (
    <div className="flex items-center gap-2">
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-background hover:bg-accent transition-colors ${
            theme === value ? 'bg-accent' : ''
          }`}
        >
          <Icon className="h-4 w-4" />
          <span className="sr-only">Use {value} theme</span>
        </button>
      ))}
    </div>
  )
} 