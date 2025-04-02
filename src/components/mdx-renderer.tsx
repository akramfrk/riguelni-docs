'use client'

import { MDXRemote } from "next-mdx-remote"

interface MDXRendererProps {
  source: any
}

export function MDXRenderer({ source }: MDXRendererProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} />
    </div>
  )
} 