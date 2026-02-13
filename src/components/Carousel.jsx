import React, { use, useContext, useEffect } from 'react'
import DataProvider from '../context/DataContext'

const Carousel = () => {

  const { fetchAllProducts } = useContext(DataProvider)
  useEffect(() => {
    fetchAllProducts();
  }, [])

  return (
    <div>Carousel</div>
  )
}

export default Carousel