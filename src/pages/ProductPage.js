import React from "react";
import ProductDetails from "../components/productDetails";

const ProductPage = ({ setCartItem, cartItems }) => {
  return (
    <div>
      <ProductDetails setCartItem={setCartItem} cartItem={cartItems} />
    </div>
  );
};

export default ProductPage;
