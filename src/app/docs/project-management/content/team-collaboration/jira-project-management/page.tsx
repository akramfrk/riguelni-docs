"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import CodeBlock from "@/components/ui/code-block"
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
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

export default function JiraProjectManagementPage() {
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
      setMarkdownContent(`# Jira for Project Tracking
At RIGELNI, we use Jira as our primary project management tool. It helps us track tasks, manage sprints, and maintain transparency across our development process.

## Why Jira?
### Benefits of Our Approach
Using Jira for project management offers several advantages for our workflow:

- Centralized task tracking
- Sprint planning and management
- Team collaboration
- Progress visualization
- Custom workflows
- Integration with other tools
- Reporting and analytics

### Project Organization
We organize our Jira projects with a clear structure:

- One project per major feature or component
- Consistent issue types (Story, Task, Bug)
- Standardized labels and components
- Clear priority levels
- Defined workflows

## Our Jira Workflow

### Project Setup
[IMAGE_PLACEHOLDER_1]

### Sprint Planning
[IMAGE_PLACEHOLDER_2]

### Task Management
[IMAGE_PLACEHOLDER_3]

### Progress Tracking
[IMAGE_PLACEHOLDER_4]

### Reporting
[IMAGE_PLACEHOLDER_5]

### Using Jira with VS Code
Here's how we typically work with Jira using VS Code:

1. **Task Creation**
   - Create tasks in Jira
   - Link tasks to GitHub issues
   - Assign tasks to team members
   - Set due dates and priorities

2. **Sprint Management**
   - Plan sprints in Jira
   - Move tasks between sprints
   - Track sprint progress
   - Update task status

3. **Progress Updates**
   - Update task status in Jira
   - Add comments and attachments
   - Link commits to tasks
   - Track time spent

4. **Reporting**
   - Generate sprint reports
   - Track team velocity
   - Monitor burndown charts
   - Analyze team performance

## Best Practices

### Task Management
- Create detailed task descriptions
- Use consistent task templates
- Set realistic estimates
- Update task status regularly
- Link related tasks

### Sprint Planning
- Plan sprints in advance
- Set achievable goals
- Include buffer time
- Review previous sprints
- Adjust based on velocity

### Team Collaboration
- Regular status updates
- Clear communication
- Document decisions
- Share knowledge
- Support team members

### Integration Practices
- Link Jira with GitHub
- Connect with communication tools
- Use automation rules
- Maintain consistent workflows
- Regular tool synchronization

## Conclusion
Jira is an essential tool in our project management workflow at RIGELNI. It enables efficient task tracking, sprint management, and team collaboration. By following our Jira workflow and best practices, we ensure smooth project execution and successful delivery.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Jira for Project Tracking')) {
        id = 'jira-project-tracking';
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
      if (children?.toString().includes('Why Jira')) {
        id = 'why-jira';
      } else if (children?.toString().includes('Our Jira Workflow')) {
        id = 'our-jira-workflow';
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
      // Check if this paragraph contains an image placeholder
      const text = children?.toString() || '';
      if (text.includes('[IMAGE_PLACEHOLDER_1]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Jira/project-setup.png"
                      alt="Project Setup"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 1</span>
                      <span className="text-muted-foreground"> — Setting up a Jira Project</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Project Setup</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Jira/project-setup.png"
                    alt="Project Setup"
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </figure>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_2]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Jira/sprint-planning.png"
                      alt="Sprint Planning"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 2</span>
                      <span className="text-muted-foreground"> — Sprint Planning Process</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Sprint Planning</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Jira/sprint-planning.png"
                    alt="Sprint Planning"
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </figure>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_3]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Jira/task-management.png"
                      alt="Task Management"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 3</span>
                      <span className="text-muted-foreground"> — Task Management Workflow</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Task Management</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Jira/task-management.png"
                    alt="Task Management"
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </figure>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_4]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Jira/progress-tracking.png"
                      alt="Progress Tracking"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 4</span>
                      <span className="text-muted-foreground"> — Progress Tracking Dashboard</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Progress Tracking</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Jira/progress-tracking.png"
                    alt="Progress Tracking"
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </figure>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_5]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Jira/reporting.png"
                      alt="Reporting"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 5</span>
                      <span className="text-muted-foreground"> — Project Reporting Dashboard</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Reporting</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Jira/reporting.png"
                    alt="Reporting"
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </figure>
        );
      }
      return <p className="text-base sm:text-lg">{children}</p>;
    },
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
                      <BreadcrumbLink href="/docs/project-management/content/team-collaboration/github-code-collaboration" className="text-sm">
                        Team Collaboration
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Jira for Project Tracking</BreadcrumbPage>
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

                {/* Why Jira section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[70%]" /> {/* Section title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[95%]" />
                    <Skeleton className="h-5 w-[85%]" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-[40%]" />
                    <Skeleton className="h-5 w-[45%]" />
                    <Skeleton className="h-5 w-[35%]" />
                  </div>
                </div>

                {/* Our Workflow section */}
                <div className="space-y-6">
                  <Skeleton className="h-7 w-[50%]" /> {/* Subsection title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-[92%]" />
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-[35%]" />
                      <Skeleton className="h-5 w-[40%]" />
                      <Skeleton className="h-5 w-[38%]" />
                    </div>
                  </div>
                </div>

                {/* Additional sections */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[45%]" />
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[88%]" />
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-[42%]" />
                      <Skeleton className="h-5 w-[38%]" />
                      <Skeleton className="h-5 w-[45%]" />
                    </div>
                  </div>
                </div>

                {/* Navigation buttons skeleton */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                    <div className="flex flex-col items-start flex-1 sm:flex-initial">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                  <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                    <div className="flex flex-col items-end flex-1 sm:flex-initial">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                {/* Next link section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  {isLoading ? (
                    <>
                      <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                        <div className="flex flex-col items-start flex-1 sm:flex-initial">
                          <Skeleton className="h-3 w-16 mb-2" />
                          <Skeleton className="h-4 w-48" />
                        </div>
                        <Skeleton className="h-7 w-7 rounded-full" />
                      </div>
                      <div className="flex items-center gap-4 px-5 py-3 w-full sm:w-auto">
                        <div className="flex flex-col items-end flex-1 sm:flex-initial">
                          <Skeleton className="h-3 w-16 mb-2" />
                          <Skeleton className="h-4 w-48" />
                        </div>
                        <Skeleton className="h-7 w-7 rounded-full" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/docs/project-management/content/team-collaboration/telegram-communication"
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
                            Telegram for Team Communication
                          </span>
                        </div>
                        <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                      <Link
                        href="/docs/project-management/content/project-planning/google-meet-weekly-meetings"
                        className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                      >
                        <div className="flex flex-col items-end relative z-10 flex-1 sm:flex-initial">
                          <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                            Next
                          </span>
                          <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                            Google Meet for Weekly Meetings
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
                        href="#jira-project-tracking" 
                        onClick={(e) => handleScroll(e, 'jira-project-tracking')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Jira for Project Tracking
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-jira" 
                        onClick={(e) => handleScroll(e, 'why-jira')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Jira?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-jira-workflow"
                        onClick={(e) => handleScroll(e, 'our-jira-workflow')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our Jira Workflow
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