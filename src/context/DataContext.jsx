import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const response2 = await axios.get('https://dummyjson.com/products?limit=150');
            const productsData = response2.data.products;
            setData(productsData);
            console.log("Fetched products:", productsData);

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
            {children}
        </DataContext.Provider>
    );
};