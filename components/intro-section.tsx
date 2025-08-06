"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { gsap } from "gsap"

interface IntroSectionProps {
  onComplete: () => void
}

// Particle class for the intro animation
class IntroParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string

  constructor(canvasWidth: number, canvasHeight: number, color: string) {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.vx = (Math.random() - 0.5) * 0.5 // Increased base speed for continuous movement
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2.5 + 0.5 // More varied and smaller particles
    this.opacity = Math.random() * 0.4 + 0.05 // More subtle opacity
    this.color = color
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    // Gentle floating motion
    this.y += Math.sin(Date.now() * 0.0005 + this.x * 0.005) * 0.05

    // Wrap around edges for continuous flow
    if (this.x < 0) this.x = window.innerWidth
    if (this.x > window.innerWidth) this.x = 0
    if (this.y < 0) this.y = window.innerHeight
    if (this.y > window.innerHeight) this.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

export default function IntroSection({ onComplete }: IntroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<IntroParticle[]>([])
  const animationFrameId = useRef<number | null>(null)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const particleColors = ["#4ade80", "#f1da8f", "#f7bca2"] // light-green-400, gold-400, rose-gold-300

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    particlesRef.current = []
    for (let i = 0; i < 250; i++) {
      // Increased number of particles for a denser field
      const color = particleColors[Math.floor(Math.random() * particleColors.length)]
      particlesRef.current.push(new IntroParticle(canvas.width, canvas.height, color))
    }
  }, [])

  const animateParticles = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle, i) => {
      particle.update() // Particles continuously move
      particle.draw(ctx)

      // Draw subtle connection lines between nearby particles
      if (!isAnimatingOut) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            // Connection distance
            ctx.save()
            ctx.globalAlpha = ((100 - distance) / 100) * 0.05 // Very subtle opacity
            ctx.strokeStyle = "#d1d5db" // Light gray for connections
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    })

    animationFrameId.current = requestAnimationFrame(animateParticles)
  }, [isAnimatingOut])

  useEffect(() => {
    initParticles()
    animationFrameId.current = requestAnimationFrame(animateParticles)

    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)

    // Initial content entrance animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        contentRef.current?.querySelector("h1"),
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
      )

      tl.fromTo(
        [contentRef.current?.querySelector("p"), contentRef.current?.querySelector("button")],
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out" },
        "-=0.8", // Starts 0.8 seconds before the previous animation ends
      )
    }, containerRef)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener("resize", handleResize)
      ctx.revert()
    }
  }, [initParticles, animateParticles])

  const handleStartClick = () => {
    setIsAnimatingOut(true)
    const ctx = gsap.context(() => {
      // Animate content out
      gsap.to(".intro-element", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.in",
      })

      // Animate particles to disperse outwards and fade out
      particlesRef.current.forEach((particle) => {
        const angle = Math.random() * Math.PI * 2
        particle.vx = Math.cos(angle) * (5 + Math.random() * 3) // Increased target velocity for dispersal
        particle.vy = Math.sin(angle) * (5 + Math.random() * 3)
        gsap.to(particle, { opacity: 0, duration: 1.5, ease: "power2.in" })
      })

      // Animate container wipe
      gsap.to(containerRef.current, {
        clipPath: "circle(0% at 50% 50%)", // Circular wipe effect
        duration: 1.8, // Longer duration for elegance
        ease: "power3.inOut",
        onComplete: onComplete,
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
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/dancer-abstract.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div ref={contentRef} className="relative z-10 text-center px-6">
        <h1
          className="intro-element text-7xl md:text-9xl font-serif font-bold text-white tracking-wider mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          BALANX
        </h1>
        <p
          className="intro-element text-xl md:text-3xl text-white/90 font-light mb-12 tracking-widest uppercase"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Harmonizing Elements
        </p>
        <button
          onClick={handleStartClick}
          className="intro-element bg-gradient-to-r from-light-green-400 to-gold-400 text-white font-medium py-4 px-10 rounded-full text-lg md:text-xl hover:from-light-green-500 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{ fontFamily: "Inter, sans-serif" }}
          disabled={isAnimatingOut}
        >
          Start Your BalanX
        </button>
      </div>
    </div>
  )
}
