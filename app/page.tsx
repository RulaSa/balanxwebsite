"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import IntroSection from "@/components/intro-section"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ScienceSection from "@/components/science-section"
import TechnologySection from "@/components/technology-section"
import ServicesSection from "@/components/services-section"
import ScrollRevealSection from "@/components/scroll-reveal-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ParticleField from "@/components/particle-field"
import AudioManager from "@/components/audio-manager"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
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

      gsap.utils.toArray(".floating").forEach((element: any) => {
        gsap.to(element, {
          y: -20,
          duration: 4 + Math.random() * 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 2,
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

    return () => ctx.revert()
  }, [showMainContent])

  return (
    <>
      <AudioManager />
      {!showMainContent && <IntroSection onComplete={() => setShowMainContent(true)} />}
      <div
        ref={containerRef}
        className={`relative w-full h-full transition-opacity duration-1000 ${showMainContent ? "opacity-100" : "opacity-0"}`}
        style={{ pointerEvents: showMainContent ? "auto" : "none" }}
      >
        <ParticleField />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ScienceSection />
          <TechnologySection />
          <ServicesSection />
          <ScrollRevealSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}
