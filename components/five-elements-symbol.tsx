"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface FiveElementsSymbolProps {
  size?: number
  className?: string
}

export default function FiveElementsSymbol({ size = 200, className = "" }: FiveElementsSymbolProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each element path
      gsap.fromTo(
        ".element-path",
        { strokeDasharray: "0 1000", opacity: 0 },
        {
          strokeDasharray: "1000 0",
          opacity: 1,
          duration: 3,
          stagger: 0.2,
          ease: "power2.inOut",
        },
      )

      // Gentle pulsing animation
      gsap.to(".element-center", {
        scale: 1.05,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
    }, svgRef)

    return () => ctx.revert()
  }, [])

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wood Element - Top */}
      <path
        className="element-path"
        d="M100 20 L120 60 L80 60 Z"
        fill="none"
        stroke="url(#woodGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Fire Element - Top Right */}
      <path
        className="element-path"
        d="M150 50 L180 80 L150 110 L120 80 Z"
        fill="none"
        stroke="url(#fireGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Earth Element - Bottom Right */}
      <path
        className="element-path"
        d="M150 130 L180 160 L120 160 Z"
        fill="none"
        stroke="url(#earthGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Metal Element - Bottom Left */}
      <path
        className="element-path"
        d="M50 130 L80 160 L20 160 Z"
        fill="none"
        stroke="url(#metalGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Water Element - Top Left */}
      <path
        className="element-path"
        d="M50 50 L80 80 L50 110 L20 80 Z"
        fill="none"
        stroke="url(#waterGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center Circle */}
      <circle
        className="element-center"
        cx="100"
        cy="100"
        r="25"
        fill="none"
        stroke="url(#centerGradient)"
        strokeWidth="3"
      />

      {/* Connecting Lines */}
      <path
        className="element-path"
        d="M100 75 L100 45 M125 100 L155 100 M100 125 L100 155 M75 100 L45 100"
        stroke="url(#connectionGradient)"
        strokeWidth="1"
        opacity="0.6"
      />

      <defs>
        <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>

        <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>

        <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>

        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>

        <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>

        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </linearGradient>
      </defs>
    </svg>
  )
}
