

const Cart = ({ cart }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border-b py-4"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />

            <div className="flex-1">

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-gray-600">${item.price}</p>

              <p className="text-sm text-gray-500">
                Qty: {item.quantity}
              </p>

            </div>

          </div>
        ))
      )}

    </div>
  );
};

export default Cart;