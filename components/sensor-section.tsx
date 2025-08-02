"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Activity, Zap, Droplets, Beaker, Battery, Radio } from "lucide-react"

const biomarkers = [
  {
    name: "Glucose",
    icon: Activity,
    description: "Blood sugar level monitoring",
    color: "from-red-400 to-red-600",
  },
  {
    name: "Lactic Acid",
    icon: Zap,
    description: "Muscle fatigue indicator",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Cortisol",
    icon: Droplets,
    description: "Stress hormone levels",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "SCFAs",
    icon: Beaker,
    description: "Short-chain fatty acids",
    color: "from-green-400 to-green-600",
  },
  {
    name: "Electrolytes",
    icon: Battery,
    description: "Essential mineral balance",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Conductivity",
    icon: Radio,
    description: "Electrical conductance measurement",
    color: "from-cyan-400 to-cyan-600",
  },
]

export default function SensorSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Biomarker cards animation
      gsap.fromTo(
        ".biomarker-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden fade-in-section bg-black"
      id="sensor"
    >
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/sensor.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Sensor Specifications
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            Our advanced biosensor technology can detect and monitor 6 key biomarkers in real-time
          </p>
        </div>

        {/* Biomarkers Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {biomarkers.map((biomarker, index) => {
            const IconComponent = biomarker.icon
            return (
              <div
                key={biomarker.name}
                className="biomarker-card group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${biomarker.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${biomarker.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {biomarker.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {biomarker.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`w-full h-1 bg-gradient-to-r ${biomarker.color} rounded-full mt-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="text-center mt-16">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white/30 rounded-full floating" />
      <div className="absolute top-2/3 right-1/5 w-3 h-3 bg-white/20 rounded-full floating" />
      <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/40 rounded-full floating" />
    </section>
  )
}
