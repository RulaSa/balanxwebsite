"use client"

import { useEffect, useRef, useState } from "react"
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
    detailedContent: {
      features: [
        {
          title: "Genetic Mapping",
          description: "Advanced DNA analysis identifies your unique genetic predispositions and metabolic patterns.",
          icon: "🧬",
        },
        {
          title: "Microbiome Analysis",
          description: "Comprehensive gut health assessment reveals your digestive constitution and optimal nutrition.",
          icon: "🦠",
        },
        {
          title: "AI Pattern Recognition",
          description: "Machine learning algorithms identify complex relationships between genetics and wellness.",
          icon: "🤖",
        },
      ],
      stats: [
        { label: "Genetic Markers", value: "10,000+" },
        { label: "Accuracy Rate", value: "97.3%" },
        { label: "Processing Time", value: "< 2 mins" },
      ],
    },
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
    detailedContent: {
      features: [
        {
          title: "Constitutional Typing",
          description:
            "Determine your dominant element through pulse analysis, tongue examination, and lifestyle assessment.",
          icon: "⚖️",
        },
        {
          title: "Elemental Balance",
          description: "Understand the dynamic relationships between Wood, Fire, Earth, Metal, and Water in your body.",
          icon: "🌿",
        },
        {
          title: "Seasonal Adaptation",
          description: "Receive guidance on how to adjust your wellness routine with changing seasons and life phases.",
          icon: "🌸",
        },
      ],
      stats: [
        { label: "Years of Wisdom", value: "5,000+" },
        { label: "Element Combinations", value: "25" },
        { label: "Personalization Factors", value: "200+" },
      ],
    },
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
    detailedContent: {
      features: [
        {
          title: "Medical-Grade Sensors",
          description: "FDA-approved biosensors measure pH, cortisol, and metabolic markers with laboratory precision.",
          icon: "🔬",
        },
        {
          title: "Non-Invasive Design",
          description:
            "Comfortable, safe analysis through saliva sampling - no blood draws or uncomfortable procedures.",
          icon: "🛡️",
        },
        {
          title: "Real-Time Processing",
          description: "Instant results with cloud-connected processing and secure data encryption.",
          icon: "⚡",
        },
      ],
      stats: [
        { label: "Sensor Accuracy", value: "99.1%" },
        { label: "Analysis Time", value: "30 sec" },
        { label: "FDA Compliance", value: "Class II" },
      ],
    },
  },
]

const backgroundColors = [
  "#f0fdf4", // light-green-50
  "#fefdfb", // ivory-50
  "#fef7f4", // rose-gold-50
]

