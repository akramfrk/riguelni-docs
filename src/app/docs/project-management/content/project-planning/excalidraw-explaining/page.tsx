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
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

export default function ExcalidrawExplainingPage() {
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
      setMarkdownContent(`# Excalidraw for Explaining
At RIGELNI, we use Excalidraw as our primary tool for creating visual explanations, diagrams, and technical drawings. This powerful, open-source whiteboarding tool helps us communicate complex ideas and system architectures effectively.

## Why Excalidraw?
### Benefits of Our Approach
Using Excalidraw for our visual explanations offers several advantages:

- Simple and intuitive interface
- Hand-drawn style that feels approachable
- Real-time collaboration capabilities
- Export to various formats (PNG, SVG)
- Library of pre-made components
- Version control friendly
- No account required
- Open-source and free to use

### Use Cases
We primarily use Excalidraw for:

- System architecture diagrams
- Flowcharts and process diagrams
- UI/UX wireframes
- Database schemas
- API documentation
- Technical explanations
- Meeting notes and brainstorming

## Our Excalidraw Workflow

### Creating Diagrams
When creating diagrams, we follow these steps:

1. **Planning**
   - Define the purpose of the diagram
   - Identify key components to include
   - Sketch a rough outline
   - Gather necessary information

2. **Implementation**
   - Start with basic shapes and connections
   - Add labels and annotations
   - Use consistent styling
   - Group related elements
   - Add color for emphasis

3. **Review and Refinement**
   - Check for clarity and completeness
   - Ensure proper alignment and spacing
   - Verify all connections are clear
   - Add any missing details
   - Get team feedback

### Collaboration Process
Our collaboration workflow:

1. **Initial Creation**
   - Create the base diagram
   - Share with team members
   - Set up real-time collaboration

2. **Feedback Collection**
   - Team members review the diagram
   - Provide comments and suggestions
   - Discuss improvements

3. **Iteration**
   - Implement feedback
   - Make necessary adjustments
   - Finalize the diagram

### Export and Integration
After completion:

1. **Export Options**
   - Export as PNG for presentations
   - Export as SVG for documentation
   - Save as .excalidraw file for future edits

2. **Integration**
   - Add to documentation
   - Include in presentations
   - Share with stakeholders
   - Store in version control

## Best Practices

### Design Guidelines
- Use consistent colors and styles
- Keep diagrams simple and focused
- Use appropriate spacing
- Label all important elements
- Group related components
- Use arrows to show flow
- Include legends when needed

### Technical Tips
- Use keyboard shortcuts for efficiency
- Leverage the library for common elements
- Create reusable components
- Use layers for complex diagrams
- Save frequently
- Export in multiple formats
- Keep backup copies

### Collaboration Guidelines
- Share early and often
- Be specific with feedback
- Use comments for suggestions
- Respect others' work
- Maintain version history
- Document changes

## Example Diagrams {#example-diagrams}
Here's an example of how we use Excalidraw to create system architecture diagrams:

[IMAGE_PLACEHOLDER]

This diagram illustrates our webhook-based system architecture, showcasing:

- **Webhook Communication Flow**: HTTP-based webhook interactions between components
- **Server Components**: 
  - NextJS Server handling incoming webhook requests
  - Webhook API endpoint for processing incoming data
  - Relational database for data persistence
- **Client Integration**:
  - Multiple client applications connecting to the system
  - Transaction handling between clients and database
- **Data Flow**:
  - Webhook request/response patterns
  - Database transactions
  - Client-server communication paths

The hand-drawn style of Excalidraw makes it easy to understand the flow and relationships between different components while maintaining a professional appearance.

## Conclusion
Excalidraw is an essential tool in our documentation and communication workflow at RIGELNI. It enables us to create clear, professional diagrams that help explain complex technical concepts and system architectures. By following our structured approach and best practices, we ensure that our visual explanations are effective, consistent, and valuable for all team members and stakeholders.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      let id = '';
      if (children?.toString().includes('Excalidraw for Explaining')) {
        id = 'excalidraw-explaining';
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
      const text = children?.toString() || '';
      
      // First check for explicit ID in the text
      const idMatch = text.match(/{#([^}]+)}/);
      if (idMatch) {
        id = idMatch[1];
        // Remove the ID from the displayed text
        children = text.replace(/{#[^}]+}/, '').trim();
      } else if (text.includes('Why Excalidraw')) {
        id = 'why-excalidraw';
      } else if (text.includes('Our Excalidraw Workflow')) {
        id = 'our-excalidraw-workflow';
      } else if (text.includes('Best Practices')) {
        id = 'best-practices';
      } else if (text.includes('Example Diagrams')) {
        id = 'example-diagrams';
      } else if (text.includes('Conclusion')) {
        id = 'conclusion';
      } else {
        id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
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
      if (text.includes('[IMAGE_PLACEHOLDER]')) {
        return (
          <figure className="mt-1 mb-4 group">
            <Dialog>
              <DialogTrigger asChild>
                <div className="w-full cursor-zoom-in">
                  <div className="relative w-full aspect-[16/8] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                    <Image
                      src="/Excalidraw/webhook-architecture.png"
                      alt="Webhook System Architecture Diagram"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                      <span className="font-semibold text-primary">Figure 1</span>
                      <span className="text-muted-foreground"> — Webhook System Architecture Diagram</span>
                    </figcaption>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/8] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                <DialogTitle className="sr-only">Webhook System Architecture Diagram</DialogTitle>
                <div className="relative w-full h-full">
                  <Image
                    src="/Excalidraw/webhook-architecture.png"
                    alt="Webhook System Architecture Diagram"
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
                  <BreadcrumbPage>Excalidraw for Explaining</BreadcrumbPage>
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

                {/* Why Excalidraw section */}
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

                {/* Our Excalidraw Workflow section */}
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

                {/* Example Diagrams section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[45%]" /> {/* Section title */}
                  {/* Image placeholder skeleton */}
                  <div className="w-full aspect-[16/8] rounded-lg bg-accent/50" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-[90%]" />
                      <div className="pl-4 space-y-2">
                        <Skeleton className="h-5 w-[85%]" />
                        <Skeleton className="h-5 w-[80%]" />
                        <Skeleton className="h-5 w-[75%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conclusion section */}
                <div className="space-y-4">
                  <Skeleton className="h-8 w-[35%]" /> {/* Section title */}
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[95%]" />
                    <Skeleton className="h-5 w-[90%]" />
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
                </div>
              </div>
            ) : (
              <>
                <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                
                {/* Navigation buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:justify-between mt-20 pt-8 border-t border-border/40">
                  <Link
                    href="/docs/project-management/content/project-planning/google-docs-documentation"
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
                        Google Docs for Documentation
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                        href="#excalidraw-explaining" 
                        onClick={(e) => handleScroll(e, 'excalidraw-explaining')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Excalidraw for Explaining
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-excalidraw" 
                        onClick={(e) => handleScroll(e, 'why-excalidraw')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Excalidraw?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#our-excalidraw-workflow"
                        onClick={(e) => handleScroll(e, 'our-excalidraw-workflow')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Our Excalidraw Workflow
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
                        href="#example-diagrams" 
                        onClick={(e) => handleScroll(e, 'example-diagrams')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Example Diagrams
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