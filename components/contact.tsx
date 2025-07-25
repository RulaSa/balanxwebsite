"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Phone, Mail } from "lucide-react"

export function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Questions about wellness and products",
      action: "Send Message",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Collaboration and business inquiries",
      action: "Partner With Us",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our wellness experts",
      action: "Schedule Call",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and support",
      action: "Email Us",
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-amber-50/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Connect with Balance</h2>
          <p className="text-2xl text-stone-600 font-light leading-relaxed">
            Questions about your wellness journey or interested in bringing BalanX to your community? We welcome your
            inquiries with open hearts.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:shadow-lg transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-serif text-stone-800 mb-2 font-medium">{method.title}</h4>
              <p className="text-sm text-stone-600 font-light mb-3">{method.description}</p>
              <p className="text-xs text-amber-600 font-medium">{method.action}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* General Inquiries */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 rounded-3xl shadow-2xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-serif text-stone-800 font-light">
                  General Wellness Inquiries
                </CardTitle>
                <p className="text-stone-600 font-light">Share your questions about wellness and balance</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-firstName" className="text-stone-600 font-light">
                      First Name
                    </Label>
                    <Input
                      id="contact-firstName"
                      placeholder="Enter first name"
                      className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-lastName" className="text-stone-600 font-light">
                      Last Name
                    </Label>
                    <Input
                      id="contact-lastName"
                      placeholder="Enter last name"
                      className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-stone-600 font-light">
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-stone-600 font-light">
                    Your Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Share your wellness questions or thoughts..."
                    rows={4}
                    className="border-amber-200 rounded-2xl font-light bg-white/90 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-4 rounded-2xl font-medium transition-all duration-500 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Partnership Inquiries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 rounded-3xl shadow-2xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-serif text-stone-800 font-light">
                  Partnership & Collaboration
                </CardTitle>
                <p className="text-stone-600 font-light">Join us in spreading wellness and balance</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="partner-firstName" className="text-stone-600 font-light">
                      First Name
                    </Label>
                    <Input
                      id="partner-firstName"
                      placeholder="Enter first name"
                      className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="partner-lastName" className="text-stone-600 font-light">
                      Last Name
                    </Label>
                    <Input
                      id="partner-lastName"
                      placeholder="Enter last name"
                      className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partner-email" className="text-stone-600 font-light">
                    Email Address
                  </Label>
                  <Input
                    id="partner-email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partner-company" className="text-stone-600 font-light">
                    Organization Name
                  </Label>
                  <Input
                    id="partner-company"
                    placeholder="Your organization name"
                    className="border-amber-200 rounded-2xl py-3 font-light bg-white/90 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partner-type" className="text-stone-600 font-light">
                    Collaboration Interest
                  </Label>
                  <Select>
                    <SelectTrigger className="border-amber-200 rounded-2xl py-3 font-light bg-white/90">
                      <SelectValue placeholder="Select collaboration type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wellness">Wellness Center Partnership</SelectItem>
                      <SelectItem value="retail">Retail Distribution</SelectItem>
                      <SelectItem value="healthcare">Healthcare Integration</SelectItem>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                      <SelectItem value="education">Educational Partnership</SelectItem>
                      <SelectItem value="spa">Spa & Resort Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-4 rounded-2xl font-medium transition-all duration-500 shadow-lg hover:shadow-xl">
                  Begin Collaboration
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-5xl mx-auto bg-gradient-to-r from-white/70 to-amber-50/70 backdrop-blur-sm rounded-3xl p-16 border border-amber-200/50 shadow-xl"
        >
          <h3 className="text-3xl font-serif text-stone-800 mb-8 font-light">Our Commitment to You</h3>
          <p className="text-stone-600 font-light leading-relaxed text-lg">
            At BalanX, we're cultivating a wellness-centered lifestyle that honors both ancient wisdom and modern
            innovation. Every cup becomes a mindful ritual, supporting your unique constitutional needs and guiding you
            toward natural balance and vitality. Together, we create harmony in every sip.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  )
}
