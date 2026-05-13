"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { fadeUp, staggerContainer, hoverLift } from "@/lib/animations"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "CEO, Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sahil helped us find the perfect villa in DLF Phase 5. His market knowledge and negotiation skills saved us over 50 lakhs. Highly recommended for anyone looking for premium properties!",
    property: "DLF Phase 5 Villa",
  },
  {
    id: 2,
    name: "Priya Malhotra",
    designation: "NRI Investor, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As an NRI, I was worried about investing remotely. Sahil made the entire process seamless with virtual tours and complete documentation support. My investment has already appreciated 30%!",
    property: "M3M Golf Estate",
  },
  {
    id: 3,
    name: "Amit & Neha Kapoor",
    designation: "Business Owners",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "We were first-time homebuyers and Sahil guided us through every step. He understood our budget and requirements perfectly. Now we are proud owners of a beautiful 4BHK apartment!",
    property: "Ireo Victory Valley",
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    designation: "Senior Doctor, AIIMS",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Sahil&apos;s professionalism and transparency set him apart. He provided detailed market analysis and helped me make an informed investment decision. Excellent service!",
    property: "Ambience Creacions",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            What Clients <span className="gold-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real clients who trusted me with their real estate journey
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              custom={index}
              whileHover={hoverLift}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 md:p-8 h-full border border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)]">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  {`"${testimonial.text}"`}
                </p>

                {/* Property tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
                  {testimonial.property}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
