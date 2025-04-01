'use client'

import { MDXRemote } from "next-mdx-remote"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface MDXRendererProps {
  source: any
}

export function MDXRenderer({ source }: MDXRendererProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6 animate-in fade-in-50">
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-9 w-[60%]" />
          <Skeleton className="h-5 w-[40%] bg-muted/50" />
        </div>

        {/* First paragraph */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-[97%]" />
          <Skeleton className="h-5 w-[95%]" />
          <Skeleton className="h-5 w-[92%]" />
          <Skeleton className="h-5 w-[88%]" />
        </div>

        {/* Subheading */}
        <Skeleton className="h-7 w-[45%] mt-8" />

        {/* Second paragraph */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-[96%]" />
          <Skeleton className="h-5 w-[94%]" />
          <Skeleton className="h-5 w-[98%]" />
        </div>

        {/* List items */}
        <div className="space-y-3 pl-4">
          <Skeleton className="h-5 w-[85%]" />
          <Skeleton className="h-5 w-[82%]" />
          <Skeleton className="h-5 w-[88%]" />
        </div>

        {/* Final paragraph */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-[91%]" />
          <Skeleton className="h-5 w-[89%]" />
          <Skeleton className="h-5 w-[94%]" />
        </div>
      </div>
    )
  }

  return (
    <div className="prose prose-slate dark:prose-invert max-w-none animate-in fade-in-50 duration-500">
      <MDXRemote {...source} />
    </div>
  )
} 