"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage2() {
  const pageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (pageRef.current && contentRef.current) {
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

        // Animate content elements
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
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
    <div ref={pageRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1846e211-60b1-4108-86f9-901aeef72c29%20%281%29-Ayv68fmwXKkfHBtbYgzAza9cZQ8pi8.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Navigation */}
      <nav className="relative z-30 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/affo-healthcare/page1"
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
            Previous
          </Link>
          
          <div className="text-white/60 text-sm">
            BALANX-ÁFFO HEALTHCARE
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-20 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            BALANX-ÁFFO HEALTHCARE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-16 drop-shadow-md">
            Experience personalized wellness through advanced bio-analysis and tailored nutrition.
          </p>
          
          {/* Embedded video */}
          <div className="w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto object-cover"
              src="/video/affo-healthcare-produc.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/affo-healthcare/page3"
              className="bg-gold-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-gold-400 transition-colors duration-300 shadow-lg flex items-center gap-3"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Next: Coffee & Wellness
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/"
              className="text-white border border-white/50 py-4 px-10 rounded-full text-lg hover:bg-white/10 transition-colors duration-300 flex items-center gap-3"
              style={{ fontFamily: "Crimson Text, serif" }}
            >
              Back to Home
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
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer with navigation */}
      <footer className="relative z-30 py-8 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gold-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
          <p className="text-white/60 text-sm">
            Page 2 of 3 - BALANX-ÁFFO HEALTHCARE
          </p>
        </div>
      </footer>
    </div>
  )
} 