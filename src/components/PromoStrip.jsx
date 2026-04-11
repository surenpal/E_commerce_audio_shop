import { useState } from "react"

const PromoStrip = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="relative bg-gradient-to-r from-[#5A2A55] via-pink-600 to-pink-400 py-14 px-4 overflow-hidden">

      {/* decorative circles */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/5 rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full" />

      <div className="relative max-w-3xl mx-auto text-center">

        <p className="text-pink-200 text-xs font-bold uppercase tracking-widest mb-3">
          Limited Time Offer
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
          Get 10% Off Your First Order
        </h2>

        <p className="text-pink-100 mb-8 text-sm md:text-base">
          Subscribe to our newsletter for exclusive deals and new arrivals.
        </p>

        {subscribed ? (
          <p className="text-white font-semibold text-lg animate-pulse">
            You're in! Check your inbox soon. 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-80 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-white text-[#5A2A55] font-bold px-6 py-3 rounded-full hover:bg-pink-50 transition shadow-lg"
            >
              Claim Discount
            </button>
          </form>
        )}

      </div>
    </section>
  )
}

export default PromoStrip
