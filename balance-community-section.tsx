"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface BalanceCommunitySectionProps {
  onSubmit?: (email: string) => void
  title?: string
  subtitle?: string
  buttonText?: string
  placeholderText?: string
  disclaimerText?: string
  className?: string
}

export default function BalanceCommunitySection({
  onSubmit,
  title = "Join the Balance Community",
  subtitle = "Be the first to experience personalized wellness. Reserve your BalanX-D and join thousands on the journey toward natural balance.",
  buttonText = "Reserve Now",
  placeholderText = "Enter your email",
  disclaimerText = "No payment required. Free shipping on pre-orders.",
  className = ""
}: BalanceCommunitySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant section reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
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

      // Staggered content animation
      gsap.fromTo(
        ".balance-element",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Form input focus effects
      gsap.utils.toArray(".balance-form-input").forEach((input: any) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            borderColor: "#ea580c",
            duration: 0.3,
            ease: "power2.out",
          })
        })
        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            borderColor: "#fdba74",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

      // Button hover animation
      const reserveButton = document.querySelector(".balance-reserve-button")
      if (reserveButton) {
        reserveButton.addEventListener("mouseenter", () => {
          gsap.to(reserveButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        reserveButton.addEventListener("mouseleave", () => {
          gsap.to(reserveButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    
    try {
      if (onSubmit) {
        await onSubmit(email)
      } else {
        // Default behavior - you can customize this
        console.log("Email submitted:", email)
        // Here you could add your own submission logic
        // For example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      }
      
      setEmail("")
      // Show success message or redirect
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className={`relative py-24 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          className="balance-element text-5xl md:text-7xl font-wide font-extralight mb-8 tracking-wide bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
        >
          {title}
        </h2>

        <p
          className="balance-element text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto"
          style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
        >
          {subtitle}
        </p>

        {/* Email Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="balance-element flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholderText}
            required
            className="balance-form-input flex-1 max-w-md bg-white/80 border border-orange-300 rounded-full py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="balance-reserve-button bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extralight py-4 px-8 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2 min-w-fit shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            {isSubmitting ? "Reserving..." : buttonText}
            {!isSubmitting && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
              </svg>
            )}
          </button>
        </form>

        <p className="balance-element text-gray-600 text-sm" style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}>
          {disclaimerText}
        </p>
      </div>
    </section>
  )
} 