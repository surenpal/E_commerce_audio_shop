import { useEffect } from 'react'
import { getData } from '../context/DataContext'

export const Category = () => {

  const { data, fetchAllProducts } = getData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property])
    return [...new Set(newVal)]
  }

  const categoryOnlyData = getUniqueCategory(data, "category")

  useEffect(() => {
    if (!data?.length) fetchAllProducts()
  }, [data])

  const firstRow = categoryOnlyData.slice(0, 8)
  const secondRow = categoryOnlyData.slice(8)

  return (
    <div className="bg-[#1A1A1A] py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-8">

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {firstRow.map((item, index) => (
            <button
              key={index}
              className="uppercase text-sm font-semibold text-white 
                         bg-[#5A2A55] hover:bg-[#4a2147]
                         px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {secondRow.map((item, index) => (
            <button
              key={index}
              className="uppercase text-sm font-semibold text-white 
                         bg-[#5A2A55] hover:bg-[#4a2147]
                         px-4 py-2 rounded-md hover:scale-105 transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Category