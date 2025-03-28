"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Search, Sparkles, Code2, BookOpen, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/lego/Command"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <div className="relative w-full overflow-visible">
      {/* Gradient background with modern feel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-black" />

      <motion.section
        initial="hidden"
        animate="visible"
        className="container relative mx-auto min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center pt-16 sm:pt-0 px-4"
      >
        <motion.div className="relative w-full max-w-5xl mx-auto" variants={containerVariants}>
          {/* Badge */}
          <motion.div variants={childVariants} className="mb-8 flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium text-muted-foreground bg-background/50 backdrop-blur-sm shadow-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary animate-pulse" />
              Technical Documentation
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Inside{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary">
              Riguelni
            </span>{" "}
            Platform
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={childVariants}
            className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Explore the architecture, technologies, and development practices used to build Riguelni - the modern freelancing platform connecting Algerian talent with global opportunities.
          </motion.p>

          {/* CTA buttons */}
          <motion.div className="flex flex-wrap justify-center items-center gap-4 mt-10" variants={childVariants}>
            <Button
              asChild
              size="lg"
              className="h-12 px-6 font-medium text-base rounded-full bg-primary hover:bg-primary/90"
            >
              <Link href="/docs/getting-started">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Tech Stack
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 font-medium text-base rounded-full"
            >
              <Link href="https://github.com/1sma31L/Riguelni" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View Source
              </Link>
            </Button>
          </motion.div>

          {/* Feature cards */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 w-full" variants={childVariants}>
            {[
              {
                title: "Architecture",
                icon: Layers,
                description: "Deep dive into our technical architecture",
                href: "/docs/architecture",
              },
              {
                title: "Tech Stack",
                icon: Code2,
                description: "Explore our modern technology stack",
                href: "/docs/tech-stack",
              },
              {
                title: "Components",
                icon: BookOpen,
                description: "Browse our UI component library",
                href: "/docs/components",
              },
            ].map((feature, index) => (
              <Link key={index} href={feature.href} className="block h-full">
                <motion.div
                  className="group relative h-full p-6 pb-12 rounded-2xl border border-border/10 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <feature.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  <ArrowRight className="h-4 w-4 text-primary absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

