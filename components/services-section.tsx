"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const services = [
  {
    title: "AI + Microbiome",
    description:
      "Our advanced AI algorithms analyze your genetic markers and microbiome composition to provide personalized insights into your constitutional type and optimal wellness pathways.",
    element: "Explaining Genotypes",
    color: "light-green",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="12" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="12" cy="24" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="36" cy="24" r="3" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="36" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="30" cy="36" r="2" fill="currentColor" opacity="0.4" />
        <path
          d="M24 16 L24 20 M20 24 L28 24 M22 32 L26 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Traditional Balance System",
    description:
      "Ancient wisdom meets modern precision as we map your constitutional type through the lens of Wood, Fire, Earth, Metal, and Water elements, providing timeless insights for contemporary wellness.",
    element: "Five Elements",
    color: "gold",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <polygon points="24,6 32,18 16,18" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="36,16 42,24 36,32 30,24" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="30,30 42,42 16,42" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="16,30 6,42 6,18" fill="none" stroke="currentColor" strokeWidth="2" />
        <polygon points="12,16 16,24 12,32 6,24" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Hardware Design",
    description:
      "Precision-engineered biosensors with medical-grade accuracy ensure safe, non-invasive analysis. Our FDA-compliant devices deliver laboratory-quality results in the comfort of your home.",
    element: "Sensors, Accuracy & Safety",
    color: "rose-gold",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="mx-auto">
        <rect x="12" y="14" width="24" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <rect x="14" y="12" width="20" height="2" rx="1" fill="currentColor" />
        <rect x="16" y="36" width="16" height="2" rx="1" fill="currentColor" />
        <path d="M18 18 L20 20 M26 20 L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 30 L20 28 M26 28 L28 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        <h2
          className="text-6xl md:text-8xl font-wide font-extralight text-center mb-20 text-gray-800 tracking-wide"
          style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
        >
          Specifications
        </h2>

        {/* Product Video Showcase */}
        <div ref={productImageRef} className="flex justify-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-light-green-200 via-gold-200 to-rose-gold-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-rose-gold-200">
              <video className="w-full max-w-2xl h-auto rounded-2xl shadow-lg" autoPlay loop muted playsInline>
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exploded-c2BW47Iuofn3ftCarrnZ8mxKbcF4al.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="text-center mt-6">
                <h3
                  className="text-2xl font-wide font-extralight text-gray-800 mb-2"
                  style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
                >
                  BALANX Wellness System
                </h3>
                <p className="text-gray-600 font-extralight" style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}>
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
                    <span className="text-sm text-gray-500 font-extralight tracking-wider uppercase">{service.element}</span>
                  </div>

                  <h3
                    className="text-2xl font-wide font-extralight text-gray-800 tracking-wide mb-4"
                    style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}>
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
