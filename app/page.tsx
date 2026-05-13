import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { BuildersSection } from "@/components/builders-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DigitalPresenceSection } from "@/components/DigitalPresenceSection"
import { ContactForm } from "@/components/contact-form"
import { AIAssistant } from "@/components/ai-assistant"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCTA } from "@/components/mobile-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Expertise Cards */}
      <ExpertiseSection />
      
      {/* Builder Associations */}
      <BuildersSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
    
      {/* Digital Presence */}
      <DigitalPresenceSection />
      
      {/* Lead Enquiry Form */}
      <ContactForm />
      
      {/* Premium Footer */}
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <AIAssistant />
      <MobileCTA />
    </main>
  )
}
