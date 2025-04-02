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

  try {
    const fullPath = path.join(process.cwd(), "src/app/docs", contentPath, `${path.basename(contentPath)}.mdx`)
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`MDX file not found at path: ${fullPath}`)
    }

    const content = await fs.promises.readFile(fullPath, "utf-8")
    
    if (!content) {
      throw new Error(`Empty MDX file at path: ${fullPath}`)
    }

    const serializedContent = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
      },
      parseFrontmatter: true,
    })

    // Cache the result
    contentCache[contentPath] = serializedContent

    return serializedContent
  } catch (error) {
    console.error(`Error reading MDX content for path ${contentPath}:`, error)
    throw error
  }
} 