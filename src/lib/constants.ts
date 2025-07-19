// Animation configurations
export const ANIMATION_DURATION = {
  FAST: 0.3,
  MEDIUM: 0.8,
  SLOW: 1.2
} as const

// UI Constants
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
} as const

// Hero particle configuration
export const PARTICLE_CONFIG = {
  COUNT_MOBILE: 25,
  COUNT_DESKTOP: 50,
  SPEED: 0.5,
  SIZE_MIN: 1,
  SIZE_MAX: 3,
  OPACITY_MIN: 0.1,
  OPACITY_MAX: 0.4
} as const

// Contact form
export const CONTACT_INFO = {
  EMAIL: 'harshith.bheempalli@email.com',
  PHONE: '+91 XXX XXX XXXX',
  LOCATION: 'India'
} as const

// Social links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/harsh1thX',
  LINKEDIN: 'https://linkedin.com/in/harshith-bheempalli'
} as const

// Colors (Gray scale theme)
export const COLORS = {
  PARTICLE: 'rgba(156, 163, 175, opacity)',
  SUCCESS: {
    BG: 'bg-green-50 dark:bg-green-900/20',
    BORDER: 'border-green-200 dark:border-green-700',
    TEXT: 'text-green-700 dark:text-green-300',
    ICON: 'text-green-600 dark:text-green-400'
  }
} as const
