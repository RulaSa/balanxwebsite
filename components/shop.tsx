"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Gift, Star, Clock } from "lucide-react"

export function Shop() {
  const preOrderBenefits = [
    { icon: Star, title: "Early Access", description: "Be first to experience BalanX-D" },
    { icon: Gift, title: "Exclusive Gifts", description: "Complimentary wellness starter kit" },
    { icon: Clock, title: "Priority Delivery", description: "First in line for Q3 2026 launch" },
    { icon: ShoppingBag, title: "Special Pricing", description: "Pre-order exclusive pricing" },
  ]

  const timeline = [
    { phase: "Pre-order", date: "Now", status: "active", description: "Reserve your BalanX-D" },
    { phase: "Preparation", date: "Q1 2026", status: "upcoming", description: "Production begins" },
    { phase: "Harmony", date: "Q3 2026", status: "upcoming", description: "Shipping starts" },
    { phase: "Balance", date: "Q4 2026", status: "upcoming", description: "Full availability" },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-amber-50/30 to-stone-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-12" />
          <Badge className="mb-8 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-lg px-6 py-3 rounded-full">
            Pre-Order Now Available
          </Badge>
          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-12 font-light">Reserve Your Journey</h2>
          <p className="text-2xl text-stone-600 font-light leading-relaxed">
            Begin your path to personalized wellness. Join us in creating a more balanced, mindful approach to daily
            nourishment.
          </p>
        </motion.div>

        {/* Pre-order Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20"
        >
          {preOrderBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-serif text-stone-800 mb-2 font-medium">{benefit.title}</h4>
              <p className="text-sm text-stone-600 font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pre-order Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-2xl rounded-3xl">
              <CardHeader className="pb-8">
                <CardTitle className="text-3xl font-serif text-stone-800 font-light text-center">
                  Begin Your Balance
                </CardTitle>
                <p className="text-stone-600 font-light text-center">Reserve your BalanX-D today</p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-stone-600 font-light text-base">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="border-amber-200 rounded-2xl py-4 font-light bg-white/90 focus:bg-white transition-colors text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-stone-600 font-light text-base">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="border-amber-200 rounded-2xl py-4 font-light bg-white/90 focus:bg-white transition-colors text-base"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-stone-600 font-light text-base">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-amber-200 rounded-2xl py-4 font-light bg-white/90 focus:bg-white transition-colors text-base"
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-stone-600 font-light text-base">Journey Type</Label>
                  <RadioGroup defaultValue="b2c" className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 rounded-xl border border-amber-200/50 hover:bg-amber-50/30 transition-colors">
                      <RadioGroupItem value="b2c" id="b2c" className="border-amber-300" />
                      <Label htmlFor="b2c" className="font-light text-stone-600 text-base cursor-pointer flex-1">
                        Personal Wellness Journey
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 p-4 rounded-xl border border-amber-200/50 hover:bg-amber-50/30 transition-colors">
                      <RadioGroupItem value="b2b" id="b2b" className="border-amber-300" />
                      <Label htmlFor="b2b" className="font-light text-stone-600 text-base cursor-pointer flex-1">
                        Wellness Center / Business
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white py-5 rounded-2xl font-medium transition-all duration-500 shadow-xl hover:shadow-2xl text-lg">
                  Reserve My BalanX-D
                </Button>

                <p className="text-sm text-stone-400 text-center font-light">
                  No payment required. Begin your journey when ready.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-serif text-stone-800 mb-8 font-light">Your Wellness Timeline</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-6"
                  >
                    <div
                      className={`w-4 h-4 rounded-full mt-1 ${
                        item.status === "active" ? "bg-gradient-to-r from-amber-500 to-yellow-600" : "bg-stone-300"
                      }`}
                    />
                    <div className="flex-1">
                      <p
                        className={`font-serif text-lg ${item.status === "active" ? "text-stone-800" : "text-stone-500"}`}
                      >
                        {item.phase}
                      </p>
                      <p className="text-amber-600 font-medium text-sm mb-1">{item.date}</p>
                      <p className="text-stone-400 font-light text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-white/70 to-amber-50/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50">
              <h4 className="font-serif text-stone-800 mb-6 text-xl font-medium">Your Wellness Kit Includes</h4>
              <div className="space-y-4 text-stone-600 font-light">
                {[
                  "BalanX-D Mindful Coffee System",
                  "Constitutional assessment guide",
                  "Personalized wellness app",
                  "Traditional herb starter collection",
                  "Lifetime balance support",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mr-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
