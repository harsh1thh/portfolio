'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

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

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1
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
        ctx.fillStyle = `rgba(120, 113, 108, ${particle.opacity})`
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
            <span className="text-warm-600 dark:text-warm-400">Bheempalli</span>
          </h1>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-8">
          <p className="text-xl md:text-2xl text-warm-600 dark:text-warm-400 font-heading leading-relaxed">
            Passionate JavaScript Developer & Tech Enthusiast
          </p>
          <p className="text-lg text-warm-500 dark:text-warm-500 mt-4 max-w-2xl mx-auto font-sf-pro">
            Crafting digital experiences with modern technologies. Specializing in 
            <span className="text-warm-700 dark:text-warm-300 font-medium"> DevOps, Cloud Computing, Cybersecurity, </span>
            and cutting-edge web development.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-warm-800 dark:bg-warm-200 text-white dark:text-warm-800 px-8 py-3 rounded-full font-medium hover:bg-warm-900 dark:hover:bg-warm-100 transition-colors duration-300 flex items-center space-x-2"
            >
              <Mail size={18} />
              <span>Get In Touch</span>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-warm-300 dark:border-warm-600 text-warm-700 dark:text-warm-300 px-8 py-3 rounded-full font-medium hover:bg-warm-100 dark:hover:bg-warm-800 transition-colors duration-300 flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.a>
          </div>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/harsh1thX"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-warm-600 dark:text-warm-400 hover:text-warm-800 dark:hover:text-warm-200 transition-colors duration-300"
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harshith-bheempalli"
              target="_blank"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-warm-600 dark:text-warm-400 hover:text-warm-800 dark:hover:text-warm-200 transition-colors duration-300"
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
            className="text-warm-400 hover:text-warm-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-warm-50/20 to-transparent dark:from-transparent dark:via-warm-900/20 dark:to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
