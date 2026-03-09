import { HiOutlineShoppingCart } from "react-icons/hi";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ id, name, price, image, description, onAddToCart }) => {

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col">

      <Link to={`/product/${id}`}>

        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-3"
          onError={(e) => (e.target.src = "/fallback.png")}
        />

        <h3 className="font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">
            {description}
          </p>
        )}

        <p className="text-[#5A2A55] font-bold mt-2">
          ${Number(price).toFixed(2)}
        </p>

      </Link>

      <button
        onClick={handleAdd}
        className={`flex items-center justify-center gap-2 mt-auto py-2 px-4 rounded transition ${
          added
            ? "bg-green-500 text-white"
            : "bg-pink-400 text-white hover:bg-pink-500"
        }`}
      >
        {added ? "Item Added ✓" : (
          <>
            <HiOutlineShoppingCart className="text-xl" />
            Add to Cart
          </>
        )}
      </button>

    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;