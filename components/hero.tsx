"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-stone-50 to-stone-100/50 overflow-hidden"
    >
      {/* Promotional Banner */}
      <div className="absolute top-20 left-0 right-0 z-10">
        <div className="bg-stone-800 text-stone-50 text-center py-3 px-4">
          <p className="text-sm font-light">Pre-order now: Early bird pricing available until Q1 2026</p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 md:px-6 relative z-10 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-800 leading-tight">
                Where you meet <span className="font-normal text-stone-700">balance</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-lg">
                Personalized wellness through ancient wisdom and modern science. Every cup crafted for your unique
                constitution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-stone-800 hover:bg-stone-900 text-stone-50 px-8 py-4 text-base font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pre-Order BalanX-D
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-4 text-base font-light rounded-full transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Five Elements Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <p className="text-sm text-stone-500 font-light">Five Elements Balance:</p>
              <div className="flex space-x-4">
                {[
                  { name: "Wood", color: "bg-emerald-400" },
                  { name: "Fire", color: "bg-red-400" },
                  { name: "Earth", color: "bg-amber-400" },
                  { name: "Metal", color: "bg-slate-400" },
                  { name: "Water", color: "bg-blue-400" },
                ].map((element) => (
                  <div key={element.name} className="text-center group cursor-pointer">
                    <div
                      className={`w-2 h-2 ${element.color} rounded-full group-hover:scale-125 transition-transform duration-300`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-stone-400 text-center">
                <div className="w-32 h-32 bg-stone-300 rounded-3xl mx-auto mb-6 opacity-50" />
                <p className="text-lg font-light">BalanX-D Product Hero</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-stone-200 rounded-full opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-stone-300 rounded-full opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
