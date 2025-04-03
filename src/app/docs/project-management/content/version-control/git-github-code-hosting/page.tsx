"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, MoreHorizontal } from "lucide-react"
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
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

export default function GitGitHubPage() {
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

  const repositoryStructure = `Riguelni-Platform/
├── Riguelni-Docs/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── hooks/
│   │   └── sections/
│   ├── public/
│   └── package.json
│
├── Riguelni-Web/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── registry/
│   │   ├── constants/
│   │   ├── schemas/
│   │   ├── types/
│   │   ├── config/
│   │   ├── stores/
│   │   ├── providers/
│   │   ├── utils/
│   │   └── lib/
│   ├── public/
│   ├── .github/
│   └── package.json
│
└── Reguelni-App/
    ├── reguelni/
    │   ├── lib/
    │   ├── assets/
    │   ├── fonts/
    │   ├── test/
    │   ├── android/
    │   ├── ios/
    │   ├── linux/
    │   ├── macos/
    │   ├── windows/
    │   ├── web/
    │   ├── pubspec.yaml
    │   └── pubspec.lock`


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMarkdownContent(`# Git & GitHub for Code Hosting
At RIGELNI, we rely on Git and GitHub for managing our code efficiently. These tools allow us to track changes, collaborate seamlessly, and maintain a clean, structured codebase. Below is an overview of how we use them in our development process.

## Why Git & GitHub?
### Git – A Distributed Version Control System
Git is a powerful version control system that helps developers:

- Track changes: Every modification in the code is recorded.

- Work offline: Developers can work locally and sync their work later.

- Revert to previous versions: If an issue arises, we can easily roll back to a previous state.

### GitHub – Cloud-Based Repository Hosting
GitHub enhances our workflow by providing:

- Centralized cloud storage for all project files.

- Code collaboration tools like discussions and issue tracking.

- Security & backup to prevent data loss.

- Integration with CI/CD tools for automated testing and deployment.

## How We Use Git & GitHub in RIGELNI?
### 1. GitHub Repositories of Riguelni

#### Website Repository
[IMAGE_PLACEHOLDER_1]

[IMAGE_PLACEHOLDER_2]

#### Mobile App Repository
[IMAGE_PLACEHOLDER_3]

[IMAGE_PLACEHOLDER_4]

### 2. Repository Structure
We maintain a well-organized GitHub repository where all project files, documentation, and assets are stored. The repository acts as the central hub for our development activities.

Our main repository structure:`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Git & GitHub for Code Hosting')) {
        id = 'git-github-for-code-hosting';
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
      if (children?.toString().includes('Why Git & GitHub')) {
        id = 'why-git-github';
      } else if (children?.toString().includes('How We Use Git & GitHub')) {
        id = 'how-we-use-git-github-in-riguelni';
      } else if (children?.toString().includes('Best Practices')) {
        id = 'best-practices-for-git-github';
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
                      src="/GitGitHub/web-repo.png"
                      alt="Website Repository Overview"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 1</span>
                      <span className="text-muted-foreground"> — Overview of the RIGELNI Website Repository on GitHub</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Website Repository Overview</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitGitHub/web-repo.png"
                    alt="Website Repository Overview"
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
                      src="/GitGitHub/web-commits.png"
                      alt="Website Repository Commit History"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 2</span>
                      <span className="text-muted-foreground"> — Commit History and Changes in the Website Repository</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Website Repository Commit History</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitGitHub/web-commits.png"
                    alt="Website Repository Commit History"
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
                      src="/GitGitHub/app-repo.png"
                      alt="Mobile App Repository Overview"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 3</span>
                      <span className="text-muted-foreground"> — Overview of the RIGELNI Mobile App Repository</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Mobile App Repository Overview</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitGitHub/app-repo.png"
                    alt="Mobile App Repository Overview"
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
                      src="/GitGitHub/app-commits.png"
                      alt="Mobile App Repository Commit History"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 4</span>
                      <span className="text-muted-foreground"> — Commit History and Changes in the Mobile App Repository</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Mobile App Repository Commit History</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/GitGitHub/app-commits.png"
                    alt="Mobile App Repository Commit History"
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
                      <BreadcrumbLink href="/docs/project-management" className="text-sm">
                        Project Management
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/project-management/content/version-control" className="text-sm">
                        Version Control
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Git & GitHub for Code Hosting</BreadcrumbPage>
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

                {/* Why Git & GitHub section */}
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

                {/* How We Use section */}
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
              </div>
            ) : (
              <>
                <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                <div className="mt-6 w-full overflow-hidden">
                  <CodeBlock language="bash" filename="riguelni-platform-structure.txt" code={repositoryStructure} />
                </div>
                <ReactMarkdown components={components}>{`
### 2. Code Management
Developers push their updates to GitHub regularly, ensuring that all changes are tracked and saved.

Every commit includes a clear and descriptive message explaining the changes.

We follow code formatting guidelines to maintain consistency across the project:
- ESLint for JavaScript/TypeScript linting
- Prettier for code formatting
- Husky for pre-commit hooks

Developers frequently sync their local repositories with the latest changes to avoid conflicts.

### 3. Issue Tracking & Collaboration
GitHub Issues help us manage tasks and track bugs efficiently:

Each issue is labeled and assigned to a team member.

We use labels like:
- \`bug\` - For bug reports
- \`feature\` - For new features
- \`enhancement\` - For improvements
- \`documentation\` - For doc updates
- \`priority\` - For urgent tasks

Developers update the issue with progress reports and discussions.

Once resolved, the issue is closed, ensuring a clear record of completed tasks.

### 4. Security & Access Control
To maintain security and prevent unauthorized changes:

Only authorized team members have write access to the repository.

Sensitive information is kept in environment variables instead of hardcoded values:
\`\`\`env
DATABASE_URL=your_database_url
API_KEY=your_api_key
JWT_SECRET=your_jwt_secret
\`\`\`

We use GitHub's security alerts to monitor vulnerabilities in dependencies.

## Best Practices for Git & GitHub
To keep our workflow smooth and efficient, we follow these best practices:

- Commit Frequently – Small, meaningful commits make it easier to track changes.
- Write Clear Commit Messages – Every commit should explain what was changed and why.
- Keep Code Clean & Organized – Follow formatting rules and remove unnecessary files.
- Use .gitignore – Prevent unwanted files (e.g., logs, temporary files) from being committed.
- Sync Regularly – Developers pull the latest updates before making changes to avoid conflicts.

## Conclusion
Git & GitHub are at the core of our development process, ensuring smooth collaboration, code safety, and efficient project management. By following structured workflows and best practices, we maintain a high-quality, well-documented, and secure codebase.`}</ReactMarkdown>
              </>
            )}

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
                    href="/docs/project-management/content/introduction/overview"
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
                        Overview
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/project-management/content/version-control/vs-code-development"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline w-full sm:w-auto"
                  >
                    <div className="flex flex-col items-end relative z-10 flex-1 sm:flex-initial">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        VS Code for Development
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
                        href="#git-github-for-code-hosting" 
                        onClick={(e) => handleScroll(e, 'git-github-for-code-hosting')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Git & GitHub for Code Hosting
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-git-github" 
                        onClick={(e) => handleScroll(e, 'why-git-github')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Git & GitHub?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#how-we-use-git-github-in-riguelni"
                        onClick={(e) => handleScroll(e, 'how-we-use-git-github-in-riguelni')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        How We Use Git & GitHub in RIGELNI?
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#best-practices-for-git-github" 
                        onClick={(e) => handleScroll(e, 'best-practices-for-git-github')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Best Practices for Git & GitHub
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

