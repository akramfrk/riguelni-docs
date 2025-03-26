"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          isScrolled && "shadow-sm",
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Riguelni Logo" width={32} height={32} />
              <motion.span whileHover={{ scale: 1.05 }} className="text-xl font-bold">
                Riguelni
              </motion.span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/docs"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
              <Link
                href="/docs/api-reference"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                API
              </Link>
              <Link
                href="https://github.com/1sma31L/Riguelni"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-sm md:hidden"
        >
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/docs"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/docs/api-reference"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                API
              </Link>
              <Link
                href="https://github.com/1sma31L/Riguelni"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <div className="pt-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="search"
                    placeholder="Search documentation..."
                    className="w-full rounded-md border border-input bg-background px-8 py-2 text-sm"
                  />
                </div>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  )
}

