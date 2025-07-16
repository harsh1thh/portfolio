'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Server, Shield, Brain } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Manager",
      description: "A comprehensive DevOps dashboard for managing cloud infrastructure with automated deployment pipelines and monitoring.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "AWS", "Docker", "Terraform"],
      category: "DevOps",
      icon: Server,
      github: "https://github.com/harsh1thX",
      live: "https://demo.project1.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cybersecurity Assessment Tool",
      description: "Advanced security scanning and vulnerability assessment platform with real-time threat detection and reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "React", "PostgreSQL", "Machine Learning"],
      category: "Cybersecurity",
      icon: Shield,
      github: "https://github.com/harsh1thX",
      live: "https://demo.project2.com",
      color: "from-red-500 to-red-600"
    },
    {
      title: "AI-Powered Code Assistant",
      description: "Intelligent code completion and optimization tool using advanced AI prompting techniques for developer productivity.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Python", "OpenAI API", "VS Code Extension"],
      category: "AI/ML",
      icon: Brain,
      github: "https://github.com/harsh1thX",
      live: "https://marketplace.visualstudio.com/",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Embedded IoT Monitoring System",
      description: "Real-time monitoring system for IoT devices with Verilog-based hardware integration and wireless communication.",
      image: "/api/placeholder/600/400",
      technologies: ["C", "Verilog", "Arduino", "MQTT", "React Dashboard"],
      category: "Embedded Systems",
      icon: Code,
      github: "https://github.com/harsh1thX",
      live: "https://demo.project4.com",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Multi-Platform Virtualization Lab",
      description: "Educational platform for learning virtualization concepts with hands-on labs across VMware and VirtualBox environments.",
      image: "/api/placeholder/600/400",
      technologies: ["VMware", "VirtualBox", "Linux", "Windows", "Automation Scripts"],
      category: "Systems",
      icon: Server,
      github: "https://github.com/harsh1thX",
      live: "https://demo.project5.com",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Cross-Platform Network Analyzer",
      description: "Advanced network analysis tool supporting Linux, Windows, and macOS with real-time traffic monitoring and security features.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "C", "Network Protocols", "Cross-Platform GUI"],
      category: "Networking",
      icon: Shield,
      github: "https://github.com/harsh1thX",
      live: "https://demo.project6.com",
      color: "from-teal-500 to-teal-600"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-warm-600 dark:text-warm-400 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions across multiple technology domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="relative h-48 bg-gradient-to-br from-warm-200 to-warm-300 dark:from-warm-700 dark:to-warm-800 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <project.icon className="w-16 h-16 text-warm-600 dark:text-warm-400 z-10" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-warm-900/90 text-warm-700 dark:text-warm-300 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-800 dark:text-warm-200 mb-3 group-hover:text-warm-900 dark:group-hover:text-warm-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-warm-600 dark:text-warm-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-warm-200 dark:bg-warm-700 text-warm-700 dark:text-warm-300 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-warm-800 dark:bg-warm-200 text-white dark:text-warm-800 rounded-lg hover:bg-warm-900 dark:hover:bg-warm-100 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-warm-600 dark:bg-warm-400 text-white dark:text-warm-800 rounded-lg hover:bg-warm-700 dark:hover:bg-warm-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <motion.a
              href="https://github.com/harsh1thX"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-warm-800 dark:bg-warm-200 text-white dark:text-warm-800 px-8 py-3 rounded-full font-medium hover:bg-warm-900 dark:hover:bg-warm-100 transition-colors duration-300"
            >
              <Github size={18} />
              <span>View All Projects</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
