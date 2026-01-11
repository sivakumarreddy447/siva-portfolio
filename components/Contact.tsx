'use client'

import { personalInfo, socialLinks } from '@/data/profile'
import { Github, Linkedin, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Reach Out to me!
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Lets Connect and Discuss !!!
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <MapPin className="w-5 h-5" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Open for opportunities */}
          <div className="flex items-center gap-2 text-gray-900 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="font-medium">Open for opportunities:</span>
            <span className={personalInfo.openForOpportunities ? 'text-green-600 font-semibold' : 'text-gray-500'}>
              {personalInfo.openForOpportunities ? 'Yes' : 'No'}
            </span>
            {personalInfo.openForOpportunities && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
