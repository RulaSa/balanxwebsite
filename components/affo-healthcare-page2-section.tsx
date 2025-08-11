"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoHealthcarePage2Section() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current && contentRef.current) {
        // Fade in animation for the section
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Animate content elements
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="affo-healthcare-page2"
      className="fade-in-section relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #d4c1a7 0%, #e8dccd 50%, #f8f5f0 100%)"
      }}
    >

      {/* Content */}
      <div ref={contentRef} className="relative z-20 max-w-7xl mx-auto text-center">
        <h2
          className="text-5xl md:text-7xl font-extralight text-gray-800 mb-8 drop-shadow-lg"
          style={{ fontFamily: "var(--font-agrandir-wide), Poppins, sans-serif" }}
        >
          ÁFFO HEALTHCARE
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16 drop-shadow-md">
          Experience personalized wellness through advanced bio-analysis and tailored nutrition.
        </p>
        
        {/* Embedded video */}
        <div className="w-full max-w-4xl mx-auto mb-16 rounded-xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-auto object-cover"
            src="/video/affofinal.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Four Core Steps */}
        <div className="w-full max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extralight text-gray-800 mb-12 drop-shadow-lg">
            Our Service Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {/* Step 1: Daily Data Collection */}
            <div className="group p-10 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-400/80 to-purple-400/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src="/images/affo1.jpg" 
                    alt="Daily Data Collection" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-xl font-extralight text-gray-800 mb-3">
                  Daily Data Collection
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  We gather essential health metrics and lifestyle data every day to track your wellness journey.
                </p>
              </div>
            </div>

            {/* Step 2: AI Analysis */}
            <div className="group p-10 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-green-400/80 to-teal-400/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src="/images/affo2.jpg" 
                    alt="AI Analysis" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-xl font-extralight text-gray-800 mb-3">
                  AI Analysis
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Our algorithms process your data to identify trends and health patterns unique to you.
                </p>
              </div>
            </div>

            {/* Step 3: Personalized Recommendations */}
            <div className="group p-10 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-orange-400/80 to-red-400/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src="/images/affo3.jpg" 
                    alt="Personalized Recommendations" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-xl font-extralight text-gray-800 mb-3">
                  Personalized Recommendations
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Receive tailored wellness and nutrition suggestions based on your individual profile.
                </p>
              </div>
            </div>

            {/* Step 4: Health Reports */}
            <div className="group p-10 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-purple-400/80 to-pink-400/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <img 
                    src="/images/affo4.jpg" 
                    alt="Health Reports" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="text-xl font-extralight text-gray-800 mb-3">
                  Health Reports
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Get regular, easy-to-read reports that summarize your progress and suggest next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 