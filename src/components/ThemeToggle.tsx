'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-full bg-warm-200 dark:bg-warm-800 text-warm-800 dark:text-warm-200 transition-colors duration-300 hover:bg-warm-300 dark:hover:bg-warm-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Sun size={20} />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
