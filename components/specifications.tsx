"use client"

import { motion } from "framer-motion"
import { Cpu, Droplets, Smartphone, Coffee, Package, BookOpen, Zap } from "lucide-react"

export function Specifications() {
  const specifications = [
    {
      icon: Cpu,
      title: "Advanced Sensor Technology",
      description:
        "Precision biomarker sensors integrated directly into the brewing cup for real-time constitutional analysis and personalized wellness insights.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Droplets,
      title: "Multi-Chamber Flavor Tanks",
      description:
        "Intelligent dispensing system with separate chambers for herbs, adaptogens, and flavor compounds, ensuring perfect constitutional blending.",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Smartphone,
      title: "Responsive Touchscreen UI",
      description:
        "Intuitive interface that adapts to your constitutional type, providing mindful guidance through each brewing ritual and wellness journey.",
      color: "from-amber-400 to-yellow-500",
    },
  ]

  const boxContents = [
    {
      title: "BalanX-D Coffee System",
      description: "The complete mindful brewing system with biomarker analysis technology.",
      icon: Coffee,
    },
    {
      title: "Constitutional Assessment Kit",
      description: "Traditional Five Elements analysis tools and personalized wellness guide.",
      icon: BookOpen,
    },
    {
      title: "Herb & Adaptogen Starter Set",
      description: "Curated collection of traditional herbs for your first month of personalized blends.",
      icon: Package,
    },
    {
      title: "Wellness Journey App",
      description: "Digital companion for tracking your constitutional balance and brewing preferences.",
      icon: Zap,
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white to-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">Specifications</h2>
          </div>

          {/* Product Image and Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
                <div className="text-stone-400 text-center">
                  <div className="w-24 h-32 bg-stone-300 rounded-2xl mx-auto mb-6 opacity-50" />
                  <p className="text-lg font-light">BalanX-D Specifications</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {specifications.map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`p-3 bg-gradient-to-r ${spec.color} rounded-xl shadow-lg flex-shrink-0`}>
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-stone-800">{spec.title}</h3>
                    <p className="text-stone-600 font-light leading-relaxed">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* What's in the Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-stone-200/50 shadow-xl"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-stone-800 mb-4">What's in the box</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boxContents.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 p-6 bg-stone-50/50 rounded-2xl"
                >
                  <div className="aspect-square w-24 h-24 bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-10 w-10 text-stone-500" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="text-lg font-medium text-stone-800">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
