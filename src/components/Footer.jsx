import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        setSubscribed(true);

        setTimeout(() => {
            setSubscribed(false);
            e.target.reset(); // clears email input
        }, 2000);
    };

    return (
        <footer className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 text-gray-300 py-12">

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand + Description */}
                <div>
                    <Link to="/">
                        <h1 className="font-serif text-4xl font-bold text-white tracking-wide drop-shadow-lg">
                            MELA
                        </h1>
                    </Link>

                    <p className="mt-3 text-sm text-gray-600">
                        The best place, where you can find the best beauty, electronic, Home Decor products, with the best prices and top-notch customer service.
                    </p>

                    <div className="mt-4 space-y-1 text-sm text-gray-600">
                        <p>Tokyo,Adachi-Ku,1210823,Umejima station</p>
                        <p>Email: support@MELA.com</p>
                        <p>Phone: (030) 4456-6745</p>
                    </div>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="hover:text-white cursor-pointer">Contact Us</li>
                        <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
                        <li className="hover:text-white cursor-pointer">FAQs</li>
                        <li className="hover:text-white cursor-pointer">Order Tracking</li>
                        <li className="hover:text-white cursor-pointer">Size Guide</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>

                    <div className="flex items-center gap-4 text-xl">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaPinterestP className="hover:text-white cursor-pointer" />
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>

                    <p className="text-sm mb-4 text-gray-600">
                        Subscribe to get special offers, and more.
                    </p>

                    <form onSubmit={handleSubscribe} className="flex">

                        <input
                            type="email"
                            placeholder="Your email address"
                            required
                            className="w-full px-3 py-2 rounded-l-md bg-white/20 text-gray-200 focus:outline-none border border-white/20 focus:border-pink-400"
                        />

                        <button
                            type="submit"
                            className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-md text-white font-semibold"
                        >
                            {subscribed ? "Subscribed" : "Subscribe"}
                        </button>

                    </form>

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-lg text-gray-600">
                © 2025 MELA. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;