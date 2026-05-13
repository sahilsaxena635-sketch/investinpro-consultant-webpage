"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Youtube, ArrowUp } from "lucide-react"
import Link from "next/link"
import { fadeUp, staggerContainer, hoverLift } from "@/lib/animations"

const footerLinks = {
  services: [
    { name: "Luxury Residential", href: "#projects" },
    { name: "Commercial Properties", href: "#expertise" },
    { name: "Investment Advisory", href: "#expertise" },
    { name: "NRI Services", href: "#expertise" },
  ],
  locations: [
    { name: "Golf Course Road", href: "#projects" },
    { name: "DLF Phase 5", href: "#projects" },
    { name: "Sector 42-43", href: "#projects" },
    { name: "New Gurgaon", href: "#projects" },
  ],
  company: [
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative pt-24 pb-32 md:pb-8 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-serif font-bold">
                <span className="text-foreground">Invest</span>
                <span className="gold-gradient">inPro</span>
              </h2>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Premium real estate consultancy helping investors and homebuyers discover extraordinary properties in Gurgaon.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a 
                href="tel:+919876543210" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </motion.a>
              <motion.a 
                href="mailto:sahil@investinpro.in" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                <Mail className="w-4 h-4 text-primary" />
                sahil@investinpro.in
              </motion.a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                Golf Course Road, Sector 42, Gurgaon
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-foreground mb-4">Prime Locations</h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/50 border border-primary/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} InvestinPro. All rights reserved. RERA Registered.
          </p>

          <div className="flex items-center gap-6">
            <motion.a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={scrollToTop}
        whileHover={hoverLift}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-24 md:bottom-8 right-6 w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </motion.button>
    </footer>
  )
}
