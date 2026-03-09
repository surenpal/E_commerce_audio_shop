// Product.jsx
import React, { useEffect, useMemo, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import { useRef } from "react";

const Product = () => {
  const { data, fetchAllProducts } = getData();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const productTopRef = useRef(null);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    maxPrice: 1000,

  });

  useEffect(() => {
    if (!data?.length) fetchAllProducts();
  }, [data, fetchAllProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  useEffect(() => {
  productTopRef.current?.scrollIntoView({ behavior: "smooth" });
}, [currentPage]);


  const filteredProducts = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data
      .filter((item) =>
        filters.search
          ? item.title.toLowerCase().includes(filters.search.toLowerCase())
          : true
      )
      .filter((item) =>
        filters.category ? item.category === filters.category : true
      )
      .filter((item) => item.price <= filters.maxPrice);
  }, [data, filters]);



  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;


  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );



  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (!Array.isArray(data))
    return <div className="text-center py-20 text-lg">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="w-full bg-gradient-to-r from-pink-300 via-pink-300 to-pink-300 py-3 shadow-lg backdrop-blur-sm text-white rounded-lg p-4 mb-10 flex justify-between items-center">

        <div className="text-lg font-semibold text-gray-500">Recommended for You</div>
        <div className="text-bold px-2 py-3 bg-pink-400 text-black rounded-md">
          Big Sale • Up to 40% Off
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-lg p-4">
          <FilterSection onFilterChange={setFilters} />
        </div>
        <div className="md:col-span-2 bg-white shadow-md rounded-lg p-2 flex items-center justify-center">
          <video
            src="/public/shopping.mp4"
            autoPlay
            loop
            muted
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      <div ref={productTopRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {currentProducts.map((item) => {
          const imageSrc = Array.isArray(item.images)
            ? item.images[0]?.url || item.images[0]
            : item.images;

          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              image={imageSrc || "/fallback.png"}
              description={item.description || ""}
              onAddToCart={() => console.log(`Add ${item.title} to cart`)}
            />
          );
        })}
      </div>

      <div className="flex justify-center mt-10 gap-2 flex-wrap">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md ${currentPage === index + 1
              ? "bg-pink-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};



export default Product;