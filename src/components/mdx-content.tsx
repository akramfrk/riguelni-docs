'use client'

import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Suspense, useEffect, useState } from 'react'

interface MDXContentProps {
  source: MDXRemoteSerializeResult
}

export function MDXContent({ source }: MDXContentProps) {
  const [MDXComponent, setMDXComponent] = useState<any>(null)

  useEffect(() => {
    // Import the component only on the client side
    import('next-mdx-remote').then((mod) => {
      setMDXComponent(() => mod.MDXRemote)
    })
  }, [])

  if (!MDXComponent) {
    return <div>Loading content...</div>
  }

  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <MDXComponent {...source} />
    </Suspense>
  )
} 