import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">

      <div className="bg-blue-800 p-10 rounded-2xl shadow-lg text-center">

        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Order Placed Successfully 🎉
        </h1>

        <p className="mb-6">
          Thank you for shopping with <span className="text-pink-400">MELA</span>.
        </p>

        <Link
          to="/products"
          className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
};

export default OrderSuccess;