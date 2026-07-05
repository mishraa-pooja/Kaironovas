import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ApproachSection } from "@/components/sections/ApproachSection"
import { TechnicalExpertiseSection } from "@/components/sections/TechnicalExpertiseSection"
import { PilotOfferSection } from "@/components/sections/PilotOfferSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhoWeHelpSection />
        <AboutSection />
        <ApproachSection />
        <TechnicalExpertiseSection />
        <PilotOfferSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
