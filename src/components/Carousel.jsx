import React, { use, useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

const Carousel = () => {

  const { fetchAllProducts } = useContext(DataContext)
  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <div>Carousel</div>
  )
}

export default Carousel