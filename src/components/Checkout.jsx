import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart }) => {

    const navigate = useNavigate(); // ✅ inside component

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const generateOrderId = () => {
        return "MELA-" + Math.floor(10000 + Math.random() * 90000);
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderId = generateOrderId();

        setOrderPlaced(true);

        setTimeout(() => {
            setCart([]); // clear cart
            navigate("/order-success", { state: { orderId } });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-blue-900 flex justify-center items-center p-8">

            <div className="bg-blue-800 w-full max-w-6xl rounded-2xl shadow-lg grid md:grid-cols-2 gap-10 p-10">

                {/* LEFT SIDE */}
                <div className="text-white">

                    <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between border-b border-blue-600 pb-2"
                                >
                                    <span>
                                        {item.title} x {item.quantity}
                                    </span>

                                    <span>${item.price * item.quantity}</span>
                                </div>
                            ))}

                            <div className="flex justify-between font-bold text-lg pt-4">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>

                        </div>
                    )}

                </div>

                {/* RIGHT SIDE FORM */}
                <form onSubmit={handleSubmit} className="text-white space-y-4">

                    <h2 className="text-3xl font-bold mb-4">
                        Checkout with <span className="text-pink-400">MELA</span>
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600"
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600"
                        required
                    />

                    <textarea
                        name="address"
                        placeholder="Shipping Address"
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-blue-700 border border-blue-600"
                        rows="4"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-lg font-semibold"
                    >
                        {orderPlaced ? "Order Placed Successfully ✅" : "Place Order"}
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Checkout;