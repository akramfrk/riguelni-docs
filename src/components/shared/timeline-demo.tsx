"use client"
import { Timeline } from "@/components/ui/timeline"
import { Rocket, Shield, Zap } from "lucide-react"

export default function TimelineDemo() {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Initial Development (Feb - Mar 2024)
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Documentation Website</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Building the documentation site using Next.js with modern UI components and responsive design
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Core Components</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Developing reusable UI components including navigation, search, theme switching, and interactive
                  elements
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Basic Infrastructure</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Setting up project structure, routing, and essential development tools and configurations
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4 flex items-center gap-2">
            <Rocket className="h-5 w-5 text-primary" />
            Platform Development (Mar - Apr 2024)
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">User Authentication</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Implementing secure login system with email verification and password recovery
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Project Features</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Creating project creation, management, and collaboration features with real-time updates
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Payment System</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Setting up secure payment processing with transaction history and automated invoicing
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <p className="text-foreground text-sm md:text-base font-semibold mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Launch Preparation (Apr - May 2024)
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Testing & Optimization</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive testing, performance optimization, and security audits
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Documentation & Support</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Creating comprehensive documentation and setting up support infrastructure
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-primary mt-1">✦</span>
              <div>
                <p className="font-medium text-foreground">Launch</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Final preparations and launch of the platform to the public
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="container px-4 md:px-6">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Development Roadmap
        </h2>
        <Timeline data={data} />
      </div>
    </div>
  )
}

