import React from 'react'
import { getData } from '../context/DataContext'
import { useEffect } from 'react'

const Products = () => {

  const { data, fetchAllProducts } = getData()
   useEffect(() =>{
    fetchAllProducts()
   })
  return (
    <div>
      <div>
        {
          data.length > 0 ? (
            <div>
              <h1 className='text-3xl font-bold mb-4'>
                {data[0].title}
              </h1>
              <p className='text-gray-700 mb-6'>
                {data[0].description}
              </p>
              <img src="" alt="" />

              <h3 className=''>Shop Now</h3>
            </div>
            
            
          ):(
            <div>No products available</div>
          )
        }
      </div>
    </div>
  )
}

export default Products