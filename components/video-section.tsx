"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"
import { fadeUp, scaleIn } from "@/lib/animations"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Introduction</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Meet Your <span className="gold-gradient">Real Estate Expert</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn about my approach to helping clients find their perfect property
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          className="relative"
        >
          <div className="glass rounded-2xl overflow-hidden border border-primary/20 aspect-video relative">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=675&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
                </div>

                {/* Play button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ margin: "-20px" }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/10"
                      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                      style={{ margin: "-40px" }}
                    />
                    
                    {/* Play button */}
                    <motion.div 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30"
                      whileHover={{ boxShadow: "0 20px 40px -10px rgba(212, 175, 55, 0.4)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Duration badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="absolute bottom-4 right-4 glass px-3 py-1 rounded-full text-sm"
                >
                  <span className="text-muted-foreground">2:30</span>
                </motion.div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" 
          />
        </motion.div>

        {/* Video highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 mt-8"
        >
          {[
            "My Journey",
            "How I Work",
            "Client Success Stories",
          ].map((item, index) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-primary font-semibold">{index + 1}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
