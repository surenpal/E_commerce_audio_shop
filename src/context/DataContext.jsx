import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
            setData(response.data);   // axios stores JSON here
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