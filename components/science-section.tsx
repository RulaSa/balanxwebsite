"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ScienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const fiveElementsImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation from left
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image animation from right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Five Elements image animation from center
      gsap.fromTo(
        fiveElementsImageRef.current,
        { opacity: 0, scale: 0.9, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Staggered content sections
      gsap.fromTo(
        ".science-content-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Subtle parallax on image
      gsap.to(imageRef.current, {
        yPercent: -15,
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
      data-section="science"
      className="fade-in-section relative min-h-screen flex items-center justify-center bg-white py-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* TCM Herbs Image - Upper Left */}
            <div ref={imageRef} className="relative mb-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/tcm-herbs.png"
                  alt="Assortment of Traditional Chinese Medicine herbs and natural ingredients, including ginseng roots and dried mushrooms, arranged in wooden bowls on a dark surface."
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-light-green-200 rounded-full opacity-60 floating"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gold-200 rounded-full opacity-50 floating"></div>
              <div className="absolute top-1/3 -left-8 w-4 h-4 bg-rose-gold-200 rounded-full opacity-40 floating"></div>
            </div>

            {/* Content Sections (Biomarker Analysis, Five Elements Typing, Personalized Blending) - Lower Left */}
            <div className="space-y-10">
              {/* Biomarker Analysis */}
              <div className="science-content-item">
                <h3
                  className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Biomarker Analysis
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text, serif" }}>
                  Our sensors analyze salivary biomarkers including pH levels, cortisol, and short-chain fatty acids to
                  understand your current state.
                </p>
              </div>

              {/* Five Elements Typing */}
              <div className="science-content-item">
                <h3
                  className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Five Elements Typing
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text, serif" }}>
                  Ancient constitutional analysis meets modern AI to determine your dominant element and current
                  imbalances.
                </p>
              </div>

              {/* Personalized Blending */}
              <div className="science-content-item">
                <h3
                  className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Personalized Blending
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "Crimson Text, serif" }}>
                  Carefully selected herbs and adaptogens are blended to support your specific constitutional needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Main Title and Description - Upper Right */}
            <div ref={contentRef} className="space-y-8 mb-12">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-800 leading-tight py-0 border-0"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                The Science Behind Balance
              </h2>

              <p
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Traditional Chinese medicine has understood for millennia what modern science now confirms: true
                wellness comes from understanding your body's unique constitution and supporting its natural balance.
              </p>
            </div>

            {/* Five Elements Cycle Image - Lower Right */}
            <div ref={fiveElementsImageRef} className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/five-elements-cycle.png"
                  alt="A colorful diagram illustrating the Five Elements cycle (Wood, Fire, Earth, Metal, Water) with their corresponding seasons and generative relationships, such as 'Burning Wood feeds the Fire'."
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gold-200 rounded-full opacity-60 floating"></div>
              <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-light-green-200 rounded-full opacity-50 floating"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
