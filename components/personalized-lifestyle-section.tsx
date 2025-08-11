"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PersonalizedLifestyleSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && textRef.current) {
        // Fade in animation for the section
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Text entrance animation
        gsap.fromTo(
          textRef.current,
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
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
      id="personalized-lifestyle"
      className="fade-in-section relative w-full h-screen md:h-screen overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/6035530_Woman_People_3840x2160.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4 md:px-6">
        <div 
          ref={textRef}
          className="text-center max-w-[1040px] mx-auto"
        >
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-extralight mb-4 md:mb-6 text-white drop-shadow-lg"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Personalized for Your Lifestyle
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl leading-relaxed text-white drop-shadow-md max-w-[780px] mx-auto"
            style={{ lineHeight: "1.6" }}
          >
            This isn't just coffee—it's a precision-engineered wellness solution. Every ingredient has been selected by AI analysis of your microbiome, stress patterns, and lifestyle needs. One simple morning ritual that addresses fatigue, stress, gut health, and mental clarity.
          </p>
        </div>
      </div>
    </section>
  )
}
