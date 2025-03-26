"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Command } from "@/components/lego/Command"
import { HumburgerMenu } from "@/components/ui/hamburger-menu"
import Image from "next/image"
import Link from "next/link"
import { MobileNavBar } from "@/components/mobile/MobileNavBar"
import { NavMenu } from "./NavMenu"
import { ThemeToggler } from "@/components/lego/ThemeToggler"
import { useMobileToggler } from "@/hooks/useMobileToggler"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { isOpen, setIsOpen, isMobile } = useMobileToggler()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 0)
      
      // Calculate scroll progress (0 to 1) based on first 300px of scroll
      const progress = Math.min(scrollPosition / 300, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav>
      {/* Background layer with lower z-index */}
      <div 
        className="fixed top-0 z-[100] w-full transition-all duration-300"
        style={{
          backgroundColor: scrollProgress === 0 ? 'rgb(0, 0, 0)' : `rgb(28, 25, 23)`,
          backdropFilter: scrolled ? 'blur(8px)' : 'none'
        }}
      >
        {/* Main navbar content */}
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled ? "border-b border-border/40 shadow-sm" : ""
          }`}
        >
          <div className="container mx-auto flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  height={32}
                  width={32}
                  src="/logo.svg"
                  alt=""
                  className="w-6 flex-1"
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
      <div className="h-14" />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

