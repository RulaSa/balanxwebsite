"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-gold-200"
          : "bg-gradient-to-b from-white/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between w-full">
          {/* Logo Image */}
          <div className="-ml-4 text-left py-0">
            <img
              src="/images/logo-clean.png"
              alt="BALANX Logo"
              className="h-14 md:h-20 object-contain bg-transparent transition-opacity duration-500 hover:opacity-80 cursor-pointer"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6 relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-light-green-400"></div>
                <div className="w-2 h-2 rounded-full bg-gold-400"></div>
                <div className="w-2 h-2 rounded-full bg-rose-gold-400"></div>
              </div>
              <span className="text-gray-800 font-medium">Menu</span>
              <div className={`w-4 h-4 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-rose-gold-200 py-2 z-50">
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-light-green-50 hover:text-light-green-600 transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const aboutSection = document.querySelector('[data-section="about"]')
                    if (aboutSection) {
                      aboutSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-light-green-50 hover:text-light-green-600 transition-colors duration-200"
                >
                  About
                </a>
                <a
                  href="#science"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const scienceSection = document.querySelector('[data-section="science"]')
                    if (scienceSection) {
                      scienceSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-light-green-50 hover:text-light-green-600 transition-colors duration-200"
                >
                  Science
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const servicesSection = document.querySelector('[data-section="services"]')
                    if (servicesSection) {
                      servicesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-light-green-50 hover:text-light-green-600 transition-colors duration-200"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMenuOpen(false)
                    const contactSection = document.querySelector('[data-section="contact"]')
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  }}
                  className="block px-4 py-2 text-gray-800 hover:bg-light-green-50 hover:text-light-green-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            )}
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
