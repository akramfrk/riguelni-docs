"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      {/* Decorative elements with glow */}
      <div className="absolute top-40 left-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-40 right-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-primary/5 rounded-full blur-[150px] -z-10 animate-pulse-slow" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/3 to-transparent opacity-70 -z-10" />

      <motion.section
        initial="hidden"
        animate="visible"
        className="container mx-auto relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center border-b border-border/30"
      >
        <motion.div className="relative" variants={containerVariants}>
          <motion.div variants={childVariants} className="mb-8 flex items-center justify-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium text-muted-foreground bg-background/50 backdrop-blur-sm shadow-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary animate-pulse" />
              Empowering Freelancers & Clients
            </span>
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold relative z-20 tracking-tight"
          >
            <span className="block leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
              Build the Future of
            </span>
            <span className="block leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
              Freelancing with{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-[size:200%_auto] animate-gradient"
              >
                RIGELNI
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mx-auto mt-6 text-lg leading-8 text-muted-foreground max-w-[800px] tracking-wide"
          >
            A comprehensive documentation guide to help you integrate and leverage the power of RIGELNI's platform. From
            getting started to advanced features, we've got you covered.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center items-center gap-4 mt-8" variants={childVariants}>
            <Button
              asChild
              size="lg"
              className="rounded-full font-medium px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90"
            >
              <Link href="/docs/getting-started">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-medium px-8 py-6 text-base">
              <Link href="https://github.com/1sma31L/Riguelni" target="_blank" rel="noopener noreferrer">
                View on GitHub <Github className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" variants={childVariants}>
            {[
              {
                title: "Comprehensive Guide",
                description: "Step-by-step documentation covering all platform features",
              },
              {
                title: "Best Practices",
                description: "Learn industry-standard practices for freelancing",
              },
              {
                title: "API Reference",
                description: "Detailed API documentation for developers",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-xl border border-border/10 bg-background/50 backdrop-blur-sm hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
                variants={childVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

