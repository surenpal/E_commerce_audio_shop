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
            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop></video>

            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products