"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation with enhanced visibility
      gsap.fromTo(
        textRef.current,
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

      // Subtle text floating animation
      gsap.to(textRef.current, {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(console.error)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="technology"
      className="fade-in-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_gt98gK1x0Ks6k94Ddc2Ylh8uoVeB/JyXrmrQUs6ws-vAuT3gcb3/public/sensor.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div ref={textRef}>
          <h2
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-white leading-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              textShadow: "0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)",
              filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))",
            }}
          >
            Our Technology
          </h2>

          {/* Subtle accent line */}
          <div className="mt-8 mx-auto w-24 h-1 bg-white/60 rounded-full"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full floating"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full floating"></div>
      <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-white/40 rounded-full floating"></div>
    </section>
  )
}
