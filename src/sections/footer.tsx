"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Edit2 } from "lucide-react"

const footerLinks = {
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api" },
    { label: "Community", href: "/community" },
    { label: "About", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/1sma31L/Riguelni", icon: Github },
    { label: "Twitter", href: "https://twitter.com/riguelni", icon: Twitter },
    { label: "LinkedIn", href: "https://linkedin.com/company/riguelni", icon: Linkedin },
    { label: "Contact", href: "mailto:contact@riguelni.com", icon: Mail },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-8 md:py-12">
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
                    {link.label}
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
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Additional Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog & Updates
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/1sma31L/Riguelni/edit/main/docs"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <Edit2 className="h-4 w-4" />
                  Edit on GitHub
                </Link>
              </li>
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
                    {link.label}
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

