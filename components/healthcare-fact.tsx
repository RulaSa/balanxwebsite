"use client"

import { motion } from "framer-motion"
import { Heart, TrendingUp, Users, Shield } from "lucide-react"

export function HealthcareFact() {
  const healthStats = [
    {
      icon: Heart,
      stat: "73%",
      description: "of adults experience daily stress affecting their wellness",
      color: "from-stone-600 to-stone-700",
    },
    {
      icon: TrendingUp,
      stat: "85%",
      description: "report improved energy with personalized nutrition",
      color: "from-light-green to-emerald-500",
    },
    {
      icon: Users,
      stat: "92%",
      description: "prefer wellness solutions tailored to their body type",
      color: "from-stone-500 to-stone-600",
    },
    {
      icon: Shield,
      stat: "67%",
      description: "seek natural alternatives to synthetic supplements",
      color: "from-stone-600 to-stone-800",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8" />
            <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">The Wellness Reality</h2>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
              Modern healthcare research reveals the critical need for personalized wellness solutions that honor
              individual constitutional differences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {healthStats.map((stat, index) => (
              <motion.div
                key={stat.stat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-stone-200/50 hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-light text-stone-800 mb-2">{stat.stat}</p>
                <p className="text-stone-600 font-light text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-light-green/10 to-emerald-50/50 rounded-3xl p-12 border border-light-green/20 text-center"
          >
            <h3 className="text-2xl font-serif text-stone-800 mb-6 font-light">How BalanX-D Helps</h3>
            <p className="text-stone-600 font-light leading-relaxed text-lg max-w-4xl mx-auto">
              By analyzing your unique biomarkers and constitutional type, BalanX-D creates personalized wellness blends
              that address your specific needs. This targeted approach helps reduce stress, optimize energy levels, and
              support your body's natural balance—transforming your daily coffee ritual into a powerful wellness
              practice backed by both ancient wisdom and modern science.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
