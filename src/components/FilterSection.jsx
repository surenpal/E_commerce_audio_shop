import { useState, useMemo } from "react";
import { getData } from "../context/DataContext";
import { Search, SlidersHorizontal } from "lucide-react";

const defaultFilters = { search: "", category: "", maxPrice: 2000 };

const FilterSection = ({ onFilterChange }) => {
  const { data } = getData();

  const [filters, setFilters] = useState(defaultFilters);

  const categories = useMemo(() => {
    if (!data?.length) return [];
    return [...new Set(data.map((item) => item.category))];
  }, [data]);

  const updateFilter = (key, value) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const isActive =
    filters.search !== "" ||
    filters.category !== "" ||
    filters.maxPrice !== 2000;

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">

      {/* Search */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        />
      </div>

      {/* Category */}
      <div className="sm:w-44">
        <select
          value={filters.category}
          onChange={(e) => updateFilter("category", e.target.value)}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="sm:w-52">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1 px-0.5">
          <span className="flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" /> Max Price
          </span>
          <span className="font-semibold text-[#5A2A55]">${Number(filters.maxPrice).toLocaleString()}</span>
        </div>
        <input
          type="range"
          min="0"
          max="2000"
          value={filters.maxPrice}
          onChange={(e) => updateFilter("maxPrice", e.target.value)}
          className="w-full accent-pink-500 cursor-pointer"
        />
      </div>

      {/* Reset */}
      <button
        onClick={resetFilters}
        disabled={!isActive}
        className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition whitespace-nowrap
          ${isActive
            ? "bg-pink-400 hover:bg-pink-500 text-white shadow"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
      >
        Reset
      </button>

    </div>
  );
};

export default FilterSection;
