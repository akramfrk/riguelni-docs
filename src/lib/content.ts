import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import fs from "fs"
import path from "path"

let contentCache: { [key: string]: any } = {}

export async function readContent(contentPath: string) {
  // Check cache first
  if (contentCache[contentPath]) {
    return contentCache[contentPath]
  }

  const fullPath = path.join(process.cwd(), "src/app/docs", contentPath, `${path.basename(contentPath)}.mdx`)
  const content = await fs.promises.readFile(fullPath, "utf-8")
  
  const serializedContent = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
    parseFrontmatter: true,
  })

  // Cache the result
  contentCache[contentPath] = serializedContent

  return serializedContent
} 