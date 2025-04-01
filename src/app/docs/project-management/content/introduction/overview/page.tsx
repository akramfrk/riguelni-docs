import { MDXRenderer } from "@/components/mdx-renderer"
import { readContent } from "@/lib/content"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function OverviewPage() {
  const source = await readContent("project-management/content/introduction/overview")
  
  return (
    <main className="flex-1 max-w-3xl mx-auto [&_h1]:scroll-mt-[50vh] [&_h2]:scroll-mt-[50vh] [&_h3]:scroll-mt-[50vh] pb-16 pt-16">
      <div className="min-h-[200px]">
        <MDXRenderer source={source} />
      </div>

      <div className="flex items-center justify-end mt-20 pt-8 border-t border-border/40">
        <Link
          href="/docs/project-management/content/version-control/git-github-code-hosting"
          className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
        >
          <div className="flex flex-col items-end relative z-10">
            <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
              Next
            </span>
            <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
              Git & GitHub for Code Hosting
            </span>
          </div>
          <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </div>
    </main>
  )
} 