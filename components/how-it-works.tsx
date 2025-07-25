"use client"

import { motion } from "framer-motion"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Morning Analysis",
      description: "Start your day with a gentle biomarker analysis that takes less than 30 seconds.",
      image: "Morning ritual with BalanX-D",
    },
    {
      number: "02",
      title: "Constitutional Assessment",
      description: "Our AI analyzes your unique constitution using Five Elements principles.",
      image: "Five Elements analysis visualization",
    },
    {
      number: "03",
      title: "Personalized Brewing",
      description: "Your perfect blend is crafted with herbs and adaptogens for your needs.",
      image: "Personalized coffee brewing process",
    },
    {
      number: "04",
      title: "Mindful Enjoyment",
      description: "Savor your personalized cup while tracking your wellness journey.",
      image: "Mindful coffee enjoyment moment",
    },
  ]

  return (
    <section id="how" className="py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">How It Works</h2>
          <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
            Four simple steps to transform your morning routine into a personalized wellness ritual.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl sm:text-6xl font-light text-stone-300">{step.number}</span>
                  <div>
                    <h3 className="text-3xl font-light text-stone-800">{step.title}</h3>
                  </div>
                </div>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">{step.description}</p>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl flex items-center justify-center">
                  <div className="text-stone-400 text-center">
                    <div className="w-20 h-20 bg-stone-300 rounded-2xl mx-auto mb-4 opacity-50" />
                    <p className="text-sm font-light">{step.image}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
