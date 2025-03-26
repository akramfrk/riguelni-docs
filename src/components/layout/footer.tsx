"use client"

import Link from "next/link"
import { Github, BookOpen, Code2, Layers, Users, Mail, Edit2 } from "lucide-react"

const footerLinks = {
  documentation: [
    { label: "Getting Started", href: "/docs/getting-started" },
    { label: "Architecture", href: "/docs/architecture" },
    { label: "Tech Stack", href: "/docs/tech-stack" },
    { label: "Components", href: "/docs/components" },
  ],
  resources: [
    { label: "Community", href: "/community" },
    { label: "Contributing", href: "/docs/contributing" },
    { label: "Changelog", href: "/docs/changelog" },
    { label: "Roadmap", href: "/docs/roadmap" },
  ],
  social: [
    { 
      label: "GitHub", 
      href: "https://github.com/1sma31L/Riguelni", 
      icon: Github,
      description: "View source code"
    },
    { 
      label: "Edit Docs", 
      href: "https://github.com/1sma31L/Riguelni/tree/main/docs", 
      icon: Edit2,
      description: "Help improve our docs"
    },
    { 
      label: "Contact", 
      href: "mailto:contact@riguelni.com", 
      icon: Mail,
      description: "Get in touch"
    },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40">
      <div className="relative py-8 w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="group inline-flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary/90">
                  Riguelni Docs
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Explore the technical architecture and development practices behind the Riguelni freelancing platform.
              </p>
              <div className="pt-2">
                <Link href="/docs/getting-started">
                  <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary/20 hover:border-primary/40 hover:bg-primary/5 h-9 px-4">
                    <BookOpen className="mr-2 h-4 w-4 text-primary" />
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Documentation links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-base font-semibold">Documentation</h3>
                <ul className="space-y-2">
                  {footerLinks.documentation.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-semibold">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold">Connect</h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <link.icon className="h-4 w-4 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium">{link.label}</span>
                      {link.description && (
                        <span className="ml-2 text-xs text-muted-foreground">— {link.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border/20">
            <div className="text-xs text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Riguelni Documentation. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/docs/privacy"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/docs/terms"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

