"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
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
    </section>
  )
} 