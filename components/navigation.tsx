"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Elegant navigation entrance
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.618, delay: 3.5, ease: "power3.out" },
    )

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-gold-200"
          : "bg-gradient-to-b from-white/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div
            className="text-4xl font-serif font-bold text-gray-800 tracking-wider transition-colors duration-500 hover:text-light-green-600 cursor-pointer"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            BALANX-BIO
          </div>

          {/* Wellness indicators */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-3">
              <div className="w-3 h-3 rounded-full bg-light-green-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-gold-400 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <div
                className="w-3 h-3 rounded-full bg-rose-gold-400 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-light-green-400 to-rose-gold-400"></div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-800 hover:text-light-green-600 transition-colors duration-300">
            <div className="w-8 h-px bg-current mb-2 transition-all duration-300"></div>
            <div className="w-8 h-px bg-current mb-2 transition-all duration-300"></div>
            <div className="w-8 h-px bg-current transition-all duration-300"></div>
          </button>
        </div>
      </div>
    </nav>
  )
}
