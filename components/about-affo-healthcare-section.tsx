"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutAffoHealthcareSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && contentRef.current) {
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
    <section
      ref={sectionRef}
      id="about-affo-healthcare"
      className="fade-in-section relative w-full overflow-hidden"
      style={{
        aspectRatio: "16/9",
        minHeight: "60vh"
      }}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Affo-page2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with semi-transparent beige gradient */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(212,193,167,0.3), rgba(248,245,240,0.3))"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-6">
        <div ref={contentRef} className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Icon/Image Section */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Main icon container */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl text-white">❤️</span>
                </div>
                
                {/* Decorative smaller icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <span className="text-lg text-white">🧠</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
                  <span className="text-lg text-white">⚡</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            >
              What is Affo Healthcare?
            </h2>
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0 text-white drop-shadow-md"
            >
              Affo Healthcare is an innovative approach to personalized wellness, combining AI-driven analysis with traditional balance principles. It focuses on understanding your unique biology to create tailored health recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
