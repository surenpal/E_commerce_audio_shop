import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand + Description */}
                <div>
                    <Link to="/">
                        <h1 className="font-serif text-4xl font-bold text-white tracking-wide drop-shadow-lg">
                            MELA
                        </h1>
                    </Link>
                    <p className="mt-3 text-sm">
                        The one and only place, where you can find the best beauty, electronic, Home Decor products, with the best prices. We are committed to providing you with an exceptional shopping experience and top-notch customer service.
                    </p>

                    <div className="mt-4 space-y-1 text-sm">
                        <p>Tokyo,Adachi-Ku,1210823,New street</p>
                        <p>Email: support@MELA.com</p>
                        <p>Phone: (030) 4456-6745</p>
                    </div>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
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
                    <h3 className="text-lg font-semibold text-white mb-3">Stay in the Loop</h3>
                    <p className="text-sm mb-4">
                        Subscribe to get special offers, and more.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none"
                        />
                        <button className="bg-[#5A2A55] hover:bg-[#4a2147] px-4 py-2 rounded-r-md text-white font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © 2025 MELA. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;