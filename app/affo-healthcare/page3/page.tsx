"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CoffeeHealthSection from "@/components/coffee-health-section"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage3() {
  const pageRef = useRef<HTMLDivElement>(null)
  const coffeeHealthSectionRef = useRef<HTMLDivElement>(null)

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

      if (coffeeHealthSectionRef.current) {
        // ScrollTrigger for controlling body background
        ScrollTrigger.create({
          trigger: coffeeHealthSectionRef.current,
          start: "top 20%",
          end: "bottom top",
          onToggle: (self) => {
            if (self.isActive) {
              // When CoffeeHealthSection is active (in view), make body black
              document.body.classList.add("bg-black")
            } else {
              // When CoffeeHealthSection is not active, remove body black background
              document.body.classList.remove("bg-black")
            }
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Navigation */}
      <nav className="relative z-30 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/affo-healthcare/page2"
            className="text-white hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
            style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
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
            Previous
          </Link>
          
          <div className="text-white/60 text-sm">
            Coffee & Wellness
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20">
        <CoffeeHealthSection ref={coffeeHealthSectionRef} />
      </div>

      {/* Footer with navigation */}
      <footer className="relative z-30 py-8 px-6 text-center bg-black/80">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
          </div>
          <p className="text-white/60 text-sm mb-4">
            Page 3 of 3 - Coffee & Wellness
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/"
              className="bg-gold-500 text-black font-extralight py-3 px-8 rounded-full hover:bg-gold-400 transition-colors duration-300"
              style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
            >
              Back to Home
            </Link>
            <Link
              href="/affo-healthcare/page1"
              className="text-white border border-white/50 py-3 px-8 rounded-full hover:bg-white/10 transition-colors duration-300"
              style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
            >
              Start Over
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 