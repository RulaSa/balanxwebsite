export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Join the Waitlist
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your interest! You've been added to our waitlist. We'll notify you when BalanX-D is available for pre-order.
        </p>
        <a 
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
