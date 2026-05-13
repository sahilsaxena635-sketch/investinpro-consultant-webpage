"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const builders = [
  { name: "DLF", initials: "DLF" },
  { name: "M3M", initials: "M3M" },
  { name: "Oberoi Realty", initials: "OR" },
  { name: "Max Estate", initials: "ME" },
  { name: "Sobha", initials: "S" },
  { name: "Whiteland", initials: "W" },
  { name: "Elan", initials: "E" },
  { name: "Adani Realty", initials: "AR" },
  { name: "Smartworld", initials: "SW" },
]

function LogoCard({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="group relative flex-shrink-0 mx-4 md:mx-6">
      <div className="relative w-36 h-20 md:w-44 md:h-24 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-500 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)]">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500" />
        
        {/* Logo text */}
        <div className="relative z-10 flex flex-col items-center gap-1 transition-transform duration-500 group-hover:scale-110">
          <span className="text-2xl md:text-3xl font-serif font-bold text-white/40 group-hover:text-primary transition-colors duration-500 tracking-wider">
            {initials}
          </span>
          <span className="text-[10px] md:text-xs text-white/30 group-hover:text-white/70 transition-colors duration-500 font-medium tracking-widest uppercase">
            {name}
          </span>
        </div>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
        </div>
      </div>
    </div>
  )
}

function InfiniteSlider({ direction = "left" }: { direction?: "left" | "right" }) {
  const duplicatedBuilders = [...builders, ...builders, ...builders]
  
  return (
    <div className="relative overflow-hidden py-4 group/slider">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -33.33 * 16 * builders.length / 3] : [-33.33 * 16 * builders.length / 3, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        <div 
          className="flex group-hover/slider:[animation-play-state:paused]"
          style={{
            animation: `scroll-${direction} 30s linear infinite`,
          }}
        >
          {duplicatedBuilders.map((builder, index) => (
            <LogoCard key={`${builder.name}-${index}`} name={builder.name} initials={builder.initials} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function BuildersSection() {
  return (
    <section id="builders" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Strategic Partnerships</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Trusted <span className="gold-gradient">Developer Network</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Exclusive collaborations with India&apos;s most prestigious real estate developers
          </p>
        </motion.div>

        {/* Infinite Logo Sliders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* First row - scrolls left */}
          <div className="relative group/row1">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-r from-background via-background/95 via-30% to-transparent" />
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-l from-background via-background/95 via-30% to-transparent" />
            {/* Subtle gold accent glow on edges */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
            
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left group-hover/row1:[animation-play-state:paused]">
                {[...builders, ...builders, ...builders].map((builder, index) => (
                  <LogoCard key={`row1-${builder.name}-${index}`} name={builder.name} initials={builder.initials} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Second row - scrolls right */}
          <div className="relative group/row2">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-r from-background via-background/95 via-30% to-transparent" />
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-l from-background via-background/95 via-30% to-transparent" />
            {/* Subtle gold accent glow on edges */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
            
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right group-hover/row2:[animation-play-state:paused]">
                {[...builders.slice().reverse(), ...builders.slice().reverse(), ...builders.slice().reverse()].map((builder, index) => (
                  <LogoCard key={`row2-${builder.name}-${index}`} name={builder.name} initials={builder.initials} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-muted-foreground text-sm">
              Direct channel partnerships with <span className="text-primary font-semibold">40+ Premium Developers</span>
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
