import Navigation from "@/sections/navigation"
import Hero from "@/sections/hero"
import Features from "@/sections/features"
import Timeline from "@/sections/timeline"
import DocumentationTeaser from "@/sections/documentation-teaser"
import Footer from "@/sections/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Features />
        <Timeline />
        <DocumentationTeaser />
      </main>
      <Footer />
    </div>
  )
}

