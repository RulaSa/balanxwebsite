"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import IntroSection from "@/components/intro-section"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScienceSection from "@/components/science-section"
import ServicesSection from "@/components/services-section"
import ScrollRevealSection from "@/components/scroll-reveal-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ParticleField from "@/components/particle-field"
import AudioManager from "@/components/audio-manager" // Re-added AudioManager
import SecondLastSection from "@/components/second-last-section" // Added SecondLastSection import
import SmoothScroll from "@/components/smooth-scroll"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh()

    // Add floating animation for decorative elements
    gsap.to(".floating", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-15, 15)",
      duration: "random(3, 6)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 2,
        from: "random",
      },
    })

    if (!showMainContent) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-in-section").forEach((section: any, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      gsap.utils.toArray(".parallax-element").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      })

      gsap.utils.toArray(".svg-draw").forEach((path: any) => {
        gsap.fromTo(
          path,
          { strokeDasharray: "0 1000" },
          {
            strokeDasharray: "1000 0",
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: path,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, containerRef)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      ctx.revert()
    }
  }, [showMainContent])

  return (
    <main className="relative">
      <SmoothScroll />
      <AudioManager /> {/* AudioManager re-added here */}
      {!showMainContent && <IntroSection onComplete={() => setShowMainContent(true)} />}
      <div
        ref={containerRef}
        className={`relative w-full h-full transition-opacity duration-1000 ${showMainContent ? "opacity-100" : "opacity-0"}`}
        style={{ pointerEvents: showMainContent ? "auto" : "none" }}
      >
        <ParticleField />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ScienceSection />
        <ServicesSection />
        <ScrollRevealSection />
        <SecondLastSection /> {/* Added SecondLastSection component */}
        <ContactSection />
      </div>
    </main>
  )
}
