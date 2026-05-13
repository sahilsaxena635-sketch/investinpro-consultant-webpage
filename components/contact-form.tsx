"use client"

import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { useState } from "react"
import { fadeUp, slideFromLeft, slideFromRight, hoverLift } from "@/lib/animations"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    propertyType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        budget: "",
        propertyType: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Start Your <span className="gold-gradient">Property Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below and I&apos;ll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-primary/10">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <motion.a 
                  href="tel:+919876543210" 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground group-hover:text-primary transition-colors duration-300">+91 98765 43210</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:sahil@investinpro.in" 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors duration-300">sahil@investinpro.in</p>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office</p>
                    <p className="text-foreground">Golf Course Road, Sector 42, Gurgaon, Haryana 122002</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <motion.div 
              className="glass rounded-2xl p-6 border border-primary/10"
              whileHover={hoverLift}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Working Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-primary">By Appointment</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8 border border-primary/10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center py-12"
                >
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your enquiry has been received. I&apos;ll contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                        placeholder="+91 98765 43210"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                    >
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground"
                      >
                        <option value="">Select budget</option>
                        <option value="1-3cr">Rs. 1 - 3 Crore</option>
                        <option value="3-5cr">Rs. 3 - 5 Crore</option>
                        <option value="5-10cr">Rs. 5 - 10 Crore</option>
                        <option value="10cr+">Rs. 10 Crore+</option>
                      </select>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <label htmlFor="propertyType" className="block text-sm font-medium text-foreground mb-2">
                        Property Type *
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground"
                      >
                        <option value="">Select type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="commercial">Commercial</option>
                        <option value="plot">Plot</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Tell me about your property requirements, preferred locations, etc."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
