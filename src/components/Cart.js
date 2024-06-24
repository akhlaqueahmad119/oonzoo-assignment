import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.scss";
import CartCard from "./cartCard";
import AddressCartCard from "./addressCard";
import PaymentCartCard from "./paymentCard";
import OrderPlacedCard from "./orderPlaced";

const Cart = ({ cartItems }) => {
  const [steps, setStep] = useState("cartCard");
  const user = useSelector((state) => state.user?.user);
  const [payment, setPayment] = useState("cash");

  const seenIds = new Set();
  const uniqueProducts = cartItems.filter((item) => {
    if (seenIds.has(item.id)) {
      return false;
    } else {
      seenIds.add(item.id);
      return true;
    }
  });
  const handleSteps = (steps) => {
    setStep(steps);
  };

  console.log(uniqueProducts);
  console.log(user, "ddd");

  return (
    <div className={styles.cartPage}>
      <div className={styles.wrapper}>
        {user?.name ? (
          <h1>Hi {user?.name}, Your Cart is Ready</h1>
        ) : (
          <h1>Cart is Ready </h1>
        )}
        <div className={styles.cartPage_head}>
          <div className={styles.cartPage_head_userDetails}>
            <h2>Name : {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Mobile No: {user.phone}</p>
          </div>
          {steps === "cartCard" ? (
            <div>
              {uniqueProducts?.map((cart, index) => (
                <CartCard
                  key={cart.id}
                  productName={`Product Name:  ${cart.category}`}
                  quantity={3}
                  price={cart.price}
                  imgUrl={cart.image}
                />
              ))}
              <div className={styles.cartPage_checkout}>
                <button onClick={() => handleSteps("AddressCartCard")}>
                  Checkout
                </button>
              </div>
            </div>
          ) : steps === "AddressCartCard" ? (
            <div>
              <AddressCartCard handleSteps={handleSteps} />
            </div>
          ) : steps === "PaymentCart" ? (
            <PaymentCartCard
              handleSteps={handleSteps}
              setPayment={setPayment}
              payment={payment}
            />
          ) : steps === "OrderCompleted" ? (
            <OrderPlacedCard
              handleSteps={handleSteps}
              steps={steps}
              Cart={Cart}
              // paymentMethod={paymentMethod}
              // address={addressFormData}
              paymentMethod={payment}
              uniqueProducts={uniqueProducts}
              user={user}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
