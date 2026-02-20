

const MidBanner = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative max-w-7xl mx-auto pt-48 bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            "url('../assets/mid-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Style</h2>
          <p className="text-lg md:text-2xl mb-6">
            Unleash your inner fashionista with our exclusive collection.
          </p>
          <button className="bg-[#5A2A55] hover:bg-[#4a2147] text-white px-6 py-3 rounded-md transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default MidBanner