import { HoverEffect, Card, CardTitle, CardDescription } from "@/components/ui/card-hover-effect"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Platform Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what makes Riguelni the ideal platform for freelancers and clients
            </p>
          </div>
        </div>
        <div className="w-full max-w-[1400px] mx-auto">
          <HoverEffect items={features} />
        </div>
      </div>
    </section>
  )
}

export const features = [
  {
    title: "Secure Payments",
    description: "Built-in escrow system ensures safe transactions between clients and freelancers.",
    link: "/docs/features/payments",
  },
  {
    title: "Real-time Chat",
    description: "Instant messaging system for seamless communication between parties.",
    link: "/docs/features/chat",
  },
  {
    title: "Project Management",
    description: "Built-in tools for tracking progress, deadlines, and deliverables.",
    link: "/docs/features/project-management",
  },
  {
    title: "Skill Matching",
    description: "Advanced algorithm to match clients with the perfect freelancers.",
    link: "/docs/features/skill-matching",
  },
  {
    title: "Portfolio Showcase",
    description: "Beautiful portfolio pages to showcase your work and skills.",
    link: "/docs/features/portfolio",
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics to track your earnings and performance.",
    link: "/docs/features/analytics",
  },
]

