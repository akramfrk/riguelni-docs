"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, CheckCircle, Menu, ChevronRight, ChevronLeft, Clipboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { usePathname } from "next/navigation"

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  // List of paths where the sidebar should be hidden
  const hideSidebarPaths = [
    "/docs/project-management/content/project-planning/google-docs-documentation/project-proposition/page",
    "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1/page",
    "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2/page",
    "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3/page",
    "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4/page",
    "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5/page"
  ]

  // Check if the current path should hide the sidebar
  const shouldHideSidebar = pathname.includes("project-proposition") || 
                           pathname.includes("meeting-report-1") || 
                           pathname.includes("meeting-report-2") || 
                           pathname.includes("meeting-report-3") || 
                           pathname.includes("meeting-report-4") || 
                           pathname.includes("meeting-report-5")

  // Effect to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className={cn(
        "mx-auto flex flex-1 gap-0 md:gap-6 relative",
        shouldHideSidebar ? "w-full" : "max-w-7xl px-2 sm:px-4 pt-12 pb-6"
      )}>
        {/* Mobile Menu Button */}
        {!shouldHideSidebar && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={cn(
              "fixed top-16 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all md:hidden z-30 text-sm text-muted-foreground",
              isSidebarOpen && "opacity-0 pointer-events-none"
            )}
            aria-label="Toggle menu"
          >
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" /> Menu
            </span>
          </button>
        )}

        {/* Mobile sidebar */}
        {!shouldHideSidebar && (
          <div
            className={cn(
              "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200",
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={(e) => {
              // Close sidebar when clicking outside
              if (e.target === e.currentTarget) {
                setIsSidebarOpen(false);
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
                            <Clipboard className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="font-medium">Project Management</div>
                            <div className="text-sm text-muted-foreground">Development workflow & tools</div>
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
                          href="/docs/project-management/content/introduction/overview"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Overview
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="font-medium">Version Control</div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/docs/project-management/content/version-control/git-github-code-hosting"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Git & GitHub for Code Hosting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs/project-management/content/version-control/vs-code-development"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          VS Code for Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs/project-management/content/version-control/feature-branches"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Feature Branches for New Features
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="font-medium">Team Collaboration</div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/docs/project-management/content/team-collaboration/github-code-collaboration"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          GitHub for Code Collaboration
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs/project-management/content/team-collaboration/telegram-communication"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Telegram for Team Communication
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs/project-management/content/team-collaboration/jira-project-management"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Jira for Project Tracking
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="font-medium">Project Planning</div>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/docs/project-management/content/project-planning/google-meet-weekly-meetings"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Google Meet for Weekly Meetings
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs/project-management/content/project-planning/google-docs-documentation"
                          className="text-muted-foreground hover:text-primary"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          Google Docs for Documentation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}

        {/* Left sidebar */}
        {!shouldHideSidebar && (
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
                          <Clipboard className="w-5 h-5" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-medium">Project Management</div>
                          <div className="text-sm text-muted-foreground">Development workflow & tools</div>
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
                        href="/docs/project-management/content/introduction/overview"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Overview
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Version Control</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/project-management/content/version-control/git-github-code-hosting"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Git & GitHub for Code Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/project-management/content/version-control/vs-code-development"
                        className="text-muted-foreground hover:text-primary"
                      >
                        VS Code for Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/project-management/content/version-control/feature-branches"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Feature Branches for New Features
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Team Collaboration</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/project-management/content/team-collaboration/github-code-collaboration"
                        className="text-muted-foreground hover:text-primary"
                      >
                        GitHub for Code Collaboration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/project-management/content/team-collaboration/telegram-communication"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Telegram for Team Communication
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/project-management/content/team-collaboration/jira-project-management"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Jira for Project Tracking
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium">Project Planning</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/docs/project-management/content/project-planning/google-meet-weekly-meetings"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Google Meet for Weekly Meetings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/project-management/content/project-planning/google-docs-documentation"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Google Docs for Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className={cn(
          "flex-1",
          shouldHideSidebar ? "w-full" : ""
        )}>
          {children}
        </main>
      </div>
    </div>
  )
}

