"use client"

import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle class with wellness colors
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      element: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.size = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.4 + 0.1

        // Five elements colors
        const elements = [
          { color: "#22c55e", name: "wood" }, // light green
          { color: "#f59e0b", name: "fire" }, // gold
          { color: "#d4af37", name: "earth" }, // champagne
          { color: "#9ca3af", name: "metal" }, // gray
          { color: "#3b82f6", name: "water" }, // blue
        ]
        const element = elements[Math.floor(Math.random() * elements.length)]
        this.color = element.color
        this.element = element.name
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0

        // Gentle floating motion
        this.y += Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.1
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add subtle glow
        ctx.shadowColor = this.color
        ctx.shadowBlur = this.size * 2
        ctx.fill()
        ctx.restore()
      }
    }

    // Create particles
    const createParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = ((120 - distance) / 120) * 0.15
            ctx.strokeStyle = "#22c55e"
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    // Scroll-triggered particle behavior
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress
        particlesRef.current.forEach((particle) => {
          particle.opacity = 0.1 + progress * 0.3
          particle.size = 1 + progress * 2
        })
      },
    })

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}
