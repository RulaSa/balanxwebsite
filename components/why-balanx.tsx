"use client"

import { motion } from "framer-motion"
import { Heart, Brain, Leaf, Shield } from "lucide-react"

export function WhyBalanX() {
  const benefits = [
    {
      icon: Heart,
      title: "Constitutional Wellness",
      description: "Personalized to your unique body constitution using traditional Chinese medicine principles.",
    },
    {
      icon: Brain,
      title: "Smart Analysis",
      description: "AI-powered biomarker analysis provides real-time insights into your wellness needs.",
    },
    {
      icon: Leaf,
      title: "Natural Harmony",
      description: "Blend ancient herbal wisdom with modern coffee culture for daily balance.",
    },
    {
      icon: Shield,
      title: "Gentle & Safe",
      description: "Non-invasive, medical-grade sensors designed with mindfulness at the core.",
    },
  ]

  return (
    <section id="why" className="py-32 bg-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">Why BalanX</h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            More than a coffee machine. A daily ritual that honors your body's natural wisdom and supports your journey
            toward optimal wellness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 bg-stone-200 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <benefit.icon className="h-8 w-8 text-stone-600" />
              </div>
              <h3 className="text-xl font-medium text-stone-800">{benefit.title}</h3>
              <p className="text-stone-600 font-light leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
