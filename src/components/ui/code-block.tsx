"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"
import { IconCopy, IconCheck } from "@tabler/icons-react"

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
  tabs?: { name: string; code: string }[]
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language, filename, tabs }) => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const codeRef = useRef<HTMLDivElement>(null)

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(tabs ? tabs[activeTab].code : code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  useEffect(() => {
    setCopied(false) // Reset copied state when code changes
  }, [code, tabs, activeTab])

  return (
    <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm overflow-x-auto">
      {filename && (
        <div className="flex justify-between items-center py-2 flex-wrap gap-2">
          <div className="text-xs text-zinc-400 break-all">{filename}</div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans ml-auto"
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
          </button>
        </div>
      )}

      {tabs && (
        <div className="flex overflow-x-auto pb-1 -mx-1">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-2 md:px-3 !py-1 md:!py-2 text-xs transition-colors font-sans whitespace-nowrap ${
                activeTab === index ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      <div ref={codeRef}>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.875rem", // text-sm equivalent
            maxWidth: "100%",
            overflowX: "auto",
          }}
        >
          {tabs ? tabs[activeTab].code : code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock
