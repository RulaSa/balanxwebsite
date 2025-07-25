"use client"

import { motion } from "framer-motion"
import { Brain, Dna, Cpu, Shield, Leaf, Heart } from "lucide-react"

export function Technology() {
  const technologies = [
    {
      icon: Brain,
      title: "AI + Microbiome Analysis",
      description:
        "Intelligent analysis of your unique biomarker patterns, guided by traditional constitutional principles.",
      details: ["Real-time biomarker detection", "Constitutional assessment", "Personalized recommendations"],
      color: "from-violet-300 to-purple-400",
    },
    {
      icon: Dna,
      title: "Five Elements Harmony",
      description: "Ancient wisdom meets modern science through the traditional Five Elements balance system.",
      details: ["Wood, Fire, Earth, Metal, Water", "Constitutional typing", "Seasonal adjustments"],
      color: "from-emerald-300 to-green-400",
    },
    {
      icon: Cpu,
      title: "Mindful Technology",
      description: "Precision sensors designed with meditation and mindfulness at their core.",
      details: ["Silent operation", "Intuitive interface", "Meditative brewing process"],
      color: "from-sky-300 to-blue-400",
    },
    {
      icon: Shield,
      title: "Gentle Safety",
      description: "Medical-grade components with the gentleness of traditional healing practices.",
      details: ["Non-invasive analysis", "Natural materials", "Holistic approach"],
      color: "from-amber-300 to-yellow-400",
    },
    {
      icon: Leaf,
      title: "Natural Integration",
      description: "Seamlessly blending with your natural wellness routine and environment.",
      details: ["Eco-friendly materials", "Sustainable practices", "Natural aesthetics"],
      color: "from-green-300 to-emerald-400",
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description: "Every feature designed to support your journey toward optimal health and balance.",
      details: ["Stress reduction", "Energy optimization", "Emotional balance"],
      color: "from-rose-300 to-pink-400",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-amber-50/20 to-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Our Technology</h2>
          <p className="text-2xl text-stone-600 font-light leading-relaxed">
            Where ancient wisdom guides modern innovation. Our technology honors traditional principles while delivering
            precise, personalized wellness insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-700 group border border-amber-200/30 hover:border-amber-300/50"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center mb-6"
              >
                <div
                  className={`p-4 bg-gradient-to-r ${tech.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-xl font-serif text-stone-800 mb-4 font-medium text-center">{tech.title}</h3>
              <p className="text-stone-600 font-light leading-relaxed mb-6 text-center">{tech.description}</p>

              <div className="space-y-3">
                {tech.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + detailIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-3" />
                    <span className="text-sm text-stone-500 font-light">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center bg-gradient-to-r from-white/70 to-amber-50/70 backdrop-blur-sm rounded-3xl p-16 border border-amber-200/50 shadow-xl"
        >
          <h3 className="text-3xl font-serif text-stone-800 mb-8 font-light">The Wisdom of Balance</h3>
          <p className="text-stone-600 font-light leading-relaxed text-lg">
            The human microbiome mirrors the ancient understanding of qi—a dynamic flow of energy that governs our
            health. Our technology analyzes salivary biomarkers like pH, short-chain fatty acids, and cortisol levels,
            translating these modern measurements into the timeless language of constitutional balance and personalized
            wellness.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  )
}
