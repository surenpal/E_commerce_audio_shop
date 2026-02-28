import React, { useState, useMemo } from "react";
import { getData } from "../context/DataContext";
import { useEffect } from "react";
import Loading from "../assets/loading.webm";
import FilterSection from "../components/FilterSection";
import Carousel from "../components/Carousel";

const FilterSection = ({ onFilterChange }) => {
  const { data } = getData();

  const categories = useMemo(() => {
    if (!Array.isArray(data)) return [];
    const unique = new Set(data.map((item) => item.category));
    return [...unique];
  }, [data]);

  const [filters, setFilters] = useState({
    category: "",
    maxPrice: 500,
    search: "",
  });

  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange && onFilterChange(updated);
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-5 mt-6">
      <h2 className="text-xl font-semibold text-[#5A2A55] mb-4">
        Filter Products
      </h2>

      {/* Search */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Search</label>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A2A55]"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#5A2A55]"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">
          Max Price: ${filters.maxPrice}
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={filters.maxPrice}
          onChange={(e) => updateFilter("maxPrice", e.target.value)}
          className="w-full accent-[#5A2A55]"
        />
      </div>
    </div>
  );
};

export default FilterSection;