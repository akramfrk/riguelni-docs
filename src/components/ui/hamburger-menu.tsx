"use client"

import { Menu, X } from "lucide-react"
import { Button } from "./button"

interface HumburgerMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function HumburgerMenu({ isOpen, setIsOpen }: HumburgerMenuProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  )
} 