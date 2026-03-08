import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-pink-600">MELA</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
          Welcome to MELA, your one-stop destination for quality products across
          multiple categories designed to simplify and enrich everyday life.
          Our platform offers a wide range of items including beauty and
          skin-care products, premium fragrances, stylish home décor,
          furniture, and essential groceries to meet your daily needs. Whether
          you're upgrading your home with elegant kitchen accessories or
          refreshing your wardrobe with the latest men’s shirts, shoes, and
          watches, MELA brings everything together in one convenient place.
          <br /><br />
          We also provide modern technology and lifestyle essentials such as
          smartphones, laptops, mobile accessories, and motorcycle gear to keep
          you connected and on the move. For those who enjoy an active
          lifestyle, our sports accessories are carefully selected to support
          your fitness and recreational activities. At MELA, our mission is to
          deliver quality, affordability, and convenience through a seamless
          online shopping experience, helping customers find everything they
          need quickly, safely, and at the best value.
        </p>

        {/* Button */}
        <div className="mt-10">
          <Link to="/products">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
              Shop Now
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;