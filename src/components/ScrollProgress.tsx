'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const updateScrollProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100)
      }

      // Detect current section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setCurrentSection(currentSection)
      }

      // Show scrolling indicator
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    // Initial calculation
    updateScrollProgress()

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const getSectionEmoji = (section: string) => {
    const emojiMap: Record<string, string> = {
      hero: '🏠',
      about: '👨‍💻',
      skills: '⚡',
      projects: '🚀',
      experience: '💼',
      contact: '📧'
    }
    return emojiMap[section] || '✨'
  }

  return (
    <>
      <div className="scroll-progress">
        <motion.div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40
          }}
        />
        
        {/* Section indicator */}
        <AnimatePresence>
          {isScrolling && currentSection && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-warm-800/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-warm-200 dark:border-warm-600"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{getSectionEmoji(currentSection)}</span>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-warm-700 dark:text-warm-300 capitalize">
                    {currentSection}
                  </span>
                  <span className="text-xs text-warm-500 dark:text-warm-400">
                    {Math.round(scrollProgress)}% complete
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default ScrollProgress
