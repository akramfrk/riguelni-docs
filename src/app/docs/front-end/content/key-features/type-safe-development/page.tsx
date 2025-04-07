"use client";

import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ChevronRight, MoreHorizontal, ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import CodeBlock from "@/components/ui/code-block";
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

export default function AppRouterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMarkdownContent(`# Type-Safe Development

TypeScript is the foundation of our development process, providing static type checking and enhanced developer experience. Our implementation ensures type safety throughout the application, from components to API interactions.

## TypeScript Integration

TypeScript is integrated throughout our codebase with strict type checking enabled. This ensures that all components, functions, and data structures are properly typed, providing better code completion and error detection during development.

Common type patterns include:
- Strict type checking across the codebase
- Comprehensive type definitions for components
- Type inference for better development experience
- Custom type utilities for common patterns
- Generic types for reusable functionality

The type system provides several key benefits:
- Early error detection during development
- Improved code maintainability
- Better IDE support and autocompletion
- Reduced runtime errors
- Enhanced refactoring capabilities

## Type Safety Benefits

The use of TypeScript brings several key advantages to our development workflow. Early error detection during development helps catch issues before they reach production, while improved code maintainability and readability make the codebase easier to work with.

Key benefits include:
- Static type checking
- Better code organization
- Improved developer experience
- Enhanced code quality
- Reduced debugging time

Additional advantages:
- Better documentation
- Easier onboarding
- More reliable code
- Better tooling support
- Improved collaboration

## Component Typing

Our components are fully typed with TypeScript, ensuring type safety throughout the application. Props validation with TypeScript interfaces and event handler typing help prevent common errors and improve development efficiency.

Component features include:
- Props validation with interfaces
- Event handler typing
- Generic component support
- Strict prop checking
- Custom hook typing

Implementation details:
- Interface definitions
- Type guards
- Union types
- Intersection types
- Conditional types

## API Integration

Type safety extends to our API interactions and data handling. We use type-safe API clients with generated types, ensuring that API responses are properly validated and typed throughout the application.

API features include:
- Type-safe API clients
- Generated types from schemas
- Runtime type validation
- Error type definitions
- Response type checking

Integration patterns:
- Type-safe API calls
- Response validation
- Error handling
- Data transformation
- Type guards

## Development Workflow

Our development process is optimized for type safety. TypeScript configuration is set to strict checking, and automated type checking is integrated into our CI/CD pipeline for consistent code quality.

Workflow features:
- Strict TypeScript configuration
- Automated type checking
- Type documentation
- Testing with types
- Code review guidelines

Process improvements:
- Type checking in CI/CD
- Automated type generation
- Type coverage reporting
- Performance monitoring
- Quality metrics

## Best Practices

We follow established best practices for type-safe development. This includes comprehensive type definitions, consistent type naming conventions, and regular type checking during development.

Core practices include:
- Strict type checking
- Comprehensive type definitions
- Consistent naming conventions
- Regular type checking
- Documentation standards

Implementation guidelines:
- Type naming conventions
- Interface design
- Generic type usage
- Type documentation
- Error handling

## Type Utilities

Our custom type utilities enhance development efficiency. Shared type definitions and type guards ensure runtime safety, while utility types help with common patterns and state management.

Utility features:
- Shared type definitions
- Type guards
- Utility types
- State management types
- Generic utilities

Common patterns:
- Type predicates
- Mapped types
- Conditional types
- Template literal types
- Index types

## Error Prevention

Type safety helps prevent common development errors. Null and undefined checking, type mismatch prevention, and property access validation are all handled through TypeScript's type system.

Prevention strategies:
- Null checking
- Type validation
- Property access
- Function parameters
- Return types

Safety features:
- Strict null checks
- Type narrowing
- Property validation
- Parameter checking
- Return type checking

## Performance Optimization

Type safety contributes to application performance. Better code optimization, reduced runtime type checking, and improved bundle size are all benefits of our type-safe approach.

Optimization features:
- Code optimization
- Runtime performance
- Bundle size
- Tree shaking
- Code splitting

Performance benefits:
- Faster execution
- Smaller bundles
- Better caching
- Improved loading
- Enhanced rendering

## Future Enhancements

We continuously improve our type safety implementation. Advanced type patterns, enhanced type utilities, and better type documentation are all part of our ongoing development efforts.

Planned improvements:
- Advanced type patterns
- Enhanced utilities
- Better documentation
- Improved inference
- Expanded coverage

Development roadmap:
- Type system updates
- Tooling improvements
- Documentation enhancements
- Performance optimizations
- Feature additions`);
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
    code: ({ children, className }) => {
      const code = String(children).replace(/\n$/, '');
      return (
        <code className="inline-code bg-muted px-1.5 py-0.5 rounded-md text-sm">
          {code}
        </code>
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
                      <BreadcrumbLink href="/docs/front-end/content/key-features/app-router" className="text-sm">
                        Key Features
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Type-Safe Development</BreadcrumbPage>
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
                <div className="flex items-center justify-between mt-20 pt-8 border-t border-border/40">
                  <div className="flex items-center gap-4 px-5 py-3">
                    <Skeleton className="h-7 w-7 rounded-full" />
                    <div className="flex flex-col">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
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
                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-20 pt-8 border-t border-border/40">
                  <Link
                    href="/docs/front-end/content/introduction/core-stack"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Previous
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                        App Router
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/front-end/content/key-features/type-safe"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        Responsive Design
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
        <aside className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <nav className="space-y-2 text-sm">
                <Link
                  href="#type-safe-development"
                  onClick={(e) => handleScroll(e, "type-safe-development")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Type-Safe Development
                </Link>
                <Link
                  href="#typescript-integration"
                  onClick={(e) => handleScroll(e, "typescript-integration")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  TypeScript Integration
                </Link>
                <Link
                  href="#type-safety-benefits"
                  onClick={(e) => handleScroll(e, "type-safety-benefits")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Type Safety Benefits
                </Link>
                <Link
                  href="#component-typing"
                  onClick={(e) => handleScroll(e, "component-typing")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Component Typing
                </Link>
                <Link
                  href="#api-integration"
                  onClick={(e) => handleScroll(e, "api-integration")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  API Integration
                </Link>
                <Link
                  href="#development-workflow"
                  onClick={(e) => handleScroll(e, "development-workflow")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Development Workflow
                </Link>
                <Link
                  href="#best-practices"
                  onClick={(e) => handleScroll(e, "best-practices")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Best Practices
                </Link>
                <Link
                  href="#type-utilities"
                  onClick={(e) => handleScroll(e, "type-utilities")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Type Utilities
                </Link>
                <Link
                  href="#error-prevention"
                  onClick={(e) => handleScroll(e, "error-prevention")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Error Prevention
                </Link>
                <Link
                  href="#performance-optimization"
                  onClick={(e) => handleScroll(e, "performance-optimization")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Performance Optimization
                </Link>
                <Link
                  href="#future-enhancements"
                  onClick={(e) => handleScroll(e, "future-enhancements")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Future Enhancements
                </Link>
              </nav>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
} 