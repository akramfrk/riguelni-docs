"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BookOpen, Code, Github, ChevronRight, Home, Layers, Users } from "lucide-react"

interface MobileNavBarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Documentation",
    url: "/docs",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Architecture",
    url: "/docs/architecture",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Community",
    url: "/community",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "GitHub",
    url: "https://github.com/1sma31L/Riguelni",
    icon: <Github className="h-5 w-5" />,
  },
]

export function MobileNavBar({ isOpen, setIsOpen }: MobileNavBarProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 top-14 bg-black lg:hidden">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto no-scrollbar">
          <div className="flex flex-col gap-2 p-4">
            <div className="pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-accent/10 text-white"
                  onClick={() => setIsOpen(false)}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center text-white/60">
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-white/60" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 