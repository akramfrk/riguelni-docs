"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Book,
  Code2,
  Database,
  FileCode2,
  Github,
  Home,
  Laptop2,
  Search,
  Users,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"

export function Command() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-[250px] justify-start text-sm font-normal bg-background/30 backdrop-blur-md border-border/20 rounded-lg shadow-sm transition-all hover:border-primary/30"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search docs...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Search documentation</DialogTitle>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => {
              router.push("/")
              setOpen(false)
            }}>
              <Home className="mr-2 h-4 w-4 text-primary/70" />
              Home
            </CommandItem>
            <CommandItem onSelect={() => {
              router.push("/docs")
              setOpen(false)
            }}>
              <Book className="mr-2 h-4 w-4 text-primary/70" />
              Documentation
            </CommandItem>
            <CommandItem onSelect={() => {
              router.push("/community")
              setOpen(false)
            }}>
              <Users className="mr-2 h-4 w-4 text-primary/70" />
              Community
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Documentation">
            <CommandItem onSelect={() => {
              router.push("/docs/frontend")
              setOpen(false)
            }}>
              <Code2 className="mr-2 h-4 w-4 text-primary/70" />
              Frontend
              <CommandShortcut>Next.js</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              router.push("/docs/database")
              setOpen(false)
            }}>
              <Database className="mr-2 h-4 w-4 text-primary/70" />
              Database
              <CommandShortcut>PostgreSQL</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              router.push("/docs/apis")
              setOpen(false)
            }}>
              <FileCode2 className="mr-2 h-4 w-4 text-primary/70" />
              APIs
              <CommandShortcut>REST & GraphQL</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => {
              router.push("/docs/mobile")
              setOpen(false)
            }}>
              <Laptop2 className="mr-2 h-4 w-4 text-primary/70" />
              Mobile App
              <CommandShortcut>React Native</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            <CommandItem
              onSelect={() => {
                window.open("https://github.com/riguelni", "_blank")
                setOpen(false)
              }}
            >
              <Github className="mr-2 h-4 w-4 text-primary/70" />
              GitHub
              <CommandShortcut>github.com</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
} 