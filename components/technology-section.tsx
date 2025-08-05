"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with scale and fade
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
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

      // Subtle parallax on video
      gsap.to(videoRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="technology"
      className="fade-in-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background - Full Coverage */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/video/technologyBG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-center leading-tight"
          style={{ 
            fontFamily: "Playfair Display, serif",
            color: "rgba(255, 255, 255, 0.6)",
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
            textShadow: "0 0 20px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.6)",
            backdropFilter: "invert(1) contrast(2)",
            mixBlendMode: "difference"
          }}
        >
          Our Technology
        </h1>
      </div>
    </section>
  )
}
