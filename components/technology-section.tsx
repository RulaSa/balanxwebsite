"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Activity, Zap, Droplets, Beaker, Battery, Radio } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ourTechnologyRef = useRef<HTMLHeadingElement>(null)
  const ourSensorRef = useRef<HTMLHeadingElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const biomarkersRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Initial setup - hide elements that will appear later
      gsap.set(ourSensorRef.current, { opacity: 0, y: 50 })
      gsap.set(videoContainerRef.current, { opacity: 0, scale: 0.8 })
      // gsap.set(".biomarker-card", { opacity: 0, y: 60, scale: 0.9 }) // REMOVED

      // Initial "Our Technology" entrance
      gsap.fromTo(
        ourTechnologyRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Create a timeline for the scroll-triggered transformation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: false,
        },
      })

      // Fade out "Our Technology"
      tl.to(ourTechnologyRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.3,
      })

      // Show video container first
      tl.to(
        videoContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
        },
        0.2,
      )

      // Fade in "Our Sensor" below the video
      tl.to(
        ourSensorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
        },
        0.4,
      )

      // Show biomarkers earlier with stagger
      // tl.to(
      //   ".biomarker-card",
      //   {
      //     opacity: 1,
      //     y: 0,
      //     scale: 1,
      //     duration: 0.5,
      //     stagger: 0.1,
      //   },
      //   0.5, // Changed from 0.6 to 0.5 to appear earlier
      // ) // REMOVED
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] overflow-hidden fade-in-section" id="technology">
      {/* Video Background - stays the same */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_gt98gK1x0Ks6k94Ddc2Ylh8uoVeB/j6Ehp0_UnYnQ7HKqHYvhF4/public/images/flame.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 min-h-[300vh]">
        {/* Initial "Our Technology" Title */}
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h2
            ref={ourTechnologyRef}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white font-serif text-center"
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.2), 2px 2px 4px rgba(0,0,0,0.8)",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
            }}
          >
            Our Technology
          </h2>
        </div>

        {/* Transformed Content */}
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Video at the top */}
          <div ref={videoContainerRef} className="flex-1 flex items-center justify-center px-8 pt-8">
            <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_gt98gK1x0Ks6k94Ddc2Ylh8uoVeB/JyXrmrQUs6ws-vAuT3gcb3/public/images/sensor.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* "Our Sensor" below the video */}
          <div className="flex-none py-6">
            <h2
              ref={ourSensorRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
              style={{
                textShadow: "0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Our Sensor
            </h2>
          </div>

          {/* Biomarkers at the bottom */}
          <div ref={biomarkersRef} className="flex-none pb-8">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {biomarkers.map((biomarker, index) => {
                  const IconComponent = biomarker.icon
                  return (
                    <div
                      key={biomarker.name}
                      className="group relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${biomarker.color} opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-300`}
                      />

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Icon */}
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${biomarker.color} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {biomarker.name}
                        </h3>

                        {/* Description */}
                        <p className="text-white/70 text-xs leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          {biomarker.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full floating z-30" />
      <div className="fixed top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full floating z-30" />
      <div className="fixed bottom-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full floating z-30" />
    </section>
  )
}
