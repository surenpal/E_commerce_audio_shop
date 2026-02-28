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
              <FilterSection/>
              <div>
                
              </div>
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