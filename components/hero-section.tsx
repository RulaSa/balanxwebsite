"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

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

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-50 via-white to-rose-gold-50 overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none">
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
      <div className="relative z-10 text-center px-6 max-w-5xl">
        

        

        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto"
          style={{ fontFamily: "Crimson Text, serif" }}
        >
          Personalized wellness through ancient wisdom and modern science. Every cup crafted for your unique
          constitution.
        </p>

        {/* Scroll indicator */}

        {/* Element indicators */}
        <div className="flex justify-center space-x-12 mt-20">
          {[
            { name: "Wood", color: "light-green" },
            { name: "Fire", color: "gold" },
            { name: "Earth", color: "champagne" },
            { name: "Metal", color: "gray" },
            { name: "Water", color: "blue" },
          ].map((element, index) => (
            <div key={element.name} className="text-center group cursor-pointer">
              <div
                className={`w-4 h-4 rounded-full bg-${element.color}-400 mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`}
              ></div>
              <span className="text-sm text-gray-500 font-light tracking-wider">{element.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
