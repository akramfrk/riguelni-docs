import type { Metadata } from "next"
import { Github, Linkedin, Mail, ChevronRight, Paintbrush, Star } from "lucide-react"
import { AnimatedContent } from "@/components/community/animated-content"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Community | Riguelni",
  description: "Meet the team behind Riguelni",
}

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
    image: "/team/smail.jpg",
    tasks: [
      "Manages project execution and team coordination",
      "Develops and manages the website logic",
      "Ensures database security and API integrations and its documentation"
    ],
    contact: {
      email: "m.boussekine@esi-sba.dz",
      github: "https://github.com/smail19",
      linkedin: "https://linkedin.com/in/smail-boussekine"
    },
    showGithub: true,
    featured: true
  },
  {
    name: "FERKIOUI Akram",
    role: "Styling & Documentation",
    image: "/team/akram.jpg",
    tasks: [
      "Designs the visual styles and layout of the website",
      "Prepares the web site for project documentation",
      "Ensures design consistency across the website"
    ],
    contact: {
      email: "a.ferkioui@esi-sba.dz",
      github: "https://github.com/akramferkioui",
      linkedin: "https://linkedin.com/in/akram-ferkioui"
    }
  },
  {
    name: "AMEDJKOUH Darine",
    role: "Frontend Developer",
    image: "/team/darine.jpg",
    tasks: [
      "Builds the frontend structure of the website",
      "Implements interactive features and logic",
      "Optimizes website performance for a better user experience"
    ],
    contact: {
      email: "d.amedjkouh@esi-sba.dz",
      github: "https://github.com/darineamedjkouh",
      linkedin: "https://linkedin.com/in/darine-amedjkouh"
    }
  },
  {
    name: "HAMMOUTI Walid",
    role: "Mobile App Developer",
    image: "/team/walid.jpg",
    tasks: [
      "Develops the mobile application for the platform",
      "Implements UI components and API integrations for mobile users",
      "Ensures a seamless user experience on mobile devices"
    ],
    contact: {
      email: "w.hammouti@esi-sba.dz",
      github: "https://github.com/walidhammouti",
      linkedin: "https://linkedin.com/in/walid-hammouti"
    }
  },
  {
    name: "BENTALEB Lisa",
    role: "UI/UX Designer",
    image: "/team/lisa.jpg",
    tasks: [
      "Designs the user interface using Figma",
      "Focuses on User Interface, User experience",
      "Creates intuitive Navigation flow"
    ],
    contact: {
      email: "l.bentaleb@esi-sba.dz",
      behance: "https://behance.net/lisabentaleb",
      linkedin: "https://linkedin.com/in/lisa-bentaleb"
    }
  }
]

export default function CommunityPage() {
  const topRow = teamMembers.slice(0, 3)
  const bottomRow = teamMembers.slice(3)

  return (
    <div className="community-page">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <AnimatedContent />

        {/* Top row - first three team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {topRow.map((member, index) => (
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

        {/* Bottom row - last two team members (centered) */}
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16">
          {bottomRow.map((member, index) => (
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
      </div>
    </div>
  )
}

// Team Member Card Component
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
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all text-white"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              {(member.contact.github || member.showGithub) && (
                <a
                  href={member.contact.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all text-white"
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
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all text-white"
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
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 transition-all text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image with enhanced hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </div>

      <div className="p-7">
        <div className="flex flex-col mb-6">
          <div className="flex items-center mb-1">
            {member.featured && <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>}
            <p className="text-primary/80 font-medium text-sm tracking-wide uppercase">{member.role}</p>
          </div>
          <h2 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{member.name}</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary/80 to-primary/0 mt-3"></div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-base flex items-center">
            <span className="w-1 h-4 bg-primary/30 mr-2 rounded-full"></span>
            Responsibilities
          </h3>
          <ul className="space-y-3 pl-1">
            {member.tasks.map((task, i) => (
              <li
                key={i}
                className="flex items-start text-sm text-muted-foreground group/task hover:text-foreground transition-colors"
              >
                <div className="mr-3 mt-0.5 flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-primary/70 group-hover/task:translate-x-0.5 transition-transform" />
                </div>
                <span className="leading-tight">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

