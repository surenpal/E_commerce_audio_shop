import { useState } from "react"

const PromoStrip = ({ compact = false }) => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section
      className={`relative bg-gradient-to-r from-[#5A2A55] via-pink-600 to-pink-400 px-4 overflow-hidden
        ${compact ? "py-5 rounded-xl" : "py-14"}`}
    >

      {/* decorative circles */}
      <div className={`absolute bg-white/5 rounded-full
        ${compact ? "-top-6 -left-6 w-24 h-24" : "-top-10 -left-10 w-48 h-48"}`}
      />
      <div className={`absolute bg-white/5 rounded-full
        ${compact ? "-bottom-6 -right-6 w-32 h-32" : "-bottom-10 -right-10 w-64 h-64"}`}
      />

      <div className="relative max-w-3xl mx-auto text-center">

        <p className={`text-pink-200 font-bold uppercase tracking-widest
          ${compact ? "text-[10px] mb-1" : "text-xs mb-3"}`}
        >
          Limited Time Offer
        </p>

        <h2 className={`font-extrabold text-white
          ${compact ? "text-lg md:text-xl mb-2" : "text-3xl md:text-4xl mb-3"}`}
        >
          Get 10% Off Your First Order
        </h2>

        <p className={`text-pink-100
          ${compact ? "text-xs mb-3" : "text-sm md:text-base mb-8"}`}
        >
          Subscribe to our newsletter for exclusive deals and new arrivals.
        </p>

        {subscribed ? (
          <p className={`text-white font-semibold animate-pulse
            ${compact ? "text-sm" : "text-lg"}`}
          >
            You're in! Check your inbox soon. 🎉
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`w-full rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50
                ${compact ? "sm:w-60 px-3 py-1.5 text-sm" : "sm:w-80 px-4 py-3"}`}
            />
            <button
              type="submit"
              className={`bg-white text-[#5A2A55] font-bold rounded-full hover:bg-pink-50 transition shadow-lg
                ${compact ? "px-4 py-1.5 text-sm" : "px-6 py-3"}`}
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
