"use client"

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

export default function UIComponentsPage() {
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
      setMarkdownContent(`# UI Components

The Riguelni Platform implements a comprehensive set of UI components built with React and TypeScript. These components are designed to be reusable, accessible, and customizable while maintaining a consistent design system.

## Core Components

### 1. Button Component
Our button component is built with Radix UI and provides various styles and sizes:

\`\`\`typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm",
        outline: "border border-input bg-background shadow-sm",
        secondary: "bg-secondary text-secondary-foreground shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
\`\`\`

### 2. Form Components
Our form system is built on top of React Hook Form and provides a type-safe, accessible form solution:

\`\`\`typescript
const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};
\`\`\`

## Component Categories

### 1. Layout Components
- **Card**: Container for content with various styles
- **Sheet**: Side panel component for mobile navigation
- **Dialog**: Modal dialog for important interactions
- **ScrollArea**: Custom scrollable container

### 2. Form Components
- **Input**: Text input with validation
- **Select**: Dropdown selection
- **Checkbox**: Toggle input
- **RadioGroup**: Radio button group
- **Textarea**: Multi-line text input
- **DatePicker**: Date selection component

### 3. Navigation Components
- **Breadcrumb**: Navigation hierarchy
- **Tabs**: Tabbed interface
- **DropdownMenu**: Context menu
- **NavbarMenu**: Main navigation
- **HamburgerMenu**: Mobile navigation

### 4. Feedback Components
- **AlertDialog**: Important alerts
- **Skeleton**: Loading states
- **Spinner**: Progress indicator
- **Badge**: Status indicators

### 5. Interactive Components
- **Carousel**: Image/content slider
- **Accordion**: Collapsible sections
- **Popover**: Contextual information
- **Slider**: Range selection
- **Switch**: Toggle switch

## Implementation Details

### 1. Component Architecture
Our components follow a consistent architecture:
- Built with React and TypeScript
- Styled with Tailwind CSS
- Accessible by default
- Fully customizable
- Type-safe props

### 2. Styling System
- Uses Tailwind CSS for styling
- Implements a consistent design system
- Supports dark/light mode
- Responsive by default
- Customizable through variants

### 3. Accessibility
- Follows WAI-ARIA guidelines
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Best Practices

1. **Component Design**
   - Keep components focused and single-purpose
   - Use composition over inheritance
   - Implement proper prop types
   - Provide sensible defaults
   - Document component usage

2. **State Management**
   - Use controlled components when needed
   - Implement proper form handling
   - Manage loading states
   - Handle errors gracefully
   - Provide feedback to users

3. **Performance**
   - Implement proper memoization
   - Use lazy loading when appropriate
   - Optimize re-renders
   - Minimize bundle size
   - Use proper code splitting

4. **Testing**
   - Write unit tests for components
   - Test accessibility
   - Verify responsive behavior
   - Test edge cases
   - Document test coverage

## Implementation Tips

1. **Component Creation**
   - Start with a clear purpose
   - Define the API first
   - Consider edge cases
   - Make it reusable
   - Document thoroughly

2. **Styling**
   - Use design system tokens
   - Follow naming conventions
   - Keep styles maintainable
   - Support theming
   - Consider responsive design

3. **Accessibility**
   - Test with screen readers
   - Verify keyboard navigation
   - Check color contrast
   - Provide proper labels
   - Handle focus management

## Conclusion

The UI component library in the Riguelni Platform provides a solid foundation for building consistent, accessible, and maintainable user interfaces. By following these best practices and implementation strategies, you can create high-quality components that enhance the user experience.`);
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
                      <BreadcrumbLink href="/docs/front-end/content/component-architecture/overview" className="text-sm">
                        Component Architecture
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>UI Components</BreadcrumbPage>
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
                    href="/docs/front-end/content/key-features/real-time-capabilities"
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
                        Real-time Capabilities
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/front-end/content/component-architecture/state-management"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        State Management
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
                  href="#ui-components"
                  onClick={(e) => handleScroll(e, "ui-components")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  UI Components
                </Link>
                <Link
                  href="#core-components"
                  onClick={(e) => handleScroll(e, "core-components")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Core Components
                </Link>
                <Link
                  href="#component-categories"
                  onClick={(e) => handleScroll(e, "component-categories")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Component Categories
                </Link>
                <Link
                  href="#implementation-details"
                  onClick={(e) => handleScroll(e, "implementation-details")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Implementation Details
                </Link>
                <Link
                  href="#best-practices"
                  onClick={(e) => handleScroll(e, "best-practices")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Best Practices
                </Link>
                <Link
                  href="#implementation-tips"
                  onClick={(e) => handleScroll(e, "implementation-tips")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Implementation Tips
                </Link>
                <Link
                  href="#conclusion"
                  onClick={(e) => handleScroll(e, "conclusion")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Conclusion
                </Link>
              </nav>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
} 