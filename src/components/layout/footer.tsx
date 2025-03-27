"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Edit2, MessageSquare } from "lucide-react"
import Image from "next/image"

const footerLinks = {
  resources: [
    { name: "Getting Started", href: "/docs/getting-started" },
    { name: "Architecture", href: "/docs/architecture" },
    { name: "Best Practices", href: "/docs/best-practices" },
    { name: "Contributing", href: "/docs/contributing" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
  ],
  additional: [
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/riguelni", icon: Github },
    { name: "Discord", href: "https://discord.gg/riguelni", icon: MessageSquare },
    { name: "Twitter", href: "https://twitter.com/riguelni", icon: Twitter },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Riguelni Logo"
              width={64}
              height={64}
              className="w-8 h-8"
              priority
            />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">
              Riguelni Docs
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Explore the technical architecture and development practices behind the Riguelni freelancing platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Additional Resources</h3>
            <ul className="space-y-2">
              {footerLinks.additional.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} RIGELNI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/feedback" className="text-sm text-primary hover:text-primary/80 transition-colors">
                Submit Feedback
              </Link>
              <span className="text-muted-foreground/40">•</span>
              <Link href="/status" className="text-sm text-primary hover:text-primary/80 transition-colors">
                System Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 