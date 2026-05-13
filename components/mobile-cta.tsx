"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle, Download } from "lucide-react"

export function MobileCTA() {
  const phoneNumber = "919876543210"
  const whatsappMessage = encodeURIComponent("Hi Sahil, I'm interested in premium real estate properties in Gurgaon.")

  const handleSaveContact = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Sahil Saxena
ORG:InvestinPro
TITLE:Senior Real Estate Consultant
TEL;TYPE=CELL:+91 98765 43210
EMAIL:sahil@investinpro.in
URL:https://investinpro.in
NOTE:Luxury Real Estate Consultant - Gurgaon
END:VCARD`

    const blob = new Blob([vCardData], { type: "text/vcard" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Sahil_Saxena_InvestinPro.vcf"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-background/80 backdrop-blur-xl border-t border-primary/10 px-4 py-3 safe-bottom">
        <div className="flex gap-2">
          {/* Call button */}
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-medium transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">WhatsApp</span>
          </a>

          {/* Save Contact button */}
          <button
            onClick={handleSaveContact}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground/80 font-medium transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Save</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
