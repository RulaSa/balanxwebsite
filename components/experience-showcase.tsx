"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export function ExperienceShowcase() {
  const showcaseItems = [
    {
      title: "Track.",
      subtitle: "Monitor your constitutional balance and wellness metrics in real-time.",
      placeholder: "Constitutional tracking interface with Five Elements balance",
      gradient: "from-stone-800 to-stone-900",
    },
    {
      title: "Personalize.",
      subtitle: "Customize your daily wellness ritual based on your unique biomarker profile.",
      placeholder: "Personalized brewing interface with herb selection",
      gradient: "from-rose-gold/90 to-champagne/90",
    },
    {
      title: "Insights.",
      subtitle: "Transform wellness data into actionable insights for optimal constitutional health.",
      placeholder: "Analytics dashboard with wellness trends and recommendations",
      gradient: "from-light-green/90 to-emerald-600/90",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-ivory/30 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <div
                className={`aspect-[3/4] bg-gradient-to-br ${item.gradient} rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-700 relative`}
              >
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-light mb-2">{item.title}</h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/10"
                    >
                      <Plus className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {/* Mock Interface Elements */}
                  <div className="space-y-4">
                    {index === 0 && (
                      <div className="space-y-3">
                        <div className="flex justify-center">
                          <div className="w-24 h-24 border-4 border-white/30 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-light">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-2">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full ${dot <= 4 ? "bg-white" : "bg-white/30"}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="space-y-3">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-lg">⚡</span>
                          </div>
                          <p className="text-lg font-light">Balance now!</p>
                          <p className="text-sm opacity-80">BalanX</p>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                            <div className="h-8 bg-white/20 rounded mb-2"></div>
                            <div className="text-xs opacity-80">7 days</div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                            <div className="h-8 bg-white/20 rounded mb-2"></div>
                            <div className="text-xs opacity-80">12 days</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-light leading-relaxed opacity-90">{item.subtitle}</p>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="text-stone-400 text-center p-4 h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl opacity-30" />
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
