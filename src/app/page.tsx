import Hero from "@/sections/hero";
import Features from "@/sections/features";
import { DocumentationTeaser } from "@/components/shared/documentation-teaser";
import TimelineDemo from "@/components/shared/timeline-demo";

export default function MarketingPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <Features />
      <section className="py-16 md:py-24">
        <TimelineDemo />
      </section>
      <section className="py-16 md:py-24">
        <DocumentationTeaser />
      </section>
    </div>
  );
}

