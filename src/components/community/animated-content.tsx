'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"

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

const quoteVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02,
    y: -5,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

export function AnimatedContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative max-w-5xl mx-auto px-4 text-center"
    >
      {/* Badge */}
      <motion.div variants={childVariants} className="mb-8 flex items-center justify-center gap-2">
        <span className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium text-muted-foreground bg-background/50 backdrop-blur-sm shadow-sm">
          <Sparkles className="mr-2 h-3.5 w-3.5 text-primary animate-pulse" />
          Empowering Algeria
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        variants={childVariants}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
      >
        The Team Behind{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7877C6] via-[#7877C6]/80 to-[#7877C6]/60">
          Riguelni
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={childVariants}
        className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed"
      >
        Meet the passionate individuals building Algeria&apos;s premier freelancing platform. We&apos;re on a mission to connect talented Algerian freelancers with meaningful opportunities and empower the digital economy.
      </motion.p>

      {/* Quote Section */}
      <motion.div
        variants={childVariants}
        className="max-w-4xl mx-auto mt-16 mb-32 relative"
      >
        <motion.div 
          initial="initial"
          whileHover="hover"
          variants={quoteVariants}
          className="group relative h-full p-8 md:p-12 rounded-3xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-[0_0_50px_-12px_rgba(120,119,198,0.15)]"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
          <motion.div 
            variants={{
              initial: { x: 0, opacity: 0.1 },
              hover: { x: 20, opacity: 0.2, transition: { duration: 0.7 } }
            }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div 
            variants={{
              initial: { x: 0, opacity: 0.1 },
              hover: { x: -20, opacity: 0.2, transition: { duration: 0.7 } }
            }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          />

          {/* Quote mark */}
          <motion.div 
            variants={{
              initial: { scale: 1, opacity: 0.2 },
              hover: { scale: 1.1, opacity: 0.3, transition: { duration: 0.4 } }
            }}
            className="absolute top-6 left-8 text-primary"
          >
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </motion.div>

          {/* Quote content */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.blockquote 
              variants={childVariants}
              className="text-xl md:text-2xl font-medium text-center mb-8 leading-relaxed text-card-foreground px-4"
            >
              <motion.span 
                variants={{
                  initial: { y: 0 },
                  hover: { y: -3, transition: { duration: 0.4 } }
                }}
                className="block mb-4"
              >
                &quot;Connecting talent with opportunity, we&apos;re building more than a platform —&quot;
              </motion.span>
              <motion.span 
                variants={{
                  initial: { y: 0 },
                  hover: { y: -3, transition: { duration: 0.4, delay: 0.1 } }
                }}
                className="text-primary"
              >
                we&apos;re shaping the future of digital work in Algeria.
              </motion.span>
            </motion.blockquote>

            <motion.div 
              variants={{
                initial: { y: 0 },
                hover: { y: -3, transition: { duration: 0.4, delay: 0.2 } }
              }}
              className="flex items-center gap-3 mt-2"
            >
              <Image
                src="/logo.svg"
                alt="Riguelni Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <div className="flex flex-col items-start">
                <motion.cite 
                  variants={childVariants}
                  className="not-italic text-card-foreground font-semibold text-lg"
                >
                  Riguelni Team
                </motion.cite>
                <span className="text-sm text-muted-foreground">
                  Empowering Algerian Freelancers
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 