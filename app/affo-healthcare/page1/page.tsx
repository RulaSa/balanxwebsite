"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import InteractiveWorkflow from "@/components/interactive-workflow"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage1() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pageRef.current) {
        // Fade in animation for the page
        gsap.fromTo(
          pageRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      
      {/* Navigation */}
      <nav className="relative z-30 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-white hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Back to Home
          </Link>
          
          <div className="text-white/60 text-sm">
            BALANX - What If Health Was...
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20">
        <InteractiveWorkflow />
      </div>

      {/* Footer with navigation */}
      <footer className="relative z-30 py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
          <p className="text-white/60 text-sm mb-4">
            Page 1 of 3 - What If Health Was...
          </p>
          <Link
            href="/affo-healthcare/page2"
            className="inline-flex items-center gap-2 bg-gold-500 text-black font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition-colors duration-300"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Next: BALANX-ÁFFO HEALTHCARE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  )
} 