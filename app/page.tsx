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
import AudioManager from "@/components/audio-manager"
import { FadingFooter } from "@/components/fading-foot"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showMainContent, setShowMainContent] = useState(false)
  const [showContactSection, setShowContactSection] = useState(false)

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

      // 改进的滚动检测逻辑
      let scrollTimeout: NodeJS.Timeout
      const handleScroll = () => {
        clearTimeout(scrollTimeout)
        
        scrollTimeout = setTimeout(() => {
          const footerElement = document.getElementById("fading-footer")
          if (!footerElement || showContactSection) return

          const footerRect = footerElement.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          
          // 检查 footer 是否在视窗中占据大部分空间
          if (footerRect.top <= viewportHeight * 0.1 && footerRect.bottom >= viewportHeight * 0.8) {
            // 添加额外的滚动检测
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const documentHeight = document.documentElement.scrollHeight
            const windowHeight = window.innerHeight
            
            // 如果接近页面底部，显示联系表单
            if (scrollTop + windowHeight >= documentHeight - 100) {
              console.log("Triggering contact section") // 调试日志
              setShowContactSection(true)
            }
          }
        }, 100)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        clearTimeout(scrollTimeout)
        window.removeEventListener('scroll', handleScroll)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [showMainContent, showContactSection])

  const handleFooterClick = () => {
    console.log("Footer clicked") // 调试日志
    setShowContactSection(true)
  }

  // 调试日志
  console.log("showContactSection:", showContactSection)

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
          <ServicesSection />
          <ScrollRevealSection />
        </main>
        
        {/* 条件渲染：显示 FadingFooter 或 ContactSection */}
        {!showContactSection ? (
          <div 
            onClick={handleFooterClick} 
            className="cursor-pointer relative z-10"
          >
            <FadingFooter />
          </div>
        ) : (
          <div 
            className="relative z-10 transition-all duration-1000 ease-out"
          >
            <ContactSection />
          </div>
        )}
      </div>
    </>
  )
}
