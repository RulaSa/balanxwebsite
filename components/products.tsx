"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Products() {
  return (
    <section id="products" className="py-32 bg-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 text-stone-500 border-stone-300 bg-stone-100 px-4 py-2 font-light">
            Available Q3 2026
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">BalanX-D</h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            The world's first smart coffee system that analyzes your biomarkers and creates personalized wellness blends
            based on traditional Chinese medicine principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-xl">
              <div className="text-stone-400 text-center">
                <div className="w-24 h-24 bg-stone-300 rounded-3xl mx-auto mb-6 opacity-50" />
                <p className="text-lg font-light">BalanX-D Product Detail</p>
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
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-stone-800">Personalized Wellness</h3>
              <p className="text-stone-600 font-light leading-relaxed text-lg">
                BalanX-D understands your unique constitutional type through gentle biomarker analysis. Each brewing
                cycle creates a personalized blend that supports your body's natural balance.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Real-time biomarker analysis",
                "Five Elements constitutional typing",
                "Personalized herb and adaptogen blending",
                "Mindful brewing experience",
                "Wellness journey tracking",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full" />
                  <span className="text-stone-600 font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-stone-800 hover:bg-stone-900 text-stone-50 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Product Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: "Analysis Time", value: "< 30 sec" },
            { label: "Accuracy", value: "Medical grade" },
            { label: "Brewing Capacity", value: "1-4 cups" },
            { label: "Herb Varieties", value: "50+ blends" },
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
