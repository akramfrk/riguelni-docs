"use client"

import { ArrowRight, Code2, Database, Globe, Layers, Smartphone, Sparkles, GitBranch, CheckCircle, Users, Calendar } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiRedux,
  SiDart,
  SiFlutter,
  SiSupabase,
  SiAppwrite
} from "react-icons/si"
import { IconType } from "react-icons"
import { Button } from "@/components/ui/button"
import React from "react"

type TechStackItem = {
  name: string;
  Component: IconType;
};

// Loading skeleton for the documentation page
function DocumentationPageSkeleton() {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Header Section Skeleton */}
      <div className="border-b border-border/40 bg-background/30 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col space-y-6 py-8">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-24 bg-muted/50 rounded animate-pulse" />
              <span className="text-muted-foreground/40">/</span>
              <div className="h-4 w-16 bg-muted/50 rounded animate-pulse" />
            </div>

            {/* Title Section Skeleton */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-64 bg-muted/50 rounded animate-pulse" />
                <div className="h-6 w-16 bg-muted/50 rounded animate-pulse" />
              </div>

              {/* Description Skeleton */}
              <div className="h-4 w-full max-w-2xl bg-muted/50 rounded animate-pulse" />
              <div className="h-4 w-3/4 max-w-2xl bg-muted/50 rounded animate-pulse" />

              {/* Quick Links Skeleton */}
              <div className="flex items-center gap-4 pt-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-4 w-24 bg-muted/50 rounded animate-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container Skeleton */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Platform Introduction Skeleton */}
        <div className="max-w-[1000px] mx-auto mb-24">
          <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mx-auto mb-16" />
          <div className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden p-8">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-muted/50 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-muted/50 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-muted/50 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Skeleton */}
        <div className="max-w-[1000px] mx-auto mb-24">
          <div className="h-8 w-48 bg-muted/50 rounded animate-pulse mx-auto mb-16" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 animate-pulse"
              >
                <div className="h-12 w-12 bg-muted/50 rounded mb-4" />
                <div className="h-4 w-3/4 bg-muted/50 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DocumentationPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <DocumentationPageSkeleton />
  }

  const techStack: TechStackItem[] = [
    { name: "TypeScript", Component: SiTypescript },
    { name: "JavaScript", Component: SiJavascript },
    { name: "CSS", Component: SiCss3 },
    { name: "TailwindCSS", Component: SiTailwindcss },
    { name: "React.JS", Component: SiReact },
    { name: "Next.JS", Component: SiNextdotjs },
    { name: "Framer Motion", Component: SiFramer },
    { name: "Redux", Component: SiRedux },
    { name: "Dart", Component: SiDart },
    { name: "Flutter", Component: SiFlutter },
    { name: "Supabase", Component: SiSupabase },
    { name: "Appwrite", Component: SiAppwrite },
  ];

  return (
    <div className="relative py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Header Section */}
      <div className="border-b border-border/40 bg-background/30 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col space-y-6 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-medium">Overview</span>
              <span className="text-muted-foreground/40">/</span>
              <Link 
                href="#documentation-resources" 
                className="text-muted-foreground hover:text-primary/80 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#documentation-resources')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Documentation
              </Link>
            </div>

            {/* Title Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight bg-clip-text">
                  <span className="text-foreground">Riguelni</span>{" "}
                  <span className="bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">
                    Documentation
                  </span>
                </h1>
                <div className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  v1.0.0
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground/80 max-w-2xl">
                Explore our comprehensive documentation to learn about Riguelni&apos;s architecture, features, and best
                practices for building modern applications.
              </p>

              {/* Quick Links */}
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/docs/frontend"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Frontend
                </Link>
                <Link
                  href="/docs/backend"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Database & APIs
                </Link>
                <Link
                  href="/docs/mobile"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  Mobile App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Platform Introduction */}
        <div className="max-w-[1000px] mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
            <div className="relative inline-flex flex-col items-center">
              <span className="text-primary/40 text-sm font-medium tracking-wider mb-2 uppercase">OVERVIEW</span>
              <span className="relative inline-block">
                Platform Introduction
                <span className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-md -z-10" />
              </span>
            </div>
          </h2>

          <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] hover:border-primary/50 transition-all duration-500 group">
            <div className="relative">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[80px] -z-10" />

              <div className="p-8 md:p-12 relative">
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20 shadow-inner">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent group-hover:text-primary transition-colors mb-2">
                      About RIGELNI
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary/40 to-primary/20 rounded-full group-hover:w-24 transition-all duration-300" />
                  </div>
                </div>

                <p className="text-muted-foreground/90 text-lg mb-12 leading-relaxed max-w-none">
                  RIGELNI is a modern freelance platform that connects skilled professionals with clients looking for
                  services. The platform provides a secure and intuitive environment where users can both buy and sell
                  services, making it a flexible solution for freelancers and businesses alike. With robust features
                  such as secure payments, real-time chat, and an easy-to-use dashboard, RIGELNI aims to streamline
                  freelance transactions and project management.
                </p>

                <div className="mt-10">
                  <h4 className="font-semibold mb-8 flex items-center gap-3 text-primary text-lg">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 shadow-inner">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    Platform Availability
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-5 p-6 rounded-lg bg-gradient-to-br from-background/90 to-background/70 border border-border/50 hover:border-primary/30 hover:bg-background/90 transition-all duration-300 shadow-lg">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-lg mb-1 block bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                          Website
                        </span>
                        <p className="text-sm text-muted-foreground/80">Desktop-friendly platform for easy access</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 p-6 rounded-lg bg-gradient-to-br from-background/90 to-background/70 border border-border/50 hover:border-primary/30 hover:bg-background/90 transition-all duration-300 shadow-lg">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-lg mb-1 block bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                          Mobile App
                        </span>
                        <p className="text-sm text-muted-foreground/80">Optimized experience for users on the go</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="max-w-[1000px] mx-auto mb-24">
          <div className="relative flex flex-col items-center mb-8">
            {/* Background accents */}
            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-[2rem] blur-2xl -z-10" />
            <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-b from-primary/3 via-transparent to-transparent rounded-3xl blur-xl -z-10" />
            
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              <div className="relative inline-flex flex-col items-center">
                <span className="text-primary/50 text-sm font-medium tracking-[0.2em] mb-3 uppercase flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                  </div>
                  Technologies
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                    <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  </div>
                </span>
                <div className="relative">
                  <span className="relative inline-block px-4 py-2">
                    <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                      Tech Stack
                    </span>
                    {/* Decorative elements */}
                    <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg -z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                  </span>
                </div>
              </div>
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8 text-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
              <Layers className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                Powered by Modern Technologies
              </h3>
              <p className="text-muted-foreground/80 text-sm max-w-lg">
                Our platform is built with cutting-edge technologies to ensure scalability, performance, and developer productivity
              </p>
            </div>
          </div>

        </div>

        {/* Project Management Workflow */}
        <div className="max-w-[1400px] mx-auto mb-24">
          <div className="relative flex flex-col items-center mb-8">
            {/* Background accents */}
            <div className="absolute -inset-x-8 -inset-y-8 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-[2rem] blur-2xl -z-10" />
            <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-b from-primary/3 via-transparent to-transparent rounded-3xl blur-xl -z-10" />
            
            <h2 className="text-2xl md:text-4xl font-bold text-center">
              <div className="relative inline-flex flex-col items-center">
                <span className="text-primary/50 text-sm font-medium tracking-[0.2em] mb-3 uppercase flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                  </div>
                  Workflow
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/30" />
                    <span className="h-px w-8 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                  </div>
                </span>
                <div className="relative">
                  <span className="relative inline-block px-4 py-2">
                    <span className="relative z-10 bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                      Project Management
                    </span>
                    {/* Decorative elements */}
                    <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg -z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                  </span>
                </div>
              </div>
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8 text-center">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
              <GitBranch className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                Discover Our Development Process
              </h3>
              <p className="text-muted-foreground/80 text-sm max-w-lg">
                Explore our streamlined workflow and the tools we use to maintain high-quality code and efficient collaboration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-0 blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">Version Control</h4>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    We use Git & GitHub for version control with a structured branching strategy:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Git & GitHub for code hosting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      VS Code for development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Feature branches for new features
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-0 blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">Team Collaboration</h4>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Tools we use for effective collaboration:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      GitHub for code collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Telegram for team communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Jira for project tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              {/* Background accents */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-primary/5 via-primary/2 to-transparent opacity-0 blur-2xl -z-10 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[40px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">Project Planning</h4>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    Our project planning approach includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Google Meet for weekly meetings
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Google Docs for documentation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                      Agile methodology with sprints
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link href="/docs/project-management" className="group relative">
            <Button
              size="lg"
              className="h-12 px-6 font-medium text-base rounded-full bg-primary hover:bg-primary/90"
            >
              <span className="flex items-center gap-2">
                <span>View Project Management Details</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Documentation Resources */}
      <div id="documentation-resources" className="max-w-[1800px] mx-auto relative px-6 scroll-mt-24">
        {/* Background accents */}
        <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10" />

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
          <div className="relative inline-flex flex-col items-center">
            <span className="text-primary/30 text-sm font-medium mb-2">EXPLORE</span>
            <span className="relative inline-block">
              Documentation Resources
              <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/20 rounded-md -z-10" />
            </span>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              icon: Code2,
              description:
                "Explore our modern frontend architecture built with Next.js, React, and Tailwind CSS. Learn about component structure, state management, and UI/UX patterns.",
              href: "/docs/frontend",
              accent: "from-[#7877C6]/20 via-transparent to-transparent",
            },
            {
              title: "Database & APIs",
              icon: Database,
              description:
                "Discover our database schema, API endpoints, and backend architecture. Understand data models, relationships, and API documentation.",
              href: "/docs/backend",
              accent: "from-primary/20 via-transparent to-transparent",
            },
            {
              title: "Mobile App",
              icon: Smartphone,
              description:
                "Learn about our mobile application architecture, features, and development process. Explore mobile-specific components and API integrations.",
              href: "/docs/mobile",
              accent: "from-[#7877C6]/20 via-transparent to-transparent",
            },
          ].map((card) => (
            <Link key={card.title} href={card.href} className="group">
              <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(120,119,198,0.3)] overflow-hidden">
                {/* Card accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[80px] -z-10" />

                <div className="relative">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                        {card.title}
                      </h3>
                      <div className="h-1 w-16 bg-primary/30 rounded-full group-hover:w-24 transition-all duration-300" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{card.description}</p>

                  <div className="flex items-center text-primary font-medium text-lg group-hover:translate-x-2 transition-transform duration-300">
                    View Documentation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 

