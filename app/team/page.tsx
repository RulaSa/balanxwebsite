"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, Users, Target, TrendingUp, Handshake } from "lucide-react"
import { Community } from "@/components/community"

export default function TeamPage() {
  const mission = {
    title: "Our Mission",
    description:
      "To bridge ancient wisdom with modern technology, creating personalized wellness experiences that honor your body's natural constitution and support your journey toward optimal health and balance.",
  }

  const values = [
    {
      icon: Heart,
      title: "Mindful Innovation",
      description:
        "Every feature designed with meditation and wellness at its core, respecting traditional practices while embracing modern possibilities.",
    },
    {
      icon: Leaf,
      title: "Natural Harmony",
      description:
        "Honoring the wisdom of traditional Chinese medicine and the Five Elements system in everything we create.",
    },
    {
      icon: Users,
      title: "Community Wellness",
      description:
        "Building a supportive community where everyone can discover their unique path to constitutional balance.",
    },
  ]

  const industryView = [
    {
      icon: Target,
      title: "Personalization Over Generalization",
      description:
        "The wellness industry often applies one-size-fits-all solutions. We believe true wellness comes from understanding your unique constitutional needs.",
    },
    {
      icon: TrendingUp,
      title: "Technology as a Bridge",
      description:
        "Rather than replacing traditional wisdom, technology should amplify and make ancient knowledge more accessible to modern lives.",
    },
    {
      icon: Handshake,
      title: "Ritual Over Routine",
      description:
        "Transforming daily habits into mindful rituals that connect you with your body's natural rhythms and seasonal changes.",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      background:
        "15 years in biotechnology and microbiome research, trained in Traditional Chinese Medicine. Led research teams at Stanford and assisted wellness technology initiatives at major health companies.",
      image: "Dr. Sarah Chen professional headshot",
      experience: "Biotechnology & TCM Integration",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Co-Founder & CTO",
      background:
        "12 years as lead engineer at health tech companies, expert in mindful technology design. Former Apple engineer, assisted product development teams in creating intuitive wellness interfaces.",
      image: "Dr. Michael Rodriguez professional headshot",
      experience: "Wellness Technology & UX Design",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      background:
        "PhD in Microbiology with 8 years in personalized medicine research. Certified in Five Elements constitutional analysis, assisted clinical research teams in biomarker validation studies.",
      image: "Dr. Emily Watson professional headshot",
      experience: "Personalized Medicine & Research",
    },
    {
      name: "James Liu",
      role: "Head of Design",
      background:
        "10 years in product design for wellness brands, specializing in mindful user experiences. Former design lead at meditation apps, assisted UX teams in creating calming, intuitive interfaces.",
      image: "James Liu professional headshot",
      experience: "Mindful Design & User Experience",
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
              <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Our Story</h1>
              <p className="text-2xl text-stone-600 font-light leading-relaxed">
                Rooted in the wisdom of traditional Chinese medicine, we believe wellness flows from understanding your
                body's natural rhythms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-8 font-light">{mission.title}</h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed">{mission.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-b from-white to-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Our Values</h2>
              <p className="text-stone-600 font-light text-lg">The principles that guide everything we create</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-stone-200/50 hover:shadow-xl hover:border-light-green/20 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-stone-600 to-stone-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-4 font-medium">{value.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry View Section */}
        <section className="py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">How We See the Industry</h2>
              <p className="text-stone-600 font-light text-lg">
                Our perspective on wellness technology and traditional medicine
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {industryView.map((view, index) => (
                <motion.div
                  key={view.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-stone-200/50 hover:shadow-xl hover:border-light-green/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-light-green to-emerald-500 rounded-xl mb-6 flex items-center justify-center shadow-lg">
                    <view.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-stone-800 mb-4 font-medium">{view.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{view.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mb-8" />
              <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Meet the Team</h2>
              <p className="text-stone-600 font-light text-lg">The minds and hearts behind BalanX</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl hover:border-light-green/20 transition-all duration-500"
                >
                  <div className="flex items-start space-x-6">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl overflow-hidden flex items-center justify-center shadow-lg">
                        <div className="text-stone-400 text-center">
                          <div className="w-12 h-12 bg-stone-300 rounded-full mx-auto mb-2 opacity-60" />
                          <p className="text-xs font-light">Photo</p>
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-serif text-stone-800 font-medium">{member.name}</h3>
                        <p className="text-stone-600 font-medium text-sm">{member.role}</p>
                        <p className="text-stone-500 font-light text-xs bg-light-green/10 px-2 py-1 rounded-full inline-block mt-1">
                          {member.experience}
                        </p>
                      </div>
                      <p className="text-stone-600 font-light text-sm leading-relaxed">{member.background}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Community />
    </>
  )
}
