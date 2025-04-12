"use client"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';

type CodeBlockProps = {
  language: string
  filename: string
  highlightLines?: number[]
} & (
  | {
      code: string
      tabs?: never
    }
  | {
      code?: never
      tabs: Array<{
        name: string
        code: string
        language?: string
        highlightLines?: number[]
      }>
    }
)

export const CodeBlockComponent = ({ language, filename, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
  const [activeTab, setActiveTab] = React.useState(0)

  const tabsExist = tabs.length > 0
  const activeCode = tabsExist ? tabs[activeTab].code : code
  const activeLanguage = tabsExist ? tabs[activeTab].language || language : language
  const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines

  return (
    <div className="my-6">
      <SyntaxHighlighter
        language={activeLanguage}
        style={vscDarkPlus}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          },
        })}
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  )
}