"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Youtube, Phone, Mail, Users, FileText, FlaskConical } from "lucide-react"
import Link from "next/link"

export function Community() {
  const footerSections = [
    {
      title: "Contact",
      links: [
        { name: "Support", href: "#", icon: Mail },
        { name: "Partnership", href: "#", icon: Phone },
        { name: "General Inquiries", href: "#", icon: Mail },
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
        { name: "Blog", href: "#", icon: FileText },
      ],
    },
  ]

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    {
      name: "TikTok",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
        </svg>
      ),
      href: "#",
    },
    { name: "YouTube", icon: Youtube, href: "#" },
    {
      name: "RedNote",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      href: "#",
    },
  ]

  const handleLinkClick = (href: string) => {
    if (href !== "#") {
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer className="bg-stone-800 text-stone-50">
      {/* Newsletter Section */}
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
                        onClick={() => handleLinkClick(link.href)}
                        className="text-stone-400 hover:text-stone-200 font-light transition-colors duration-300 flex items-center space-x-2"
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
