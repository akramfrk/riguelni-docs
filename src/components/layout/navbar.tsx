"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/lego/Command"
import { HumburgerMenu } from "@/components/ui/hamburger-menu"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileNavBar } from "@/components/mobile/MobileNavBar"
import { NavMenu } from "./NavMenu"
import { ThemeToggler } from "@/components/lego/ThemeToggler"
import { useMobileToggler } from "@/hooks/useMobileToggler"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, setIsOpen, isMobile } = useMobileToggler()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav>
      {/* Background layer with lower z-index */}
      <div className={`fixed top-0 z-40 w-full backdrop-blur-sm transition-colors duration-200 ${
        scrolled || !isHomePage
          ? "bg-background/80" 
          : "bg-white dark:bg-[#050505]"
      }`}>
        {/* Main navbar content */}
        <nav
          className={`w-full border-b border-border/40 transition-all duration-300 ${
            scrolled || !isHomePage ? "shadow-sm" : ""
          }`}>
          <div className={`container mx-auto flex items-center justify-between px-4 ${
            scrolled || !isHomePage ? "h-14" : "h-16"
          }`}>
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Riguelni Logo"
                  width={64}
                  height={64}
                  className="w-7 flex-1"
                  priority
                />
              </Link>
              <NavMenu />
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <Command />
              </div>
              <div className="hidden lg:block">
                <ThemeToggler />
              </div>
              <div className="lg:hidden block">
                <HumburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className={`transition-all duration-300 ${
        scrolled || !isHomePage ? "h-14" : "h-16"
      }`} />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

