"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const services = [
  {
    title: "Advanced Sensor Technology",
    description:
      "Precision biomarker sensors integrated directly into the brewing cup for real-time constitutional analysis and personalized wellness insights.",
    element: "Technology",
    color: "blue",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <rect
          x="8"
          y="8"
          width="32"
          height="32"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <path
          d="M16 16 L20 20 M28 20 L32 16 M32 32 L28 28 M20 28 L16 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Multi-Chamber Flavor Tanks",
    description:
      "Intelligent dispensing system with separate chambers for herbs, adaptogens, and flavor compounds, ensuring perfect constitutional blending.",
    element: "System",
    color: "light-green",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <path
          d="M24 8 C20 12, 16 16, 20 24 C16 20, 12 24, 16 32 C20 28, 28 32, 24 24 C28 28, 32 24, 28 16 C24 20, 24 8, 24 8 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="2" fill="currentColor" />
        <circle cx="30" cy="18" r="2" fill="currentColor" />
        <circle cx="24" cy="30" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Responsive Touchscreen UI",
    description:
      "Intuitive interface that adapts to your constitutional type, providing mindful guidance through each brewing ritual and wellness journey.",
    element: "Interface",
    color: "gold",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <rect
          x="10"
          y="6"
          width="28"
          height="36"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="14" y="12" width="20" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="39" r="2" fill="currentColor" />
        <path
          d="M18 18 L30 18 M18 22 L26 22 M18 26 L28 26"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const productImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Product image entrance animation
      gsap.fromTo(
        productImageRef.current,
        { opacity: 0, scale: 0.8, y: 60 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Elegant card entrance
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 80,
          rotationY: -15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Enhanced hover animations
      gsap.utils.toArray(".service-card").forEach((card: any) => {
        const icon = card.querySelector(".service-icon")
        const content = card.querySelector(".service-content")

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out",
          })
          gsap.to(icon, {
            rotation: 360,
            scale: 1.1,
            duration: 0.6,
            ease: "power2.out",
          })
          gsap.to(content, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          })
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          })
          gsap.to(content, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

      // Background elements animation
      gsap.to(".service-bg-element", {
        rotation: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
      })

      // Floating animation for product image
      gsap.to(productImageRef.current, {
        y: -15,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="services"
      className="fade-in-section relative min-h-screen flex items-center justify-center bg-gradient-to-b from-ivory-50 to-rose-gold-50 py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="service-bg-element absolute top-1/4 right-12 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#d4af37" strokeWidth="2" />
            <circle cx="60" cy="60" r="30" fill="none" stroke="#22c55e" strokeWidth="1" />
            <circle cx="60" cy="60" r="10" fill="none" stroke="#f59e0b" strokeWidth="1" />
          </svg>
        </div>
        <div className="service-bg-element absolute bottom-1/4 left-12 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#e5e7eb" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Title & Description */}
          <div className="text-center mb-16 font-serif px-4 max-w-7xl mx-auto">
            <h2
              className="text-7xl md:text-8xl font-bold text-gray-900 tracking-wider mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              BALANX-D
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
              Experience the perfect fusion of ancient wisdom and cutting-edge technology.
            </p>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              World’s first smart coffee system BalanX-D represents a breakthrough in personalized wellness, combining
              traditional Chinese medicine principles with advanced biomarker analysis.
            </p>
          </div>

          {/* Icon Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center font-serif">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✔️</span>
              </div>
              <h3 className="text-lg font-semibold">Precision Analysis</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Medical-grade sensors for accurate biomarker detection
              </p>
            </div>

            <div className="text-center font-serif">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">◯</span>
              </div>
              <h3 className="text-lg font-semibold">Five Elements</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Traditional constitutional typing meets AI intelligence
              </p>
            </div>

            <div className="text-center font-serif">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⏱</span>
              </div>
              <h3 className="text-lg font-semibold">Real-time Brewing</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto">
                Instant personalization for every wellness moment
              </p>
            </div>
          </div>
        </div>

        {/* Product Video Showcase */}
        <div ref={productImageRef} className="flex justify-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-light-green-200 via-gold-200 to-rose-gold-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-gold-200">
              <video className="w-full max-w-2xl h-auto rounded-2xl shadow-lg" autoPlay loop muted playsInline>
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exploded-c2BW47Iuofn3ftCarrnZ8mxKbcF4al.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="text-center mt-6">
                <h3
                  className="text-2xl font-serif font-bold text-gray-800 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  BALANX Wellness System
                </h3>
                <p className="text-gray-600 font-light" style={{ fontFamily: "Crimson Text, serif" }}>
                  Premium constitutional brewing technology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-gold-200 hover:border-light-green-300 transition-all duration-500 shadow-lg hover:shadow-xl">
                <div
                  className={`service-icon text-${service.color}-600 mb-6 transform transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <div className="service-content space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-${service.color}-400`}></div>
                    <span className="text-sm text-gray-500 font-light tracking-wider uppercase">{service.element}</span>
                  </div>

                  <h3
                    className="text-2xl font-serif font-bold text-gray-800 tracking-wide mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Crimson Text, serif" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
