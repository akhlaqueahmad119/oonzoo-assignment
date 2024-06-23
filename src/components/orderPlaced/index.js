import styles from "./styles.module.scss";
import CartCard from "../cartCard";
import { useNavigate } from "react-router-dom";

function OrderPlacedCard({
  user,
  steps,
  handleSteps,
  Cart,
  paymentMethod,
  address,
  uniqueProducts,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.orderPlacedCard}>
      <div
        className={`${styles.orderPlacedCard_container} ${
          paymentMethod && paymentMethod === "cash"
            ? styles.success
            : styles.failed
        }`}
      >
        {paymentMethod && paymentMethod === "cash" ? (
          <div>
            {uniqueProducts?.map((cart, index) => (
              <CartCard
                key={cart.productId}
                productName={`Product Name ${cart.category}`}
                quantity={3}
                price={cart.price}
                imgUrl={cart.image}
              />
            ))}

            <h1>Hi {user.name} your order is placed succesfull</h1>
            <p>
              We will deliver your order to {address?.name} at{" "}
              {address?.address} {address?.phoneNumber}
            </p>
            <p>Thank You Visit Again</p>
            <button
              className={styles.successButton}
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          </div>
        ) : (
          <div>
            <h1>Sorry {user.name} your order cannot be placed </h1>
            <p>
              We didnot support any payment method apart from Cash Please select
              Cash as payment mode to place an order
            </p>
            <button
              className={styles.failedButton}
              onClick={() => handleSteps("PaymentCart")}
            >
              Change Payment Method
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderPlacedCard;
