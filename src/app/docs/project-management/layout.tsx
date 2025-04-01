import Link from "next/link"
import { BookOpen, CheckCircle } from "lucide-react"

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex max-w-7xl flex-1 gap-0 md:gap-6 px-4 pt-12 pb-6 relative">
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
                    <Link href="/docs/project-management/content/introduction/overview" className="text-muted-foreground hover:text-primary">
                      Overview
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Version Control</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/project-management/content/version-control/git-github-code-hosting" className="text-muted-foreground hover:text-primary">
                      Git & GitHub for Code Hosting
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/version-control/vs-code-development" className="text-muted-foreground hover:text-primary">
                      VS Code for Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/version-control/feature-branches" className="text-muted-foreground hover:text-primary">
                      Feature Branches for New Features
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Team Collaboration</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/project-management/content/team-collaboration/github-code-collaboration" className="text-muted-foreground hover:text-primary">
                      GitHub for Code Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/team-collaboration/telegram-team-communication" className="text-muted-foreground hover:text-primary">
                      Telegram for Team Communication
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/team-collaboration/jira-project-tracking" className="text-muted-foreground hover:text-primary">
                      Jira for Project Tracking
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Project Planning</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/docs/project-management/content/project-planning/google-meet-weekly-meetings" className="text-muted-foreground hover:text-primary">
                      Google Meet for Weekly Meetings
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/project-planning/google-docs-documentation" className="text-muted-foreground hover:text-primary">
                      Google Docs for Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/project-management/content/project-planning/excalidraw-explaining" className="text-muted-foreground hover:text-primary">
                      Excalidraw for Explaining
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 max-w-3xl mx-auto prose prose-slate dark:prose-invert [&_h1]:scroll-mt-[50vh] [&_h2]:scroll-mt-[50vh] [&_h3]:scroll-mt-[50vh] pb-16">
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
                  <Link href="#key-components-of-our-project-management" className="text-muted-foreground hover:text-primary">
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