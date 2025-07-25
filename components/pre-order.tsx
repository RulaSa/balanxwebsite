"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PreOrder() {
  const timeline = [
    { phase: "Pre-order", date: "Now", status: "active" },
    { phase: "Preparation", date: "Q1 2026", status: "upcoming" },
    { phase: "Harmony", date: "Q3 2026", status: "upcoming" },
    { phase: "Balance", date: "Q4 2026", status: "upcoming" },
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-stone-50 to-stone-100/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">Reserve Your Journey</h2>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            Begin your path to personalized wellness. Join us in creating a more balanced, mindful approach to daily
            nourishment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-stone-200/50 shadow-lg rounded-3xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-light text-stone-800">Begin Your Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-stone-600 font-light">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="border-stone-200 rounded-2xl py-3 font-light bg-white/80 focus:bg-white transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-stone-600 font-light">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="border-stone-200 rounded-2xl py-3 font-light bg-white/80 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-stone-600 font-light">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-stone-200 rounded-2xl py-3 font-light bg-white/80 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-stone-600 font-light">Journey Type</Label>
                  <RadioGroup defaultValue="b2c" className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="b2c" id="b2c" className="border-stone-300" />
                      <Label htmlFor="b2c" className="font-light text-stone-600">
                        Personal Wellness Journey
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="b2b" id="b2b" className="border-stone-300" />
                      <Label htmlFor="b2b" className="font-light text-stone-600">
                        Wellness Center / Business
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button className="w-full bg-stone-700 hover:bg-stone-800 text-stone-50 py-4 rounded-2xl font-light transition-all duration-500 shadow-lg hover:shadow-xl">
                  Reserve My BalanX-D
                </Button>

                <p className="text-xs text-stone-400 text-center font-light">
                  No payment required. Begin your journey when ready.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-stone-800 mb-6">Your Wellness Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.phase} className="flex items-center space-x-4">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.status === "active" ? "bg-gradient-to-r from-stone-600 to-stone-700" : "bg-stone-300"
                      }`}
                    />
                    <div className="flex-1">
                      <p className={`font-light ${item.status === "active" ? "text-stone-800" : "text-stone-500"}`}>
                        {item.phase}
                      </p>
                      <p className="text-sm text-stone-400 font-light">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-stone-200/50">
              <h4 className="font-medium text-stone-800 mb-4">Your Wellness Kit Includes</h4>
              <div className="space-y-3 text-sm text-stone-600 font-light">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-3" />
                  BalanX-D Mindful Coffee System
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-3" />
                  Constitutional assessment guide
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-3" />
                  Personalized wellness app
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mr-3" />
                  Lifetime balance support
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
