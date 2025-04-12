'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Skeleton } from '@/components/ui/skeleton';

export default function ComponentArchitecturePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(`
# Component Architecture

The Riguelni Platform employs a robust and scalable component architecture that prioritizes reusability, maintainability, and consistency across the application. This guide outlines our approach to building and organizing UI components.

## Core Principles

### 1. Atomic Design Methodology
- Components are organized following atomic design principles
- Building blocks start from atoms (buttons, inputs) to molecules (form groups) to organisms (complete forms)
- Promotes consistency and reusability across the platform

### 2. Component Composition
- Components are designed to be composable and flexible
- Props and children patterns enable customization while maintaining consistency
- Clear separation of concerns between presentation and logic

### 3. State Management
- Local state for UI-specific concerns
- Context API for shared state across component trees
- Props for component-specific configuration

## Component Categories

### Base Components
Our foundational UI elements that serve as building blocks:
- Buttons with variant support
- Form inputs and controls
- Typography components
- Layout primitives

### Compound Components
More complex components built from base components:
- Form fields with validation
- Navigation components
- Dialog and modal systems
- Data display components

### Page-Level Components
Complete page layouts and templates that compose multiple compound components:
- Dashboard layouts
- Authentication pages
- Feature-specific views

## Best Practices

### Component Design
1. Keep components focused and single-purpose
2. Use TypeScript for type safety and better developer experience
3. Implement proper prop validation and default values
4. Document component usage and props

### Styling Approach
1. Utilize Tailwind CSS for consistent styling
2. Implement responsive design patterns
3. Support dark mode and theming
4. Use CSS variables for dynamic values

### Performance Considerations
1. Implement code splitting for larger components
2. Use React.memo for expensive renders
3. Lazy load components when appropriate
4. Optimize bundle size through proper imports

## Testing Strategy

### Unit Testing
- Test component rendering
- Verify prop handling
- Check state management
- Validate user interactions

### Integration Testing
- Test component composition
- Verify data flow
- Check component interactions
- Validate complex scenarios

## Implementation Tips

1. Start with the smallest possible component
2. Document component APIs thoroughly
3. Consider accessibility from the start
4. Plan for future extensibility
5. Maintain consistent naming conventions

## Conclusion

A well-structured component architecture is crucial for maintaining a scalable and maintainable application. By following these guidelines and patterns, we ensure our components remain consistent, reusable, and easy to understand across the entire platform.
      `);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const components = {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0 mt-10">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">{children}</h3>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
    ),
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto pt-10 pb-16">
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-12 w-[250px]" />
          <Skeleton className="h-4 w-[300px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ) : (
        <ReactMarkdown components={components}>{content}</ReactMarkdown>
      )}
    </div>
  );
} 