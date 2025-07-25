"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Coffee, Droplets, Leaf } from "lucide-react"

export function ProductLine() {
  const products = [
    {
      id: "balanx-d",
      name: "BalanX-D",
      subtitle: "The Harmony Brewer",
      description:
        "Our flagship smart coffee machine that analyzes your biomarkers and creates personalized wellness blends.",
      features: ["Real-time biomarker analysis", "Five Elements personalization", "Mindful brewing experience"],
      status: "Available Q3 2026",
      icon: Coffee,
      color: "from-amber-400 to-yellow-500",
    },
    {
      id: "balanx-essence",
      name: "BalanX Essence",
      subtitle: "Wellness Pods Collection",
      description:
        "Curated coffee pods infused with traditional herbs and adaptogens for specific constitutional needs.",
      features: ["Constitutional blends", "Organic ingredients", "Traditional herb infusions"],
      status: "Coming Q4 2026",
      icon: Leaf,
      color: "from-emerald-400 to-green-500",
    },
    {
      id: "balanx-flow",
      name: "BalanX Flow",
      subtitle: "Hydration Harmony",
      description:
        "Smart water infusion system that creates personalized herbal teas based on your daily wellness needs.",
      features: ["Herbal tea blending", "Hydration tracking", "Seasonal adjustments"],
      status: "Coming 2027",
      icon: Droplets,
      color: "from-sky-400 to-blue-500",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-amber-50/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Product Line</h2>
          <p className="text-2xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            A complete ecosystem of wellness products designed to support your journey toward balance and vitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 border border-amber-200/30 hover:border-amber-300/50 h-full flex flex-col"
              >
                <div className="text-center mb-8">
                  <Badge
                    variant="outline"
                    className="mb-6 text-stone-500 border-amber-300 bg-amber-50 px-4 py-2 font-light"
                  >
                    {product.status}
                  </Badge>

                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }} className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl mx-auto flex items-center justify-center shadow-lg`}
                    >
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-3xl font-serif text-stone-800 mb-2 font-medium">{product.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{product.subtitle}</p>
                  <p className="text-stone-600 font-light leading-relaxed mb-8">{product.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-4" />
                      <span className="text-stone-600 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white rounded-full font-medium transition-all duration-500 shadow-lg hover:shadow-xl"
                  disabled={index > 0}
                >
                  {index === 0 ? "Learn More" : "Coming Soon"}
                  {index === 0 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div className="space-y-8">
            <h3 className="text-4xl font-serif text-stone-800 font-light">BalanX-D: Your Wellness Companion</h3>
            <p className="text-stone-600 font-light leading-relaxed text-lg">
              More than a coffee machine, BalanX-D is your daily wellness ritual. Each morning begins with a moment of
              mindfulness as your personalized blend is crafted according to your body's unique constitutional needs.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { label: "Analysis Time", value: "< 30 seconds" },
                { label: "Accuracy", value: "Medical grade" },
                { label: "Brewing", value: "Mindful pace" },
                { label: "Experience", value: "Meditative" },
              ].map((spec, index) => (
                <div key={spec.label} className="text-center p-4 bg-amber-50/50 rounded-2xl">
                  <p className="text-2xl font-serif text-stone-800 mb-2 font-light">{spec.value}</p>
                  <p className="text-sm text-stone-500 font-light">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-stone-100 to-rose-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl"
            >
              <div className="text-stone-400 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-3xl mx-auto mb-6 opacity-60" />
                <p className="text-lg font-light">BalanX-D Product Showcase</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