export default function ScrollRevealSection() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({})

  const toggleSection = (index: number) => {
    // Close all other sections when opening a new one
    const newExpandedSections: { [key: number]: boolean } = {}
    const isExpanding = !expandedSections[index]
    newExpandedSections[index] = isExpanding
    
    // Get the dropdown element
    const currentSection = sectionRefs.current[index]
    const dropdown = currentSection?.querySelector(`[data-dropdown="${index}"]`) as HTMLElement
    
    if (dropdown && isExpanding) {
      // Opening animation with truly smooth rectangle expansion
      gsap.set(dropdown, { height: 'auto', opacity: 0 })
      const fullHeight = dropdown.offsetHeight
      gsap.set(dropdown, { height: 0, opacity: 0 })
      
      // Separate height and opacity animations for smoother transition
      gsap.to(dropdown, {
        height: fullHeight,
        duration: 2.2,
        ease: "power1.out", // Even gentler easing
        onComplete: () => {
          gsap.set(dropdown, { height: 'auto' })
        }
      })
      
      // Delayed opacity fade-in for smoother appearance
      gsap.to(dropdown, {
        opacity: 1,
        duration: 1.5,
        delay: 0.3, // Start opacity after height begins
        ease: "power1.out"
      })
      
      // Keep content animation timing the same
      const content = dropdown.querySelector('.dropdown-content')
      const features = dropdown.querySelectorAll('.feature-item')
      const stats = dropdown.querySelectorAll('.stat-item')
      
      gsap.fromTo([...features, ...stats], 
        { y: 40, opacity: 0, scale: 0.85 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          delay: 0.8, // Increased delay to wait for container
          ease: "power2.out"
        }
      )
    } else if (dropdown && !isExpanding) {
      // Closing animation with slower rectangle collapse
      const features = dropdown.querySelectorAll('.feature-item')
      const stats = dropdown.querySelectorAll('.stat-item')
      
      // Fade out content first
      gsap.to([...features, ...stats], {
        y: -30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.in"
      })
      
      // Then fade out container
      gsap.to(dropdown, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power1.in"
      })
      
      // Finally collapse height
      gsap.to(dropdown, {
        height: 0,
        duration: 2.0,
        delay: 0.6,
        ease: "power1.in"
      })
    }
    
    setExpandedSections(newExpandedSections)
  }

  useEffect(() => {
    // Initialize refs array
    sectionRefs.current = Array(contentBlocks.length).fill(null)

    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        contentBlocks.forEach((block, index) => {
          const currentSection = sectionRefs.current[index]
          if (!currentSection) return

          // Use more specific selectors and add null checks
          const messageContent = currentSection.querySelector(`[data-message-content="${index}"]`)
          const icon = currentSection.querySelector(`[data-icon="${index}"]`)
          const subtitle = currentSection.querySelector(`[data-subtitle="${index}"]`)
          const description = currentSection.querySelector(`[data-description="${index}"]`)

          // Only animate elements that exist
          const elementsToAnimate = [messageContent, icon, subtitle, description].filter(Boolean)

          if (elementsToAnimate.length > 0) {
            // Initial state for message content
            gsap.set(elementsToAnimate, { opacity: 0, y: 50 })

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: currentSection,
                start: "top top",
                end: "bottom top",
                pin: true,
                scrub: 1,
                onEnter: () => {
                  if (containerRef.current) {
                    gsap.to(containerRef.current, {
                      backgroundColor: backgroundColors[index],
                      duration: 0.8,
                      ease: "power1.inOut",
                    })
                  }
                },
                onLeaveBack: () => {
                  if (containerRef.current) {
                    if (index > 0) {
                      gsap.to(containerRef.current, {
                        backgroundColor: backgroundColors[index - 1],
                        duration: 0.8,
                        ease: "power1.inOut",
                      })
                    } else {
                      gsap.to(containerRef.current, {
                        backgroundColor: "#fefdfb",
                        duration: 0.8,
                        ease: "power1.inOut",
                      })
                    }
                  }
                },
              },
            })

            // Animate message content in
            tl.to(elementsToAnimate, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power2.out",
            })
          }
        })
      }, containerRef)

      return () => ctx.revert()
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full transition-colors duration-800 ease-in-out"
      style={{ backgroundColor: backgroundColors[0] }}
    >
      {contentBlocks.map((block, index) => (
        <section
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`relative flex flex-col items-center justify-center px-6 py-20 text-center ${
            expandedSections[index] ? "min-h-fit" : "min-h-screen"
          }`}
        >
          <div className="max-w-4xl mx-auto w-full">
            {/* Interactive Title Button - Minimal Design */}
            <button
              onClick={() => toggleSection(index)}
              className="group relative inline-block text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-800 mb-8 transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {/* Text with gradient on hover */}
              <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-800 group-hover:from-light-green-500 group-hover:via-gold-500 group-hover:to-rose-gold-500 bg-clip-text group-hover:text-transparent transition-all duration-700 ease-out">
                {block.title}
              </span>
              
              {/* Subtle reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
              
              {/* Underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-light-green-400 via-gold-400 to-rose-gold-400 group-hover:w-full transition-all duration-700 ease-out"></div>
              
              {/* Arrow icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`inline-block ml-4 transform transition-all duration-500 ${expandedSections[index] ? "rotate-180" : ""} group-hover:text-gold-500`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              {/* Pressed state effect */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-active:opacity-100 transition-opacity duration-150 rounded-lg"></div>
            </button>

            {/* Original content - only show when not expanded */}
            {!expandedSections[index] && (
              <div data-message-content={index} className="message-content">
                <div className="flex flex-col items-center justify-center mb-8">
                  <div data-icon={index} className={`text-${block.color}-600 p-8 bg-${block.color}-50 rounded-2xl`}>
                    {block.icon}
                  </div>
                  <span
                    data-subtitle={index}
                    className={`inline-block px-4 py-2 bg-${block.color}-100 text-${block.color}-700 rounded-full text-sm font-medium tracking-wide uppercase mt-8`}
                  >
                    {block.subtitle}
                  </span>
                </div>
                <p
                  data-description={index}
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  {block.description}
                </p>
              </div>
            )}

            {/* Expandable Details Section with Slower GSAP Transitions */}
            <div
              data-dropdown={index}
              className="overflow-hidden"
              style={{ height: 0, opacity: 0 }}
            >
              <div className="dropdown-content mt-12">
                <div
                  className={`bg-gradient-to-br from-${block.color}-50 via-white to-${block.color}-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-${block.color}-200 backdrop-blur-sm`}
                >
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Features */}
                    <div className="space-y-6">
                      <h3
                        className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Key Features
                      </h3>
                      {block.detailedContent.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item flex items-start gap-4">
                          <div className="text-2xl md:text-3xl flex-shrink-0">{feature.icon}</div>
                          <div>
                            <h4
                              className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-2"
                              style={{ fontFamily: "Playfair Display, serif" }}
                            >
                              {feature.title}
                            </h4>
                            <p
                              className="text-gray-600 leading-relaxed text-sm md:text-base"
                              style={{ fontFamily: "Crimson Text, serif" }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="space-y-6">
                      <h3
                        className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        Specifications
                      </h3>
                      <div className="grid gap-4">
                        {block.detailedContent.stats.map((stat, statIndex) => (
                          <div
                            key={statIndex}
                            className={`stat-item bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-${block.color}-200 shadow-lg`}
                          >
                            <div className="text-center">
                              <div
                                className={`text-2xl md:text-4xl font-bold text-${block.color}-600 mb-2`}
                                style={{ fontFamily: "Playfair Display, serif" }}
                              >
                                {stat.value}
                              </div>
                              <div
                                className="text-gray-600 font-medium text-sm md:text-base"
                                style={{ fontFamily: "Crimson Text, serif" }}
                              >
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
