"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Building2, MapPin, TrendingUp, Calendar, Phone, Home, Briefcase } from "lucide-react"
import { useState, useRef, useEffect } from "react"

type Message = {
  id: number
  type: "bot" | "user"
  text: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    type: "bot",
    text: "Welcome to InvestinPro! I'm InvestinPro AI, your personal luxury real estate concierge.\n\nHow may I assist you in discovering premium properties and investment opportunities in Gurgaon today?",
  },
]

const quickSuggestions = [
  { icon: Building2, text: "Luxury Properties", query: "Show luxury properties" },
  { icon: TrendingUp, text: "Investment Picks", query: "Best investment opportunities" },
  { icon: MapPin, text: "Prime Locations", query: "Prime locations to invest" },
  { icon: Calendar, text: "Book Site Visit", query: "Schedule a site visit" },
  { icon: Home, text: "Under 5 Cr", query: "Properties under 5 crore" },
  { icon: Briefcase, text: "Commercial", query: "Commercial properties" },
]

const botResponses: Record<string, string> = {
  "show luxury properties": "Exquisite selection curated for you:\n\n• DLF Camellias - Ultra-luxury residences from ₹18 Cr\n• M3M Golf Hills - Premium villas from ₹12 Cr\n• Trump Towers - Iconic living from ₹15 Cr\n\nWould you like a private viewing of any of these properties?",
  "best investment opportunities": "Current high-yield investment opportunities:\n\n• Sector 65 - 18% YoY appreciation\n• Golf Course Extension - Premium demand surge\n• New Gurgaon - Early-stage advantage\n\nShall I provide detailed ROI analysis for any location?",
  "prime locations to invest": "Premium investment corridors in Gurgaon:\n\n• Golf Course Road - Most prestigious address\n• DLF Phase 5 - Established luxury hub\n• Sector 65-67 - Emerging premium destination\n• Southern Peripheral Road - High growth potential\n\nWhich area interests you?",
  "schedule a site visit": "I'd be delighted to arrange an exclusive property tour.\n\nRitu will personally accompany you for a premium experience. Please share:\n\n• Preferred date & time\n• Properties of interest\n• Budget range\n\nOr call directly: +91 98765 43210",
  "properties under 5 crore": "Premium properties under ₹5 Crore:\n\n• Godrej Aria, Sector 79 - ₹3.5 Cr onwards\n• Ireo Victory Valley - ₹4.2 Cr onwards\n• M3M Merlin, Sector 67 - ₹4.8 Cr onwards\n• Sobha City - ₹3.8 Cr onwards\n\nAll RERA registered with excellent amenities.",
  "commercial properties": "Premium commercial opportunities:\n\n• M3M 65th Avenue - Retail spaces from ₹2.5 Cr\n• Elan Mercado - Office suites from ₹1.8 Cr\n• AIPL Business Club - Grade A offices\n\n12-15% rental yields in prime locations. Interested in any specific type?",
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      text: text.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)
    setShowSuggestions(false)

    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 800))

    const lowerText = text.toLowerCase().trim()
    let responseText = botResponses[lowerText]

    if (!responseText) {
      responseText = `Thank you for your interest in "${text}".\n\nI'll have Ritu personally reach out to you with tailored recommendations. You can also reach him directly at +91 98100 85446.\n\nIs there anything specific you'd like to know in the meantime?`
    }

    const botMessage: Message = {
      id: Date.now() + 1,
      type: "bot",
      text: responseText,
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, botMessage])
    
    setTimeout(() => setShowSuggestions(true), 500)
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 md:bottom-8 right-6 z-40 group"
          >
            {/* Animated rings */}
            <div className="absolute inset-0 w-16 h-16 -m-1">
              <span className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
              <span className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            
            {/* Main button */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-primary to-amber-600 shadow-lg shadow-primary/40 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/60">
              {/* Inner glow */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
              
              {/* Icon */}
              <Sparkles className="w-6 h-6 text-primary-foreground relative z-10" />
              
              {/* Online indicator */}
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-background">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
              </span>
            </div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="glass px-3 py-2 rounded-lg border border-primary/20 text-sm font-medium text-foreground">
                Chat with InvestinPro AI
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 rotate-45 glass border-r border-t border-primary/20" />
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 md:bottom-8 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[400px]"
          >
            {/* Glassmorphism container */}
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-black/50">
              {/* Background blur layer */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
              
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="relative">
                {/* Header */}
                <div className="p-5 border-b border-primary/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Avatar with animated ring */}
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-spin-slow" style={{ animationDuration: "8s" }} />
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                          <Sparkles className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background" />
                      </div>
                      
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-foreground">InvestinPro AI</h3>
                        <p className="text-xs text-primary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Your Luxury Real Estate Concierge
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="w-9 h-9 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-muted-foreground" />
                    </motion.button>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-[320px] overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-end gap-2 max-w-[85%] ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                        {message.type === "bot" && (
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
                          </div>
                        )}
                        
                        <div className={`px-4 py-3 ${
                          message.type === "user"
                            ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl rounded-br-md"
                            : "bg-secondary/70 text-foreground rounded-2xl rounded-bl-md border border-border/50"
                        }`}>
                          <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-end gap-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <div className="bg-secondary/70 px-4 py-3 rounded-2xl rounded-bl-md border border-border/50">
                        <div className="flex gap-1.5">
                          <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestions */}
                <AnimatePresence>
                  {showSuggestions && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-5 pb-3"
                    >
                      <p className="text-xs text-muted-foreground mb-2.5">Quick suggestions</p>
                      <div className="flex flex-wrap gap-2">
                        {quickSuggestions.map((suggestion, index) => (
                          <motion.button
                            key={suggestion.text}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleSend(suggestion.query)}
                            className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                          >
                            <suggestion.icon className="w-3 h-3" />
                            {suggestion.text}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Input */}
                <div className="p-4 border-t border-primary/10">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSend(input)
                    }}
                    className="flex gap-3"
                  >
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about properties, investments..."
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 focus:border-primary/50 focus:bg-secondary/80 outline-none text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={!input.trim()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-amber-600 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                  
                  {/* Powered by */}
                  <p className="text-center text-xs text-muted-foreground/50 mt-3">
                    Powered by InvestinPro AI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
