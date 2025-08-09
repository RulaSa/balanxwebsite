"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AffoIntroSection() {
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
      data-section="affo-intro"
      className="fade-in-section relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden"
    >
      {/* Background with warm gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(135deg, #d2b48c 0%, #e6d3a3 25%, #f0e6d2 50%, #f8f4e6 75%, #ffffff 100%)"
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-20 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-lg"
            style={{ fontFamily: "Agrandir Wide, sans-serif" }}
          >
            ÁFFO Healthcare Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Agrandir Wide, sans-serif" }}
            >
              可以帮助到你的健康
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              通过先进的生物分析和个性化营养方案，ÁFFO Healthcare致力于为每个人提供量身定制的健康解决方案。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              我们结合传统智慧和现代科技，帮助您实现真正的健康平衡，让每一天都充满活力。
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">个性化分析</h4>
              </div>
              <p className="text-gray-700">基于您的独特生物特征，提供精准的健康评估和个性化建议。</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">智能营养</h4>
              </div>
              <p className="text-gray-700">结合AI算法，为您推荐最适合的营养搭配和生活方式建议。</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            探索更多服务 →
          </div>
        </div>
      </div>
    </section>
  )
} 