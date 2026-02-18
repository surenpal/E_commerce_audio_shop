import { useEffect, useMemo } from "react"
import { getData } from "../context/DataContext"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Category } from "./Category"

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 
               bg-[#5A2A55] text-white w-10 h-10 rounded-full 
               flex items-center justify-center shadow-lg 
               hover:bg-[#4a2147] transition-all duration-300
               hover:scale-110 hover:shadow-[0_0_15px_#D4AF37]
               z-10"
  >
    <span className="text-xl">›</span>
  </button>
)

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 
               bg-[#5A2A55] text-white w-10 h-10 rounded-full 
               flex items-center justify-center shadow-lg 
               hover:bg-[#4a2147] transition-all duration-300
               hover:scale-110 hover:shadow-[0_0_15px_#D4AF37]
               z-10"
  >
    <span className="text-xl">‹</span>
  </button>
)

const Carousel = () => {
  const { data, fetchAllProducts } = getData()
  console.log("Carousel data:", data)

  useEffect(() => {
    if (!data?.length) fetchAllProducts()
  }, [data])

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 800,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      lazyLoad: "ondemand",
      pauseOnHover: true,
    }),
    []
  )

  if (!Array.isArray(data))
    return <div className="text-center py-20 text-lg">Loading...</div>

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {data.slice(7, 15).map((item) => (
          <div key={item.id}>
            <div className="w-full bg-gradient-to-r from-[#E8B4B8] via-[#5A2A55] to-[#D4AF37]">

              <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between items-center md:h-[600px] py-10">

                <div className="space-y-6 max-w-[500px] text-center md:text-left">
                  <h3 className="text-[#5A2A55] font-semibold text-sm leading-relaxed">
                    Glow with confidence.
                    <br />
                    Reveal your natural beauty.
                    <br />
                    Shine like you were born to.
                  </h3>

                  <h1 className="text-3xl md:text-4xl font-bold uppercase text-white drop-shadow-lg">
                    {item.title}
                  </h1>

                  <p className="text-gray-200 line-clamp-3 drop-shadow-md">
                    {item.description}
                  </p>

                  <button className="bg-[#5A2A55] hover:bg-[#4a2147] text-white px-5 py-2 rounded-md transition">
                    Shop Now
                  </button>
                </div>

                <img
                  src={Array.isArray(item.images) ? item.images[0] : item.images}
                  alt={item.title}
                  className="flex-shrink-0 rounded-full w-[220px] sm:w-[300px] md:w-[420px] object-cover transition-all duration-500 hover:scale-105 shadow-[20px_0_60px_rgba(212,175,55,0.6),-20px_0_60px_rgba(90,42,85,0.6)]"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>


      <Category />
    </div>
  )
}

export default Carousel