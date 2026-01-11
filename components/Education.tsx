'use client'

import Image from 'next/image'
import { education } from '@/data/profile'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="edu-card interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* University Logo */}
                <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <GraduationCap className="w-7 h-7 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
              </div>

              <div className="ml-[4.5rem]">
                <p className="font-semibold text-gray-800">{edu.degree}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
