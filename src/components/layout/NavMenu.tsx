"use client"

import React, { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Home, BookOpen, Users } from "lucide-react"

interface NavItem {
  title: string
  url: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Documentation",
    url: "/docs",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Community",
    url: "/community",
    icon: <Users className="h-4 w-4" />,
  },
]

export const NavMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <nav className="hidden xl:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.url}
          className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary"
          onMouseEnter={() => setHoveredItem(item.title)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="flex items-center space-x-2 text-[16px]">
            {item.icon}
            <span>{item.title}</span>
          </div>
          <motion.div
            className={cn(
              "absolute inset-0 rounded-md bg-primary/10",
              "transition-colors duration-200"
            )}
            initial={false}
            animate={{
              opacity: hoveredItem === item.title ? 1 : 0,
            }}
          />
        </Link>
      ))}
    </nav>
  )
} 