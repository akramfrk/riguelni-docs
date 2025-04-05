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

export default function GitHubCollaborationPage() {
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
      setMarkdownContent(`# GitHub for Code Collaboration
At RIGELNI, we use GitHub as our primary platform for code collaboration. It provides a centralized repository for our codebase, enabling seamless collaboration between team members, code review processes, and project management.

## Why GitHub?
### Benefits of Our Approach
Using GitHub for code collaboration offers several advantages for our development workflow:

- Centralized code repository
- Visual diff and merge tools
- Pull request workflow
- Issue tracking and project boards
- Code review tools
- Branch protection rules
- CI/CD integration

### Repository Organization
We organize our repositories with a clear structure:

- One repository per project
- Clear README files with setup instructions
- Consistent branch naming conventions
- Protected main branches
- Issue templates for bug reports and feature requests

## Our GitHub Workflow

### Creating Issues
[IMAGE_PLACEHOLDER_1]

### Pull Request Process
[IMAGE_PLACEHOLDER_2]

### Code Review Guidelines
[IMAGE_PLACEHOLDER_3]

### Project Boards
[IMAGE_PLACEHOLDER_4]

### Using VS Code with GitHub
Here's how we typically work with GitHub using VS Code:

1. **Cloning Repositories**
   - Open VS Code
   - Click the "Clone Repository" button in the Source Control view
   - Enter the GitHub repository URL
   - Select a local folder to clone to

2. **Working with Branches**
   - Create new branches directly in VS Code
   - Switch between branches using the branch picker
   - Push and pull changes with the Source Control view

3. **Creating Pull Requests**
   - After pushing changes, VS Code will show a notification
   - Click "Create Pull Request" in the notification
   - Fill in the PR details in GitHub's web interface
   - Request review from team members

4. **Reviewing Code**
   - Use GitHub's web interface for detailed code reviews
   - Add comments on specific lines
   - Request changes or approve PRs
   - Merge when approved

## Best Practices

### Repository Management
- Keep repositories focused and well-organized
- Use descriptive commit messages
- Maintain up-to-date documentation
- Set up branch protection rules
- Configure issue templates

### Collaboration Guidelines
- Assign issues to specific team members
- Use project boards to track progress
- Regular team syncs on GitHub projects
- Clear communication in PR descriptions
- Reference issues in commits and PRs

### Security Practices
- Never commit sensitive information
- Use environment variables for secrets
- Enable two-factor authentication
- Regular security audits
- Keep dependencies updated

## Conclusion
GitHub is an essential tool in our development workflow at RIGELNI. It enables efficient collaboration, code review, and project management. By following our GitHub workflow and best practices, we ensure high-quality code delivery and smooth team collaboration.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('GitHub for Code Collaboration')) {
        id = 'github-for-code-collaboration';
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
      if (children?.toString().includes('Why GitHub')) {
        id = 'why-github';
      } else if (children?.toString().includes('Our GitHub Workflow')) {
        id = 'our-github-workflow';
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
                      src="/GitHub/creating-issues.png"
                      alt="Creating Issues"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 2</span>
                      <span className="text-muted-foreground"> — Creating and Managing Issues</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Creating Issues</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitHub/creating-issues.png"
                    alt="Creating Issues"
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
                      src="/GitHub/pull-request.png"
                      alt="Pull Request Process"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 3</span>
                      <span className="text-muted-foreground"> — Pull Request Process</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Pull Request Process</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitHub/pull-request.png"
                    alt="Pull Request Process"
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
                      src="/GitHub/code-review.png"
                      alt="Code Review Guidelines"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 4</span>
                      <span className="text-muted-foreground"> — Code Review Guidelines</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Code Review Guidelines</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitHub/code-review.png"
                    alt="Code Review Guidelines"
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
                      src="/GitHub/project-boards.png"
                      alt="Project Boards"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 5</span>
                      <span className="text-muted-foreground"> — Using Project Boards</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Project Boards</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitHub/project-boards.png"
                    alt="Project Boards"
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
                  <BreadcrumbPage>GitHub for Code Collaboration</BreadcrumbPage>
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

                {/* Why GitHub section */}
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
                {/* Navigation buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  <Link
                    href="/docs/project-management/content/version-control/feature-branches"
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
                        Feature Branches for New Features
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/project-management/content/team-collaboration/telegram-communication"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                  >
                    <div className="flex flex-col items-end relative z-10 flex-1 sm:flex-initial">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        Telegram for Team Communication
                      </span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
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
                        href="#github-for-code-collaboration" 
                        onClick={(e) => handleScroll(e, 'github-for-code-collaboration')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        GitHub for Code Collaboration
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-github" 
                        onClick={(e) => handleScroll(e, 'why-github')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why GitHub?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-github-workflow"
                        onClick={(e) => handleScroll(e, 'our-github-workflow')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our GitHub Workflow
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