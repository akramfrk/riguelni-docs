'use client'

import { MDXRemote } from "next-mdx-remote"

interface MDXContentProps {
  source: any
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} />
    </div>
  )
} 