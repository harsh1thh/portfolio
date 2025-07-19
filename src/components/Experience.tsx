'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations'

const Experience = () => {
  const experiences = [
    {
      title: "Open Source Contributor",
      company: "Various Projects",
      location: "Remote",
      period: "2023 - Present",
      type: "Volunteer",
      description: [
        "Contributing to open-source projects in JavaScript, Python, and DevOps tools",
        "Collaborating with global developer communities on innovative solutions",
        "Focus on accessibility, performance optimization, and documentation",
        "Mentoring newcomers and participating in code reviews"
      ],
      technologies: ["JavaScript", "Python", "Git", "Docker", "CI/CD"],
      link: "https://github.com/harsh1thX"
    },
    {
      title: "Independent Projects & Learning",
      company: "Self-Directed",
      location: "India",
      period: "2022 - Present",
      type: "Personal Development",
      description: [
        "Developing full-stack applications using modern JavaScript frameworks",
        "Exploring cloud technologies and DevOps practices",
        "Building cybersecurity tools and conducting vulnerability assessments",
        "Creating embedded systems projects with hardware integration"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Python", "C", "Verilog"],
      link: "#projects"
    },
    {
      title: "Technical Research & Innovation",
      company: "Academic & Personal",
      location: "India",
      period: "2021 - Present",
      type: "Research",
      description: [
        "Researching AI prompting techniques and machine learning applications",
        "Studying cybersecurity trends and implementing security best practices",
        "Experimenting with virtualization technologies and system administration",
        "Developing cross-platform solutions for Linux, Windows, and macOS"
      ],
      technologies: ["AI/ML", "Cybersecurity", "Linux", "Virtualization", "Networking"],
      link: "#skills"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gradient mb-6">
              Experience & Journey
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building expertise through hands-on projects, open source contributions, and continuous learning
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={slideInLeft}
                className="glass-effect p-8 rounded-2xl hover-lift relative"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg text-gray-700 dark:text-gray-400 font-medium mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-500 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-md text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  {exp.link && (
                    <motion.a
                      href={exp.link}
                      target={exp.link.startsWith('http') ? '_blank' : '_self'}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-1 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors mt-4 md:mt-0"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">View More</span>
                    </motion.a>
                  )}
                </div>

                <ul className="space-y-3 mb-6 text-gray-700 dark:text-gray-400">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-gray-500 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-warm-400 to-warm-600 dark:from-warm-500 dark:to-warm-400 rounded-l-2xl" />
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-display text-gray-900 dark:text-gray-200 mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6 leading-relaxed">
                As a passionate fresher, I'm eager to bring my diverse skill set and enthusiasm 
                for learning to a dynamic team. I'm looking for opportunities where I can contribute 
                to meaningful projects while continuing to grow professionally.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gray-800 dark:bg-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <span>Let's Connect</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
