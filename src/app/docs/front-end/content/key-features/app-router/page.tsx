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
      setMarkdownContent(`# Modern App Router

Next.js 15.1.7 introduces a powerful App Router that revolutionizes how we build web applications. Our implementation leverages the latest features to create a robust and performant routing system.

## File-based Routing Structure

The App Router uses a file-system based routing system where the structure of your files determines the routes in your application. Here's how we organize our routes:

\`\`\`tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
export default function HomePage() {
  return <h1>Welcome to Riguelni</h1>;
}

// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>;
}
\`\`\`

## Layout System

Our layout system is built using Next.js's nested layouts, allowing us to create consistent UI across different sections of the application:

\`\`\`tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
\`\`\`

## Middleware Implementation

We use middleware to handle authentication and session management across our application:

\`\`\`tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  
  if (!session && !request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};
\`\`\`

## Dynamic Routes

Dynamic routes allow us to create flexible URL structures for our content:

\`\`\`tsx
// app/gigs/[gig_id]/page.tsx
export default function GigPage({ params }: { params: { gig_id: string } }) {
  return (
    <div>
      <h1>Gig {params.gig_id}</h1>
      {/* Gig content */}
    </div>
  );
}
\`\`\`

## Server Components

We leverage Server Components for improved performance and SEO:

\`\`\`tsx
// app/gigs/page.tsx
import { createClient } from '@/utils/supabase/server';

export default async function GigsPage() {
  const supabase = createClient();
  const { data: gigs } = await supabase.from('gigs').select('*');
  
  return (
    <div>
      <h1>Available Gigs</h1>
      <ul>
        {gigs?.map((gig) => (
          <li key={gig.id}>{gig.title}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Navigation Features

Client-side navigation is handled using Next.js's built-in components:

\`\`\`tsx
// components/NavLink.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={\`px-4 py-2 rounded-lg transition-colors \${
        isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
      }\`}
    >
      {children}
    </Link>
  );
}
\`\`\`

## Route Groups

Route groups help us organize our routes while maintaining clean URLs:

\`\`\`tsx
// app/(auth)/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}

// app/(auth)/register/page.tsx
export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <RegisterForm />
    </div>
  );
}
\`\`\`

## Performance Optimizations

We implement various performance optimizations in our routing system:

\`\`\`tsx
// app/layout.tsx
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Image
          src="/logo.png"
          alt="Riguelni Logo"
          width={32}
          height={32}
          priority
        />
        {children}
      </body>
    </html>
  );
}
\`\`\`

## Authentication Flow

Our authentication system is integrated with the App Router:

\`\`\`tsx
// app/api/auth/[...nextauth]/route.ts
import { NextAuthOptions } from 'next-auth';
import { NextResponse } from 'next/server';

export const authOptions: NextAuthOptions = {
  providers: [
    // Configure providers
  ],
  callbacks: {
    async session({ session, token }) {
      return session;
    },
  },
};

export async function GET(req: Request) {
  return NextResponse.json({ message: 'Auth API' });
}
\`\`\``);
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
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'typescript';
      const code = String(children).replace(/\n$/, '');
      
      return (
        <div className="my-6">
          <CodeBlock
            language={language}
            filename={language === 'tsx' ? 'example.tsx' : 'example.ts'}
            code={code}
          />
        </div>
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
                  <BreadcrumbPage>Modern App Router</BreadcrumbPage>
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
                        Core Stack
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
                        Type-Safe Development
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
                  href="#modern-app-router"
                  onClick={(e) => handleScroll(e, "modern-app-router")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Modern App Router
                </Link>
                <Link
                  href="#file-based-routing-structure"
                  onClick={(e) => handleScroll(e, "file-based-routing-structure")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  File-based Routing Structure
                </Link>
                <Link
                  href="#layout-system"
                  onClick={(e) => handleScroll(e, "layout-system")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Layout System
                </Link>
                <Link
                  href="#middleware-implementation"
                  onClick={(e) => handleScroll(e, "middleware-implementation")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Middleware Implementation
                </Link>
                <Link
                  href="#dynamic-routes"
                  onClick={(e) => handleScroll(e, "dynamic-routes")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Dynamic Routes
                </Link>
                <Link
                  href="#server-components"
                  onClick={(e) => handleScroll(e, "server-components")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Server Components
                </Link>
                <Link
                  href="#navigation-features"
                  onClick={(e) => handleScroll(e, "navigation-features")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Navigation Features
                </Link>
                <Link
                  href="#route-groups"
                  onClick={(e) => handleScroll(e, "route-groups")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Route Groups
                </Link>
                <Link
                  href="#performance-optimizations"
                  onClick={(e) => handleScroll(e, "performance-optimizations")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Performance Optimizations
                </Link>
                <Link
                  href="#authentication-flow"
                  onClick={(e) => handleScroll(e, "authentication-flow")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Authentication Flow
                </Link>
              </nav>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
} 