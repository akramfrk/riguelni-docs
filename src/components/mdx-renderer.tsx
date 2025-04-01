'use client'

import { MDXRemote } from "next-mdx-remote"
import { useEffect, useState } from "react"

interface MDXRendererProps {
  source: any
}

export function MDXRenderer({ source }: MDXRendererProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <MDXRemote {...source} />
    </div>
  )
} 