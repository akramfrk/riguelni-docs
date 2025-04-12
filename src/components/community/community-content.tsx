"use client"

import { Github, Linkedin, Mail, ChevronRight, Paintbrush, Star } from "lucide-react"
import { AnimatedContent } from "@/components/community/animated-content"
import Image from "next/image"
import { Suspense, useState, useEffect } from "react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  image: string
  tasks: string[]
  contact: {
    email: string
    github?: string
    linkedin?: string
    behance?: string
  }
  showGithub?: boolean
  featured?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "BOUSSEKINE Mohamed Ismail",
    role: "Project Manager",
    image: "/team/ismail.webp",
    tasks: [
      "Manages project execution and team coordination",
      "Develops and manages the website logic",
      "Ensures database security and API integrations and its documentation"
    ],
    contact: {
      email: "am.boussekine@ensta.edu.dz ",
      github: "https://github.com/1sma31L",
      linkedin: "https://linkedin.com/in/smail-boussekine"
    },
    showGithub: true,
    featured: true
  },
  {
    name: "FERKIOUI Akram",
    role: "Styling & Documentation",
    image: "/team/akram.webp",
    tasks: [
      "Designs the visual styles and layout of the website",
      "Develops the web site for project documentation",
      "Ensures design consistency across the website"
    ],
    contact: {
      email: "aa.ferkioui@ensta.edu.dz",
      github: "https://github.com/akramfrk",
      linkedin: "https://www.linkedin.com/in/ferkioui-akram"
    }
  },
  {
    name: "HAMMOUTI Walid",
    role: "Mobile App Developer",
    image: "/team/walid.webp",
    tasks: [
      "Develops the mobile application for the platform",
      "Implements UI components and API integrations for mobile users",
      "Ensures a seamless user experience on mobile devices"
    ],
    contact: {
      email: "aw.hammouti@ensta.edu.dz",
      github: "https://github.com/walid-hammouti",
      linkedin: "https://www.linkedin.com/in/hammouti-walid-616952315"
    }
  },
  {
    name: "AMEDJKOUH Darine",
    role: "Frontend Developer",
    image: "/team/darine.webp",
    tasks: [
      "Builds the frontend structure of the website",
      "Implements interactive features and logic",
      "Optimizes website performance for a better user experience"
    ],
    contact: {
      email: "ad.amedjkouh@ensta.edu.dz",
      github: "https://github.com/Anastasia-programmer",
      linkedin: "https://linkedin.com/in/darine-amedjkouh"
    }
  },
  {
    name: "BENTALEB Lisa",
    role: "UI/UX Designer",
    image: "/team/lisa.webp",
    tasks: [
      "Designs the user interface using Figma",
      "Focuses on User Interface, User experience",
      "Creates intuitive Navigation flow"
    ],
    contact: {
      email: "al.bentaleb@ensta.edu.dz",
      behance: "https://behance.net/lisabentaleb",
      linkedin: "https://www.linkedin.com/in/lisa-bentaleb-19334a332"
    }
  }
]

// Loading skeleton for team member card
function TeamMemberCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden h-full animate-pulse">
      <div className="aspect-square bg-muted" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-muted rounded w-3/4" />
        <div className="h-4 bg-muted rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}

// Loading skeleton for the entire community page
function CommunityPageSkeleton() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-24 relative">
        {/* Animated content skeleton */}
        <div className="h-96 bg-muted rounded-lg animate-pulse mb-16" />

        {/* Top row skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full"
            >
              <TeamMemberCardSkeleton />
            </div>
          ))}
        </div>

        {/* Bottom row skeleton */}
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-full md:w-[calc(50%-32px)] max-w-md"
            >
              <TeamMemberCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Error boundary for team member card
function TeamMemberCardError() {
  return (
    <div className="bg-destructive/10 backdrop-blur-sm rounded-2xl overflow-hidden h-full border border-destructive/20 p-6 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-4">
        <Paintbrush className="w-8 h-8 text-destructive" />
      </div>
      <h3 className="text-destructive font-medium mb-2">Failed to load profile</h3>
      <p className="text-destructive/80 text-sm">Please try refreshing the page</p>
    </div>
  )
}

// Team Member Card Component with loading and error states
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      className={`group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden h-full
                    transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                    ${
                      member.featured
                        ? "shadow-lg border border-primary/20 ring-1 ring-primary/10"
                        : "shadow-md border border-muted/60 hover:border-muted"
                    }`}
    >
      <div className="aspect-square relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Featured badge */}
        {member.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            <Star className="w-3 h-3 fill-white" />
            <span>Lead</span>
          </div>
        )}

        {/* Image with loading state */}
        <div className="relative w-full h-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjU1VkZFRkpKQj4+Qj7/2wBDARUXFx4aHjshITtBNkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        {/* Image overlay with contact info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end">
          <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
            <h3 className="text-white font-medium mb-2 flex items-center">
              <span className="w-1 h-4 bg-primary mr-2 rounded-full"></span>
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={`mailto:${member.contact.email}`}
                className="p-2.5 rounded-full bg-white/10 border border-transparent hover:border-primary hover:scale-110 transition-all text-white"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              {(member.contact.github || member.showGithub) && (
                <a
                  href={member.contact.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 border border-transparent hover:border-primary hover:scale-110 transition-all text-white"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.contact.behance && (
                <a
                  href={member.contact.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 border border-transparent hover:border-primary hover:scale-110 transition-all text-white"
                  title="Behance"
                >
                  <Paintbrush className="w-5 h-5" />
                </a>
              )}
              {member.contact.linkedin && (
                <a
                  href={member.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 border border-transparent hover:border-primary hover:scale-110 transition-all text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-muted-foreground text-sm">{member.role}</p>
        </div>

        <ul className="space-y-2 text-sm text-muted-foreground">
          {member.tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 mt-0.5 text-primary/60" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function CommunityContent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <CommunityPageSkeleton />
  }

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
            {/* Title Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight bg-clip-text">
                  <span className="text-foreground">Riguelni</span>{" "}
                  <span className="bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">
                    Community
                  </span>
                </h1>
                <div className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Team
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground/80 max-w-2xl">
                Meet the talented team behind Riguelni. Our diverse group of developers, designers, and managers work together to create an exceptional freelancing platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Suspense fallback={<CommunityPageSkeleton />}>
          <AnimatedContent />
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="w-full transform hover:translate-y-0 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16">
            {teamMembers.slice(3).map((member, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-32px)] max-w-md transform hover:translate-y-0 transition-all duration-500"
                style={{
                  animationDelay: `${(index + 3) * 150}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  )
} 