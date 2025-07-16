import anime from 'animejs'

export const initializeAnimations = () => {
  // Initialize subtle page load animations
  anime({
    targets: '.animate-on-load',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1200,
    delay: anime.stagger(200),
    easing: 'easeOutExpo'
  })
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export const hoverEffect = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeInOut"
  }
}

export const tapEffect = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: "easeInOut"
  }
}
