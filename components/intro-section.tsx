"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface IntroSectionProps {
  onComplete: () => void
}

export default function IntroSection({ onComplete }: IntroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      targetX: number
      targetY: number
    }>
  >([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    // Initial content entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        contentRef.current?.querySelector("h1"),
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
      )

      // Set initial state for words
      gsap.set(".word-animation", { opacity: 0, y: 20 })
      gsap.set(".scroll-indicator", { opacity: 0, y: 30 })

      // Add word-by-word animation with subtle upward motion, staggered per line
      tl.to(
        ".line-1 .word-animation",
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5",
      )
        .to(
          ".line-2 .word-animation",
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.1",
        )
        .to(
          ".scroll-indicator",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2",
        )
    }, containerRef)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 50; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: ["#4ade80", "#f1da8f", "#f7bca2", "#7dd3fc"][Math.floor(Math.random() * 4)],
          targetX: Math.random() * window.innerWidth,
          targetY: Math.random() * window.innerHeight,
        })
      }
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Update particle targets based on mouse position
      particlesRef.current.forEach((particle, index) => {
        const distance = Math.sqrt(Math.pow(e.clientX - particle.x, 2) + Math.pow(e.clientY - particle.y, 2))

        if (distance < 150) {
          // Particles within 150px radius follow mouse
          particle.targetX = e.clientX + (Math.random() - 0.5) * 100
          particle.targetY = e.clientY + (Math.random() - 0.5) * 100
        } else {
          // Particles outside radius move randomly
          particle.targetX = particle.x + (Math.random() - 0.5) * 50
          particle.targetY = particle.y + (Math.random() - 0.5) * 50
        }
      })
    }

    // Animation loop
    const animateParticles = () => {
      particlesRef.current.forEach((particle) => {
        // Smooth movement towards target
        particle.x += (particle.targetX - particle.x) * 0.08
        particle.y += (particle.targetY - particle.y) * 0.08

        // Add some random drift
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary wrapping
        if (particle.x < 0) particle.x = window.innerWidth
        if (particle.x > window.innerWidth) particle.x = 0
        if (particle.y < 0) particle.y = window.innerHeight
        if (particle.y > window.innerHeight) particle.y = 0
      })

      // Draw particles on canvas
      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d")
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particlesRef.current.forEach((particle) => {
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.shadowColor = particle.color
          ctx.shadowBlur = particle.size * 2
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        })
      }

      animationFrameRef.current = requestAnimationFrame(animateParticles)
    }

    initParticles()
    animateParticles()
    window.addEventListener("mousemove", handleMouseMove)

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10 && !isAnimatingOut) {
        // Reduced threshold from 50 to 10 for more responsive triggering
        handleStartTransition()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      ctx.revert()
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const handleStartTransition = () => {
    setIsAnimatingOut(true)
    const ctx = gsap.context(() => {
      // Animate content out
      gsap.to(".intro-element", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.in",
      })

      // Fade out video
      gsap.to(videoRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
      })

      // Animate container wipe
      gsap.to(containerRef.current, {
        clipPath: "circle(0% at 50% 50%)", // Circular wipe effect
        duration: 1.8, // Longer duration for elegance
        ease: "power3.inOut",
        onComplete: () => {
          onComplete() // This will show the main content starting with hero section
          // Ensure we're at the top of the page to show hero section
          window.scrollTo(0, 0)
        },
      })
    }, containerRef)
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ clipPath: "circle(100% at 50% 50%)" }} // Initial clip path for entrance
    >
      {/* Video Background */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dancer-DIQ2HK31rtwu1YHZgZsN6E6zhCTG5U.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        width={typeof window !== "undefined" ? window.innerWidth : 1920}
        height={typeof window !== "undefined" ? window.innerHeight : 1080}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      <div ref={contentRef} className="relative z-10 text-center px-6">
        <h1
          className="intro-element text-8xl md:text-[10rem] font-serif font-extralight text-white tracking-wider mb-6 drop-shadow-2xl"
          style={{
            fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif",
            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          BALANX
        </h1>
        <p
          className="intro-element text-xl md:text-3xl text-white/90 font-extralight mb-12 tracking-widest drop-shadow-lg"
          style={{

            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          <span className="line-1 block font-extrabold font-serif">
            <span className="word-animation inline-block mr-3">Where</span>
            <span className="word-animation inline-block mr-3">AI</span>
            <span className="word-animation inline-block mr-3">meets</span>
            <span className="word-animation inline-block mr-3">the</span>
            <span className="word-animation inline-block mr-3">invisible</span>
          </span>
          <span className="line-2 block font-extralight font-serif">
            <span className="word-animation inline-block mr-3">decoding</span>
            <span className="word-animation inline-block mr-3">life</span>
            <span className="word-animation inline-block mr-3">with</span>
            <br />
            <span className="word-animation inline-block font-serif">BALANX-BIO.</span>
          </span>
        </p>
        <div className="intro-element scroll-indicator flex flex-col items-center">
          <p className="text-white/70 text-sm mb-4 tracking-wide">
            Scroll to explore
          </p>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
