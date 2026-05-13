"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const builders = [
  { name: "DLF", logo: "dlf.png" },
  { name: "M3M", logo: "m3m.png" },
  { name: "Oberoi Realty", logo: "oberoi.png" },
  { name: "Max Estate", logo: "max.png" },
  { name: "Sobha", logo: "sobha.webp" },
  { name: "Whiteland", logo: "whiteland.webp" },
  { name: "Elan", logo: "elan.webp" },
  { name: "Adani Realty", logo: "adani.png" },
  { name: "Smartworld", logo: "smartworld.png" },
]

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group relative flex-shrink-0 mx-4 md:mx-6">
      <div className="relative w-36 h-20 md:w-44 md:h-24 rounded-xl glass border border-white/5 hover:border-primary/30 transition-all duration-500 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.2)]">
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 transition-all duration-500" />

        {/* Logo Image */}
        <div className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 px-4">
          <Image
            src={`/logos/${logo}`}
            alt={name}
            width={140}
            height={60}
            className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
          />
        </div>

        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20" />
        </div>
      </div>
    </div>
  )
}

export function BuildersSection() {
  return (
    <section id="builders" className="py-24 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10 px-4">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Strategic Partnerships
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Trusted <span className="gold-gradient">Developer Network</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Exclusive collaborations with India&apos;s most prestigious real estate developers
          </p>
        </motion.div>

        {/* Logo Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >

          {/* Row 1 */}
          <div className="relative group/row1">

            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-r from-background via-background/95 via-30% to-transparent" />

            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-l from-background via-background/95 via-30% to-transparent" />

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left group-hover/row1:[animation-play-state:paused]">

                {[...builders, ...builders, ...builders].map((builder, index) => (
                  <LogoCard
                    key={`row1-${builder.name}-${index}`}
                    name={builder.name}
                    logo={builder.logo}
                  />
                ))}

              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative group/row2">

            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-r from-background via-background/95 via-30% to-transparent" />

            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-20 pointer-events-none bg-gradient-to-l from-background via-background/95 via-30% to-transparent" />

            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right group-hover/row2:[animation-play-state:paused]">

                {[...builders.slice().reverse(), ...builders.slice().reverse(), ...builders.slice().reverse()].map((builder, index) => (
                  <LogoCard
                    key={`row2-${builder.name}-${index}`}
                    name={builder.name}
                    logo={builder.logo}
                  />
                ))}

              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

            <p className="text-muted-foreground text-sm">
              Direct channel partnerships with{" "}
              <span className="text-primary font-semibold">
                40+ Premium Developers
              </span>
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