"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const contentBlocks = [
  {
    title: "AI + Microbiome",
    subtitle: "Explaining Genotypes",
    description:
      "Our advanced AI algorithms analyze your genetic markers and microbiome composition to provide personalized insights into your constitutional type and optimal wellness pathways.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" className="mx-auto">
        <circle cx="36" cy="36" r="32" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="20" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="20" cy="36" r="5" fill="currentColor" opacity="0.6" />
        <circle cx="52" cy="36" r="5" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="52" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="44" cy="52" r="4" fill="currentColor" opacity="0.4" />
        <path
          d="M36 26 L36 30 M30 36 L42 36 M32 46 L40 46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 26 Q36 16 46 26 M26 46 Q36 56 46 46"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>
    ),
    color: "light-green",
  },
  {
    title: "Traditional Balance System",
    subtitle: "Five Elements",
    description:
      "Ancient wisdom meets modern precision as we map your constitutional type through the lens of Wood, Fire, Earth, Metal, and Water elements, providing timeless insights for contemporary wellness.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" className="mx-auto">
        <polygon points="36,8 48,28 24,28" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="56,24 64,36 56,48 48,36" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="48,44 64,64 24,64" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="24,44 8,64 8,28" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="16,24 24,36 16,48 8,36" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="36" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="36" r="6" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    color: "gold",
  },
  {
    title: "Hardware Design",
    subtitle: "Sensors, Accuracy & Safety",
    description:
      "Precision-engineered biosensors with medical-grade accuracy ensure safe, non-invasive analysis. Our FDA-compliant devices deliver laboratory-quality results in the comfort of your home.",
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" className="mx-auto">
        <rect x="16" y="20" width="40" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="36" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="36" r="4" fill="currentColor" />
        <rect x="20" y="16" width="32" height="4" rx="2" fill="currentColor" />
        <rect x="24" y="56" width="24" height="4" rx="2" fill="currentColor" />
        <path d="M28 28 L32 32 M40 32 L44 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 44 L32 40 M40 40 L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="48" cy="24" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="24" cy="48" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="48" cy="48" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    color: "rose-gold",
  },
]

const backgroundColors = [
  "#f0fdf4", // light-green-50
  "#fefdfb", // ivory-50
  "#fef7f4", // rose-gold-50
]

export default function ScrollRevealSection() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const containerRef = useRef<HTMLDivElement>(null) // Main container for background color animation

  useEffect(() => {
    // Initialize refs array if it's empty or not matching contentBlocks length
    if (sectionRefs.current.length !== contentBlocks.length) {
      sectionRefs.current = Array(contentBlocks.length)
        .fill(null)
        .map((_, i) => sectionRefs.current[i] || null)
    }

    const ctx = gsap.context(() => {
      contentBlocks.forEach((block, index) => {
        const currentSection = sectionRefs.current[index]
        if (!currentSection) return

        const title = currentSection.querySelector(".block-title")
        const messageContent = currentSection.querySelector(".message-content")
        const icon = currentSection.querySelector(".block-icon")
        const subtitle = currentSection.querySelector(".block-subtitle")
        const description = currentSection.querySelector(".block-description")

        // Initial state for message content
        gsap.set([messageContent, icon, subtitle, description], { opacity: 0, y: 50 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: currentSection,
            start: "top top",
            end: "bottom top", // Pins for the full height of the section
            pin: true,
            scrub: 1,
            onEnter: () => {
              gsap.to(containerRef.current, {
                backgroundColor: backgroundColors[index],
                duration: 0.8,
                ease: "power1.inOut",
              })
            },
            onLeaveBack: () => {
              if (index > 0) {
                gsap.to(containerRef.current, {
                  backgroundColor: backgroundColors[index - 1],
                  duration: 0.8,
                  ease: "power1.inOut",
                })
              } else {
                // When leaving the first section backwards, revert to initial page background (ivory-50)
                gsap.to(containerRef.current, {
                  backgroundColor: "#fefdfb", // ivory-50
                  duration: 0.8,
                  ease: "power1.inOut",
                })
              }
            },
          },
        })

        // Animate message content in
        tl.to([messageContent, icon, subtitle, description], {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        })
      })
    }, containerRef) // Context scope

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full transition-colors duration-800 ease-in-out"
      style={{ backgroundColor: backgroundColors[0] }}
    >
      {contentBlocks.map((block, index) => (
        <section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2
              className="block-title text-6xl md:text-8xl font-wide font-bold text-gray-800 mb-8 tracking-wide"
              style={{ fontFamily: "Agrandir Wide, sans-serif" }}
            >
              {block.title}
            </h2>
            <div className="message-content">
              <div className="flex flex-col items-center justify-center mb-8">
                <div className={`block-icon text-${block.color}-600 p-8 bg-${block.color}-50 rounded-2xl`}>
                  {block.icon}
                </div>
                <span
                  className={`block-subtitle inline-block px-4 py-2 bg-${block.color}-100 text-${block.color}-700 rounded-full text-sm font-medium tracking-wide uppercase mt-8`}
                >
                  {block.subtitle}
                </span>
              </div>
              <p
                className="block-description text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "Agrandir Wide, sans-serif" }}
              >
                {block.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
