import TimelineDemo from "@/components/shared/timeline-demo"

export default function Timeline() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Platform Evolution</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The journey of Riguelni from concept to a thriving freelancing ecosystem
            </p>
          </div>
        </div>
        <TimelineDemo />
      </div>
    </section>
  )
}

