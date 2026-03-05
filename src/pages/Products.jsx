import React, { useEffect, useMemo, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";

const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    maxPrice: 1000,
  });

  useEffect(() => {
    if (!data?.length) fetchAllProducts();
  }, [data, fetchAllProducts]);

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

  if (!Array.isArray(data))
    return <div className="text-center py-20 text-lg">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="w-full bg-[#5A2A55] text-white rounded-lg p-4 mb-10 flex justify-between items-center">
        <div className="text-lg font-semibold">Recommended for You</div>
        <div className="text-sm px-2 py-3 bg-[#D4AF37] text-black rounded-md"> Big Sale • Up to 40% Off</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">

        <div className="md:col-span-2 h-full flex items-center justify-center bg-white shadow-md rounded-lg p-4">
          <div className="w-full h-full">
            <FilterSection onFilterChange={setFilters} />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-2 flex items-center justify-center h-full">
          <video
            src="/public/shopping.mp4"
            autoPlay
            loop
            muted
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.map((item) => {
          const imageSrc = Array.isArray(item.images)
            ? item.images[0]?.url || item.images[0]
            : item.images;

          return (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={imageSrc || "/fallback.png"}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3"
                onError={(e) => (e.target.src = "/fallback.png")}
              />

              <h3 className="font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h3>

              <p className="text-[#5A2A55] font-bold">${item.price}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Product;