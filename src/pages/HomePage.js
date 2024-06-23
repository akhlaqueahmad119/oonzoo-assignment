import React from "react";
import ProductList from "../components/ProductList";

const HomePage = ({ setCartItem }) => {
  return (
    <div>
      <h1>Product Listing</h1>
      <ProductList setCartItem={setCartItem} />
    </div>
  );
};

export default HomePage;
