"use client"

import { useEffect, useState } from "react"

export function FadingFooter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("fading-footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="fading-footer" className="relative py-16 px-6 overflow-hidden">
      {/* Background image with subtle animation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/wooden-background.jpg')",
        }}
      />

      {/* Swirling smoke overlay */}
      <div className="absolute inset-0">
        {/* Large smoke wisps with swirling motion */}
        <div className="absolute bottom-0 left-1/4 w-8 h-8 bg-stone-300/10 rounded-full blur-xl animate-smoke-swirl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-12 h-12 bg-amber-200/8 rounded-full blur-2xl animate-smoke-swirl-slow opacity-40" />
        <div className="absolute bottom-0 left-2/5 w-6 h-6 bg-stone-400/12 rounded-full blur-lg animate-smoke-swirl-gentle opacity-50" />

        {/* Medium smoke particles with spiral motion */}
        <div className="absolute bottom-10 left-1/5 w-4 h-4 bg-amber-300/15 rounded-full blur-md animate-smoke-spiral opacity-45" />
        <div className="absolute bottom-8 left-2/6 w-5 h-5 bg-stone-300/10 rounded-full blur-lg animate-smoke-spiral-slow opacity-35" />
        <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-amber-200/20 rounded-full blur-md animate-smoke-spiral-gentle opacity-55" />

        {/* Small swirling particles */}
        <div className="absolute bottom-20 left-1/6 w-2 h-2 bg-stone-400/25 rounded-full blur-sm animate-particle-swirl opacity-40" />
        <div className="absolute bottom-16 left-3/7 w-1.5 h-1.5 bg-amber-300/30 rounded-full blur-sm animate-particle-swirl-slow opacity-50" />
        <div className="absolute bottom-24 left-2/3 w-2.5 h-2.5 bg-stone-300/20 rounded-full blur-sm animate-particle-swirl-gentle opacity-35" />
      </div>

      {/* Animated lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-amber-600/8 via-transparent to-transparent animate-breathing-light" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 via-transparent to-stone-600/5 animate-light-shift" />
      </div>

      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15" />

      {/* Heat shimmer effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-gradient-to-t from-amber-400/10 to-transparent animate-heat-shimmer" />
        <div className="absolute bottom-0 left-1/3 w-20 h-40 bg-gradient-to-t from-stone-400/8 to-transparent animate-heat-shimmer-slow" />
        <div className="absolute bottom-0 left-2/5 w-12 h-28 bg-gradient-to-t from-amber-300/12 to-transparent animate-heat-shimmer-gentle" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main fading text */}
        <div className="relative">
          <h2
            className={`text-2xl md:text-4xl font-light tracking-wide transition-all duration-2000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-fade-in-out drop-shadow-lg">
              Made by microbes & minds.
            </span>
            <span className="inline-block ml-2 text-amber-400 font-medium animate-pulse-slow drop-shadow-lg">
              -BALANX BIO
            </span>
          </h2>

          {/* Subtle underline effect */}
          <div
            className={`mt-4 h-px bg-gradient-to-r from-transparent via-amber-500/80 to-transparent transition-all duration-3000 ease-out ${
              isVisible ? "w-full opacity-60" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Additional fade elements */}
        <div
          className={`mt-8 text-sm text-amber-300/90 transition-all duration-2500 delay-500 ease-out drop-shadow-lg ${
            isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Where biology meets innovation
        </div>
      </div>

      {/* Bottom atmospheric fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
    </footer>
  )
}
