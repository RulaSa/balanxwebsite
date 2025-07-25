"use client"

import { motion } from "framer-motion"

export function BrandStory() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Co-Founder & CEO",
      bio: "15 years in biotechnology and microbiome research, trained in Traditional Chinese Medicine",
      specialty: "Microbiome & TCM Integration",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Co-Founder & CTO",
      bio: "Former lead engineer at health tech companies, expert in mindful technology design",
      specialty: "Wellness Technology",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "PhD in Microbiology, certified in Five Elements constitutional analysis",
      specialty: "Personalized Medicine",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-amber-50/20">
      <div className="container px-4 md:px-6">
        {/* Brand Story Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Our Story</h2>
          <p className="text-2xl text-stone-600 font-light leading-relaxed mb-16">
            Rooted in the wisdom of traditional Chinese medicine, we believe wellness flows from understanding your
            body's natural rhythms. By harmonizing ancient Five Elements philosophy with modern microbiome science, we
            create personalized pathways to balance.
          </p>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32"
        >
          <div className="space-y-8">
            <h3 className="text-4xl font-serif text-stone-800 font-light">Ancient Wisdom, Modern Science</h3>
            <div className="space-y-8 text-stone-600 font-light leading-relaxed text-lg">
              <p>
                For thousands of years, traditional Chinese medicine has understood that true health comes from balance—
                the harmonious flow of qi through our body's natural systems.
              </p>
              <p>
                Today, we know this wisdom as the microbiome: a dynamic ecosystem that governs digestion, immunity, and
                emotional well-being. Your morning ritual becomes a moment of mindful nourishment, personalized to your
                body's unique constitution.
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-3" />
              <p className="text-stone-500 italic font-light">
                "When the body is in harmony, the mind finds peace, and the spirit soars."
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="aspect-[4/3] bg-gradient-to-br from-amber-100 via-stone-100 to-rose-100 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div className="text-stone-400 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full mx-auto mb-6 opacity-60" />
                <p className="text-lg font-light">Traditional Wisdom Visual</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8" />
            <h3 className="text-4xl font-serif text-stone-800 mb-6 font-light">Our Team</h3>
            <p className="text-stone-500 font-light text-lg">Bridging tradition and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative mb-8">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 via-stone-100 to-rose-100 rounded-3xl overflow-hidden mb-6 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                    <div className="text-stone-400 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-300 to-yellow-400 rounded-full mx-auto mb-4 opacity-60" />
                      <p className="text-sm font-light">Team Photo</p>
                    </div>
                  </div>
                </motion.div>
                <h4 className="text-2xl font-serif text-stone-800 mb-3 font-medium">{member.name}</h4>
                <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                <p className="text-stone-500 font-light mb-4 text-sm bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1 rounded-full inline-block">
                  {member.specialty}
                </p>
                <p className="text-stone-400 font-light leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
