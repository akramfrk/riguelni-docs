"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, MoreHorizontal, FileText, FileSpreadsheet, Presentation, FileBarChart, FileCode, FileCheck } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { CodeBlock } from "@/components/ui/code-block"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

export default function GoogleDocsDocumentationPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [markdownContent, setMarkdownContent] = useState("")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }, 100)
    }
  }

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMarkdownContent(`# Google Docs for Documentation
At RIGELNI, we use Google Docs as our primary platform for creating, sharing, and collaborating on documentation. This approach ensures that all team members have access to the latest information and can contribute to our documentation in real-time.

## Why Google Docs?
### Benefits of Our Approach
Using Google Docs for our documentation offers several advantages:

- Real-time collaboration with multiple team members
- Version history and change tracking
- Easy sharing and access control
- Integration with our Google Workspace ecosystem
- Cross-platform accessibility
- Commenting and feedback features
- Export capabilities to various formats

### Documentation Structure
Our documentation follows a consistent structure:

- Clear titles and headings
- Table of contents for easy navigation
- Consistent formatting and styling
- Regular updates and maintenance
- Accessible to all team members
- Organized by project and category

## Our Documentation Workflow

### Document Creation
When creating new documentation, we follow these steps:

1. **Template Selection**
   - Choose the appropriate template
   - Set up the document structure
   - Add necessary sections and headings

2. **Content Development**
   - Write clear and concise content
   - Include relevant details and examples
   - Add formatting for readability
   - Insert links to related resources

3. **Review and Feedback**
   - Share with team members for review
   - Collect feedback and suggestions
   - Make necessary revisions
   - Finalize the content

### Document Management
We maintain our documentation through:

1. **Organization**
   - Categorize documents by project
   - Use consistent naming conventions
   - Maintain a central repository
   - Regular archiving of outdated content

2. **Access Control**
   - Set appropriate sharing permissions
   - Manage viewer and editor access
   - Protect sensitive information
   - Ensure team-wide availability

3. **Updates and Maintenance**
   - Regular content reviews
   - Scheduled updates
   - Version tracking
   - Change documentation

## Best Practices

### Document Creation
- Use templates for consistency
- Follow a clear structure
- Include a table of contents
- Use headings and subheadings
- Add descriptive titles

### Collaboration
- Assign document owners
- Use comments for feedback
- Enable real-time editing
- Track changes and revisions
- Communicate updates to the team

### Formatting and Style
- Use consistent fonts and sizes
- Apply appropriate spacing
- Include visual elements when helpful
- Use lists and tables for organization
- Maintain a professional appearance

### Content Guidelines
- Write clear and concise content
- Use active voice
- Include examples and explanations
- Keep information up-to-date
- Reference related documents

## Conclusion
Google Docs is an essential tool in our documentation workflow at RIGELNI. It enables effective collaboration, ensures information accessibility, and maintains a consistent documentation standard across our projects. By following our structured approach and best practices, we create documentation that is valuable, accessible, and easy to maintain.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Google Docs for Documentation')) {
        id = 'google-docs-documentation';
      } else {
        id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
      }
      return (
        <h1 id={id} className="scroll-mt-24 mt-0 mb-6">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Why Google Docs')) {
        id = 'why-google-docs';
      } else if (children?.toString().includes('Our Documentation Workflow')) {
        id = 'our-documentation-workflow';
      } else if (children?.toString().includes('Best Practices')) {
        id = 'best-practices';
      } else if (children?.toString().includes('Conclusion')) {
        id = 'conclusion';
      } else {
        id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
      }
      return (
        <h2 id={id} className="scroll-mt-24 mt-8 mb-4">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h3 id={id} className="scroll-mt-24 mt-4 mb-2">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h4 id={id} className="scroll-mt-24 mt-2 mb-1">
          {children}
        </h4>
      );
    },
    p: ({ children }) => {
      return <p className="text-base sm:text-lg">{children}</p>;
    },
  }

  // Animation variants for the feature cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="absolute top-[3.75rem] left-4 md:left-0 right-4 mb-8 overflow-x-auto whitespace-nowrap pb-2 px-4 md:px-0">
        <nav className="block md:pl-[280px] md:pr-[280px]">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
          ) : (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/project-management/content/introduction/overview" className="text-sm">
                        Project Management
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/project-management/content/project-planning/google-meet-weekly-meetings" className="text-sm">
                        Project Planning
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Google Docs for Documentation</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        <main className="flex-1 max-w-full lg:max-w-3xl mx-auto pb-16 pt-16 px-4 md:px-8 lg:px-12">
          <div className="min-h-[200px] prose dark:prose-invert prose-primary max-w-none [&>*:first-child]:!mt-0 prose-headings:!mt-0">
            {isLoading ? (
              <div className="space-y-8">
                {/* Title section */}
                <div className="space-y-6">
                  <Skeleton className="h-12 w-[60%]" /> {/* Title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[90%]" />
                  </div>
                </div>

                {/* Why Google Docs section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[40%]" /> {/* Section title */}
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-[70%]" /> {/* Subsection title */}
                    <div className="space-y-2 pl-4">
                      <Skeleton className="h-5 w-[80%]" />
                      <Skeleton className="h-5 w-[75%]" />
                      <Skeleton className="h-5 w-[85%]" />
                      <Skeleton className="h-5 w-[70%]" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-[60%]" /> {/* Subsection title */}
                    <div className="space-y-2 pl-4">
                      <Skeleton className="h-5 w-[75%]" />
                      <Skeleton className="h-5 w-[80%]" />
                      <Skeleton className="h-5 w-[65%]" />
                    </div>
                  </div>
                </div>

                {/* Our Documentation Workflow section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[50%]" /> {/* Section title */}
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-[45%]" /> {/* Subsection title */}
                    <div className="space-y-3 pl-4">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-[90%]" />
                        <div className="pl-4 space-y-2">
                          <Skeleton className="h-5 w-[70%]" />
                          <Skeleton className="h-5 w-[75%]" />
                          <Skeleton className="h-5 w-[65%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Best Practices section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[45%]" /> {/* Section title */}
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-[40%]" /> {/* Subsection title */}
                    <div className="space-y-2 pl-4">
                      <Skeleton className="h-5 w-[85%]" />
                      <Skeleton className="h-5 w-[80%]" />
                      <Skeleton className="h-5 w-[75%]" />
                    </div>
                  </div>
                </div>

                {/* Documentation Resources section */}
                <div className="mt-16">
                  <Skeleton className="h-8 w-[45%] mb-8" /> {/* Section title */}
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-accent/50" />
                            <Skeleton className="h-5 w-32" />
                          </div>
                          <div className="flex items-center gap-1">
                            <Skeleton className="h-4 w-24" />
                            <div className="h-4 w-4 rounded bg-accent/50" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons skeleton */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                    <div className="h-7 w-7 rounded-full bg-accent/50" />
                    <div className="flex flex-col items-start flex-1 sm:flex-initial">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                    <div className="flex flex-col items-end flex-1 sm:flex-initial">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <div className="h-7 w-7 rounded-full bg-accent/50" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                
                {/* Feature cards section */}
                <div id="our-documentation-resources" className="scroll-mt-24 mt-16">
                  <h2 className="text-2xl font-bold mb-8">Our Documentation Resources</h2>
                  
                  <motion.div 
                    className="flex flex-col gap-4" 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      {
                        title: "Project Proposition",
                        icon: FileCheck,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/project-proposition",
                      },
                      {
                        title: "Meeting Report #1",
                        icon: FileText,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1",
                      },
                      {
                        title: "Meeting Report #2",
                        icon: FileText,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2",
                      },
                      {
                        title: "Meeting Report #3",
                        icon: FileText,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3",
                      },
                      {
                        title: "Meeting Report #4",
                        icon: FileText,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4",
                      },
                      {
                        title: "Meeting Report #5",
                        icon: FileText,
                        href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block no-underline"
                      >
                        <motion.div
                          variants={childVariants}
                          className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-sm">
                                <item.icon className="h-6 w-6" />
                              </div>
                              <h3 className="font-semibold text-foreground">{item.title}</h3>
                            </div>
                            <div className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                              View Document
                              <ChevronRight className="h-4 w-4" />
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                </div>
                
                {/* Next link section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  {isLoading ? (
                    <>
                      <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                        <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                          <div className="h-7 w-7 rounded-full bg-accent/50" />
                          <div className="flex flex-col items-start flex-1 sm:flex-initial">
                            <Skeleton className="h-3 w-16 mb-2" />
                            <Skeleton className="h-4 w-48" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                        <div className="flex flex-col items-end flex-1 sm:flex-initial">
                          <Skeleton className="h-3 w-16 mb-2" />
                          <Skeleton className="h-4 w-48" />
                        </div>
                        <div className="h-7 w-7 rounded-full bg-accent/50" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/docs/project-management/content/project-planning/google-meet-weekly-meetings"
                        className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                      >
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300 rotate-180" />
                        </div>
                        <div className="flex flex-col items-start relative z-10 flex-1 sm:flex-initial">
                          <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                            Previous
                          </span>
                          <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                            Google Meet for Weekly Meetings
                          </span>
                        </div>
                        <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                      <Link
                        href="/docs/project-management/content/project-planning/excalidraw-explaining"
                        className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                      >
                        <div className="flex flex-col items-end relative z-10 flex-1 sm:flex-initial">
                          <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                            Next
                          </span>
                          <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                            Excalidraw for Explaining
                          </span>
                        </div>
                        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </main>

        {/* Right sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <div className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <ul className="space-y-2 text-sm">
                {isLoading ? (
                  <>
                    <li><Skeleton className="h-4 w-48" /></li>
                    <li><Skeleton className="h-4 w-40" /></li>
                    <li><Skeleton className="h-4 w-56" /></li>
                    <li><Skeleton className="h-4 w-44" /></li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link 
                        href="#google-docs-documentation" 
                        onClick={(e) => handleScroll(e, 'google-docs-documentation')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Google Docs for Documentation
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-google-docs" 
                        onClick={(e) => handleScroll(e, 'why-google-docs')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Google Docs?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-documentation-workflow"
                        onClick={(e) => handleScroll(e, 'our-documentation-workflow')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our Documentation Workflow
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#best-practices" 
                        onClick={(e) => handleScroll(e, 'best-practices')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Best Practices
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#conclusion" 
                        onClick={(e) => handleScroll(e, 'conclusion')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Conclusion
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#our-documentation-resources" 
                        onClick={(e) => handleScroll(e, 'our-documentation-resources')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our Documentation Resources
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 