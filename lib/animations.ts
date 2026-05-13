// Shared animation variants for consistent premium feel across the site

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
}

export const fadeUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Hover animations - subtle and premium
export const hoverLift = {
  y: -8,
  transition: { 
    duration: 0.3, 
    ease: [0.22, 1, 0.36, 1] 
  }
}

export const hoverScale = {
  scale: 1.02,
  transition: { 
    duration: 0.3, 
    ease: [0.22, 1, 0.36, 1] 
  }
}

export const hoverGlow = {
  boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.15)",
  transition: { 
    duration: 0.3, 
    ease: "easeOut" 
  }
}

export const tapScale = {
  scale: 0.98
}

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeIn" 
    }
  }
}
