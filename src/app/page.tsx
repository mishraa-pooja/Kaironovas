import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { FinalCTASection } from "@/components/sections/FinalCTASection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#080a12]">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ProcessSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
