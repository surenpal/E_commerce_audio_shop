import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData } from "../context/DataContext";

function ProductDetails({ addToCart }) {
  const { data } = getData();
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // Show loading while products are fetching
  if (!data || data.length === 0) {
    return <h2 className="text-center mt-20">Loading product...</h2>;
  }

  const product = data.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    navigate("/cart"); // optional: go to cart after adding
  };

  const imageSrc = Array.isArray(product.images)
    ? product.images[0]?.url || product.images[0]
    : product.images;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-pink-500 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <div>
          <img
            src={imageSrc || "/fallback.png"}
            alt={product.title}
            className="w-full h-[400px] object-contain"
            onError={(e) => (e.target.src = "/fallback.png")}
          />
        </div>

        {/* Product Info */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <h3 className="text-2xl font-bold text-pink-500 mb-6">
            ${Number(product.price).toFixed(2)}
          </h3>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">

            <button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="text-lg font-semibold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>

          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;