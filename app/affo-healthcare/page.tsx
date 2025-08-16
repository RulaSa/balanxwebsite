"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import InteractiveWorkflow from "@/components/interactive-workflow"
import CoffeeHealthSection from "@/components/coffee-health-section"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage() {
  const globalVideoRef = useRef<HTMLVideoElement>(null)
  const globalOverlayRef = useRef<HTMLDivElement>(null)
  const coffeeHealthSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalVideoRef.current && globalOverlayRef.current && coffeeHealthSectionRef.current) {
        // ScrollTrigger for fading out the global background video and its overlay
        gsap.to([globalVideoRef.current, globalOverlayRef.current], {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: coffeeHealthSectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        })

        // ScrollTrigger for controlling display property and body background
        ScrollTrigger.create({
          trigger: coffeeHealthSectionRef.current,
          start: "top 20%",
          end: "bottom top",
          onToggle: (self) => {
            if (globalVideoRef.current && globalOverlayRef.current) {
              if (self.isActive) {
                // When CoffeeHealthSection is active (in view), hide global video and make body black
                globalVideoRef.current.style.display = "none"
                globalOverlayRef.current.style.display = "none"
                document.body.classList.add("bg-black") // Add black background to body
              } else {
                // When CoffeeHealthSection is not active, show global video and remove body black background
                globalVideoRef.current.style.display = "block"
                globalOverlayRef.current.style.display = "block"
                document.body.classList.remove("bg-black") // Remove black background from body
              }
            }
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Full-screen video background */}
      <video
        ref={globalVideoRef}
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1846e211-60b1-4108-86f9-901aeef72c29%20%281%29-Ayv68fmwXKkfHBtbYgzAza9cZQ8pi8.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div ref={globalOverlayRef} className="fixed inset-0 bg-black/40 z-10"></div>

      {/* Content section */}
      <div
        data-section="affo-healthcare" // Added this attribute for navigation
        className="relative z-20 pt-24 pb-16 px-6 md:px-12 lg:px-24 text-white"
      >
        <h1
          className="text-5xl md:text-7xl font-extralight text-center mb-8 drop-shadow-lg"
          style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
        >
          ÁFFO HEALTHCARE
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16 drop-shadow-md">
          Experience personalized wellness through advanced <span className="whitespace-nowrap">bio-analysis</span> and tailored nutrition.
        </p>
        {/* Embedded video */}
        <div className="w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto object-cover"
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exploded-BTR24P5NPnuMt8Axv3S3SZKDqIED1R.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {/* New Interactive Workflow Section */}
        <InteractiveWorkflow />
        {/* New Coffee Health Section */}
        <CoffeeHealthSection ref={coffeeHealthSectionRef} className="mt-16" />
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20">
          <Link
            href="/"
            className="bg-gold-500 text-white font-extralight py-4 px-10 rounded-full text-lg hover:bg-gold-600 transition-colors duration-300 shadow-lg flex items-center gap-3"
            style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
          >
            Join the Waitlist
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
            style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
          >
            Home
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
  )
}
