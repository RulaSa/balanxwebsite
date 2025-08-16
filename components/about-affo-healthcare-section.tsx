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
          {/* Left Side: Icon/Image and Title */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
            {/* 移除图标 - 根据需求 */}
            
            {/* Title - 统一视觉风格，更大字体并居中 */}
            <div className="text-center lg:text-left w-full">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white drop-shadow-lg"
              >
                <span className="text-white/90 font-light">What is</span>
                <br />
                <span className="text-white font-semibold text-6xl md:text-7xl lg:text-8xl">AFFO</span>
                <br />
                <span className="text-white font-semibold text-6xl md:text-7xl lg:text-8xl">Healthcare?</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Three Numbered Points */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  1
                </div>
                <p className="text-lg leading-relaxed drop-shadow-md" style={{ color: "#FFFFFF" }}>
                  Affo Healthcare offers an innovative approach to personalized wellness.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  2
                </div>
                <p className="text-lg leading-relaxed drop-shadow-md" style={{ color: "#FFFFFF" }}>
                  It combines AI-driven analysis with traditional balance principles.
                </p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  3
                </div>
                <p className="text-lg leading-relaxed drop-shadow-md" style={{ color: "#FFFFFF" }}>
                  Our focus is on understanding your unique biology to create tailored health recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
