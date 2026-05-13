"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Download, Award, Building2, Users, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { icon: Award, value: "12+", label: "Years of Excellence" },
    { icon: Building2, value: "500+", label: "Premium Properties" },
    { icon: Users, value: "1000+", label: "Elite Clients" },
  ]

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Sahil Saxena
ORG:InvestinPro
TITLE:Senior Real Estate Consultant
TEL;TYPE=CELL:+91 98765 43210
EMAIL:sahil@investinpro.in
URL:https://investinpro.in
ADR;TYPE=WORK:;;Golf Course Road;Gurgaon;Haryana;122002;India
NOTE:Premium Real Estate Consultant - Helping investors and homebuyers discover premium real estate opportunities in Gurgaon.
END:VCARD`

    const blob = new Blob([vCard], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Sahil_Saxena_InvestinPro.vcf"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Animated Gradient Background */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0d1020] to-[#080810]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,58,138,0.2) 0%, rgba(30,58,138,0.05) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 60%)",
          }}
          animate={{
            x: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cinematic light rays */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[40vh]"
            style={{
              background: "linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)",
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 left-1/3 w-[1px] h-[30vh]"
            style={{
              background: "linear-gradient(to bottom, rgba(212,175,55,0.2), transparent)",
            }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-[1px] h-[35vh]"
            style={{
              background: "linear-gradient(to bottom, rgba(212,175,55,0.2), transparent)",
            }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content with parallax */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full px-4 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-start order-1 lg:order-1"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-8 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(212,175,55,0.3), transparent, rgba(212,175,55,0.2), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-6 rounded-full border border-primary/20"
                  animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                  transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
                />
                <motion.div
                  className="absolute -inset-12 rounded-full border border-primary/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-16 rounded-full"
                  style={{ border: "1px dashed rgba(212,175,55,0.1)" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main image container with glassmorphism */}
                <motion.div
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(30,58,138,0.1) 50%, rgba(212,175,55,0.15) 100%)",
                    boxShadow: "0 0 80px rgba(212,175,55,0.15), inset 0 0 80px rgba(0,0,0,0.3)",
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face"
                      alt="Sahil Saxena - Premium Real Estate Consultant"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Image overlay for cinematic effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </motion.div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <div className="relative backdrop-blur-xl bg-black/60 border border-primary/40 px-6 py-3 rounded-full flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold text-sm tracking-wide">Verified Expert</span>
                    </div>
                  </div>
                </motion.div>

                {/* Location badge */}
                <motion.div
                  initial={{ scale: 0, x: 20 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute top-8 -right-4"
                >
                  <div className="backdrop-blur-xl bg-black/60 border border-primary/30 px-4 py-2 rounded-full flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-primary" />
                    <span className="text-white/90 text-xs font-medium">Gurgaon</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content - Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center lg:text-left order-2 lg:order-2"
            >
              {/* Pre-title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 backdrop-blur-sm bg-primary/10 border border-primary/20 px-5 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary/90 font-medium tracking-[0.2em] uppercase text-xs">Senior Real Estate Consultant</span>
                </span>
              </motion.div>
              
              {/* Name - Cinematic Typography */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.9] tracking-tight">
                  <span className="block text-white">Sahil</span>
                  <span className="block mt-2 relative">
                    <span className="gold-gradient">Saxena</span>
                    <motion.span
                      className="absolute -bottom-2 left-0 lg:left-0 right-0 lg:right-auto w-full lg:w-48 h-[2px]"
                      style={{
                        background: "linear-gradient(90deg, #D4AF37, transparent)",
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </span>
                </h1>
              </motion.div>
              
              {/* Company name with elegant dividers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/60" />
                <span className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase text-primary/90">InvestinPro</span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/60" />
              </motion.div>

              {/* Tagline with premium styling */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Helping investors and homebuyers discover{" "}
                <span className="text-white font-normal">premium real estate</span>{" "}
                opportunities in Gurgaon.
              </motion.p>

              {/* CTA Button with luxury styling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSaveContact}
                  className="group relative inline-flex items-center gap-3 overflow-hidden"
                >
                  {/* Button glow */}
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                  
                  {/* Button content */}
                  <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary via-primary to-[#F4E4BC] text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]">
                    <Download className="w-5 h-5" />
                    <span>Save Contact</span>
                    <motion.span
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "100%", opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.button>
              </motion.div>

              {/* Stats with glassmorphism cards */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-4 md:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.15 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative group"
                  >
                    {/* Card glow on hover */}
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Card content */}
                    <div className="relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-6 text-center group-hover:border-primary/30 transition-all duration-300">
                      <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 mb-3">
                        <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-white/50 text-xs md:text-sm font-medium">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
