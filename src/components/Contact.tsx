'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! I\'ll get back to you soon.')
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harshith.bheempalli@email.com",
      link: "mailto:harshith.bheempalli@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXX XXX XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "harsh1thX",
      link: "https://github.com/harsh1thX",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "harshith-bheempalli",
      link: "https://linkedin.com/in/harshith-bheempalli",
      color: "hover:text-blue-600"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "View Live Site",
      link: "#home",
      color: "hover:text-warm-700"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-transparent">
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
              Let's Connect
            </h2>
            <p className="text-xl text-warm-600 dark:text-warm-400 max-w-3xl mx-auto leading-relaxed">
              Ready to start a conversation about opportunities, collaborations, or just to say hello
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={slideInLeft} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-warm-800 dark:text-warm-200 mb-6">
                  Get In Touch
                </h3>
                <p className="text-warm-600 dark:text-warm-400 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, whether it's a challenging project, 
                  a learning opportunity, or potential collaboration. As a passionate developer eager 
                  to make an impact, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-warm-800 dark:bg-warm-600 text-white rounded-xl">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-warm-500 dark:text-warm-400 text-sm font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-warm-700 dark:text-warm-300 hover:text-warm-900 dark:hover:text-warm-100 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-warm-700 dark:text-warm-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-warm-400 dark:border-warm-600 pt-8">
                <h4 className="text-lg font-semibold text-warm-800 dark:text-warm-200 mb-6">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target={social.link?.startsWith('http') ? '_blank' : '_self'}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white dark:bg-warm-700 text-warm-600 dark:text-warm-300 rounded-xl hover:shadow-lg transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideInRight}>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-warm-800 dark:text-warm-200 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-warm-700 dark:text-warm-300 font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 dark:border-warm-600 focus:border-warm-500 focus:outline-none transition-colors bg-white/80 dark:bg-warm-800/80 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-warm-700 dark:text-warm-300 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-warm-300 dark:border-warm-600 focus:border-warm-500 focus:outline-none transition-colors bg-white/80 dark:bg-warm-800/80 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-warm-700 dark:text-warm-300 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 dark:border-warm-600 focus:border-warm-500 focus:outline-none transition-colors bg-white/80 dark:bg-warm-800/80 dark:text-white"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-warm-700 dark:text-warm-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-warm-300 dark:border-warm-600 focus:border-warm-500 focus:outline-none transition-colors bg-white/80 dark:bg-warm-800/80 resize-none dark:text-white"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-warm-800 dark:bg-warm-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-warm-900 dark:hover:bg-warm-700 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-warm-400 dark:border-warm-600 mt-20 pt-8"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-warm-600 dark:text-warm-400">
              © 2024 Harshith Bheempalli. Built with passion using Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-warm-500 dark:text-warm-500 text-sm mt-2">
              Designed for performance, accessibility, and an exceptional user experience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
