import { Hero } from "@/components/hero"
import { WhyBalanX } from "@/components/why-balanx"
import { HowItWorks } from "@/components/how-it-works"
import { HealthcareFact } from "@/components/healthcare-fact"
import { ExperienceShowcase } from "@/components/experience-showcase"
import { Products } from "@/components/products"
import { Science } from "@/components/science"
import { Specifications } from "@/components/specifications"
import { Community } from "@/components/community"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <Hero />
      <WhyBalanX />
      <HowItWorks />
      <HealthcareFact />
      <ExperienceShowcase />
      <Products />
      <Science />
      <Specifications />
      <Community />
    </main>
  )
}
