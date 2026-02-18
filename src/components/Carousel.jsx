import { useContext, useEffect, useMemo } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Carousel = () => {

  const { data, fetchAllProducts } = useContext(DataContext)

  useEffect(() => {
    if (!data?.length) fetchAllProducts()
  }, [fetchAllProducts, data])

  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }), [])

  if (!Array.isArray(data))
    return <div className="text-center py-20">Loading...</div>

  return (
    <div className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {data.slice(0,7).map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
              <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:h-[600px] py-10">

                <div className="space-y-6 max-w-[500px] text-center md:text-left">
                  <h3 className="text-red-500 font-semibold text-sm">
                    This is where you need to visit for the best beauty products.
                  </h3>

                  <h1 className="text-3xl md:text-4xl font-bold uppercase text-white">
                    {item.title}
                  </h1>

                  <p className="text-gray-300 line-clamp-3">
                    {item.description}
                  </p>

                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-md">
                    Shop Now
                  </button>
                </div>

                <img
                  src={Array.isArray(item.images) ? item.images[0] : item.images}
                  alt={item.title}
                  className="rounded-full w-[250px] md:w-[450px] object-cover hover:scale-105 transition-all shadow-red-400"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
