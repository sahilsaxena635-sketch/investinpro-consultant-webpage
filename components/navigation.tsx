"use client"

import { motion } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass border-b border-primary/10" : ""
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-serif font-bold">
                  <span className="text-foreground">Invest</span>
                  <span className="gold-gradient">inPro</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="tel:+919876543210"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                +91 98100 85446
              </motion.a>
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -10px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0, 
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden overflow-hidden glass border-t border-primary/10"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -10 
                }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="block text-foreground hover:text-primary transition-colors duration-300 py-3 border-b border-primary/5"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="tel:+919876543210"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex items-center gap-2 text-primary py-3"
            >
              <Phone className="w-4 h-4" />
              +91 98100 85446
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
