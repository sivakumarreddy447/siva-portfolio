'use client'

import { useEffect, useState } from 'react'

export default function HoverHighlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement
      const interactiveElement = target.closest(
        'button, a, .interactive-card, .skill-item, .nav-link, .social-icon, .btn-primary, .btn-secondary, .cert-card, .edu-card, .project-card, .timeline-card'
      ) as HTMLElement | null

      if (interactiveElement) {
        setIsHovering(true)
        setTargetRect(interactiveElement.getBoundingClientRect())
      } else {
        setIsHovering(false)
        setTargetRect(null)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor follower dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out ${
            isHovering
              ? 'w-3 h-3 bg-blue-500/30 ring-2 ring-blue-500/50'
              : 'w-2 h-2 bg-gray-400/40'
          }`}
        />
      </div>

      {/* Highlight box around hovered element */}
      {isHovering && targetRect && (
        <div
          className="fixed pointer-events-none z-[9998] transition-all duration-200 ease-out rounded-xl"
          style={{
            left: targetRect.left - 4,
            top: targetRect.top - 4,
            width: targetRect.width + 8,
            height: targetRect.height + 8,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03), rgba(147, 51, 234, 0.03))',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.08)',
          }}
        />
      )}
    </>
  )
}
