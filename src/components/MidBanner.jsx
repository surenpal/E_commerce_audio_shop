import bg_midbanner from "../assets/bg_midbanner.avif"
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative max-w-7xl mx-auto pt-48 bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            `url(${bg_midbanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Style</h2>
          <p className="text-lg md:text-2xl mb-6">
            Unleash your inner fashionista with our exclusive collection.
          </p>
          <Link to="/products">
          <button className="bg-pink-400 hover:bg-pink-500 text-white text-lg font-semibold px-6 py-3 rounded-md transition">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MidBanner