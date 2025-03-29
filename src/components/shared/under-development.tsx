"use client"

import type React from "react"
import type { FC } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const UnderDevelopment: FC = () => {
  // Animation for the code brackets
  const bracketVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  // Animation for the dots
  const dotsVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        times: [0, 0.5, 1],
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  }

  // Animation for the sorry badge
  const sorryVariants = {
    animate: {
      scale: [1, 1.05, 1],
      borderColor: ["hsl(var(--secondary))", "hsl(var(--primary))", "hsl(var(--secondary))"],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="w-full max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="mb-12 flex justify-center">
          <motion.div
            className="flex items-center text-5xl md:text-7xl font-mono font-bold text-foreground"
            initial="initial"
            animate="animate"
          >
            <motion.span variants={bracketVariants} className="text-primary">{`{`}</motion.span>
            <div className="flex items-center gap-3 mx-2 md:mx-4">
              <span>Riguelni</span>
              <span>Docs</span>
            </div>
            <motion.div className="flex">
              <motion.span variants={dotsVariants} className="text-primary opacity-0">
                .
              </motion.span>
              <motion.span
                variants={dotsVariants}
                className="text-primary opacity-0"
                style={{ animationDelay: "0.2s" }}
              >
                .
              </motion.span>
              <motion.span
                variants={dotsVariants}
                className="text-primary opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                .
              </motion.span>
            </motion.div>
            <motion.span variants={bracketVariants} className="text-primary">{`}`}</motion.span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.div
            variants={sorryVariants}
            animate="animate"
            className="inline-flex items-center px-6 py-3 rounded-full bg-secondary/20 border border-secondary mb-8"
          >
            <AlertTriangle className="h-5 w-5 mr-2 text-primary" />
            <span className="text-base font-medium text-primary">Sorry for the inconvenience</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Under Development</h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We&apos;re currently building something amazing. Our site is being crafted with care and will be available soon.
          </p>

          <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
              <Button
                asChild
                size="lg"
                className="h-12 px-6 font-medium text-base rounded-full bg-primary hover:bg-primary/90"
              >
                <Link href="/" className="inline-flex items-center justify-center gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-sm text-muted-foreground"
        >
        </motion.div>
      </div>
    </div>
  )
}

export default UnderDevelopment 