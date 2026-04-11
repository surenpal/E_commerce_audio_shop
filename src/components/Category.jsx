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
    <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 border-y border-pink-100">

      <div className="max-w-7xl mx-auto px-4 space-y-6">

        <div className="flex items-center gap-3">
          <span className="w-1 h-7 bg-pink-400 rounded-full inline-block" />
          <h2 className="text-xl md:text-2xl font-bold text-[#5A2A55]">
            Shop by Category
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {categoryOnlyData.map((item, index) => (
            <button
              key={index}
              className="capitalize text-sm font-medium text-[#5A2A55]
                         bg-white hover:bg-pink-400 hover:text-white
                         border border-pink-200 shadow-sm
                         px-4 py-2 rounded-full hover:scale-105 hover:shadow-pink-200
                         transition-all duration-300"
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