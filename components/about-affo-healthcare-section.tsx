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
      className="fade-in-section relative w-full overflow-hidden affo-section affo-section-mobile"
      style={{
        minHeight: "64vh",
        marginTop: "3rem",
        paddingTop: "2rem",
        paddingBottom: "32vh"
      }}
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ 
          maxWidth: '100%', 
          height: '140%',
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: 'scale(1, 1.4)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <source src="/video/Affo-page2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile-specific video adjustment */}
      <style jsx>{`
        @media (max-width: 768px) {
          video {
            object-position: center top;
            transform: scale(1.2, 1.4);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
        }
      `}</style>

      {/* Overlay with semi-transparent beige gradient */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(212,193,167,0.3), rgba(248,245,240,0.3))"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
        <div ref={contentRef} className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Left Side: Icon/Image and Title */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-4 sm:gap-6">
            {/* 移除图标 - 根据需求 */}
            
            {/* Title - 统一视觉风格，更大字体并居中 */}
            <div className="text-center lg:text-left w-full">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-white drop-shadow-lg"
              >
                <span className="text-white/90 font-light">What is</span>
                <br />
                <span className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">AFFO</span>
                <br />
                <span className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Healthcare?</span>
              </h2>
            </div>
          </div>

          {/* Right Side: Three Numbered Points - Full-width cards with consistent styling */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">
            <div className="affo-item w-full bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 shadow-lg"
                 style={{ 
                   width: "100%",
                   borderRadius: "0.75rem",
                   backgroundColor: "rgba(255,255,255,0.5)"
                 }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="affo-item-number flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-lg">
                  1
                </div>
                <p className="affo-item-text text-base sm:text-lg leading-relaxed drop-shadow-md flex-1" style={{ color: "#FFFFFF" }}>
                  Affo Healthcare offers an innovative approach to personalized wellness.
                </p>
              </div>
            </div>

            <div className="affo-item w-full bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 shadow-lg"
                 style={{ 
                   width: "100%",
                   borderRadius: "0.75rem",
                   backgroundColor: "rgba(255,255,255,0.5)"
                 }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="affo-item-number flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-lg">
                  2
                </div>
                <p className="affo-item-text text-base sm:text-lg leading-relaxed drop-shadow-md flex-1" style={{ color: "#FFFFFF" }}>
                  It combines AI-driven analysis with traditional balance principles.
                </p>
              </div>
            </div>

            <div className="affo-item w-full bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/30 shadow-lg"
                 style={{ 
                   width: "100%",
                   borderRadius: "0.75rem",
                   backgroundColor: "rgba(255,255,255,0.5)"
                 }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="affo-item-number flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-lg">
                  3
                </div>
                <p className="affo-item-text text-base sm:text-lg leading-relaxed drop-shadow-md flex-1" style={{ color: "#FFFFFF" }}>
                  Our focus is on understanding your unique biology to create tailored health recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styling to cut section height */}
      <style jsx>{`
        section#about-affo-healthcare {
          min-height: 64vh !important;
          padding-bottom: 32vh !important;
          height: auto !important;
        }
        
        @media (max-width: 768px) {
          section#about-affo-healthcare {
            min-height: 50vh !important;
            padding-bottom: 20vh !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
