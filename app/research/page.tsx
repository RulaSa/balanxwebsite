"use client"

import { motion } from "framer-motion"
import { Brain, Dna, Cpu, Shield, Activity, Microscope, Zap, CheckCircle } from "lucide-react"
import { Community } from "@/components/community"

export default function ResearchPage() {
  const aiMicrobiomeFeatures = [
    {
      title: "Genotype Analysis",
      description:
        "Advanced AI algorithms analyze genetic markers to understand your unique metabolic pathways and constitutional predispositions.",
      icon: Dna,
    },
    {
      title: "Microbiome Mapping",
      description:
        "Real-time analysis of gut bacteria composition and its relationship to traditional constitutional types.",
      icon: Microscope,
    },
    {
      title: "Predictive Modeling",
      description:
        "Machine learning models predict optimal herb and adaptogen combinations based on your biomarker profile.",
      icon: Brain,
    },
  ]

  const fiveElements = [
    {
      element: "Wood",
      color: "from-emerald-400 to-green-500",
      characteristics: "Growth, flexibility, planning",
      biomarkers: "Liver enzymes, stress hormones",
    },
    {
      element: "Fire",
      color: "from-red-400 to-rose-500",
      characteristics: "Joy, communication, circulation",
      biomarkers: "Heart rate variability, inflammation markers",
    },
    {
      element: "Earth",
      color: "from-amber-400 to-yellow-500",
      characteristics: "Stability, digestion, grounding",
      biomarkers: "Digestive enzymes, blood sugar",
    },
    {
      element: "Metal",
      color: "from-slate-400 to-gray-500",
      characteristics: "Structure, breathing, immunity",
      biomarkers: "Respiratory function, immune markers",
    },
    {
      element: "Water",
      color: "from-blue-400 to-cyan-500",
      characteristics: "Wisdom, kidney function, willpower",
      biomarkers: "Hydration levels, mineral balance",
    },
  ]

  const hardwareSpecs = [
    {
      title: "Biomarker Sensors",
      description:
        "Medical-grade sensors detect pH, cortisol, short-chain fatty acids, and inflammatory markers in saliva",
      accuracy: "99.2% accuracy",
      safety: "FDA-approved materials",
      icon: Activity,
    },
    {
      title: "Thermal Analysis",
      description: "Infrared sensors monitor body temperature patterns to assess constitutional energy flow",
      accuracy: "±0.1°C precision",
      safety: "Non-invasive scanning",
      icon: Zap,
    },
    {
      title: "Spectral Analysis",
      description: "Advanced spectroscopy analyzes molecular composition of biomarkers for constitutional typing",
      accuracy: "Laboratory-grade precision",
      safety: "Safe light wavelengths",
      icon: Cpu,
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-b from-stone-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-12" />
              <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">
                Dive into our Technology
              </h1>
              <p className="text-2xl text-stone-600 font-light leading-relaxed">
                Where cutting-edge science meets ancient wisdom to create personalized wellness experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI + Microbiome Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">AI + Microbiome</h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Our artificial intelligence analyzes your unique genetic and microbiome patterns to understand your
                  constitutional type and create personalized wellness recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {aiMicrobiomeFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center p-8 bg-gradient-to-b from-stone-50 to-white rounded-3xl shadow-lg border border-stone-200/50"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif text-stone-800 mb-4 font-medium">{feature.title}</h3>
                    <p className="text-stone-600 font-light leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-light-green/10 to-emerald-50/50 rounded-3xl p-12 border border-light-green/20"
              >
                <h3 className="text-2xl font-serif text-stone-800 mb-6 font-light text-center">
                  Understanding Genotypes
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-center max-w-4xl mx-auto">
                  Your genetic makeup influences how you metabolize nutrients, respond to stress, and maintain energy
                  balance. Our AI analyzes key genetic variants related to caffeine metabolism, stress response, and
                  inflammatory pathways to create your personalized constitutional profile. This genetic insight,
                  combined with real-time biomarker data, ensures each cup of coffee supports your unique biological
                  needs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Traditional Balance System */}
        <section className="py-24 bg-gradient-to-b from-white to-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Traditional Balance System</h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
                  The Five Elements system from Traditional Chinese Medicine provides the foundation for understanding
                  your constitutional type and creating personalized wellness blends.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
                {fiveElements.map((element, index) => (
                  <motion.div
                    key={element.element}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white rounded-3xl shadow-lg border border-stone-200/50"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${element.color} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-serif text-lg font-medium">{element.element[0]}</span>
                    </div>
                    <h3 className="text-lg font-serif text-stone-800 mb-2 font-medium">{element.element}</h3>
                    <p className="text-stone-600 font-light text-sm mb-3">{element.characteristics}</p>
                    <p className="text-stone-500 font-light text-xs bg-stone-50 px-2 py-1 rounded-full">
                      {element.biomarkers}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-light-green/10 to-emerald-50/50 rounded-3xl p-12 border border-light-green/20"
              >
                <h3 className="text-2xl font-serif text-stone-800 mb-6 font-light text-center">
                  Constitutional Harmony
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-center max-w-4xl mx-auto">
                  Each person has a dominant element that influences their physical, emotional, and energetic patterns.
                  By understanding your constitutional type, BalanX-D can recommend specific herbs, adaptogens, and
                  brewing parameters that support your natural balance. This ancient wisdom, validated by modern
                  biomarker analysis, creates a truly personalized wellness experience.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Hardware Design */}
        <section className="py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Hardware Design</h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Medical-grade sensors and precision engineering ensure accurate, safe, and reliable biomarker analysis
                  for personalized wellness insights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {hardwareSpecs.map((spec, index) => (
                  <motion.div
                    key={spec.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/50"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl mb-6 flex items-center justify-center">
                      <spec.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif text-stone-800 mb-4 font-medium">{spec.title}</h3>
                    <p className="text-stone-600 font-light leading-relaxed mb-6">{spec.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-light-green" />
                        <span className="text-sm font-medium text-stone-700">{spec.accuracy}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-stone-700">{spec.safety}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-stone-100 to-stone-50 rounded-3xl p-12 border border-stone-200/50"
              >
                <h3 className="text-2xl font-serif text-stone-800 mb-6 font-light text-center">Safety & Accuracy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-stone-800 mb-4">Medical-Grade Standards</h4>
                    <p className="text-stone-600 font-light leading-relaxed">
                      All sensors meet FDA medical device standards and undergo rigorous testing for accuracy and
                      safety. Non-invasive analysis ensures comfortable daily use without any health risks.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-stone-800 mb-4">Precision Engineering</h4>
                    <p className="text-stone-600 font-light leading-relaxed">
                      Laboratory-grade precision in a home device. Our sensors provide clinical-level accuracy while
                      maintaining the simplicity and mindfulness of a daily wellness ritual.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Community />
    </>
  )
}
