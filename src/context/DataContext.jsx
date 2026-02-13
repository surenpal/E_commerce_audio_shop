import { createContext } from "react";
import { useState } from "react";
import axios from "axios";


export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()

    //here we can define functions to fetch or manipulate data

    const fetchAllProducts = async () => {
        try {
            const response = await axios('https://fakestoreapi.in/api/products?limit=150');
            const products = await response.json();
            setData(products);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }



    return <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
        {children}
    </DataContext.Provider>
}
