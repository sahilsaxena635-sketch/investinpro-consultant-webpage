"use client"

import { motion } from "framer-motion"
import { Home, Building2, TrendingUp, MapPin, FileCheck, Users } from "lucide-react"
import { fadeUp, staggerContainer, hoverLift } from "@/lib/animations"

const expertiseData = [
  {
    icon: Home,
    title: "Luxury Residential",
    description: "Premium apartments, villas, and penthouses in Gurgaon's most exclusive neighborhoods.",
    features: ["Golf Course Road", "DLF Phase 5", "Sector 42-43"],
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description: "Prime office spaces, retail shops, and commercial complexes in high-footfall areas.",
    features: ["Office Spaces", "Retail Shops", "Co-working"],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment guidance for maximum ROI in the real estate market.",
    features: ["Pre-Launch Deals", "Resale Properties", "Rental Yield"],
  },
  {
    icon: MapPin,
    title: "Location Analysis",
    description: "In-depth analysis of locations based on infrastructure and growth potential.",
    features: ["Metro Proximity", "Connectivity", "Future Growth"],
  },
  {
    icon: FileCheck,
    title: "Legal Assistance",
    description: "Complete documentation support and legal verification for hassle-free transactions.",
    features: ["RERA Compliance", "Documentation", "Registration"],
  },
  {
    icon: Users,
    title: "NRI Services",
    description: "Specialized services for NRI investors including property management and video tours.",
    features: ["Virtual Tours", "Property Management", "Rental Services"],
  },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">What I Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Areas of <span className="gold-gradient">Expertise</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={index}
              whileHover={hoverLift}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 h-full border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
