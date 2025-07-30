"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Instagram, Phone, Mail, Users, FileText, FlaskConical, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Community() {
  const [formType, setFormType] = useState<"newsletter" | "email" | "partnership">("newsletter")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  })

  const footerSections = [
    {
      title: "Contact",
      links: [
        { name: "Email Us", href: "#", icon: Mail, action: () => setFormType("email") },
        { name: "Partnership", href: "#", icon: Phone, action: () => setFormType("partnership") },
      ],
    },
    {
      title: "Company",
      links: [{ name: "Brand Story/Our Team", href: "/team", icon: Users }],
    },
    {
      title: "Resources",
      links: [
        { name: "Press & News", href: "/press", icon: FileText },
        { name: "Research", href: "/research", icon: FlaskConical },
      ],
    },
  ]

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/balanx_bio25?igsh=eWxpZnFqMGIzNmFlbA==",
    },
    {
      name: "LinkedIn",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/company/balanxbio/",
    },
    {
      name: "RedNote",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      href: "https://www.xiaohongshu.com/user/profile/68141048000000000e01d28f?xsec_token=YBbZwnRatk2i5TYUseLHheh2t31HL_-j8y0ZaTvIzDWXM=&xsec_source=app_share&xhsshare=CopyLink&appuid=6219258000000000100094bd&apptime=1753755554&share_id=f2ce3a51d175488b95b886331eee176e",
    },
  ]

  const handleLinkClick = (href: string, action?: () => void) => {
    if (action) {
      action()
      return
    }
    if (href !== "#" && !href.startsWith("mailto:")) {
      window.scrollTo(0, 0)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let subject = ""
    let body = ""

    if (formType === "email") {
      subject = encodeURIComponent("BalanX Inquiry from " + formData.name)
      body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    } else if (formType === "partnership") {
      subject = encodeURIComponent("Partnership Inquiry from " + formData.company)
      body = encodeURIComponent(
        `Company: ${formData.company}\nContact Name: ${formData.name}\nEmail: ${formData.email}\n\nPartnership Interest:\n${formData.message}`,
      )
    }

    const mailtoLink = `mailto:jingliqin2001@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form and close
    setFormData({ name: "", email: "", message: "", company: "" })
    setFormType("newsletter")
  }

  const resetForm = () => {
    setFormType("newsletter")
    setFormData({ name: "", email: "", message: "", company: "" })
  }

  return (
    <footer className="bg-stone-800 text-stone-50">
      {/* Newsletter/Email Form Section */}
      <section className="py-20 border-b border-stone-700">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {formType === "newsletter" ? (
                // Newsletter Signup
                <>
                  <h2 className="text-4xl md:text-5xl font-light mb-6">Join the Balance Community</h2>
                  <p className="text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
                    Be the first to experience personalized wellness. Reserve your BalanX-D and join thousands on the
                    journey toward natural balance.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-8">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-full px-6 py-3 flex-1"
                    />
                    <Button className="bg-stone-50 hover:bg-stone-100 text-stone-800 px-8 py-3 rounded-full font-medium transition-all duration-300">
                      Reserve Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-stone-400 font-light pt-4">
                    No payment required. Free shipping on pre-orders.
                  </p>
                </>
              ) : formType === "email" ? (
                // Email Contact Form
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-light">Email Us</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetForm}
                      className="ml-4 text-stone-400 hover:text-stone-200 hover:bg-stone-700 rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                    Ask us anything about BalanX
                  </p>

                  <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-stone-300 font-light">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-stone-300 font-light">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email"
                          required
                          className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-stone-300 font-light">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ask us anything about BalanX..."
                        required
                        rows={4}
                        className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-stone-50 hover:bg-stone-100 text-stone-800 px-8 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
                // Partnership Form
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <h2 className="text-4xl md:text-5xl font-light">Partnership</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetForm}
                      className="ml-4 text-stone-400 hover:text-stone-200 hover:bg-stone-700 rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <p className="text-xl text-stone-300 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                    Send message to show your interest
                  </p>

                  <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-stone-300 font-light">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        required
                        className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-stone-300 font-light">
                          Contact Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-stone-300 font-light">
                          Company Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="company@example.com"
                          required
                          className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-stone-300 font-light">
                        Partnership Interest
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your partnership interest..."
                        required
                        rows={4}
                        className="bg-stone-700 border-stone-600 text-stone-50 placeholder:text-stone-400 rounded-2xl px-4 py-3 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-stone-50 hover:bg-stone-100 text-stone-800 px-8 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      Send Partnership Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-stone-50 rounded-xl flex items-center justify-center">
                  <span className="text-stone-800 font-medium text-sm">B</span>
                </div>
                <span className="font-light text-xl">BalanX</span>
              </div>
              <p className="text-stone-400 font-light leading-relaxed">Where ancient wisdom meets modern wellness.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-stone-700 hover:bg-stone-600 rounded-full flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-lg font-medium text-stone-200">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (link.action) {
                            e.preventDefault()
                            handleLinkClick(link.href, link.action)
                          } else {
                            handleLinkClick(link.href)
                          }
                        }}
                        className="text-stone-400 hover:text-stone-200 font-light transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
                      >
                        <link.icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-stone-700 mt-16 pt-8 text-center">
            <p className="text-stone-400 font-light text-sm">
              © 2024 BalanX. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
