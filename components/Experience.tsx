'use client'

import { experience } from '@/data/profile'
import { Check, Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Experience</h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0
              
              return (
                <div
                  key={exp.id}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot with company logo */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-green-500 rounded-full items-center justify-center z-10 shadow-lg overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <Check className="w-5 h-5 text-green-500" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`md:w-[calc(50%-3rem)] timeline-card interactive-card ${
                      isLeft ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    {/* Mobile: Company logo and date */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-7 h-7 object-contain"
                          />
                        ) : (
                          <Briefcase className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <span className="text-sm text-orange-500 font-medium">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="hidden md:block text-sm text-orange-500 font-medium whitespace-nowrap ml-4">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
