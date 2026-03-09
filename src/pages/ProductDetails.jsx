import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function ProductDetails({ products, addToCart }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate(-1); // return to previous page
  };

  return (
    <div className="product-details-page">

      {/* BACK BUTTON */}
      <button onClick={() => navigate(-1)}>
        ← Back to Products
      </button>

      <div className="product-details-container">

        {/* LEFT SIDE IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="product-info">

          <h2>{product.title}</h2>

          <p className="product-description">
            {product.description}
          </p>

          <h3 className="product-price">
            ${product.price}
          </h3>

          {/* QUANTITY */}
          <div className="quantity-selector">

            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>

          </div>

          {/* ADD TO CART */}
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;