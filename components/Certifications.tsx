'use client'

import { certifications } from '@/data/profile'
import { ExternalLink, Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Provider Logo */}
                <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={`${cert.provider} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <Award className="w-7 h-7 text-gray-400" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{cert.provider}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-gray-500 mb-3">
                  {cert.skills}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
