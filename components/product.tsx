"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Product() {
  const features = [
    "Constitutional biomarker analysis",
    "Five Elements personalization",
    "Mindful brewing experience",
    "Traditional wisdom integration",
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-stone-100/30 to-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge
            variant="outline"
            className="mb-6 text-stone-500 border-stone-300 bg-stone-100/50 px-4 py-2 font-light"
          >
            Available Q3 2026
          </Badge>
          <h2 className="text-4xl md:text-6xl font-light text-stone-800 mb-8">BalanX-D</h2>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            A mindful coffee experience that honors your body's natural constitution. Where every cup becomes a moment
            of personalized wellness and inner harmony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="text-stone-400 text-center">
                <div className="w-20 h-20 bg-stone-300 rounded-2xl mx-auto mb-4 opacity-50" />
                <p className="text-sm font-light">BalanX-D Product Image</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-light text-stone-800 mb-6">Personalized Harmony</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                BalanX-D understands your unique constitutional type through gentle biomarker analysis. Each brewing
                cycle creates a personalized blend that supports your body's natural balance, whether you need grounding
                earth energy, flowing water calm, or vibrant fire vitality.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full mr-4" />
                  <span className="text-stone-600 font-light">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-stone-700 hover:bg-stone-800 text-stone-50 px-8 py-4 rounded-full font-light transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Analysis", value: "Constitutional typing" },
            { label: "Brewing time", value: "Mindful pace" },
            { label: "Precision", value: "Traditional wisdom" },
            { label: "Experience", value: "Meditative ritual" },
          ].map((spec, index) => (
            <div key={spec.label} className="text-center">
              <p className="text-2xl font-light text-stone-800 mb-2">{spec.value}</p>
              <p className="text-sm text-stone-500 font-light">{spec.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
