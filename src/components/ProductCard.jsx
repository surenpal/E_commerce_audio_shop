import { HiOutlineShoppingCart } from "react-icons/hi";
import PropTypes from "prop-types";

const ProductCard = ({ name, price, image, description, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
        onError={(e) => (e.target.src = "/fallback.png")}
      />

      <h3 className="font-semibold text-gray-800 line-clamp-1">{name}</h3>
      {description && <p className="text-gray-600 text-sm line-clamp-2">{description}</p>}
      <p className="text-[#5A2A55] font-bold mt-2">${price.toFixed(2)}</p>

      <button
        onClick={onAddToCart}
        className="flex  items-center gap-2 mt-auto bg-pink-400 text-white py-2 px-4 rounded hover:bg-pink-500 transition"
      >
        <HiOutlineShoppingCart className="text-xl" />
        
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;