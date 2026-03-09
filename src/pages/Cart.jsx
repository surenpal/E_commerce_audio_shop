import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-bold mb-6">
        Your Cart ({totalItems} items)
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          {cart.map((item) => {

            const imageSrc = Array.isArray(item.images)
              ? item.images[0]?.url || item.images[0]
              : item.image || "/fallback.png";

            return (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b py-4"
              >

                <img
                  src={imageSrc}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                  onError={(e) => (e.target.src = "/fallback.png")}
                />

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>

                </div>

              </div>
            );
          })}

          {/* Cart Summary */}
          <div className="mt-8 border-t pt-6 text-right">

            <p className="text-lg font-semibold">
              Total Items: {totalItems}
            </p>

            <p className="text-xl font-bold text-pink-500 mt-2">
              Total Price: ${totalPrice.toFixed(2)}
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default Cart;