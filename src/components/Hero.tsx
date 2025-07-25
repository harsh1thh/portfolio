'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { PARTICLE_CONFIG, SOCIAL_LINKS, BREAKPOINTS } from '@/lib/constants'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles (fewer on mobile for performance)
    const particleCount = window.innerWidth < BREAKPOINTS.MOBILE ? PARTICLE_CONFIG.COUNT_MOBILE : PARTICLE_CONFIG.COUNT_DESKTOP
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_CONFIG.SPEED,
        size: Math.random() * (PARTICLE_CONFIG.SIZE_MAX - PARTICLE_CONFIG.SIZE_MIN) + PARTICLE_CONFIG.SIZE_MIN,
        opacity: Math.random() * (PARTICLE_CONFIG.OPACITY_MAX - PARTICLE_CONFIG.OPACITY_MIN) + PARTICLE_CONFIG.OPACITY_MIN
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(156, 163, 175, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-display text-gradient mb-4 leading-tight">
            Harshith
            <br />
            <span className="text-gray-600 dark:text-gray-400">Bheempalli</span>
          </h1>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-heading leading-relaxed">
            Passionate JavaScript Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mt-4 max-w-2xl mx-auto font-sf-pro">
            Crafting digital experiences with modern technologies. Specializing in 
            <span className="text-gray-700 dark:text-gray-300 font-medium"> DevOps, Cloud Computing, Cybersecurity, </span>
            and cutting-edge web development.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-transparent dark:from-transparent dark:via-gray-900/20 dark:to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
