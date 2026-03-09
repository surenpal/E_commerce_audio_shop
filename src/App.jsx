import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import axios from "axios";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";

const App = () => {

  const [location, setLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);

  const [cart, setCart] = useState([]);

  // total number of items in cart
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + (product.quantity || 1),
              }
            : item
        );
      }

      return [
        ...prevCart,
        { ...product, quantity: product.quantity || 1 }
      ];
    });
  };

  // get user location
  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {

        const { latitude, longitude } = pos.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const response = await axios.get(url);
          const exactLocation = response.data.address;
          setLocation(exactLocation);
          setOpenDropdown(false);
        } catch (error) {
          console.log("Error fetching location", error);
        }

      },
      (err) => {
        console.log("Geolocation error:", err);
      }
    );
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (

    <BrowserRouter>

      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        cartCount={cartCount}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;