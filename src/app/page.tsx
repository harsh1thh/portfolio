'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import { initializeAnimations } from '@/lib/animations'

export default function Home() {
  useEffect(() => {
    initializeAnimations()
  }, [])

  return (
    <main className="relative min-h-screen smooth-gradient">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
