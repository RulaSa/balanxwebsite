"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function WaitlistSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && textRef.current && buttonRef.current) {
        // Fade in animation for the section
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Staggered text animation
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Button animation
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: buttonRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="waitlist"
      className="fade-in-section relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    >
      {/* Background pottery image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3CradialGradient id="pottery-bg" cx="50%25" cy="50%25" r="50%25"%3E%3Cstop offset="0%25" style="stop-color:%23d97706;stop-opacity:0.6"/%3E%3Cstop offset="100%25" style="stop-color:%23b45309;stop-opacity:0.2"/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23pottery-bg)"/%3E%3C!-- Pottery wheel base --%3E%3Ccircle cx="600" cy="400" r="200" fill="%23a16207" opacity="0.4"/%3E%3Ccircle cx="600" cy="400" r="180" fill="%23d97706" opacity="0.3"/%3E%3Ccircle cx="600" cy="400" r="160" fill="%23f59e0b" opacity="0.2"/%3E%3C!-- Clay pot silhouette --%3E%3Cellipse cx="600" cy="350" rx="80" ry="120" fill="%23a16207" opacity="0.5"/%3E%3Cellipse cx="600" cy="350" rx="60" ry="100" fill="%23d97706" opacity="0.4"/%3E%3C!-- Hands silhouette --%3E%3Cpath d="M520 300 Q540 280 560 300 Q580 320 600 300" stroke="%23d97706" stroke-width="8" fill="none" opacity="0.3"/%3E%3Cpath d="M640 300 Q660 280 680 300 Q700 320 720 300" stroke="%23d97706" stroke-width="8" fill="none" opacity="0.3"/%3E%3C/svg%3E')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 via-amber-800/60 to-orange-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex justify-center items-center">
        {/* Text Content */}
        <div ref={textRef} className="text-left space-y-8">
          <div className="space-y-4">
            <h2
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="block">Rooted in</span>
              <span className="block text-white">Ritual.</span>
              <span className="block">Backed by</span>
              <span className="block text-white">Science.</span>
              <span className="block">Focused on</span>
              <span className="block text-white">You.</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl">
            Join the waitlist for early access, founding member benefits, and exclusive launch offers.
          </p>

          <Link
            href="/pre-order"
            className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 group w-fit"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Join Waitlist
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
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>


      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-amber-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-amber-300/20 rounded-full blur-lg"></div>
    </section>
  )
} 