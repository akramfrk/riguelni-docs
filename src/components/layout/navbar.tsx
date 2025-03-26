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
  const { isOpen, setIsOpen, isMobile } = useMobileToggler()

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
      <div className={`fixed top-0 z-[100] w-full backdrop-blur-sm transition-colors duration-200 ${
        scrolled 
          ? "bg-[#f6f1f8] dark:bg-background/95" 
          : "bg-white dark:bg-[#050505]"
      }`}>
        {/* Main navbar content */}
        <nav
          className={`w-full border-b border-border/40 transition-all duration-300 ${
            scrolled ? "shadow-sm" : ""
          }`}>
          <div className={`container mx-auto flex items-center justify-between px-4 ${
            scrolled ? "h-14" : "h-16"
          }`}>
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  height={64}
                  width={64}
                  src="/logo.svg"
                  alt=""
                  className="w-5 flex-1"
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
        scrolled ? "h-16" : "h-14"
      }`} />

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

