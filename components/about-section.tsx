"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Handshake, TrendingUp } from "lucide-react"
import { fadeUp, slideFromLeft, slideFromRight, hoverLift, staggerContainer } from "@/lib/animations"

export function AboutSection() {
  const highlights = [
    "RERA Certified Professional",
    "500+ Successful Transactions",
    "Exclusive Builder Partnerships",
    "End-to-End Property Assistance",
  ]

  const values = [
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your goals are my priority",
    },
    {
      icon: Handshake,
      title: "Trusted Advisor",
      description: "Transparent & honest guidance",
    },
    {
      icon: TrendingUp,
      title: "Market Expert",
      description: "Deep knowledge of Gurgaon market",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Your Trusted <span className="gold-gradient">Real Estate Partner</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromLeft}
          >
            <div className="glass rounded-2xl p-8 border border-primary/10">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over 12 years of experience in the Gurgaon real estate market, I have helped 
                countless families find their dream homes and investors discover profitable opportunities. 
                My deep understanding of the local market, combined with exclusive builder partnerships, 
                ensures you get the best deals on premium properties.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As a RERA-certified consultant at InvestinPro, I specialize in luxury residential properties, 
                commercial spaces, and high-yield investment opportunities across Golf Course Road, 
                DLF Phase 5, Sector 42-43, and other prime locations in Gurgaon.
              </p>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    custom={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideFromRight}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={hoverLift}
                className="glass rounded-xl p-6 border border-primary/10 flex items-start gap-5 cursor-pointer hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-4 border-primary pl-6 py-4"
            >
              <p className="text-lg italic text-muted-foreground">
                {`"My mission is to make your real estate journey seamless, profitable, and stress-free."`}
              </p>
              <p className="text-primary font-medium mt-2">— Sahil Saxena</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
