"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import CoffeeHealthSection from "@/components/coffee-health-section"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage3Section() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const coffeeHealthSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
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
    <section
      ref={sectionRef}
      data-section="affo-healthcare-page3"
      className="fade-in-section relative overflow-hidden"
    >
      <CoffeeHealthSection ref={coffeeHealthSectionRef} />
      
      {/* Join Waitlist Button */}
      <div className="absolute bottom-8 right-8 z-10">
        <Link
          href="/pre-order"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-extralight py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
        >
          Join Waitlist
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </Link>
      </div>
    </section>
  )
} 