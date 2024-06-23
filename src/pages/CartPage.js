import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems }) => {
  console.log(cartItems, "cartpage");
  return (
    <div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
