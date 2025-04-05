"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, ChevronLeft, FileDown, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function MeetingReport3Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [markdownContent, setMarkdownContent] = useState("")
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  // Effect to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isRightSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isRightSidebarOpen]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMarkdownContent(`# Meeting Report 03 
# 06-03-2025

## 1. Attendees

- BOUSSEKINE Mohamed Ismail
- FERKIOUI Akram
- AMEDJKOUH Darine
- HAMMOUTI Walid
- BENTALEB Lisa

## 2. Points of Discussion

### 1. Tasks Completed This Week (First Week of Second Phase)

- Akram (Website):
    - Added Framer Motion to the Landing Page.
    - Styled the Navbar.
    - Styled the Categories Section on the Landing Page.
- Walid (App):
    - Implemented Authentication (Login & SignUp UI and Logic).
    - Developed the layout for user information (both Personal & Technical details).
- Darine (Website):
    - Finished the Landing Page.
    - Completed the Categories page.
    - Developed the User Profile page.
    - Implemented the Gigs page.
- Lisa (App):
    - Created UI designs in Figma for the Home Page, Messages Page, and Profile
Page.
- Ismail (Website):
    - Finalized Authentication steps.
    - Refactored the code following a merging conflict and project breakdown.

### 2. Tasks for Next Week (Second Week of Second Phase)

- Akram (Website):
    - Style the User Page, Categories Page, and Footer.
    - Add further enhancements with Framer Motion.
- Walid (App):
    - Develop the Home Page UI and Logic.
    - Implement the Categories UI and Logic.
- Lisa (App):
    - Design in Figma the UI for the Categories page, Manage Orders, and
Notifications.
- Ismail + Darine (Website – to be distributed between them):
    - Develop the Categories page and services creation.
    - Implement key functionalities including searching, reviewing, order accept/refuse,
and Cart management based on user roles.

## 3. Next Steps

- Continue with the planned tasks for the second week of the second phase.
- Schedule a follow-up discussion to review progress and finalize outstanding
tasks with Lisa.
- Ensure clear distribution of tasks between Ismail and Darine for the complex
website functionalities.


## 4. Conclusion

The meeting was productive, with clear updates on tasks completed during the week and well-defined objectives for the upcoming week. The team is making solid progress and remains on schedule for the next phase of development.`)
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
    <div className="min-h-screen bg-background">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        className={cn(
          "fixed top-16 right-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all lg:hidden z-30 text-sm text-muted-foreground",
          isRightSidebarOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="Toggle menu"
      >
        <span className="flex items-center gap-1">
          <ChevronLeft className="h-3.5 w-3.5" /> More
        </span>
      </button>

      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-200",
          isRightSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={(e) => {
          // Close sidebar when clicking outside
          if (e.target === e.currentTarget) {
            setIsRightSidebarOpen(false);
          }
        }}
      >
        <nav
          className={cn(
            "fixed right-0 w-[85%] max-w-[300px] bg-background/95 border-l border-border/50 px-4 shadow-lg overflow-y-auto",
            "transform transition-transform duration-300 ease-out",
            isRightSidebarOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ top: '3.75rem', height: 'calc(100vh - 3.75rem)' }}
          onClick={(e) => {
            // Prevent closing when clicking inside the sidebar
            e.stopPropagation();
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all text-sm text-muted-foreground"
            aria-label="Close menu"
          >
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </button>
          <div className="space-y-8 pt-4 pb-8">
            {/* Download as PDF */}
            <div className="pt-6">
              <Link
                href="/docs/meeting-report-3.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                onClick={() => setIsRightSidebarOpen(false)}
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
                  { name: "Meeting Report #1", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1" },
                  { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
                  { name: "Meeting Report #4", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4" },
                  { name: "Meeting Report #5", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5" }
                ].map((doc) => (
                  <Link
                    key={doc.name}
                    href={doc.href}
                    className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                    onClick={() => setIsRightSidebarOpen(false)}
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
                onClick={() => setIsRightSidebarOpen(false)}
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
                  href="/docs/meeting-report-3.pdf"
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
                    { name: "Meeting Report #1", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1" },
                    { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
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
    </div>
  )
} 