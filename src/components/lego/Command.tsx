"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Command() {
  return (
    <Button
      variant="outline"
      className="relative h-9 w-[250px] justify-start text-sm font-normal bg-background/30 backdrop-blur-md border-border/20 rounded-lg shadow-sm transition-all hover:border-primary/30"
    >
      <Search className="mr-2 h-4 w-4" />
      <span>Search docs...</span>
      <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  )
} 