"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, ChevronLeft, FileDown, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ProjectPropositionPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [markdownContent, setMarkdownContent] = useState("")
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMarkdownContent(`# Meeting Report 01 
# 15-02-2025

## 1. Attendees


- BOUSSEKINE Mohamed Ismail
- FERKIOUI Akram
- AMEDJKOUH Darine
- HAMMOUTI Walid
- BENTALEB Lisa

## 2. Points of Discussion

### 1. Confirmation of Our Idea

- The team reaffirmed the decision to develop RIGELNI , a freelance platform that allows
users to buy and sell services.
- Discussed key differentiators from competitors and how to improve user experience.

### 2. Task Assignments

- Ismail: Project management & backend logic.
- Akram: Website styling & project documentation.
- Walid: Mobile app development.
- Darine: Frontend development & logic.
- Lisa: UI/UX design & styling.

### 3. Objectives

- Ensure a secure and efficient freelance platform.
- Implement a dual role system , where users can switch between being buyers and
sellers.
- Provide a seamless user experience with an intuitive UI and strong backend
performance.
- Establish a robust communication system via real-time chat.
- Develop a secure payment system with escrow protection.

### 4. Planning

- Reviewed the timeline (15-02-2025 to 15-04-2025) and finalized the three major
phases:
    - Phase 1: Planning & Design (Week 1-2) – Wireframing, UI/UX design,
database structure.
    - Phase 2: Development (Week 3-6) – Frontend, backend, API integration.
    - Phase 3: Testing & Deployment (Week 7-8) – Debugging, optimizations,
deployment.
- Defined key milestones to track progress.

### 5. Choosing JIRA as Our Project Management Software

- Decided to use JIRA for task tracking and team collaboration.
- Set up project boards for organizing development sprints.
- Assigned initial tasks to each team member.

## 3. Next Steps

- Finalize wireframes in Figma.
- Set up the Supabase database.
- Begin backend API development.
- Conduct a follow-up meeting in one week to review progress.

## 4. Conclusion

The meeting successfully confirmed our project scope, assigned responsibilities, outlined
objectives, and established our project management strategy using JIRA. The next phase of
development will focus on design finalization and backend setup.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      return (
        <h1 className="mb-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 className="mt-12 mb-6">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="mt-8 mb-4">
          {children}
        </h3>
      );
    },
    p: ({ children }) => {
      return <p className="mb-4 text-lg">{children}</p>;
    },
    span: ({ className, children }) => {
      return <span className={className}>{children}</span>;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Mobile More Button */}
      <button
        onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        className={cn(
          "fixed top-16 right-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all lg:hidden z-30 text-sm text-muted-foreground",
          isRightSidebarOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="Toggle more options"
      >
        <span className="flex items-center gap-1">
          More <ChevronLeft className="h-3.5 w-3.5" />
        </span>
      </button>

      {/* Mobile right sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-200",
          isRightSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <nav
          className={cn(
            "fixed right-0 w-[85%] max-w-[300px] bg-background/95 border-l border-border/50 px-4 shadow-lg overflow-y-auto",
            "transform transition-transform duration-300 ease-out",
            isRightSidebarOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ top: '3.75rem', height: 'calc(100vh - 3.75rem)' }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all text-sm text-muted-foreground"
            aria-label="Close more options"
          >
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </button>

          <div className="space-y-8 pt-4 pb-8">
            {/* Download as PDF */}
            <div className="pt-6">
              <Link
                href="/docs/project-proposition.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <FileDown className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Download as PDF</span>
              </Link>
            </div>

            {/* Other Documents */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground/90 px-1">Other Documents</h4>
              <div className="space-y-2.5">
                {[
                  { name: "Project Proposition", href: "/docs/project-management/content/project-planning/google-docs-documentation/project-proposition" },
                  { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
                  { name: "Meeting Report #3", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3" },
                  { name: "Meeting Report #4", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4" },
                  { name: "Meeting Report #5", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5" }
                ].map((doc) => (
                  <Link
                    key={doc.name}
                    href={doc.href}
                    className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{doc.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Documentation */}
            <div className="pt-2">
              <Link
                href="/docs/project-management/content/project-planning/google-docs-documentation"
                className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
              >
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                </div>
                <div className="flex flex-col items-start relative z-10">
                  <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                    Back to Documentation
                  </span>
                </div>
                <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="py-12 flex-1">
          <article className="prose prose-lg dark:prose-invert prose-primary">
            {isLoading ? (
              <div className="space-y-8">
                <Skeleton className="h-12 w-[60%]" />
                <div className="space-y-4">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-[90%]" />
                  <Skeleton className="h-5 w-[85%]" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-8 w-[40%]" />
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-[95%]" />
                    <Skeleton className="h-5 w-[85%]" />
                  </div>
                </div>
              </div>
            ) : (
              <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
            )}
          </article>
        </div>

        {/* Right sidebar */}
        <div className="hidden lg:block w-72 shrink-0 border-l border-border/40 pl-8">
          <div className="sticky top-[6rem] h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="space-y-10 pb-8 pr-4">
              {/* Download as PDF */}
              <div className="pt-2">
                <Link
                  href="/docs/meeting-report-1.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <FileDown className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Download as PDF</span>
                </Link>
              </div>

              {/* Other Documents */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-foreground/90 px-1">Other Documents</h4>
                <div className="space-y-2.5">
                  {[
                    { name: "Project Proposition", href: "/docs/project-management/content/project-planning/google-docs-documentation/project-proposition" },
                    { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
                    { name: "Meeting Report #3", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3" },
                    { name: "Meeting Report #4", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4" },
                    { name: "Meeting Report #5", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5" }
                  ].map((doc) => (
                    <Link
                      key={doc.name}
                      href={doc.href}
                      className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{doc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to Documentation */}
              <div className="pt-2">
                <Link
                  href="/docs/project-management/content/project-planning/google-docs-documentation"
                  className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                >
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                      Previous
                    </span>
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                      Back to Documentation
                    </span>
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 