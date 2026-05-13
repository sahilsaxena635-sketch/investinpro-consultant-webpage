"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react"
import { fadeUp, hoverGlow, hoverLift, staggerContainer } from "@/lib/animations"

type PresenceCard = {
  icon: React.ElementType
  platform: string
  description: string
  cta: string
  href: string
  accent: {
    from: string
    via?: string
    to: string
  }
}

const personalBrand: PresenceCard[] = [
  {
    icon: Instagram,
    platform: "Instagram",
    description: "Curated luxury tours, market moments, and behind-the-scenes deal intelligence.",
    cta: "Follow the journey",
    href: "https://instagram.com",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(236,72,153,0.22)", to: "rgba(30,58,138,0.22)" },
  },
  {
    icon: Linkedin,
    platform: "LinkedIn",
    description: "Thought leadership, premium launches, and trusted advisory for serious buyers and investors.",
    cta: "Connect professionally",
    href: "https://linkedin.com",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(59,130,246,0.22)", to: "rgba(30,58,138,0.22)" },
  },
  {
    icon: MessageCircle,
    platform: "WhatsApp",
    description: "Discreet, direct access for curated opportunities and priority viewing schedules.",
    cta: "Message privately",
    href: "https://wa.me/919999999999",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(34,197,94,0.18)", to: "rgba(30,58,138,0.22)" },
  },
]

const companyPresence: PresenceCard[] = [
  {
    icon: Instagram,
    platform: "InvestinPro Instagram",
    description: "Premium listings, investment highlights, and a refined view of the brand’s portfolio.",
    cta: "Explore showcases",
    href: "https://instagram.com",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(244,114,182,0.2)", to: "rgba(30,58,138,0.22)" },
  },
  {
    icon: Youtube,
    platform: "InvestinPro YouTube",
    description: "Cinematic walkthroughs, deep-dive reviews, and market narratives worth your time.",
    cta: "Watch the channel",
    href: "https://youtube.com",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(239,68,68,0.16)", to: "rgba(30,58,138,0.22)" },
  },
  {
    icon: Linkedin,
    platform: "InvestinPro LinkedIn",
    description: "Corporate presence, launches, and relationship-led updates for premium decision makers.",
    cta: "Follow InvestinPro",
    href: "https://linkedin.com",
    accent: { from: "rgba(212,175,55,0.35)", via: "rgba(59,130,246,0.2)", to: "rgba(30,58,138,0.22)" },
  },
]

function PresenceCard({
  card,
  index,
}: {
  card: PresenceCard
  index: number
}) {
  const Icon = card.icon
  const accent = `radial-gradient(1200px circle at 20% -10%, ${card.accent.from} 0%, ${card.accent.via ?? "rgba(212,175,55,0.15)"} 28%, ${card.accent.to} 55%, transparent 70%)`

  return (
    <motion.div variants={fadeUp} custom={index} className="group relative">
      {/* Premium glow layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(900px circle at 25% 10%, rgba(212,175,55,0.20), transparent 55%), radial-gradient(900px circle at 85% 30%, rgba(30,58,138,0.22), transparent 60%)",
        }}
      />

      <motion.a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ ...hoverLift, ...hoverGlow }}
        className="relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-colors duration-500 group-hover:border-primary/30"
      >
        {/* Glass highlight + gradient accent */}
        <div aria-hidden="true" className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.01) 60%, rgba(255,255,255,0.06) 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: accent }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(212,175,55,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.22) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative flex h-full flex-col p-7 md:p-8">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.28) 0%, transparent 65%)",
                }}
              />
              <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/60 uppercase">
              Presence
            </div>
          </div>

          {/* Copy */}
          <h3 className="font-serif text-xl md:text-2xl text-white tracking-tight">
            {card.platform}
          </h3>
          <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/65">
            {card.description}
          </p>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <motion.span
              whileHover={{ x: 2 }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors duration-300 group-hover:bg-primary/15"
            >
              <span className="text-primary">{card.cta}</span>
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-black/35 border border-white/10">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.35), transparent 65%)",
                  }}
                />
                <ArrowUpRight className="relative h-4 w-4 text-primary" />
              </span>
            </motion.span>
          </div>

          {/* Bottom edge sheen */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-60"
            style={{
              background:
                "linear-gradient(to top, rgba(212,175,55,0.08), transparent)",
            }}
          />
        </div>
      </motion.a>
    </motion.div>
  )
}

export function DigitalPresenceSection() {
  return (
    <section id="digital-presence" className="relative py-20 md:py-32 overflow-hidden">
      {/* Cinematic background */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20" />
        <motion.div
          className="absolute -top-24 left-1/3 h-[520px] w-[520px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 60%)",
          }}
          animate={{ y: [0, 30, 0], x: [0, 40, 0], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-1/4 h-[460px] w-[460px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(30,58,138,0.20) 0%, transparent 62%)",
          }}
          animate={{ y: [0, -24, 0], x: [0, -28, 0], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-primary/80" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase text-primary/90">
              Digital Presence
            </span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            A premium{" "}
            <span className="gold-gradient">digital ecosystem</span>{" "}
            built for trust
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
            Follow the story, verify the expertise, and connect directly—across carefully curated personal and company channels.
          </motion.p>
        </motion.div>

        {/* Sections */}
        <div className="mt-14 md:mt-20 space-y-16 md:space-y-20">
          {/* Personal brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-7 md:mb-9 flex items-center gap-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-center">
                <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/55">
                  Personal Brand
                </div>
                <div className="mt-1 text-sm text-white/65">
                  Presence with personality—refined, consistent, unmistakably premium.
                </div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {personalBrand.map((card, index) => (
                <PresenceCard key={card.platform} card={card} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Company presence */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="mb-7 md:mb-9 flex items-center gap-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="text-center">
                <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/55">
                  Company Presence
                </div>
                <div className="mt-1 text-sm text-white/65">
                  The brand’s portfolio, credibility, and cinematic storytelling—at scale.
                </div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {companyPresence.map((card, index) => (
                <PresenceCard key={card.platform} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

