"use client"

import { useState } from "react"

interface EmailPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can add email sending logic here
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-amber-100 rounded-2xl p-8 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            Email Us
          </h2>
          <p className="text-gray-700" style={{ fontFamily: "Crimson Text, serif" }}>
            Ask us anything about BalanX.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-colors"
              style={{ fontFamily: "Crimson Text, serif" }}
              required
            />
          </div>

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="What would you like to know about BalanX?"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-white border border-orange-200 rounded-lg focus:border-orange-400 focus:outline-none transition-colors resize-none"
            style={{ fontFamily: "Crimson Text, serif" }}
            required
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2"
            style={{ fontFamily: "Crimson Text, serif" }}
          >
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
} 