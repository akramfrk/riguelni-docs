"use client";

import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ChevronRight, MoreHorizontal, ChevronLeft } from "lucide-react";
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
import { Button } from "@/components/ui/button";

export default function OverviewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

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

Welcome to the Front-end Development section of the RIGUELNI documentation. Here, we'll explore how our platform's front-end architecture is built to deliver a modern, responsive, and user-friendly experience.

## Documentation Structure

This documentation is organized into several key sections to help you understand and work with our front-end architecture:

### Introduction
- Overview (this page)
- Core Stack

### Key Features
- Modern App Router
- Type-Safe Development
- Responsive Design
- Real-time Capabilities
- Secure Authentication
- Optimized Performance

### Component Architecture
- UI Components
- Layout Components
- Form Components
- Dashboard Components
- Section Components
- Mobile Components
- Lego Components

### Main Sections
- Authentication System
- Dashboard Interface
- Real-time Chat
- Payment Processing
- User Management
- Gig Management
- Analytics

### Development Tools
- ESLint
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- Sonner

### Deployment
- Vercel Hosting
- Environment Configuration
- CI/CD Pipeline
- Performance Optimization

## Overview of Our Front-end Architecture

At RIGUELNI, we've built our front-end with a focus on performance, maintainability, and developer experience. Our platform combines modern technologies with best practices to create:

- Fast and responsive user interfaces
- Type-safe development environment
- Reusable component architecture
- Seamless real-time features

### Modern Tech Stack

Our front-end is built using cutting-edge technologies:

- Next.js for server-side rendering and routing
- React for component-based UI development
- TypeScript for type safety and better developer experience
- Tailwind CSS for utility-first styling
- Radix UI for accessible components

### Component Architecture

We follow a modular approach to component development:

- Reusable UI components
- Layout components for page structure
- Form components for user input
- Dashboard components for data visualization
- Section components for content organization
- Mobile components for responsive design
- Lego components for building blocks

## Core Principles

Our front-end development follows these key principles:

### Performance

- Optimized bundle size
- Efficient rendering
- Lazy loading
- Image optimization
- Caching strategies

### Maintainability

- Clean code structure
- Consistent patterns
- Comprehensive documentation
- Automated testing
- Type safety

### User Experience

- Responsive design
- Accessibility compliance
- Smooth animations
- Intuitive navigation
- Error handling

## Key Features

Our front-end includes several powerful features:

### Authentication System

- Secure login/signup
- Password recovery
- Session management
- Role-based access

### Dashboard Interface

- Real-time updates
- Data visualization
- User management
- Activity tracking

### Real-time Capabilities

- Live chat
- Notifications
- Updates
- Collaboration

## Why Front-end Matters

A well-built front-end is crucial because it:

- Provides the user interface
- Handles user interactions
- Manages application state
- Ensures performance
- Delivers great UX

By following our front-end architecture and best practices, you can create robust, maintainable, and user-friendly web applications.`);

      // Extract headings from the markdown content
      const headingRegex = /^(#{1,3})\s+(.+)$/gm;
      const matches = Array.from(markdownContent.matchAll(headingRegex));
      const extractedHeadings = matches.map(match => ({
        id: match[2].toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        text: match[2],
        level: match[1].length
      }));
      setHeadings(extractedHeadings);
    }, 1000);

    return () => clearTimeout(timer);
  }, [markdownContent]);

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
                      <BreadcrumbLink href="/docs/front-end/content/introduction/overview" className="text-sm">
                        Front-end Development
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/front-end/content/introduction/overview" className="text-sm">
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

                {/* Navigation button skeleton */}
                <div className="flex items-center justify-end mt-20 pt-8 border-t border-border/40">
                  <div className="flex items-center gap-4 px-5 py-3">
                    <div className="flex flex-col items-end">
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
                      href="/docs/front-end/content/introduction/core-stack"
                      className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                    >
                      <div className="flex flex-col items-end relative z-10">
                        <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                          Next
                        </span>
                        <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                          Core Stack
                        </span>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <nav className="space-y-2 text-sm">
                <Link
                  href="#introduction"
                  onClick={(e) => handleScroll(e, "introduction")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Introduction
                </Link>
                <Link
                  href="#overview-of-front-end-architecture"
                  onClick={(e) => handleScroll(e, "overview-of-front-end-architecture")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Overview of Front-end Architecture
                </Link>
                <Link
                  href="#modern-tech-stack"
                  onClick={(e) => handleScroll(e, "modern-tech-stack")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Modern Tech Stack
                </Link>
                <Link
                  href="#component-architecture"
                  onClick={(e) => handleScroll(e, "component-architecture")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Component Architecture
                </Link>
                <Link
                  href="#core-principles"
                  onClick={(e) => handleScroll(e, "core-principles")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Core Principles
                </Link>
                <Link
                  href="#key-features"
                  onClick={(e) => handleScroll(e, "key-features")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Key Features
                </Link>
                <Link
                  href="#why-front-end-matters"
                  onClick={(e) => handleScroll(e, "why-front-end-matters")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Why Front-end Matters
                </Link>
              </nav>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
}
