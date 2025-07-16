'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Cloud, Shield, Brain, Monitor } from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "JavaScript, Python, C - Building end-to-end solutions"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modern deployment strategies and cloud infrastructure"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security-first approach to application development"
    },
    {
      icon: Brain,
      title: "AI & Emerging Tech",
      description: "Exploring AI prompting and intelligent systems"
    },
    {
      icon: Cpu,
      title: "Systems Programming",
      description: "Embedded systems, Verilog, and hardware integration"
    },
    {
      icon: Monitor,
      title: "System Administration",
      description: "Linux, Windows, macOS - Cross-platform expertise"
    }
  ]

  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gradient mb-6">
              About Me
            </h2>
            <p className="text-xl text-warm-600 dark:text-warm-400 max-w-3xl mx-auto leading-relaxed">
              A passionate technologist who has been coding since childhood, constantly exploring 
              the intersection of innovation and practical application.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <motion.div variants={slideInLeft} className="space-y-6">
              <h3 className="text-2xl font-semibold text-warm-800 dark:text-warm-200 mb-4">
                My Journey
              </h3>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                From writing my first lines of code as a child to mastering modern web technologies, 
                my journey has been driven by an insatiable curiosity for how things work. I believe 
                in building solutions that not only function flawlessly but also provide exceptional 
                user experiences.
              </p>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                As a fresher in the professional world, I bring fresh perspectives combined with 
                solid foundational knowledge across multiple domains - from traditional software 
                development to cutting-edge technologies like AI and cloud computing.
              </p>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                My approach is holistic: understanding the entire technology stack, from hardware 
                to user interface, allows me to create more efficient and innovative solutions.
              </p>
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-6">
              <h3 className="text-2xl font-semibold text-warm-800 dark:text-warm-200 mb-4">
                What Drives Me
              </h3>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                I'm passionate about staying ahead of the technological curve. Whether it's 
                exploring the latest in AI prompting techniques, mastering cloud architectures, 
                or diving deep into cybersecurity principles, I thrive on continuous learning.
              </p>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                My diverse skill set spanning multiple operating systems, programming languages, 
                and emerging technologies positions me to tackle complex, interdisciplinary 
                challenges that require both breadth and depth of knowledge.
              </p>
              <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                I believe the future belongs to those who can bridge different technological 
                domains and create unified, intelligent solutions.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-effect p-6 rounded-2xl hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-warm-200 dark:bg-warm-700 rounded-xl mr-4">
                    <item.icon className="w-6 h-6 text-warm-700 dark:text-warm-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-warm-800 dark:text-warm-200">
                    {item.title}
                  </h4>
                </div>
                <p className="text-warm-600 dark:text-warm-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
