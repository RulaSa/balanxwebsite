"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function SecondLastSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Title animation with stagger effect
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100, scale: 0.9 },
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

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener("mouseenter", () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        buttonRef.current.addEventListener("mouseleave", () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }

      // Parallax effect on scroll
      gsap.to(sectionRef.current, {
        yPercent: -15,
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
      data-section="second-last"
      className="relative min-h-screen flex items-center overflow-hidden fade-in-section"
    >
      {/* Video Background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6959752-hd_1920_1080_25fps-5Q4z6puNo98XFW7v7XWfEF8Ak2plt2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content - Left aligned */}
      <div className="relative z-20 px-6 lg:px-12 xl:px-16 max-w-2xl">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight tracking-wide"
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: "300" }}
        >
          Rooted in Ritual.
          <br />
          Backed by Science.
          <br />
          Focused on You.
        </h1>

        <p
          ref={subtitleRef}
          className="text-white/90 text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-md"
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontWeight: "300" }}
        >
          Join the waitlist for early access, founding member benefits, and exclusive launch offers.
        </p>

        <button
          ref={buttonRef}
          className="bg-white/90 backdrop-blur-sm text-gray-900 font-medium py-3 px-8 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-3 text-base shadow-lg group"
          style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
          onClick={() => {
            // Scroll to contact section
            const contactSection = document.querySelector('[data-section="contact"]')
            if (contactSection) {
              contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          }}
        >
          Join Waitlist
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
          </svg>
        </button>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div className="floating absolute top-1/4 left-1/6 w-2 h-2 bg-white/20 rounded-full opacity-60"></div>
        <div className="floating absolute top-3/4 right-1/4 w-3 h-3 bg-white/10 rounded-full opacity-40"></div>
        <div className="floating absolute top-1/3 right-1/6 w-1 h-1 bg-white/30 rounded-full opacity-50"></div>
        <div className="floating absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/15 rounded-full opacity-35"></div>
      </div>
    </section>
  )
}
