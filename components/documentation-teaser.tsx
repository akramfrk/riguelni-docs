"use client"
import Link from "next/link"
import { BookOpen, Code2, Rocket, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DocumentationTeaser() {
  return (
    <div className="container px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto max-w-[800px] space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium text-muted-foreground bg-background/50 backdrop-blur-sm shadow-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary animate-pulse" />
              Comprehensive Documentation
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Everything You Need to Know
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Dive into our comprehensive documentation to learn everything about setting up your account, managing
            projects, and leveraging our powerful features.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="h-11 px-8">
              <Link href="/docs">
                <BookOpen className="mr-2 h-4 w-4" />
                Explore Docs
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Quick Start</h3>
              <p className="text-center text-sm text-muted-foreground">
                Get up and running with RIGELNI in minutes with our step-by-step guides and tutorials.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Core Features</h3>
              <p className="text-center text-sm text-muted-foreground">
                Explore our powerful features and learn how to make the most of your RIGELNI experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
              <div className="rounded-full bg-primary/10 p-3">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">API Reference</h3>
              <p className="text-center text-sm text-muted-foreground">
                Detailed API documentation with examples and best practices for seamless integration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

