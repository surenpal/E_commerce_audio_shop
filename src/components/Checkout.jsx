import { useState } from "react";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate();
const Checkout = ({ cart }) => {

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

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrderPlaced(true);

        setTimeout(() => {
            setCart([]); // clear cart
            navigate("/order-success"); // redirect
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

                    <div>
                        <label>Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            onChange={handleChange}
                            className="w-full mt-1 p-3 rounded-lg bg-blue-700 border border-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            onChange={handleChange}
                            className="w-full mt-1 p-3 rounded-lg bg-blue-700 border border-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="123-456-789"
                            onChange={handleChange}
                            className="w-full mt-1 p-3 rounded-lg bg-blue-700 border border-blue-600"
                            required
                        />
                    </div>

                    <div>
                        <label>Shipping Address</label>
                        <textarea
                            name="address"
                            placeholder="Enter your full address..."
                            onChange={handleChange}
                            className="w-full mt-1 p-3 rounded-lg bg-blue-700 border border-blue-600"
                            rows="4"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        {orderPlaced ? "Order Placed Successfully ✅" : "Place Order"}
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Checkout;