"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Code2, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { usePathname } from "next/navigation"

export default function FrontEndLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // Effect to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isSidebarOpen])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex flex-1 gap-0 md:gap-6 relative max-w-7xl px-2 sm:px-4 pt-12 pb-6">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={cn(
            "fixed top-16 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all md:hidden z-30 text-sm text-muted-foreground",
            isSidebarOpen && "opacity-0 pointer-events-none",
          )}
          aria-label="Toggle menu"
        >
          <span className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" /> Menu
          </span>
        </button>

        {/* Mobile sidebar */}
        <div
          className={cn(
            "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200",
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsSidebarOpen(false)
            }
          }}
        >
          <nav
            className={cn(
              "fixed left-0 w-[85%] max-w-[300px] bg-background/95 border-r border-border/50 px-4 shadow-lg overflow-y-auto sidebar-scrollbar",
              "transform transition-transform duration-300 ease-out",
              isSidebarOpen ? "translate-x-0" : "-translate-x-full",
            )}
            style={{ top: "3.75rem", height: "calc(100vh - 3.75rem)" }}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-2 right-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all text-sm text-muted-foreground"
              aria-label="Close menu"
            >
              <span className="flex items-center gap-1">
                <ChevronLeft className="h-3.5 w-3.5" />
              </span>
            </button>
            <div className="flex flex-col h-full pt-4 pb-8">
              <div className="flex-shrink-0">
                {isLoading ? (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-48" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Skeleton className="h-10 w-10 rounded-lg" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-28" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-medium">Front-end Development</div>
                          <div className="text-sm text-muted-foreground">Modern web interfaces</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-medium">Current Version</div>
                          <div className="text-sm text-muted-foreground">v1.0.0</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="h-px w-full bg-border/50 my-4"></div>
              <div className="overflow-y-auto sidebar-scrollbar flex-grow space-y-6 pb-16">
                <div className="space-y-3">
                  <div className="font-medium">Introduction</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/introduction/overview"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/introduction/core-stack"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Core Stack
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Key Features</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/content/key-features/app-router"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Modern App Router
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/key-features/type-safe-development"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Type-Safe Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/key-features/responsive"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Responsive Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/key-features/real-time"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Real-time Capabilities
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Component Architecture</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/content/components-architecture/ui-components"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        UI Components
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/components-architecture/forms"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Form Components
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/components-architecture/dashboard"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Dashboard Components
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/content/components-architecture/sections"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Section Components
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Main Sections</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/sections/authentication"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Authentication System
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/dashboard"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Dashboard Interface
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/chat"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Real-time Chat
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/payment"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Payment Processing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/user-management"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        User Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/gig-management"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Gig Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/sections/analytics"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Development Tools</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/tools/eslint"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        ESLint
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/tools/typescript"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        TypeScript
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/tools/tailwind"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Tailwind CSS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/tools/radix"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Radix UI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/tools/framer"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Framer Motion
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/tools/sonner"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Sonner
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Deployment</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/front-end/deployment/vercel"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Vercel Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/deployment/environment"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Environment Configuration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/front-end/deployment/cicd"
                        className="text-muted-foreground hover:text-primary"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        CI/CD Pipeline
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Left sidebar */}
        <div className="hidden md:block w-64 shrink-0 border-r border-border/50 pr-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] flex flex-col pr-6">
            <div className="flex-shrink-0">
              {isLoading ? (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-48" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-lg" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-medium">Front-end Development</div>
                        <div className="text-sm text-muted-foreground">Modern web interfaces</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-medium">Current Version</div>
                        <div className="text-sm text-muted-foreground">v1.0.0</div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="h-px w-full bg-border/50 my-4"></div>
            <div className="overflow-y-auto sidebar-scrollbar flex-grow space-y-6 pb-16">
              <div className="space-y-3">
                <div className="font-medium">Introduction</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/docs/front-end/content/introduction/overview"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/content/introduction/core-stack"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Core Stack
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Key Features</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/docs/front-end/content/key-features/app-router"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Modern App Router
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/content/key-features/type-safe-development"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Type-Safe Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/content/key-features/responsive"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Responsive Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/content/key-features/real-time-capabilities"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Real-time Capabilities
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Component Architecture</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/front-end/content/component-architecture/ui-components/ui-components" className="text-muted-foreground hover:text-primary">
                      UI Components
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/components/forms" className="text-muted-foreground hover:text-primary">
                      Form Components
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/components/dashboard"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Dashboard Components
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/components/sections"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Section Components
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Main Sections</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/docs/front-end/sections/authentication"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Authentication System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/sections/dashboard"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Dashboard Interface
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/sections/chat" className="text-muted-foreground hover:text-primary">
                      Real-time Chat
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/sections/payment" className="text-muted-foreground hover:text-primary">
                      Payment Processing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/sections/user-management"
                      className="text-muted-foreground hover:text-primary"
                    >
                      User Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/sections/gig-management"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Gig Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/sections/analytics"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Analytics
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Development Tools</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/front-end/tools/eslint" className="text-muted-foreground hover:text-primary">
                      ESLint
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/tools/typescript" className="text-muted-foreground hover:text-primary">
                      TypeScript
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/tools/tailwind" className="text-muted-foreground hover:text-primary">
                      Tailwind CSS
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/tools/radix" className="text-muted-foreground hover:text-primary">
                      Radix UI
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/tools/framer" className="text-muted-foreground hover:text-primary">
                      Framer Motion
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/tools/sonner" className="text-muted-foreground hover:text-primary">
                      Sonner
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Deployment</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/front-end/deployment/vercel" className="text-muted-foreground hover:text-primary">
                      Vercel Hosting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/front-end/deployment/environment"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Environment Configuration
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/front-end/deployment/cicd" className="text-muted-foreground hover:text-primary">
                      CI/CD Pipeline
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}