import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getData } from "../context/DataContext"; 

function ProductDetails({ addToCart }) {

  const { data } = getData(); 

  const { id } = useParams();
  const navigate = useNavigate();

  const product = data?.find((p) => p.id === Number(id)); 

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate(-1);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-pink-500 hover:underline"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img
            src={product.images?.[0]?.url || product.images?.[0] || "/fallback.png"}
            alt={product.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

        <div>

          <h2 className="text-3xl font-bold mb-4">
            {product.title}
          </h2>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <h3 className="text-2xl font-bold text-pink-500 mb-6">
            ${product.price}
          </h3>

          <div className="flex items-center gap-4 mb-6">

            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="text-lg">{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>

          </div>

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