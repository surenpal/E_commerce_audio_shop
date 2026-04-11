import { useEffect, useMemo } from "react"
import { Link } from "react-router-dom"
import { getData } from "../context/DataContext"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import bgcarousel from "../assets/bg_carousel.png"



const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 
               bg-[#5A2A55] text-white w-10 h-10 rounded-full 
               flex items-center justify-center shadow-lg 
               hover:bg-[#4a2147] transition-all duration-300
               hover:scale-110 hover:shadow-[0_0_15px_#D4AF37]
               z-20"
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
               z-20"
  >
    <span className="text-xl">‹</span>
  </button>
)



const Carousel = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    if (!data?.length) fetchAllProducts()
  }, [data, fetchAllProducts])



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
      pauseOnHover: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      lazyLoad: "ondemand",
    }),
    []
  )



  if (!Array.isArray(data))
    return <div className="text-center py-20 text-lg">Loading...</div>



  return (
    <div className="w-full relative">

      <Slider {...settings}>
        {data.slice(7, 15).map((item) => {
          
          const imageSrc =
            Array.isArray(item.images)
              ? item.images[0]?.url || item.images[0]
              : item.images

          return (
            <div key={item.id} className="relative">

              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${bgcarousel})` }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#5A2A55]/80 via-black/30 to-transparent z-0" />

              <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between items-center md:h-[600px] py-10">

                <div className="space-y-6 max-w-[500px] text-center md:text-left">

                  <span className="inline-block bg-pink-400/30 border border-pink-300 text-pink-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    New Arrival
                  </span>

                  <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white drop-shadow-lg leading-tight">
                    {item.title}
                  </h1>

                  <p className="text-pink-100 line-clamp-3 drop-shadow-md text-sm md:text-base">
                    {item.description}
                  </p>

                  <Link to="/products" className="inline-block">
                    <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg hover:shadow-pink-400/50">
                      Shop Now
                    </button>
                  </Link>
                </div>



          
                <img
                  src={imageSrc || "/fallback.png"}
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = "/fallback.png"
                  }}
                  className="flex-shrink-0 rounded-full w-[220px] sm:w-[300px] md:w-[420px] object-cover transition-all duration-500 hover:scale-105 shadow-[20px_0_60px_rgba(212,175,55,0.6),-20px_0_60px_rgba(90,42,85,0.6)]"
                />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carousel