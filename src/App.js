import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AppHeader from "./components/header";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  console.log(cartItems, "cartItemss");

  return (
    <Router>
      <AppHeader />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage setCartItem={addToCart} />} />
          <Route
            path="/product/:productId"
            element={
              <ProductPage cartItems={cartItems} setCartItem={addToCart} />
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
