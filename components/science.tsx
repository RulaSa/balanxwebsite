"use client"

import { motion } from "framer-motion"

export function Science() {
  return (
    <section id="science" className="py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light text-stone-800">The Science Behind Balance</h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed">
                Traditional Chinese medicine has understood for millennia what modern science now confirms: true
                wellness comes from understanding your body's unique constitution and supporting its natural balance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-lg font-medium text-stone-800">Biomarker Analysis</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Our sensors analyze salivary biomarkers including pH levels, cortisol, and short-chain fatty acids to
                  understand your current state.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-stone-800">Five Elements Typing</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Ancient constitutional analysis meets modern AI to determine your dominant element and current
                  imbalances.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-medium text-stone-800">Personalized Blending</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Carefully selected herbs and adaptogens are blended to support your specific constitutional needs.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl flex items-center justify-center">
              <div className="text-stone-400 text-center">
                <div className="w-20 h-20 bg-stone-300 rounded-2xl mx-auto mb-4 opacity-50" />
                <p className="text-sm font-light">Science & Technology Visual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
