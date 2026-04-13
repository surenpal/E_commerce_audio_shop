// Product.jsx
import { useEffect, useMemo, useState, useRef } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

const Product = ({ addToCart }) => {
  const { data, fetchAllProducts } = getData();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const productTopRef = useRef(null);
  const hasMounted = useRef(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    maxPrice: 1000,
  });

  useEffect(() => {
    if (!data?.length) fetchAllProducts();
  }, [data, fetchAllProducts]);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    productTopRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    if (!data.length) return [];

    return data
      .filter((item) =>
        filters.search
          ? item.title.toLowerCase().includes(filters.search.toLowerCase())
          : true
      )
      .filter((item) =>
        filters.category ? item.category === filters.category : true
      )
      .filter((item) => item.price <= Number(filters.maxPrice));
  }, [data, filters]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (!data.length) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-[#5A2A55] via-pink-600 to-pink-400 rounded-xl p-4 mb-10 flex justify-between items-center shadow-lg">

        <div className="text-base md:text-lg font-semibold text-pink-100">
          Recommended for You
        </div>

        <div className="font-bold px-4 py-2 bg-white text-[#5A2A55] rounded-full text-sm md:text-base shadow">
          Big Sale • Up to 40% Off
        </div>

      </div>

      {/* Filters + Video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white shadow-md rounded-lg p-4">
          <FilterSection onFilterChange={handleFilterChange} />
        </div>

        <div className="hidden md:block md:col-span-2 bg-white shadow-md rounded-lg overflow-hidden md:h-full">
          <video
            src="/shopping.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Product Grid */}
      <div ref={productTopRef}>
        {currentProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-semibold">No products match your filters.</p>
            <p className="text-sm mt-1">Try adjusting the search, category, or price range.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                  onAddToCart={() => addToCart(item)}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap items-center">

          {/* Prev */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          {/* Windowed page numbers */}
          {(() => {
            const pages = [];
            const delta = 2;
            const left = Math.max(2, currentPage - delta);
            const right = Math.min(totalPages - 1, currentPage + delta);

            // First page always shown
            pages.push(1);

            if (left > 2) pages.push("...");
            for (let i = left; i <= right; i++) pages.push(i);
            if (right < totalPages - 1) pages.push("...");

            // Last page always shown
            if (totalPages > 1) pages.push(totalPages);

            return pages.map((page, i) =>
              page === "..." ? (
                <span key={`ellipsis-${i}`} className="px-2 text-gray-400">…</span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page
                      ? "bg-pink-500 text-white font-semibold"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              )
            );
          })()}

          {/* Next */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>

        </div>
      )}

    </div>
  );
};

export default Product;