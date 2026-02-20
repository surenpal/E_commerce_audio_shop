const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h[500vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>

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