import bg_midbanner from "../assets/bg_midbanner.avif"
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className="bg-gray-100">
      <div
        className="relative w-full bg-cover bg-center h-[500px] flex items-end"
        style={{ backgroundImage: `url(${bg_midbanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A2A55]/90 via-black/20 to-transparent" />

        <div className="relative z-10 w-full text-center text-white px-4 pb-16">
          <p className="text-pink-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Exclusive Collection
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Discover Your Style
          </h2>
          <p className="text-lg md:text-xl mb-8 text-pink-100 max-w-xl mx-auto">
            Unleash your inner fashionista with our exclusive collection.
          </p>
          <Link to="/products">
            <button className="bg-pink-400 hover:bg-pink-500 text-white text-lg font-semibold px-8 py-3 rounded-full transition shadow-lg hover:shadow-pink-400/50">
              View All Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MidBanner