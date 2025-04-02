"use client"

import React, { useState } from "react"
import Link from "next/link"
import { BookOpen, CheckCircle, Menu, ChevronRight, ChevronLeft } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex max-w-7xl flex-1 gap-0 md:gap-6 px-2 sm:px-4 pt-12 pb-6 relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={cn(
            "absolute top-2 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all md:hidden z-30 text-sm text-muted-foreground",
            isSidebarOpen && "opacity-0 pointer-events-none"
          )}
          aria-label="Toggle menu"
        >
          <span className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" /> Menu
          </span>
        </button>

        {/* Breadcrumb */}
        <div className="absolute top-13 left-4 md:left-0 right-4 mb-8 overflow-x-auto whitespace-nowrap pb-2 px-4 md:px-0">
          <nav className="block md:pl-[280px] md:pr-[280px]">
            <Breadcrumb>
              <BreadcrumbList className="flex-wrap">
                <BreadcrumbItem className="text-xs md:text-base">
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-xs md:text-base" />
                <BreadcrumbItem className="text-xs md:text-base">
                  <BreadcrumbLink href="/docs/project-management">Project Management</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-xs md:text-base" />
                <BreadcrumbItem className="text-xs md:text-base">
                  <BreadcrumbLink href="/docs/project-management/content/introduction/overview">Introduction</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-xs md:text-base" />
                <BreadcrumbItem className="text-xs md:text-base">
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>

        {/* Mobile sidebar */}
        <div
          className={cn(
            "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-200",
            isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <nav
            className={cn(
              "fixed left-0 w-[85%] max-w-[300px] bg-background/95 border-r border-border/50 px-4 shadow-lg overflow-y-auto",
              "transform transition-transform duration-300 ease-out",
              isSidebarOpen ? "translate-x-0" : "-translate-x-full",
            )}
            style={{ top: '4rem', height: 'calc(100vh - 4rem)' }}
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
            <div className="space-y-6 pt-4 pb-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Project Management</div>
                    <div className="text-sm text-muted-foreground">Development workflow & tools</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Current Version</div>
                    <div className="text-sm text-muted-foreground">v1.0.0</div>
                  </div>
                </div>
              </div>
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
                      href="/docs/project-management/content/team-collaboration/telegram-team-communication"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Telegram for Team Communication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/project-management/content/team-collaboration/jira-project-tracking"
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
                  <li>
                    <Link
                      href="/docs/project-management/content/project-planning/excalidraw-explaining"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Excalidraw for Explaining
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Left sidebar */}
        <div className="hidden md:block w-64 shrink-0 border-r border-border/50 pr-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto pr-6">
            <div className="space-y-6 pb-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Project Management</div>
                    <div className="text-sm text-muted-foreground">Development workflow & tools</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Current Version</div>
                    <div className="text-sm text-muted-foreground">v1.0.0</div>
                  </div>
                </div>
              </div>
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
                      href="/docs/project-management/content/team-collaboration/telegram-team-communication"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Telegram for Team Communication
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs/project-management/content/team-collaboration/jira-project-tracking"
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
                  <li>
                    <Link
                      href="/docs/project-management/content/project-planning/excalidraw-explaining"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Excalidraw for Explaining
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 max-w-3xl mx-auto prose prose-slate dark:prose-invert [&_h1]:scroll-mt-[50vh] [&_h2]:scroll-mt-[50vh] [&_h3]:scroll-mt-[50vh] pb-16 pt-16 md:pt-0 px-4 md:px-0">
          {children}
        </main>

        {/* Right sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <div className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#overview-of-our-approach" className="text-muted-foreground hover:text-primary">
                    Overview of Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="#core-objectives" className="text-muted-foreground hover:text-primary">
                    Core Objectives
                  </Link>
                </li>
                <li>
                  <Link
                    href="#key-components-of-our-project-management"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Key Components of Our Project Management
                  </Link>
                </li>
                <li>
                  <Link href="#why-project-management-matters" className="text-muted-foreground hover:text-primary">
                    Why Project Management Matters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

