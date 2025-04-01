import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import fs from "fs"
import path from "path"
import { MDXContent } from "@/components/mdx-content"

export const dynamic = 'force-dynamic'

export default async function OverviewPage() {
  const content = await fs.promises.readFile(
    path.join(process.cwd(), "src/app/docs/project-management/content/introduction/overview/overview.mdx"),
    "utf-8"
  )

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  })

  return <MDXContent source={mdxSource} />
} 