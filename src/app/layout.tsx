import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Harshith Bheempalli - JavaScript Developer & Tech Enthusiast',
  description: 'Portfolio of Harshith Bheempalli - A passionate JavaScript developer specializing in modern web technologies, DevOps, Cloud, and emerging tech.',
  keywords: 'JavaScript, Developer, DevOps, Cloud, Cybersecurity, AI, Portfolio, Full Stack',
  authors: [{ name: 'Harshith Bheempalli' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased font-sf-pro">
        <ThemeProvider>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
