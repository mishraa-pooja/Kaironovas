import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemSection } from "@/components/sections/ProblemSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { CaseStudySection } from "@/components/sections/CaseStudySection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { InfraReviewSection } from "@/components/sections/InfraReviewSection"
import { AboutFounderSection } from "@/components/sections/AboutFounderSection"
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
        <TechStackSection />
        <CaseStudySection />
        <TestimonialsSection />
        <ProcessSection />
        <InfraReviewSection />
        <AboutFounderSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
