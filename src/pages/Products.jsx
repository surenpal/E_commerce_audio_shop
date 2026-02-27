import React from 'react'
import { getData } from '../context/DataContext'

const Products = () => {

  const { data} = getData()
  return (
    <div>
      <div>
        {
          data.length > 0 ? (
            <div></div>
            
          ):(
            <div></div>
          )
        }
      </div>
    </div>
  )
}

export default Products