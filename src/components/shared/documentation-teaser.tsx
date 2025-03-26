"use client"

import Link from "next/link"
import { Code2, Sparkles, Braces, Boxes, Laptop, Puzzle, Workflow, Server, Shield, Zap, Smartphone } from "lucide-react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DocumentationTeaser() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden">
        <div className="container px-4 py-20 md:px-6">
          <div className="relative">
            {/* Main content */}
            <div className="mx-auto max-w-[1200px]">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row gap-12 items-center"
              >
                {/* Left side content */}
                <div className="flex-1 space-y-6 text-left">
                  <h2 className="text-4xl font-bold tracking-tight">
                    Discover How We Built{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
                      Riguelni
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    An in-depth look at the technologies, architecture decisions, and development practices that power our freelancing platform.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="/docs/architecture">
                        <Workflow className="mr-2 h-4 w-4" />
                        View Architecture
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                      <Link href="/docs/tech-stack">
                        <Code2 className="mr-2 h-4 w-4" />
                        Tech Stack
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right side tech cards */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        title: "Frontend",
                        icon: Laptop,
                        description: "Next.js 14 & React",
                        color: "bg-blue-500/10 text-blue-500",
                      },
                      {
                        title: "Mobile App",
                        icon: Smartphone,
                        description: "Flutter & Dart",
                        color: "bg-cyan-500/10 text-cyan-500",
                      },
                      {
                        title: "Styling",
                        icon: Puzzle,
                        description: "Tailwind & Radix UI",
                        color: "bg-purple-500/10 text-purple-500",
                      },
                      {
                        title: "Backend",
                        icon: Braces,
                        description: "Node.js & Express",
                        color: "bg-green-500/10 text-green-500",
                      },
                      {
                        title: "Database",
                        icon: Boxes,
                        description: "MongoDB & Redis",
                        color: "bg-yellow-500/10 text-yellow-500",
                      },
                    ].map((tech, index) => (
                      <m.div
                        key={tech.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 ${index === 4 ? "col-span-2 md:col-span-1 md:translate-x-1/2" : ""}`}
                      >
                        <div className={`rounded-xl ${tech.color} absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity`} />
                        <tech.icon className={`h-8 w-8 ${tech.color.split(' ')[1]} mb-3`} />
                        <h3 className="font-semibold mb-1">{tech.title}</h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </m.div>
                    ))}
                  </div>
                </div>
              </m.div>

              {/* Bottom feature highlights */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "Modern Architecture",
                    description: "Built with React Server Components and Edge Runtime for optimal performance",
                    icon: Server,
                    color: "bg-blue-500/10 text-blue-500",
                  },
                  {
                    title: "Type Safety",
                    description: "End-to-end type safety with TypeScript throughout the entire stack",
                    icon: Shield,
                    color: "bg-green-500/10 text-green-500",
                  },
                  {
                    title: "Real-time Features",
                    description: "WebSocket integration for live updates and real-time communication",
                    icon: Zap,
                    color: "bg-yellow-500/10 text-yellow-500",
                  },
                ].map((feature, index) => (
                  <m.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative h-full p-6 rounded-2xl border border-border/10 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`absolute inset-0 ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-all duration-500`} />
                    <feature.icon className={`h-8 w-8 ${feature.color.split(' ')[1]} mb-4`} />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </m.div>
                ))}
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

