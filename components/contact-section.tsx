"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showPartnershipForm, setShowPartnershipForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: ""
  })
  const [partnershipData, setPartnershipData] = useState({
    name: "",
    companyEmail: "",
    message: ""
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant section reveal
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Staggered content animation
      gsap.fromTo(
        ".contact-element",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Form input focus effects
      gsap.utils.toArray(".form-input").forEach((input: any) => {
        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            borderColor: "#ea580c",
            duration: 0.3,
            ease: "power2.out",
          })
        })
        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            borderColor: "#fdba74",
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })

      // Button hover animation
      const reserveButton = document.querySelector(".reserve-button")
      if (reserveButton) {
        reserveButton.addEventListener("mouseenter", () => {
          gsap.to(reserveButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        })
        reserveButton.addEventListener("mouseleave", () => {
          gsap.to(reserveButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          question: formData.question,
          type: 'contact'
        }),
      })

      if (response.ok) {
        // Success - show success message or redirect
        alert('Message sent successfully!')
        // Reset form
        setFormData({ name: "", email: "", question: "" })
        setShowContactForm(false)
      } else {
        // Error handling
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePartnershipFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: partnershipData.name,
          email: partnershipData.companyEmail,
          question: partnershipData.message,
          type: 'partnership'
        }),
      })

      if (response.ok) {
        // Success - show success message or redirect
        alert('Partnership inquiry sent successfully!')
        // Reset form
        setPartnershipData({ name: "", companyEmail: "", message: "" })
        setShowPartnershipForm(false)
      } else {
        // Error handling
        alert('Failed to send partnership inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error sending partnership inquiry:', error)
      alert('Failed to send partnership inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackToMain = () => {
    setShowContactForm(false)
    setShowPartnershipForm(false)
    // Scroll to the top of the contact section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePartnershipInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPartnershipData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section ref={sectionRef} data-section="contact" className="relative bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 text-gray-800 overflow-hidden">
      {/* Main Contact Section */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {!showContactForm && !showPartnershipForm ? (
            <>
              <h2
                className="contact-element text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wide bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Join the Balance Community
              </h2>

              <p
                className="contact-element text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Be the first to experience personalized wellness. Reserve your BalanX-D and join thousands on the journey
                toward natural balance.
              </p>

              {/* Email Form */}
              <form ref={formRef} className="contact-element flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input flex-1 max-w-md bg-white/80 border border-orange-300 rounded-full py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
                  style={{ fontFamily: "Crimson Text, serif" }}
                />
                <button
                  type="submit"
                  className="reserve-button bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-4 px-8 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2 min-w-fit shadow-lg"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  Reserve Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                  </svg>
                </button>
              </form>

              <p className="contact-element text-gray-600 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
                No payment required. Free shipping on pre-orders.
              </p>
            </>
          ) : showContactForm ? (
            <>
              {/* Close button */}
              <button
                onClick={handleBackToMain}
                className="absolute top-8 left-8 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 z-10 border border-orange-300"
                aria-label="Close form"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-gray-800">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <h2
                className="contact-element text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wide bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Email Us
              </h2>

              <p
                className="contact-element text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Ask us anything about BalanX
              </p>

              {/* Contact Form */}
              <form onSubmit={handleContactFormSubmit} className="contact-element space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />
                </div>
                
                <div>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="What would you like to know about BalanX?"
                    rows={6}
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="reserve-button bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-4 px-8 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              {/* Close button */}
              <button
                onClick={handleBackToMain}
                className="absolute top-8 left-8 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-300 z-10 border border-orange-300"
                aria-label="Close form"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-gray-800">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <h2
                className="contact-element text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wide bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Partnership
              </h2>

              <p
                className="contact-element text-xl md:text-2xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Send message to show your interest
              </p>

              {/* Partnership Form */}
              <form onSubmit={handlePartnershipFormSubmit} className="contact-element space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={partnershipData.name}
                    onChange={handlePartnershipInputChange}
                    placeholder="Your name"
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />

                  <input
                    type="email"
                    name="companyEmail"
                    value={partnershipData.companyEmail}
                    onChange={handlePartnershipInputChange}
                    placeholder="Your company email address"
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={partnershipData.message}
                    onChange={handlePartnershipInputChange}
                    placeholder="Tell us about your partnership interest and how we can collaborate"
                    rows={6}
                    required
                    className="form-input w-full bg-white/80 border border-orange-300 rounded-lg py-4 px-6 text-gray-800 placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="reserve-button bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-4 px-8 rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Partnership Inquiry'}
                    {!isSubmitting && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-orange-300/30 bg-gradient-to-b from-orange-50 via-orange-100 to-orange-200 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 via-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-bold text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>
                    B
                  </span>
                </div>
                <span className="text-3xl font-serif font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "Playfair Display, serif" }}>
                  BalanX
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-10" style={{ fontFamily: "Crimson Text, serif" }}>
                Where ancient wisdom meets modern wellness technology.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/balanx_bio25?igsh=eWxpZnFqMGIzNmFl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/60 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-orange-200 hover:border-pink-400/50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/balanxbio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/60 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-orange-200 hover:border-blue-400/50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.xiaohongshu.com/user/profile/68141048000000000e01d28f?xsec_token=YBbZwnRatk2i5TYUseLHheh2t31HL_-j8y0ZaTvIzDWXM=&xsec_source=app_share&xhsshare=CopyLink&appuid=6219258000000000100094bd&apptime=1753755554&share_id=f2ce3a51d175488b95b886331eee176e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/60 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 backdrop-blur-sm border border-orange-200 hover:border-red-400/50"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 hover:text-white">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.137-.361-.205-.576-.205-.215 0-.407.068-.576.205-.338.274-.507.616-.507 1.026 0 .41.169.752.507 1.026.169.137.361.205.576.205.215 0 .407-.068.576-.205.338-.274.507-.616.507-1.026 0-.41-.169-.752-.507-1.026zM6.432 8.16c-.169-.137-.361-.205-.576-.205-.215 0-.407.068-.576.205-.338.274-.507.616-.507 1.026 0 .41.169.752.507 1.026.169.137.361.205.576.205.215 0 .407-.068.576-.205.338-.274.507-.616.507-1.026 0-.41-.169-.752-.507-1.026zM12 6.5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 4.5c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "Playfair Display, serif" }}>
                Contact
              </h3>
              <ul className="space-y-6">
                <li>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 bg-transparent border-none cursor-pointer text-left group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    Email us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowPartnershipForm(true)}
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 bg-transparent border-none cursor-pointer text-left group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    Partnership
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "Playfair Display, serif" }}>
                Company
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    Brand Story
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent" style={{ fontFamily: "Playfair Display, serif" }}>
                Resources
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    Press & News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-orange-600 hover:translate-x-2 transition-all duration-300 flex items-center gap-4 group text-lg"
                    style={{ fontFamily: "Crimson Text, serif" }}
                  >
                    <div className="w-10 h-10 bg-white/50 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-orange-200 group-hover:border-orange-400/50">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-orange-600 text-gray-600">
                        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-orange-300/30 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm" style={{ fontFamily: "Crimson Text, serif" }}>
                © 2025 BalanX. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300" style={{ fontFamily: "Crimson Text, serif" }}>
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors duration-300" style={{ fontFamily: "Crimson Text, serif" }}>
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
