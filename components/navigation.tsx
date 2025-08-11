"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Elegant navigation entrance
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.618, delay: 3.5, ease: "power3.out" },
    )

    // Backdrop filter support detection
    const root = document.documentElement
    const test = CSS.supports('backdrop-filter', 'blur(1px)') || CSS.supports('-webkit-backdrop-filter', 'blur(1px)')
    if (!test) root.classList.add('no-backdrop')

    // Scroll detection for glassmorphism
    const nav = document.querySelector('.navbar.glass')
    const onScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 100)
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Handle navigation clicks
  const handleNavigationClick = (sectionId: string) => {
    if (pathname === '/') {
      // If on home page, scroll to section with enhanced smooth behavior
      if (sectionId === 'hero') {
        window.scrollTo({ 
          top: 0, 
          behavior: "smooth" 
        })
      } else {
        const section = document.querySelector(`[data-section="${sectionId}"]`)
        if (section) {
          // Add a small delay for better visual effect
          setTimeout(() => {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }, 100)
        }
      }
    } else {
      // If on other pages, navigate to home page with hash
      if (sectionId === 'hero') {
        router.push('/')
      } else {
        router.push(`/#${sectionId}`)
      }
    }
  }

  return (
    <nav
      ref={navRef}
      className="navbar glass"
    >
      <div className="flex items-center justify-between w-full h-full">
        {/* Logo Image */}
        <Link href="/" className="text-left py-0 ml-8">
          <img
            src="/images/logo-clean.png"
            alt="BALANX Logo"
            className="h-12 md:h-16 object-contain bg-transparent transition-opacity duration-500 hover:opacity-80 cursor-pointer brightness-0 invert"
          />
        </Link>

        {/* Navigation Links - Horizontal Layout */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleNavigationClick('hero')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Home
          </button>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <button
            onClick={() => handleNavigationClick('interactive-workflow')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            About
          </button>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <button
            onClick={() => handleNavigationClick('algorithm')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Our Algorithm
          </button>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <button
            onClick={() => handleNavigationClick('affo-healthcare-page2')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Affo Healthcare
          </button>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <button
            onClick={() => handleNavigationClick('affo-healthcare-page3')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Services
          </button>
          <div className="w-1 h-1 bg-white/60 rounded-full"></div>
          <button
            onClick={() => handleNavigationClick('contact')}
            className="text-white font-extralight hover:text-light-green-400 transition-colors duration-200"
            style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
          >
            Contact
          </button>
        </div>

        {/* Join the Waitlist Button */}
        <Link
          href="/pre-order"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-black/80 text-white font-extralight rounded-full hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm mr-8"
          style={{ fontFamily: "var(--font-agrandir-wide), Quicksand, sans-serif" }}
        >
          Join the Waitlist
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white hover:text-light-green-400 transition-colors duration-300">
          <div className="w-8 h-px bg-current mb-2 transition-all duration-300"></div>
          <div className="w-8 h-px bg-current mb-2 transition-all duration-300"></div>
          <div className="w-8 h-px bg-current transition-all duration-300"></div>
        </button>
      </div>
    </nav>
  )
}
