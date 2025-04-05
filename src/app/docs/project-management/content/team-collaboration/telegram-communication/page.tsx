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

export default function TelegramCommunicationPage() {
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
      setMarkdownContent(`# Telegram for Team Communication
At RIGELNI, we have created a dedicated Telegram group that serves as our primary communication channel. This group enables smooth communication and efficient file sharing between team members, making collaboration seamless and effective.

## Our Telegram Group
### Purpose and Benefits
Our Telegram group provides several key advantages for our workflow:

- Instant communication for quick questions and updates
- Easy file sharing for code snippets, designs, and documentation
- Real-time notifications for important announcements
- Group discussions for technical decisions
- Quick access to team members for urgent matters
- Cross-platform availability for all team members
- Message history for reference and documentation

### Group Structure
We maintain a simple but effective group structure:

- Main team group for all communication
- Clear guidelines for message organization
- Consistent naming conventions for files
- Regular cleanup of outdated information

## How We Use Telegram

### Daily Communication
Our team uses the Telegram group for:

- Sharing progress updates on tasks
- Reporting blockers and requesting assistance
- Celebrating achievements and milestones
- Coordinating meetings and schedules
- Discussing technical approaches

### File Sharing
We leverage Telegram's file sharing capabilities for:

- Sharing code snippets for quick reviews
- Exchanging design mockups and assets
- Distributing documentation and guides
- Sending configuration files
- Sharing logs for troubleshooting

### Integration with Development Workflow
Our Telegram group integrates with our development process:

1. **Code Reviews**
   - Share code snippets for quick feedback
   - Discuss implementation details
   - Get immediate responses to questions

2. **Project Coordination**
   - Share meeting notes and action items
   - Update task status and progress
   - Coordinate deployments and releases

3. **Knowledge Sharing**
   - Share learning resources and tutorials
   - Document solutions to common problems
   - Maintain a repository of team knowledge

## Best Practices

### Communication Guidelines
- Use clear and concise messages
- Tag relevant team members when needed
- Use appropriate formatting for readability
- Maintain a professional tone
- Organize discussions by topic or project

### File Management
- Use descriptive names for shared files
- Compress large files before sharing
- Organize shared resources logically
- Clean up old or outdated files
- Use appropriate file formats

## Conclusion
Our Telegram group is an essential communication tool in our workflow at RIGELNI. It enables efficient team coordination, knowledge sharing, and project management. By following our communication guidelines and best practices, we ensure smooth collaboration and successful project delivery.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Telegram Communication')) {
        id = 'telegram-communication';
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
      if (children?.toString().includes('Why Telegram')) {
        id = 'why-telegram';
      } else if (children?.toString().includes('Our Telegram Workflow')) {
        id = 'our-telegram-workflow';
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
                      src="/Telegram/channel-setup.png"
                      alt="Channel Setup"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 1</span>
                      <span className="text-muted-foreground"> — Setting up a Telegram Channel</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Channel Setup</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Telegram/channel-setup.png"
                    alt="Channel Setup"
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
                      src="/Telegram/message-guidelines.png"
                      alt="Message Guidelines"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 2</span>
                      <span className="text-muted-foreground"> — Message Guidelines and Formatting</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Message Guidelines</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Telegram/message-guidelines.png"
                    alt="Message Guidelines"
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
                      src="/Telegram/file-sharing.png"
                      alt="File Sharing"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 3</span>
                      <span className="text-muted-foreground"> — File Sharing Best Practices</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">File Sharing</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Telegram/file-sharing.png"
                    alt="File Sharing"
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
                      src="/Telegram/bot-integration.png"
                      alt="Bot Integration"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 4</span>
                      <span className="text-muted-foreground"> — Bot Integration and Automation</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Bot Integration</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Telegram/bot-integration.png"
                    alt="Bot Integration"
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
                      src="/Telegram/notification-management.png"
                      alt="Notification Management"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 5</span>
                      <span className="text-muted-foreground"> — Notification Settings and Management</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Notification Management</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Telegram/notification-management.png"
                    alt="Notification Management"
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
                  <BreadcrumbPage>Telegram for Team Communication</BreadcrumbPage>
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

                {/* Why Telegram section */}
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
                        href="/docs/project-management/content/team-collaboration/github-code-collaboration"
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
                            GitHub for Code Collaboration
                          </span>
                        </div>
                        <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>
                      <Link
                        href="/docs/project-management/content/team-collaboration/jira-project-management"
                        className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                      >
                        <div className="flex flex-col items-end relative z-10 flex-1 sm:flex-initial">
                          <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                            Next
                          </span>
                          <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                            Jira for Project Tracking
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
                        href="#telegram-communication" 
                        onClick={(e) => handleScroll(e, 'telegram-communication')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Telegram Communication
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-telegram" 
                        onClick={(e) => handleScroll(e, 'why-telegram')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Telegram?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-telegram-workflow"
                        onClick={(e) => handleScroll(e, 'our-telegram-workflow')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our Telegram Workflow
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