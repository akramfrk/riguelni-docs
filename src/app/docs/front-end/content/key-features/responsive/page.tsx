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
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ResponsiveDesignPage() {
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
      setMarkdownContent(`# Responsive Design

Responsive design is a fundamental aspect of modern web development, ensuring that applications look and function well across all devices and screen sizes. The Riguelni Platform implements responsive design principles throughout its interface, providing a seamless experience across all devices.

## Core Principles

### 1. Mobile-First Approach
We adopt a mobile-first design philosophy, starting with the smallest screens and progressively enhancing for larger devices. This ensures a solid foundation for all screen sizes.

[IMAGE_PLACEHOLDER_1]

### 2. Fluid Layouts
Using relative units and flexible layouts ensures content adapts smoothly to different screen sizes. The Riguelni Platform uses container queries and fluid typography for optimal scaling.

[IMAGE_PLACEHOLDER_2]

### 3. Responsive Typography
Text scales appropriately across different devices for optimal readability. We use CSS clamp() for fluid typography and maintain proper line heights and spacing.

[IMAGE_PLACEHOLDER_3]

## Implementation Examples

### 1. Navigation Bar
The navigation adapts to different screen sizes, collapsing into a hamburger menu on mobile. The Riguelni Platform's navigation includes:
- Responsive logo sizing
- Collapsible menu items
- Mobile-optimized touch targets
- Smooth transitions between states

[IMAGE_PLACEHOLDER_4]

### 2. Card Grid
Cards rearrange based on available space, optimizing layout for each screen size. The Riguelni Platform implements:
- CSS Grid with auto-fit
- Responsive image sizing
- Touch-friendly interactions
- Consistent spacing across breakpoints

[IMAGE_PLACEHOLDER_5]

### 3. Form Layout
Forms adapt their layout for different screen sizes, ensuring optimal usability. The Riguelni Platform features:
- Stacked inputs on mobile
- Full-width buttons
- Proper input sizing
- Touch-friendly form controls

[IMAGE_PLACEHOLDER_6]

## Best Practices

1. **Use CSS Grid and Flexbox**
   - Implement fluid grids with auto-fit
   - Use flexbox for flexible layouts
   - Maintain consistent spacing
   - Consider container queries

2. **Responsive Images**
   - Use next/image for optimization
   - Implement proper aspect ratios
   - Use srcset for different resolutions
   - Lazy load images below the fold

3. **Touch-Friendly Interfaces**
   - Minimum 44px touch targets
   - Proper spacing between elements
   - Clear visual feedback
   - Gesture support where appropriate

4. **Performance Optimization**
   - Conditional loading of components
   - Optimized assets for different devices
   - Reduced animations on mobile
   - Proper use of CSS containment

## Testing and Debugging

1. **Browser DevTools**
   - Use device emulation
   - Test different screen sizes
   - Check touch interactions
   - Verify performance metrics

2. **Real Device Testing**
   - Test on actual mobile devices
   - Verify touch interactions
   - Check performance
   - Test network conditions

3. **Responsive Design Testing Tools**
   - Use online testing platforms
   - Implement automated testing
   - Monitor performance metrics
   - Check accessibility

## Implementation Tips

1. **Breakpoint Strategy**
   - Use semantic breakpoints
   - Implement mobile-first media queries
   - Consider device capabilities
   - Test edge cases

2. **Component Responsiveness**
   - Design components for all screen sizes
   - Use container queries where appropriate
   - Implement responsive variants
   - Consider content reflow

3. **Performance Considerations**
   - Optimize images for different devices
   - Implement proper lazy loading
   - Use CSS containment
   - Consider resource loading strategies

## Conclusion

Responsive design is not just about making things look good on different screens - it's about creating an optimal user experience across all devices. The Riguelni Platform implements these principles to ensure accessibility and usability for all users, regardless of their device.`);
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
    p: ({ children }) => {
      const text = children?.toString() || '';
      
      if (text.includes('[IMAGE_PLACEHOLDER_1]')) {
        return (
          <div className="w-full max-w-full overflow-hidden -mx-4 md:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4 px-4 md:px-0">
              <figure className="group w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full cursor-zoom-in">
                      <div className="relative w-full max-w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                        <Image
                          src="/images/responsive/mobile-first-mobile.png"
                          alt="Mobile-First Design - Mobile View"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                          <span className="font-semibold text-primary">Mobile View</span>
                        </figcaption>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg overflow-hidden">
                    <DialogTitle className="sr-only">Mobile-First Design - Mobile View</DialogTitle>
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background overflow-hidden">
                        <Image
                          src="/images/responsive/mobile-first-mobile.png"
                          alt="Mobile-First Design - Mobile View"
                          fill
                          className="object-contain rounded-[2rem]"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </figure>
              <figure className="group w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-full cursor-zoom-in">
                      <div className="relative w-full max-w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                        <Image
                          src="/images/responsive/mobile-first-desktop.png"
                          alt="Mobile-First Design - Desktop View"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                          <span className="font-semibold text-primary">Desktop View</span>
                        </figcaption>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg overflow-hidden">
                    <DialogTitle className="sr-only">Mobile-First Design - Desktop View</DialogTitle>
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/responsive/mobile-first-desktop.png"
                        alt="Mobile-First Design - Desktop View"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </figure>
            </div>
          </div>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_2]')) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4">
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/fluid-layouts-mobile.png"
                        alt="Fluid Layouts - Mobile View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Mobile View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Fluid Layouts - Mobile View</DialogTitle>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background">
                      <Image
                        src="/images/responsive/fluid-layouts-mobile.png"
                        alt="Fluid Layouts - Mobile View"
                        fill
                        className="object-contain rounded-[2rem]"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/fluid-layouts-desktop.png"
                        alt="Fluid Layouts - Desktop View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Desktop View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Fluid Layouts - Desktop View</DialogTitle>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/responsive/fluid-layouts-desktop.png"
                      alt="Fluid Layouts - Desktop View"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
          </div>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_3]')) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4">
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/typography-mobile.png"
                        alt="Responsive Typography - Mobile View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Mobile View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Typography - Mobile View</DialogTitle>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background">
                      <Image
                        src="/images/responsive/typography-mobile.png"
                        alt="Responsive Typography - Mobile View"
                        fill
                        className="object-contain rounded-[2rem]"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/typography-desktop.png"
                        alt="Responsive Typography - Desktop View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Desktop View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Typography - Desktop View</DialogTitle>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/responsive/typography-desktop.png"
                      alt="Responsive Typography - Desktop View"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
          </div>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_4]')) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4">
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/navigation-mobile.png"
                        alt="Responsive Navigation - Mobile View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Mobile View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Navigation - Mobile View</DialogTitle>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background">
                      <Image
                        src="/images/responsive/navigation-mobile.png"
                        alt="Responsive Navigation - Mobile View"
                        fill
                        className="object-contain rounded-[2rem]"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/navigation-desktop.png"
                        alt="Responsive Navigation - Desktop View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Desktop View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Navigation - Desktop View</DialogTitle>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/responsive/navigation-desktop.png"
                      alt="Responsive Navigation - Desktop View"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
          </div>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_5]')) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4">
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/cards-mobile.png"
                        alt="Responsive Cards - Mobile View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Mobile View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Cards - Mobile View</DialogTitle>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background">
                      <Image
                        src="/images/responsive/cards-mobile.png"
                        alt="Responsive Cards - Mobile View"
                        fill
                        className="object-contain rounded-[2rem]"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/cards-desktop.png"
                        alt="Responsive Cards - Desktop View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Desktop View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Cards - Desktop View</DialogTitle>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/responsive/cards-desktop.png"
                      alt="Responsive Cards - Desktop View"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
          </div>
        );
      }
      if (text.includes('[IMAGE_PLACEHOLDER_6]')) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 mb-4">
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[9/19.5] rounded-[2rem] border-[12px] border-background shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/forms-mobile.png"
                        alt="Responsive Forms - Mobile View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Mobile View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[9/19.5] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Forms - Mobile View</DialogTitle>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-background rounded-[2rem] border-[12px] border-background">
                      <Image
                        src="/images/responsive/forms-mobile.png"
                        alt="Responsive Forms - Mobile View"
                        fill
                        className="object-contain rounded-[2rem]"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
            <figure className="group">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full cursor-zoom-in">
                    <div className="relative w-full aspect-[16/10] rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-border/60">
                      <Image
                        src="/images/responsive/forms-desktop.png"
                        alt="Responsive Forms - Desktop View"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-2 text-sm text-center border-t border-border/40">
                        <span className="font-semibold text-primary">Desktop View</span>
                      </figcaption>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] w-[95vw] aspect-[16/10] sm:max-w-[85vw] sm:w-[85vw] md:max-w-[80vw] md:w-[80vw] p-0 rounded-none sm:rounded-lg">
                  <DialogTitle className="sr-only">Responsive Forms - Desktop View</DialogTitle>
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/responsive/forms-desktop.png"
                      alt="Responsive Forms - Desktop View"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </figure>
          </div>
        );
      }
      return <p>{children}</p>;
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
                  <BreadcrumbPage>Responsive Design</BreadcrumbPage>
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
                    href="/docs/front-end/content/key-features/type-safe-development"
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
                        Type-Safe Development
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/front-end/content/key-features/real-time-capabilities"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        Real-Time Capabilities
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
                  href="#responsive-design"
                  onClick={(e) => handleScroll(e, "responsive-design")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Responsive Design
                </Link>
                <Link
                  href="#core-principles"
                  onClick={(e) => handleScroll(e, "core-principles")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Core Principles
                </Link>
                <Link
                  href="#implementation-examples"
                  onClick={(e) => handleScroll(e, "implementation-examples")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Implementation Examples
                </Link>
                <Link
                  href="#best-practices"
                  onClick={(e) => handleScroll(e, "best-practices")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Best Practices
                </Link>
                <Link
                  href="#testing-and-debugging"
                  onClick={(e) => handleScroll(e, "testing-and-debugging")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Testing and Debugging
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