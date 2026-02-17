import React, { use, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const { data, fetchAllProducts } = useContext(DataContext)
  console.log("Data in Carousel:", data)

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div> This is the Carousel</div>
  )
}

export default Carousel