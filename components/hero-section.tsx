"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation with golden ratio timing
      const tl = gsap.timeline({ delay: 1.618 })

      // Title with elegant letter spacing animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, letterSpacing: "1em", scale: 0.8 },
        { opacity: 1, y: 0, letterSpacing: "0.2em", scale: 1, duration: 1.618, ease: "power2.out" },
        "-=1.618",
      )

      // Subtitle with gentle fade
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1",
      )

      // Parallax effect on scroll
      gsap.to(sectionRef.current, {
        yPercent: -25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onClick={(e) => {
        // Check if the click is directly on the section or overlay elements (background)
        const target = e.target as HTMLElement
        const isBackground =
          target === e.currentTarget ||
          target.classList.contains("bg-black/30") ||
          target.tagName === "VIDEO" ||
          target.closest(".floating") ||
          target.closest(".parallax-element")

        if (isBackground) {
          setActiveFeature(null)
        }
      }}
    >
      {/* Video Background */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mooin_very_blurry_eye_blinking_with_tech_stuff_flowing_inside_e2b27071-d33c-41cc-9a0b-c58ac32f1d31_2-LdTZJjKBTll9facPturn6flyxMnL1n.MP4" type="video/mp4" />
      </video>

      {/* Overlay with mouse-following light effect */}
      <div
        className="absolute inset-0 bg-black/30 z-10 overflow-hidden"
        onClick={() => setActiveFeature(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          // Update CSS custom properties for the light position
          e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
          e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
        }}
        style={{
          background: `
            radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 20%, 
              transparent 50%),
            rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="floating absolute top-1/4 left-1/6 w-3 h-3 bg-light-green-300 rounded-full opacity-40"></div>
          <div className="floating absolute top-3/4 right-1/4 w-4 h-4 bg-rose-gold-200 rounded-full opacity-30"></div>
          <div className="floating absolute top-1/3 right-1/6 w-2 h-2 bg-champagne-300 rounded-full opacity-50"></div>
          <div className="floating absolute bottom-1/4 left-1/3 w-3 h-3 bg-gold-200 rounded-full opacity-35"></div>

          {/* SVG decorative elements */}
          <div className="parallax-element absolute top-1/5 right-1/5 opacity-10">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <path
                className="svg-draw"
                d="M60 20 L80 60 L40 60 Z M60 60 L60 100"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="parallax-element absolute bottom-1/5 left-1/5 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle className="svg-draw" cx="50" cy="50" r="40" fill="none" stroke="#d4af37" strokeWidth="2" />
              <circle className="svg-draw" cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-30 text-center px-6 max-w-5xl"
          onClick={(e) => {
            // Reset if clicking on the content container itself (empty space)
            const target = e.target as HTMLElement
            if (target === e.currentTarget || target.classList.contains("grid")) {
              setActiveFeature(null)
            }
          }}
        >
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto border-0 py-10">
            {/* Constitutional Wellness - Interactive */}
            <motion.div
              className="text-center space-y-4 cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(activeFeature === "constitutional" ? null : "constitutional")}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                animate={{
                  boxShadow:
                    activeFeature === "constitutional"
                      ? "0 0 30px rgba(255, 255, 255, 0.3)"
                      : "0 0 0px rgba(255, 255, 255, 0)",
                  opacity: activeFeature === "constitutional" ? 0 : 1,
                }}
              >
                <motion.div
                  animate={{
                    filter: activeFeature && activeFeature !== "constitutional" ? "blur(2px)" : "blur(0px)",
                    opacity: activeFeature && activeFeature !== "constitutional" ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 32 32" className="text-white">
                    <path
                      d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="16" cy="16" r="3" fill="currentColor" />
                  </svg>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {activeFeature === "constitutional" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border-white/20 p-4 z-10 flex items-center justify-center border"
                  >
                    <motion.p
                      className="text-white/90 leading-relaxed text-xs text-center"
                      style={{ fontFamily: "Crimson Text, serif" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Personalized to your unique body constitution using traditional Chinese medicine principles.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.h3
                className="text-lg font-serif font-bold text-white cursor-pointer"
                style={{ fontFamily: "Playfair Display, serif" }}
                animate={{
                  filter: activeFeature && activeFeature !== "constitutional" ? "blur(2px)" : "blur(0px)",
                  opacity: activeFeature && activeFeature !== "constitutional" ? 0.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveFeature(activeFeature === "constitutional" ? null : "constitutional")
                }}
              >
                Constitutional Wellness
              </motion.h3>
            </motion.div>

            {/* Smart Analysis - Interactive */}
            <motion.div
              className="text-center space-y-4 cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(activeFeature === "smart" ? null : "smart")}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                animate={{
                  boxShadow:
                    activeFeature === "smart" ? "0 0 30px rgba(255, 255, 255, 0.3)" : "0 0 0px rgba(255, 255, 255, 0)",
                  opacity: activeFeature === "smart" ? 0 : 1,
                }}
              >
                <motion.div
                  animate={{
                    filter: activeFeature && activeFeature !== "smart" ? "blur(2px)" : "blur(0px)",
                    opacity: activeFeature && activeFeature !== "smart" ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 32 32" className="text-white">
                    <path
                      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 16c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 16h4M20 16h4M16 8v4M16 20v4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {activeFeature === "smart" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 z-10 flex items-center justify-center"
                  >
                    <motion.p
                      className="text-white/90 leading-relaxed text-xs text-center"
                      style={{ fontFamily: "Crimson Text, serif" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      AI-powered biomarker analysis provides real-time insights into your wellness needs.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.h3
                className="text-lg font-serif font-bold text-white cursor-pointer"
                style={{ fontFamily: "Playfair Display, serif" }}
                animate={{
                  filter: activeFeature && activeFeature !== "smart" ? "blur(2px)" : "blur(0px)",
                  opacity: activeFeature && activeFeature !== "smart" ? 0.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveFeature(activeFeature === "smart" ? null : "smart")
                }}
              >
                Smart Analysis
              </motion.h3>
            </motion.div>

            {/* Natural Harmony - Interactive */}
            <motion.div
              className="text-center space-y-4 cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(activeFeature === "harmony" ? null : "harmony")}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                animate={{
                  boxShadow:
                    activeFeature === "harmony"
                      ? "0 0 30px rgba(255, 255, 255, 0.3)"
                      : "0 0 0px rgba(255, 255, 255, 0)",
                  opacity: activeFeature === "harmony" ? 0 : 1,
                }}
              >
                <motion.div
                  animate={{
                    filter: activeFeature && activeFeature !== "harmony" ? "blur(2px)" : "blur(0px)",
                    opacity: activeFeature && activeFeature !== "harmony" ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 32 32" className="text-white">
                    <path
                      d="M16 2c-3 0-6 2-6 6 0 4 6 12 6 12s6-8 6-12c0-4-3-6-6-6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 20c2-2 4-2 6 0s4 2 6 0M6 26c3-2 5-2 8 0s5 2 8 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {activeFeature === "harmony" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 z-10 flex items-center justify-center"
                  >
                    <motion.p
                      className="text-white/90 leading-relaxed text-xs text-center"
                      style={{ fontFamily: "Crimson Text, serif" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Blend ancient herbal wisdom with modern coffee culture for daily balance.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.h3
                className="text-lg font-serif font-bold text-white cursor-pointer"
                style={{ fontFamily: "Playfair Display, serif" }}
                animate={{
                  filter: activeFeature && activeFeature !== "harmony" ? "blur(2px)" : "blur(0px)",
                  opacity: activeFeature && activeFeature !== "harmony" ? 0.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveFeature(activeFeature === "harmony" ? null : "harmony")
                }}
              >
                Natural Harmony
              </motion.h3>
            </motion.div>

            {/* Gentle & Safe - Interactive */}
            <motion.div
              className="text-center space-y-4 cursor-pointer relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(activeFeature === "safe" ? null : "safe")}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                animate={{
                  boxShadow:
                    activeFeature === "safe" ? "0 0 30px rgba(255, 255, 255, 0.3)" : "0 0 0px rgba(255, 255, 255, 0)",
                  opacity: activeFeature === "safe" ? 0 : 1,
                }}
              >
                <motion.div
                  animate={{
                    filter: activeFeature && activeFeature !== "safe" ? "blur(2px)" : "blur(0px)",
                    opacity: activeFeature && activeFeature !== "safe" ? 0.4 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="24" height="24" viewBox="0 0 32 32" className="text-white">
                    <path
                      d="M16 2l4.5 4.5L26 4l2 2-2.5 5.5L30 16l-4.5 4.5L28 26l-2 2-5.5-2.5L16 30l-4.5-4.5L6 28l-2-2 2.5-5.5L2 16l4.5-4.5L4 6l2-2 5.5 2.5L16 2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16l2 2 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <AnimatePresence>
                {activeFeature === "safe" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-4 z-10 flex items-center justify-center"
                  >
                    <motion.p
                      className="text-white/90 leading-relaxed text-xs text-center"
                      style={{ fontFamily: "Crimson Text, serif" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      Non-invasive, medical-grade sensors designed with mindfulness at the core.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.h3
                className="text-lg font-serif font-bold text-white cursor-pointer"
                style={{ fontFamily: "Playfair Display, serif" }}
                animate={{
                  filter: activeFeature && activeFeature !== "safe" ? "blur(2px)" : "blur(0px)",
                  opacity: activeFeature && activeFeature !== "safe" ? 0.4 : 1,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveFeature(activeFeature === "safe" ? null : "safe")
                }}
              >
                Gentle & Safe
              </motion.h3>
            </motion.div>
          </div>

          {/* Element indicators */}
        </div>
      </div>
    </section>
  )
}
