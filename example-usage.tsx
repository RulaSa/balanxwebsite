"use client"

import BalanceCommunitySection from "./balance-community-section"

export default function ExampleUsage() {
  // Example 1: Default usage
  const handleDefaultSubmit = async (email: string) => {
    console.log("Default submission:", email)
    // Add your own logic here
  }

  // Example 2: Custom content
  const handleCustomSubmit = async (email: string) => {
    console.log("Custom submission:", email)
    // Add your own logic here
  }

  return (
    <div className="min-h-screen">
      {/* Example 1: Default Balance Community Section */}
      <BalanceCommunitySection onSubmit={handleDefaultSubmit} />

      {/* Example 2: Customized Balance Community Section */}
      <BalanceCommunitySection
        title="Join Our Newsletter"
        subtitle="Stay updated with the latest wellness tips and exclusive offers. Be part of our growing community of health enthusiasts."
        buttonText="Subscribe Now"
        placeholderText="Your email address"
        disclaimerText="We respect your privacy. Unsubscribe at any time."
        onSubmit={handleCustomSubmit}
        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      />

      {/* Example 3: Minimal version */}
      <BalanceCommunitySection
        title="Get Early Access"
        subtitle="Be among the first to experience our revolutionary product."
        buttonText="Join Waitlist"
        onSubmit={(email) => console.log("Waitlist:", email)}
      />
    </div>
  )
} 