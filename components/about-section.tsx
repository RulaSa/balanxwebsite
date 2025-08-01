"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant masked reveal from center
      gsap.fromTo(
        maskRef.current,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center center",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Staggered text animation
      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 40, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Hover effects for text elements
      gsap.utils.toArray(".about-text").forEach((text: any) => {
        text.addEventListener("mouseenter", () => {
          gsap.to(text, {
            color: "#22c55e",
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        text.addEventListener("mouseleave", () => {
          gsap.to(text, {
            color: "#4b5563",
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="about"
      className="fade-in-section relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-20"
    >
      {/* Masked background with subtle gradient */}
      <div
        ref={maskRef}
        className="absolute inset-0 bg-gradient-to-br from-rose-gold-50 via-ivory-100 to-champagne-50"
        style={{ clipPath: "circle(0% at 50% 50%)" }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-element absolute top-1/4 left-1/6">
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-20">
            <circle cx="30" cy="30" r="25" fill="none" stroke="#d4af37" strokeWidth="2" />
            <circle cx="30" cy="30" r="15" fill="none" stroke="#22c55e" strokeWidth="1" />
          </svg>
        </div>
        <div className="parallax-element absolute bottom-1/4 right-1/6">
          <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-15">
            <polygon points="20,5 35,35 5,35" fill="none" stroke="#f59e0b" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2
          className="about-text text-6xl md:text-8xl font-serif font-bold text-gray-800 mb-16 tracking-wide"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {"Why BalanX"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Constitutional Wellness */}
          <div className="about-text text-center space-y-6">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-600">
                <path
                  d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="16" cy="16" r="3" fill="currentColor" />
              </svg>
            </div>
            <h3
              className="text-xl font-serif font-bold text-gray-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Constitutional Wellness
            </h3>
            <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Crimson Text, serif" }}>
              Personalized to your unique body constitution using traditional Chinese medicine principles.
            </p>
          </div>

          {/* Smart Analysis */}
          <div className="about-text text-center space-y-6">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-600">
                <path
                  d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M8 16h4M20 16h4M16 8v4M16 20v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3
              className="text-xl font-serif font-bold text-gray-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Smart Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Crimson Text, serif" }}>
              AI-powered biomarker analysis provides real-time insights into your wellness needs.
            </p>
          </div>

          {/* Natural Harmony */}
          <div className="about-text text-center space-y-6">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-600">
                <path
                  d="M16 2c-3 0-6 2-6 6 0 4 6 12 6 12s6-8 6-12c0-4-3-6-6-6z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 20c2-2 4-2 6 0s4 2 6 0M6 26c3-2 5-2 8 0s5 2 8 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-serif font-bold text-gray-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Natural Harmony
            </h3>
            <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Crimson Text, serif" }}>
              Blend ancient herbal wisdom with modern coffee culture for daily balance.
            </p>
          </div>

          {/* Gentle & Safe */}
          <div className="about-text text-center space-y-6">
            <div className="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-600">
                <path
                  d="M16 2l4.5 4.5L26 4l2 2-2.5 5.5L30 16l-4.5 4.5L28 26l-2 2-5.5-2.5L16 30l-4.5-4.5L6 28l-2-2 2.5-5.5L2 16l4.5-4.5L4 6l2-2 5.5 2.5L16 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16l2 2 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-serif font-bold text-gray-800"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Gentle & Safe
            </h3>
            <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Crimson Text, serif" }}>
              Non-invasive, medical-grade sensors designed with mindfulness at the core.
            </p>
          </div>
        </div>

        {/* Element indicators */}
      </div>
    </section>
  )
}
