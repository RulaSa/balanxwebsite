"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title entrance animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden fade-in-section"
      id="technology"
    >
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_gt98gK1x0Ks6k94Ddc2Ylh8uoVeB/j6Ehp0_UnYnQ7HKqHYvhF4/public/images/flame.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h2
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 font-serif"
          style={{
            textShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
          }}
        >
          Our Technology
        </h2>

        {/* Decorative accent line */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full floating" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full floating" />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full floating" />
    </section>
  )
}
