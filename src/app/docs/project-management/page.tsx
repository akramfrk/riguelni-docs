import Link from "next/link"
import { BookOpen, GitBranch, Users, Calendar, CheckCircle, FileCode2, Database, Smartphone, Palette } from "lucide-react"
import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import fs from "fs"
import path from "path"
import { MDXContent } from "@/components/mdx-content"

// Make this a Client Component if the entire page needs to be client-side
export const dynamic = 'force-dynamic'

export default async function ProjectManagementPage() {
  const introductionContent = await fs.promises.readFile(
    path.join(process.cwd(), "src/app/docs/project-management/introduction.mdx"),
    "utf-8"
  )

  const mdxSource = await serialize(introductionContent, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto flex max-w-7xl flex-1 gap-0 md:gap-6 px-4 pt-12 pb-6 relative">
        {/* Left sidebar */}
        <div className="hidden md:block w-64 shrink-0 border-r border-border/50 pr-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto pr-6">
            <div className="space-y-6 pb-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Project Management</div>
                    <div className="text-sm text-muted-foreground">Development workflow & tools</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">Current Version</div>
                    <div className="text-sm text-muted-foreground">v1.0.0</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Introduction</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#introduction" className="text-muted-foreground hover:text-primary">
                      Introduction
                    </Link>
                  </li>
                  <li>
                    <Link href="#overview-of-our-approach" className="text-muted-foreground hover:text-primary">
                      Overview of Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link href="#efficient-workflow" className="text-muted-foreground hover:text-primary">
                      Efficient Workflow
                    </Link>
                  </li>
                  <li>
                    <Link href="#collaborative-environment" className="text-muted-foreground hover:text-primary">
                      Collaborative Environment
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Version Control</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#core-objectives" className="text-muted-foreground hover:text-primary">
                      Core Objectives
                    </Link>
                  </li>
                  <li>
                    <Link href="#transparency" className="text-muted-foreground hover:text-primary">
                      Transparency
                    </Link>
                  </li>
                  <li>
                    <Link href="#efficiency" className="text-muted-foreground hover:text-primary">
                      Efficiency
                    </Link>
                  </li>
                  <li>
                    <Link href="#quality" className="text-muted-foreground hover:text-primary">
                      Quality
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Team Collaboration</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#key-components" className="text-muted-foreground hover:text-primary">
                      Key Components
                    </Link>
                  </li>
                  <li>
                    <Link href="#version-control" className="text-muted-foreground hover:text-primary">
                      Version Control
                    </Link>
                  </li>
                  <li>
                    <Link href="#team-collaboration" className="text-muted-foreground hover:text-primary">
                      Team Collaboration
                    </Link>
                  </li>
                  <li>
                    <Link href="#project-planning" className="text-muted-foreground hover:text-primary">
                      Project Planning
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <div className="font-medium">Project Planning</div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#why-project-management-matters" className="text-muted-foreground hover:text-primary">
                      Why Project Management Matters
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 max-w-3xl mx-auto prose prose-slate dark:prose-invert [&_h1]:scroll-mt-[50vh] [&_h2]:scroll-mt-[50vh] [&_h3]:scroll-mt-[50vh] pb-16">
          <MDXContent source={mdxSource} />
        </main>

        {/* Right sidebar */}
        <div className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <div className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#introduction" className="text-muted-foreground hover:text-primary">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="#overview-of-our-approach" className="text-muted-foreground hover:text-primary">
                    Overview of Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="#efficient-workflow" className="text-muted-foreground hover:text-primary">
                    Efficient Workflow
                  </Link>
                </li>
                <li>
                  <Link href="#collaborative-environment" className="text-muted-foreground hover:text-primary">
                    Collaborative Environment
                  </Link>
                </li>
                <li>
                  <Link href="#core-objectives" className="text-muted-foreground hover:text-primary">
                    Core Objectives
                  </Link>
                </li>
                <li>
                  <Link href="#key-components" className="text-muted-foreground hover:text-primary">
                    Key Components
                  </Link>
                </li>
                <li>
                  <Link href="#why-project-management-matters" className="text-muted-foreground hover:text-primary">
                    Why Project Management Matters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 