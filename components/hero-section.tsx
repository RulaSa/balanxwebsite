"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)



  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation with golden ratio timing
      const tl = gsap.timeline({ delay: 1.618 })

      // Title with elegant letter spacing animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, letterSpacing: "1em", scale: 0.8 },
        { opacity: 1, y: 0, letterSpacing: "0.2em", scale: 1, duration: 1.618, ease: "power2.out" },
        "-=1.618",
      )

      // Subtitle with gentle fade
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1",
      )

      // Parallax effect on scroll
      gsap.to(sectionRef.current, {
        yPercent: -25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    // Landing animation scroll handler
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true)
        // Smooth scroll to the next section
        const nextSection = document.querySelector('[data-section="interactive-workflow"]')
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Prevent normal scrolling on the hero section
    const preventScroll = (e: WheelEvent) => {
      if (!hasScrolled) {
        e.preventDefault()
        setHasScrolled(true)
        // Smooth scroll to the next section
        const nextSection = document.querySelector('[data-section="interactive-workflow"]')
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: false })
    window.addEventListener('wheel', preventScroll, { passive: false })

    return () => {
      ctx.revert()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', preventScroll)
    }
  }, [hasScrolled])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero"

    >
      {/* Video Background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/video/0_Pink_Lake_Salt_Lake_3840x2160.mp4" type="video/mp4" />
      </video>

      {/* Overlay with mouse-following light effect */}
      <div
        className="absolute inset-0 bg-black/30 z-10 overflow-hidden"

        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          // Update CSS custom properties for the light position
          e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
          e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
        }}
        style={{
          background: `
            radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 20%, 
              transparent 50%),
            rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {/* BALANX-BIO Text - Center */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="text-center">
            <div 
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest drop-shadow-2xl mb-4"
              style={{ 
                fontFamily: "Agrandir Wide, sans-serif",
                background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(173,216,230,0.7) 50%, rgba(255,215,0,0.6) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
              }}
          >
            BALANX-BIO
            </div>
            <div 
              className="text-lg md:text-xl lg:text-2xl text-white font-medium tracking-wide drop-shadow-lg ml-24 md:ml-36 lg:ml-48"
              style={{ 
                fontFamily: "Agrandir Wide, sans-serif"
              }}
            >
              - Where AI Meet Health, Where You Meet Balance
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {!hasScrolled && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-white text-sm opacity-70">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="floating absolute top-1/4 left-1/6 w-3 h-3 bg-light-green-300 rounded-full opacity-40"></div>
        <div className="floating absolute top-3/4 right-1/4 w-4 h-4 bg-rose-gold-200 rounded-full opacity-30"></div>
        <div className="floating absolute top-1/3 right-1/6 w-2 h-2 bg-champagne-300 rounded-full opacity-50"></div>
        <div className="floating absolute bottom-1/4 left-1/3 w-3 h-3 bg-gold-200 rounded-full opacity-35"></div>

        {/* SVG decorative elements */}
        <div className="parallax-element absolute top-1/5 right-1/5 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <path
              className="svg-draw"
              d="M60 20 L80 60 L40 60 Z M60 60 L60 100"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="parallax-element absolute bottom-1/5 left-1/5 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle className="svg-draw" cx="50" cy="50" r="40" fill="none" stroke="#d4af37" strokeWidth="2" />
            <circle className="svg-draw" cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-30 text-center px-6 w-full h-full"

      >
        {/* Arc Curve Feature Layout */}
        <div className="relative w-full h-full">
          


        </div>
      </div>
    </section>
  )
}
