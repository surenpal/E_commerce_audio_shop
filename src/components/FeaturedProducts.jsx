import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getData } from "../context/DataContext"
import ProductCard from "./ProductCard"

const FeaturedProducts = ({ addToCart }) => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    if (!data?.length) fetchAllProducts()
  }, [data, fetchAllProducts])

  const featured = data.slice(0, 8)

  if (!data?.length) return null

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">

      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="w-1 h-7 bg-pink-400 rounded-full inline-block" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#5A2A55]">
              Top Picks For You
            </h2>
          </div>
          <p className="text-gray-400 mt-1 text-sm pl-4">
            Handpicked products you'll love
          </p>
        </div>
        <Link
          to="/products"
          className="text-sm font-semibold text-white bg-pink-400 hover:bg-pink-500 transition px-5 py-2 rounded-full shadow hover:shadow-pink-300"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {featured.map((item) => {
          const imageSrc = Array.isArray(item.images)
            ? item.images[0]?.url || item.images[0]
            : item.images

          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              image={imageSrc || "/fallback.png"}
              description={item.description || ""}
              onAddToCart={() => addToCart(item)}
            />
          )
        })}
      </div>

      </div>
    </section>
  )
}

export default FeaturedProducts
