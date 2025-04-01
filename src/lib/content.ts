import { serialize } from "next-mdx-remote/serialize"
import rehypeSlug from "rehype-slug"
import fs from "fs"
import path from "path"

export async function readContent(contentPath: string) {
  const fullPath = path.join(process.cwd(), "src/app/docs", contentPath, `${path.basename(contentPath)}.mdx`)
  const content = await fs.promises.readFile(fullPath, "utf-8")
  
  return await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  })
} 