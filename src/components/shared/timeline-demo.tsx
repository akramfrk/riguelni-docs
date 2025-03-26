"use client"
import { Timeline } from "@/components/ui/timeline"
import { Calendar, Code2, Rocket, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function TimelineDemo() {
  const data = [
    {
      title: "Phase 1",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground text-lg font-semibold tracking-tight">
                Planning & Design
              </p>
              <p className="text-primary/60 text-sm font-medium">
                Week 1-2
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Define requirements & project scope
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Establishing clear objectives and deliverables for the platform
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  UI/UX design & wireframing in Figma
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Creating intuitive and modern user interfaces
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Backend architecture & database setup
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Designing scalable and efficient system architecture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground text-lg font-semibold tracking-tight">
                Development
              </p>
              <p className="text-primary/60 text-sm font-medium">
                Week 3-6
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Implement authentication & user management
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Building secure and seamless user authentication system
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Develop frontend & backend functionalities
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Creating responsive and feature-rich platform components
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Integrate messaging & payment systems
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Implementing real-time communication and secure payments
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground text-lg font-semibold tracking-tight">
                Testing & Deployment
              </p>
              <p className="text-primary/60 text-sm font-medium">
                Week 7-8
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Debug & test platform functionalities
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Ensuring smooth operation across all features
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Optimize performance & security
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Enhancing speed and implementing robust security measures
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              className="flex gap-4 items-start text-muted-foreground group"
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-base">
                  Deploy project on Vercel & finalize documentation
                </p>
                <p className="text-sm mt-1.5 text-muted-foreground/80 leading-relaxed">
                  Launching the platform and completing technical documentation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

