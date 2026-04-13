// Product.jsx
import { useEffect, useMemo, useState, useRef } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

const SkeletonCard = () => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col animate-pulse">
    <div className="w-full h-40 bg-gray-200 rounded-md mb-3" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-3 bg-gray-200 rounded w-full mb-1" />
    <div className="h-3 bg-gray-200 rounded w-5/6 mb-3" />
    <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
    <div className="h-9 bg-gray-200 rounded mt-auto" />
  </div>
);

const Product = ({ addToCart }) => {
  const { data, fetchAllProducts } = getData();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const productTopRef = useRef(null);
  const hasMounted = useRef(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    maxPrice: 2000, // matches FilterSection default
  });

  const [sortBy, setSortBy] = useState("default");

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

    let result = data
      .filter((item) =>
        filters.search
          ? item.title.toLowerCase().includes(filters.search.toLowerCase())
          : true
      )
      .filter((item) =>
        filters.category ? item.category === filters.category : true
      )
      .filter((item) => item.price <= Number(filters.maxPrice));

    if (sortBy === "price-asc")
      result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc")
      result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === "name-asc")
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }, [data, filters, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Skeleton loading state
  if (!data.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="h-20 bg-gray-200 rounded-xl mb-6 animate-pulse" />
        <div className="h-14 bg-gray-200 rounded-xl mb-8 animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#5A2A55] via-pink-600 to-pink-400 rounded-xl px-6 py-5 mb-6 flex justify-between items-center shadow-lg">
        <div>
          <h1 className="text-white font-extrabold text-xl md:text-2xl tracking-wide">
            Our Products
          </h1>
          <p className="text-pink-200 text-sm mt-0.5">
            Discover our full collection
          </p>
        </div>
        <div className="bg-white text-[#5A2A55] font-bold px-4 py-2 rounded-full text-xs md:text-sm shadow">
          Big Sale • Up to 40% Off
        </div>
      </div>

      {/* Horizontal Filter Bar */}
      <div className="bg-white shadow-md rounded-xl px-5 py-4 mb-6">
        <FilterSection onFilterChange={handleFilterChange} />
      </div>

      {/* Result count + Sort */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-800">
            {filteredProducts.length === 0
              ? 0
              : `${indexOfFirstProduct + 1}–${Math.min(indexOfLastProduct, filteredProducts.length)}`}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-800">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        <select
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
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

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>

          {(() => {
            const pages = [];
            const delta = 2;
            const left = Math.max(2, currentPage - delta);
            const right = Math.min(totalPages - 1, currentPage + delta);

            pages.push(1);
            if (left > 2) pages.push("...");
            for (let i = left; i <= right; i++) pages.push(i);
            if (right < totalPages - 1) pages.push("...");
            if (totalPages > 1) pages.push(totalPages);

            return pages.map((page, i) =>
              page === "..." ? (
                <span key={`ellipsis-${i}`} className="px-2 text-gray-400">…</span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-full ${
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

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>

        </div>
      )}

    </div>
  );
};

export default Product;
