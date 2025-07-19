'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C Language", level: 80 },
        { name: "Verilog", level: 75 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React/Next.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 78 },
        { name: "AWS/Azure", level: 75 },
        { name: "CI/CD", level: 70 }
      ]
    },
    {
      category: "Systems & Security",
      skills: [
        { name: "Linux Administration", level: 88 },
        { name: "Cybersecurity", level: 80 },
        { name: "Networking", level: 85 },
        { name: "Virtualization", level: 82 }
      ]
    },
    {
      category: "Emerging Technologies",
      skills: [
        { name: "AI Prompting", level: 85 },
        { name: "Embedded Systems", level: 78 },
        { name: "Machine Learning", level: 72 },
        { name: "IoT", level: 75 }
      ]
    }
  ]

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
    const barRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const timer = setTimeout(() => {
        if (barRef.current) {
          barRef.current.style.width = `${skill.level}%`
        }
      }, index * 200)

      return () => clearTimeout(timer)
    }, [skill.level, index])

    return (
      <motion.div
        variants={fadeInUp}
        className="mb-6"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          <span className="text-gray-500 dark:text-gray-500 text-sm">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-warm-600 to-warm-700 dark:from-warm-400 dark:to-warm-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '0%' }}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-transparent">
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set spanning traditional programming to cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                className="glass-effect p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      index={categoryIndex * 4 + skillIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Additional Proficiencies
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-600 dark:text-gray-400">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Operating Systems</h4>
                  <p className="text-sm">Linux, Windows, macOS</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Virtualization</h4>
                  <p className="text-sm">VMware, VirtualBox</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Networking</h4>
                  <p className="text-sm">TCP/IP, Protocols, Security</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Shell Scripting</h4>
                  <p className="text-sm">Bash, PowerShell, Automation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
