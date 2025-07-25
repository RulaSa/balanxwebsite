"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, FileText, Award, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Community } from "@/components/community"

export default function PressPage() {
  const featuredNews = [
    {
      title: "BalanX Raises $15M Series A to Revolutionize Personalized Wellness",
      publication: "TechCrunch",
      date: "December 15, 2024",
      category: "Funding",
      excerpt:
        "The startup combines ancient Chinese medicine principles with AI-powered biomarker analysis to create personalized coffee experiences.",
      image: "TechCrunch feature article",
      link: "#",
    },
    {
      title: "The Future of Wellness: How AI Meets Traditional Medicine",
      publication: "Forbes",
      date: "November 28, 2024",
      category: "Innovation",
      excerpt:
        "BalanX's groundbreaking approach to constitutional wellness represents a new paradigm in personalized health technology.",
      image: "Forbes innovation spotlight",
      link: "#",
    },
    {
      title: "CES 2024: BalanX-D Wins Best Health & Wellness Innovation Award",
      publication: "Wired",
      date: "January 12, 2024",
      category: "Awards",
      excerpt:
        "The smart coffee system impressed judges with its seamless integration of biomarker analysis and traditional wellness principles.",
      image: "CES 2024 award ceremony",
      link: "#",
    },
  ]

  const researchFindings = [
    {
      title: "Constitutional Coffee: Biomarker Analysis Validates Traditional Medicine Principles",
      journal: "Journal of Personalized Medicine",
      date: "October 2024",
      authors: "Dr. Sarah Chen, Dr. Emily Watson, et al.",
      abstract:
        "Clinical study of 500 participants demonstrates significant correlation between Five Elements constitutional types and salivary biomarker patterns.",
      impact: "Peer-reviewed validation",
      link: "#",
    },
    {
      title: "AI-Driven Microbiome Analysis for Personalized Wellness Interventions",
      journal: "Nature Digital Medicine",
      date: "September 2024",
      authors: "Dr. Michael Rodriguez, Dr. Sarah Chen, et al.",
      abstract:
        "Machine learning algorithms successfully predict optimal herb and adaptogen combinations based on individual genetic and microbiome profiles.",
      impact: "Breakthrough research",
      link: "#",
    },
    {
      title: "Traditional Chinese Medicine Meets Modern Technology: A New Paradigm",
      journal: "Integrative Medicine Research",
      date: "August 2024",
      authors: "Dr. Emily Watson, Dr. Sarah Chen, et al.",
      abstract:
        "Comprehensive analysis of how ancient constitutional typing can be enhanced and validated through modern biomarker technology.",
      impact: "Industry standard",
      link: "#",
    },
  ]

  const pressStats = [
    { label: "Media Mentions", value: "150+", icon: FileText },
    { label: "Awards Won", value: "8", icon: Award },
    { label: "Research Papers", value: "12", icon: TrendingUp },
    { label: "Industry Partners", value: "25+", icon: Users },
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
              <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Press & News</h1>
              <p className="text-2xl text-stone-600 font-light leading-relaxed">
                Latest features, research findings, and industry recognition for BalanX's innovative approach to
                personalized wellness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Press Stats */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {pressStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-stone-600 to-stone-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-3xl font-light text-stone-800 mb-2">{stat.value}</p>
                  <p className="text-sm text-stone-500 font-light">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-24 bg-gradient-to-b from-white to-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Featured News</h2>
              <p className="text-stone-600 font-light text-lg">Recent coverage and industry recognition</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
                    <div className="text-stone-400 text-center">
                      <div className="w-16 h-16 bg-stone-300 rounded-2xl mx-auto mb-4 opacity-50" />
                      <p className="text-sm font-light">{article.image}</p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-stone-600 border-stone-300 bg-stone-50">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-stone-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-serif text-stone-800 mb-3 font-medium leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 font-medium text-sm mb-3">{article.publication}</p>
                    <p className="text-stone-600 font-light leading-relaxed mb-6">{article.excerpt}</p>

                    <Button
                      variant="outline"
                      className="w-full border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full bg-transparent"
                    >
                      Read Article
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Research Findings */}
        <section className="py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-6 font-light">Latest Research Findings</h2>
              <p className="text-stone-600 font-light text-lg">Peer-reviewed studies validating our approach</p>
            </motion.div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {researchFindings.map((research, index) => (
                <motion.div
                  key={research.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200/50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-light-green border-light-green/30 bg-light-green/10">
                      {research.impact}
                    </Badge>
                    <div className="flex items-center text-stone-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {research.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-stone-800 mb-3 font-medium">{research.title}</h3>
                  <p className="text-stone-600 font-medium text-sm mb-2">{research.journal}</p>
                  <p className="text-stone-500 font-light text-sm mb-4">{research.authors}</p>
                  <p className="text-stone-600 font-light leading-relaxed mb-6">{research.abstract}</p>

                  <Button
                    variant="outline"
                    className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full bg-transparent"
                  >
                    View Research
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press Contact */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-serif text-stone-800 mb-8 font-light">Press Inquiries</h2>
              <p className="text-xl text-stone-600 font-light leading-relaxed mb-12">
                For media inquiries, interview requests, or press materials, please contact our communications team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50">
                  <h3 className="text-lg font-medium text-stone-800 mb-4">Media Contact</h3>
                  <p className="text-stone-600 font-light mb-2">Sarah Johnson</p>
                  <p className="text-stone-600 font-light mb-2">Director of Communications</p>
                  <p className="text-stone-600 font-light">press@balanx.com</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone-200/50">
                  <h3 className="text-lg font-medium text-stone-800 mb-4">Research Inquiries</h3>
                  <p className="text-stone-600 font-light mb-2">Dr. Emily Watson</p>
                  <p className="text-stone-600 font-light mb-2">Head of Research</p>
                  <p className="text-stone-600 font-light">research@balanx.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Community />
    </>
  )
}
