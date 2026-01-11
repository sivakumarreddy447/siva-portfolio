'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo, socialLinks } from '@/data/profile'

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = personalInfo.role
    let currentIndex = 0

    const typeRole = () => {
      if (currentIndex <= role.length) {
        setDisplayedRole(role.substring(0, currentIndex))
        currentIndex++
        setTimeout(typeRole, 100)
      } else {
        setIsTyping(false)
      }
    }

    const timeout = setTimeout(typeRole, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Greeting */}
          <p className="text-lg text-gray-600 mb-2 animate-fade-in">
            {personalInfo.greeting}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 animate-slide-up">
            {personalInfo.name}
          </h1>

          {/* Role with typing effect */}
          <h2 className="text-xl md:text-2xl text-gray-700 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {personalInfo.tagline}{' '}
            <span className={`font-semibold ${isTyping ? 'typing-cursor' : ''}`}>
              {displayedRole}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {personalInfo.description}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white icon-hover"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white icon-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="social-icon w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white icon-hover"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              See My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
