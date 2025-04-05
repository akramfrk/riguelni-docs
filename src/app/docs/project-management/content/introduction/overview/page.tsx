"use client";

import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function OverviewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Add a small delay to ensure the element is in the DOM
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMarkdownContent(`# Introduction

Welcome to the Project Management section of the RIGUELNI documentation. Here, we'll explore how our platform helps teams work together effectively, manage their projects efficiently, and deliver high-quality results.

## Overview of Our Approach

At RIGUELNI, we believe that successful project management is about creating an environment where teams can work together seamlessly. Our platform combines powerful tools with intuitive design to help you:

- Streamline your workflow
- Keep everyone on the same page
- Track progress effectively
- Deliver results on time

### Efficient Workflow

We focus on making your work process smooth and efficient. Our tools help you:

- Automate repetitive tasks
- Reduce manual work
- Speed up decision-making
- Keep everything organized

### Collaborative Environment

Teamwork is at the heart of what we do. Our platform makes it easy to:

- Work together in real-time
- Share ideas and feedback
- Keep everyone informed
- Build strong team relationships

## Core Objectives

Our project management tools are designed to help you achieve three main goals:

### Transparency

- Clear visibility into project status
- Easy access to important information
- Open communication channels
- Real-time updates

### Efficiency

- Streamlined processes
- Automated workflows
- Quick access to tools
- Time-saving features

### Quality

- High standards for deliverables
- Built-in quality checks
- Performance monitoring
- Continuous improvement

## Key Components of Our Project Management

Our platform includes several key features to help you manage projects effectively:

### Version Control

- Track changes easily
- Manage different versions
- Keep history organized
- Revert when needed

### Team Collaboration

- Work together smoothly
- Share resources
- Coordinate efforts
- Stay connected

### Project Planning

- Set clear goals
- Create timelines
- Allocate resources
- Monitor progress

## Why Project Management Matters

Effective project management is crucial for success because it:

- Helps teams work better together
- Keeps projects on track
- Ensures quality results
- Saves time and resources

By using our project management tools, you can create a more organized, efficient, and successful work environment for your team.`);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const components: Partial<Components> = {
    h1: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h1 id={id} className="scroll-mt-24 mb-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h2 id={id} className="scroll-mt-24 mt-8 mb-4">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h3 id={id} className="scroll-mt-24 mt-6 mb-3">
          {children}
        </h3>
      );
    },
  };

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
                      <BreadcrumbLink href="/docs/project-management/content/introduction/overview" className="text-sm">
                        Introduction
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Overview</BreadcrumbPage>
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

                {/* Overview section */}
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
                    <Skeleton className="h-5 w-[42%]" />
                  </div>
                </div>

                {/* Efficient Workflow section */}
                <div className="space-y-6">
                  <Skeleton className="h-7 w-[50%]" /> {/* Subsection title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-[92%]" />
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-[35%]" />
                      <Skeleton className="h-5 w-[40%]" />
                      <Skeleton className="h-5 w-[38%]" />
                      <Skeleton className="h-5 w-[42%]" />
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

                <div className="space-y-6">
                  <Skeleton className="h-8 w-[55%]" />
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-[94%]" />
                    <Skeleton className="h-5 w-[89%]" />
                    <div className="space-y-3">
                      <Skeleton className="h-5 w-[40%]" />
                      <Skeleton className="h-5 w-[35%]" />
                      <Skeleton className="h-5 w-[42%]" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
            )}

            {/* Next link section */}
            <div className="flex items-center justify-end mt-20 pt-8 border-t border-border/40">
              {isLoading ? (
                <div className="flex items-center gap-4 px-5 py-3">
                  <div className="flex flex-col items-end">
                    <Skeleton className="h-3 w-16 mb-2" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <Skeleton className="h-7 w-7 rounded-full" />
                </div>
              ) : (
                <Link
                  href="/docs/project-management/content/version-control/git-github-code-hosting"
                  className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                >
                  <div className="flex flex-col items-end relative z-10">
                    <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                      Next
                    </span>
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                      Git & GitHub for Code Hosting
                    </span>
                  </div>
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
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
                        href="#introduction" 
                        onClick={(e) => handleScroll(e, 'introduction')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Introduction
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#overview-of-our-approach" 
                        onClick={(e) => handleScroll(e, 'overview-of-our-approach')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Overview of Our Approach
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#core-objectives" 
                        onClick={(e) => handleScroll(e, 'core-objectives')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Core Objectives
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#key-components-of-our-project-management" 
                        onClick={(e) => handleScroll(e, 'key-components-of-our-project-management')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Key Components
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#why-project-management-matters" 
                        onClick={(e) => handleScroll(e, 'why-project-management-matters')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Why Project Management Matters
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
  );
} 