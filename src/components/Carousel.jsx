import React, { use, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {

  const { data, fetchAllProducts } = useContext(DataContext)
  console.log("Data in Carousel:", data)

  useEffect(() => {
    fetchAllProducts()
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
{
  data?Slice(0,7)?.map((item, index) => {
    return <div key={index} className='bg-gradient-to-r from [#0f0c29] via-to-[324243e] -z-10'>
    <div className='flex gap-10 justify-center h-[600px] items-center px-4'>
      <div className='space-y-6'>
        <h3 className='text-red-500 font-semibold font-sans text-sm'>Lorem ipsum, dolor sit amet 
          consectetur adipisicing elit. Veritatis nihil sint, quasi qui esse dicta ducimus eaque, 
          sit numquam a tempora incidunt? Culpa cumque labore ab eum a error tempore.</h3>
        <h1 className='text-4xl font-bold  uppercase line-clam-3 md:w-[500px] text-white'>{item.title}</h1>
        <p className = 'md:w-[500px] line-clamp-3 text-gray-300 pr-7'>{item.description}</p>
        <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 
        rounded-md cursor-pointer mt-2'>Shop Now</button>
      </div>
    </div>
  })
}

        
        <div>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel