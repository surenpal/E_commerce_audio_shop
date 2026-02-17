import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Carousel = () => {

  const { data, fetchAllProducts } = useContext(DataContext)

  useEffect(() => {
    fetchAllProducts()
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {data?.slice(0, 7)?.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">

              <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-auto md:h-[600px] py-10">

                <div className="space-y-6 max-w-[500px] text-center md:text-left">
                  <h3 className="text-red-500 font-semibold text-sm">
                    This is where you need to visit for the best beauty products.
                    The best quality and the best price.
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
                  src={item.images}
                  alt={item.title}
                  className="rounded-full w-[250px] md:w-[450px] hover:scale-105 transition-all shadow-red-400"
                />

              </div>
            </div>
          ))}

          <div className="bg-gray-900 h-[400px] md:h-[600px] flex items-center justify-center text-white text-4xl">
            <h3>1</h3>
          </div>

        </Slider>
      </div>
    </div>
  )
}

export default Carousel