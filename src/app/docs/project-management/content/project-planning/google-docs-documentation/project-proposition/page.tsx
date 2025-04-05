"use client"

import ReactMarkdown from "react-markdown"
import { useState, useEffect } from "react"
import type { Components } from "react-markdown"
import Link from "next/link"
import { ChevronRight, ChevronLeft, FileDown, FileText } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function ProjectPropositionPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [markdownContent, setMarkdownContent] = useState("")
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

  // Effect to prevent scrolling when sidebar is open
  useEffect(() => {
    if (isRightSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isRightSidebarOpen]);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMarkdownContent(`# Project Proposal:

# RIGUELNI A Freelance Platform.

## 1. Group 02

- BOUSSEKINE Mohamed Ismail - A1
- FERKIOUI Akram - A1
- AMEDJKOUH Darine - A1
- HAMMOUTI Walid - A2
- BENTALEB Lisa - A3

## 2. Overview

RIGUELNI is a modern freelance platform that connects skilled professionals with clients looking
for services. The platform provides a secure and intuitive environment where users can both
**buy and sell** services, making it a flexible solution for freelancers and businesses alike. With
robust features such as **secure payments, real-time chat, and an easy-to-use dashboard** ,
RIGUELNI aims to streamline freelance transactions and project management.
**Platform Availability:**
- **Website** – Desktop-friendly platform for easy access.
- **Mobile App** – Optimized experience for users on the go.

## 3. Objectives

Our key objectives include:

- **1. Dual Role Functionality** – Allow users to switch between being a **buyer (client)** and a
    **seller (freelancer)** within the same account.
- **2. Multi-Platform Access** – Provide both a **website and a mobile app** for user
    convenience.
- **3. Secure and Efficient Payments** – Implement a safe transaction system with **stripe.**
- **4. User-Centric Experience** – Deliver a **well-designed and seamless interface** for an
    engaging user experience.
- **5. Integrated Communication System** – Enable smooth interactions between buyers and
    sellers through **real-time chat**.
- **6. Robust Project Tracking** – Provide dashboards for monitoring services, transactions,
    and platform activity.

## 4. Features

### User Roles & Permissions

- Buyers (Clients):
    - Manage projects and payments.
    - Provide feedback and ratings..
- Sellers (Freelancers):
    - List services and set pricing.
    - Communicate with clients and deliver work.
    - Receive payments securely.
- Admin Panel (Team Access Only):
    - Monitor user activities and transactions.
    - Handle disputes and customer support.
    - Manage platform analytics and security.

### Core Functionalities

- **User Registration & Profile Management** – Sign-up, login, and profile customization.
- **Dual Role Mode** – Users can switch between being a buyer and a seller.
- **Service Categories** – Various categories to help users find the right services.
- **Order Management** – Track job requests, ongoing work, and completed orders.
- **Payment System** – Payments processed through stripe.
- **Real-Time Chat System** – Direct messaging for buyer-seller communication.
- **Review & Rating System** – Buyers can leave feedback and rating for completed projects.
- **Admin Dashboard** – Monitor platform activity and manage disputes.

## 5. Team Members & Responsibilities

- **Ismail (Project Manager & Backend Developer)**
    - Manages project execution and team coordination.
    - Develops and manages the backend logic.
    - Ensures **database** security and **API** integrations and its documentation.
- **Akram (Styling & Documentation)**
    - Designs the **visual styles** and **layout** of the website.
    - Prepares project documentation, including reports, meeting notes, and specifications.
    - Ensures design consistency across the website.
- **Walid (Mobile App Developer)**
    - Develops **the mobile application** for the platform.
    - Implements UI components and API integrations for mobile users.
    - Ensures a seamless user experience on mobile devices.
- **Darine (Frontend Developer)**
    - Builds the **frontend** structure of the website.
    - Implements interactive features and logic.
    - Optimizes website performance for a better user experience.
- **Lisa (UI/UX Designer & Styling)**
    - Designs the user interface using **Figma**.
    - Focuses on **User Interface, User experience** and Navigation flow.
    - Works with Akram to ensure styling consistency.

## 6. Software & Tools Used

### Project Management
- **Jira** – Task and project management tool for agile software development.

### Development
- **VS Code** – Lightweight and powerful code editor with extensive extensions.
- **Postman** – API development, testing, and debugging tool.
- **Apidog** – API design, testing, and collaboration platform.
- **Excalidraw** – Open-source tool for creating hand-drawn-style diagrams and wireframes.

### Design
- **Figma** – UI/UX design and prototyping tool for collaborative interface design.

### Version Control
- **GitHub & Git** – Version control system and cloud-based repository hosting for collaboration.

### Mobile App
- **Flutter** – For cross-platform mobile development to enhance compatibility and user experience.

### Frontend Development
- **TypeScript** – A strongly typed superset of JavaScript for safer and scalable development.
- **React.js with Next.js** – React for UI development, with Next.js for server-side rendering (SSR), static site generation (SSG), and API routes.
- **Zustand & Redux Toolkit** – State management libraries for handling complex application state.
- **Tailwind CSS** – Utility-first CSS framework for building responsive and modern UIs.
- **shadcn/ui** – A component library built on Radix UI and Tailwind CSS for elegant and accessible UI components.

### Backend Development
- **Node.js (With TypeScript)** – JavaScript runtime for scalable backend applications, with TypeScript for type safety.
- **Express.js** – Minimal and flexible web framework for building APIs and web applications.
- **PostgreSQL** – Relational database management system known for performance and reliability.
- **Supabase** – Open-source Firebase alternative providing authentication, database, and storage services.
- **Stripe** – Online payment processing platform for handling transactions, subscriptions, and financial services.
- **Jest** – JavaScript testing framework for writing unit and integration tests in Node.js.

### Hosting And Deployment
- **Vercel** – Cloud platform for frontend frameworks, enabling fast deployment and global scalability.
- **Namecheap** – Domain registration and hosting service provider.

## 7. Project Timeline (15-02-2025 to 15-04-2025)

### Phase 1: Planning & Design (Week 1-2)

- Define requirements & project scope.
- UI/UX design & wireframing in Figma.
- Backend architecture & database setup.

### Phase 2: Development (Week 3-6)

- Implement authentication & user management.
- Develop frontend & backend functionalities.
- Integrate messaging & payment systems.

### Phase 3: Testing & Deployment (Week 7-8)

- Debug & test platform functionalities.
- Optimize performance & security.
- Deploy project on **Vercel** & finalize documentation.

## 8. Challenges & Solutions

### 1. Scalability Issues

- Problem: Increased users may lead to slow performance.
- Solution: Optimize database queries and use Supabase for efficient data management.

### 2. Payment Security & Fraud Prevention

- Problem: Risk of fraudulent transactions.
- Solution: Implement escrow payments and identity verification measures.

### 3. Ensuring a Smooth User Experience

- Problem: Users may find it difficult to navigate the platform.
- Solution: Conduct user testing and improve UI/UX based on feedback.

### 4. Cross-Platform Compatibility (Web & Mobile)

- Problem: Different devices may display inconsistent UI elements.
- Solution: Use responsive design principles and test extensively on multiple devices.

### 5. Real-Time Chat Optimization

- Problem: Message delays or failures could affect communication.
- Solution: Use WebSockets for seamless real-time messaging.

### 6. API Hosting Issues on Vercel

- Problem: Vercel's serverless functions have limitations like request timeouts, cold starts, and lack of persistent connections.
- Solution: Use Railway, Fly.io, or Render to host your API instead. If using Vercel, try Edge Functions for faster responses.

### 7. Infinite Loop in Fetching Logic

- Problem: Your frontend keeps calling the API again and again, making the app slow.
- Easy Solution:
    - Use useEffect correctly – add the right dependencies.
    - Use a state check before updating to avoid unnecessary re-fetches.
    - Use React Query or a similar library to handle API calls automatically.

### 8. Single Point of Failure in API

- Problem: If one part of your API crashes, everything stops working.
- Easy Solution:
    - Use multiple servers (e.g., deploy on Railway + Render ).
    - Add a backup database so if one fails, another takes over.
    - Use a load balancer (like Cloudflare or Nginx ) to distribute traffic.

## 9. Conclusion

**RIGUELNI** aims to be a **leading freelance platform**, offering a **secure, user-friendly,
and feature-rich platform** for both buyers and sellers. With a **well-defined project structure,
skilled team, and clear objectives**, we are confident in delivering a **high-quality web and
mobile solution** within the given timeframe.`)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const components: Partial<Components> = {
    h1: ({ children }) => {
      if (typeof children === 'string' && children.includes('RIGUELNI')) {
        const parts = children.split('RIGUELNI');
        return (
          <h1 className="mb-8">
            {parts[0]}
            <span className="text-primary">RIGUELNI</span>
            {parts[1]}
          </h1>
        );
      }
      return (
        <h1 className="mb-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 className="mt-12 mb-6">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="mt-8 mb-4">
          {children}
        </h3>
      );
    },
    p: ({ children }) => {
      return <p className="mb-4 text-lg">{children}</p>;
    },
    span: ({ className, children }) => {
      return <span className={className}>{children}</span>;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
        className={cn(
          "fixed top-16 right-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all lg:hidden z-30 text-sm text-muted-foreground",
          isRightSidebarOpen && "opacity-0 pointer-events-none"
        )}
        aria-label="Toggle menu"
      >
        <span className="flex items-center gap-1">
          <ChevronLeft className="h-3.5 w-3.5" /> More
        </span>
      </button>

      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-200",
          isRightSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={(e) => {
          // Close sidebar when clicking outside
          if (e.target === e.currentTarget) {
            setIsRightSidebarOpen(false);
          }
        }}
      >
        <nav
          className={cn(
            "fixed right-0 w-[85%] max-w-[300px] bg-background/95 border-l border-border/50 px-4 shadow-lg overflow-y-auto",
            "transform transition-transform duration-300 ease-out",
            isRightSidebarOpen ? "translate-x-0" : "translate-x-full",
          )}
          style={{ top: '3.75rem', height: 'calc(100vh - 3.75rem)' }}
          onClick={(e) => {
            // Prevent closing when clicking inside the sidebar
            e.stopPropagation();
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsRightSidebarOpen(false)}
            className="absolute top-2 left-2 px-2 py-1 rounded-lg bg-background/95 shadow-sm border border-border/40 hover:bg-accent/50 transition-all text-sm text-muted-foreground"
            aria-label="Close menu"
          >
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </button>
          <div className="space-y-8 pt-4 pb-8">
            {/* Download as PDF */}
            <div className="pt-6">
              <Link
                href="/docs/project-proposition.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                onClick={() => setIsRightSidebarOpen(false)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <FileDown className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">Download as PDF</span>
              </Link>
            </div>

            {/* Other Documents */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground/90 px-1">Other Documents</h4>
              <div className="space-y-2.5">
                {[
                  { name: "Meeting Report #1", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1" },
                  { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
                  { name: "Meeting Report #3", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3" },
                  { name: "Meeting Report #4", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4" },
                  { name: "Meeting Report #5", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5" }
                ].map((doc) => (
                  <Link
                    key={doc.name}
                    href={doc.href}
                    className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                    onClick={() => setIsRightSidebarOpen(false)}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{doc.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Documentation */}
            <div className="pt-2">
              <Link
                href="/docs/project-management/content/project-planning/google-docs-documentation"
                className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                onClick={() => setIsRightSidebarOpen(false)}
              >
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                </div>
                <div className="flex flex-col items-start relative z-10">
                  <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                    Previous
                  </span>
                  <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                    Back to Documentation
                  </span>
                </div>
                <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="py-12 flex-1">
          <article className="prose prose-lg dark:prose-invert prose-primary">
            {isLoading ? (
              <div className="space-y-8">
                <Skeleton className="h-12 w-[60%]" />
                <div className="space-y-4">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-[90%]" />
                  <Skeleton className="h-5 w-[85%]" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-8 w-[40%]" />
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-[95%]" />
                    <Skeleton className="h-5 w-[85%]" />
                  </div>
                </div>
              </div>
            ) : (
              <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
            )}
          </article>
        </div>

        {/* Right sidebar */}
        <div className="hidden lg:block w-72 shrink-0 border-l border-border/40 pl-8">
          <div className="sticky top-[6rem] h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="space-y-10 pb-8 pr-4">
              {/* Download as PDF */}
              <div className="pt-2">
                <Link
                  href="/docs/project-proposition.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <FileDown className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Download as PDF</span>
                </Link>
              </div>

              {/* Other Documents */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-foreground/90 px-1">Other Documents</h4>
                <div className="space-y-2.5">
                  {[
                    { name: "Meeting Report #1", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-1" },
                    { name: "Meeting Report #2", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-2" },
                    { name: "Meeting Report #3", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-3" },
                    { name: "Meeting Report #4", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-4" },
                    { name: "Meeting Report #5", href: "/docs/project-management/content/project-planning/google-docs-documentation/meeting-report-5" }
                  ].map((doc) => (
                    <Link
                      key={doc.name}
                      href={doc.href}
                      className="group flex items-center gap-3 rounded-lg border border-border/40 p-4 hover:border-primary/50 hover:bg-accent/60 transition-all duration-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{doc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Back to Documentation */}
              <div className="pt-2">
                <Link
                  href="/docs/project-management/content/project-planning/google-docs-documentation"
                  className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                >
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <div className="flex flex-col items-start relative z-10">
                    <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                      Previous
                    </span>
                    <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                      Back to Documentation
                    </span>
                  </div>
                  <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 