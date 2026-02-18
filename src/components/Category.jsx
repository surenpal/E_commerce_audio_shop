import { useEffect } from 'react'
import { getData } from '../context/DataContext'

export const Category = () => {

    const { data, fetchAllProducts } = getData()

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        })
        return [...new Set(newVal)]
    } 

    const categoryOnlyData = getUniqueCategory(data, "category")
    console.log("categoryOnlyData:", categoryOnlyData)

    useEffect(() => {
        if (!data?.length) fetchAllProducts()
    }, [data])  

    return (
        <div>

            catagory will be here

        </div>
    )
}
