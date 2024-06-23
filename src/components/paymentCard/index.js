import styles from "./styles.module.scss";

function PaymentCartCard({ handleSteps, setPayment, payment }) {

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSteps("OrderCompleted");
  };

  return (
    <div className={styles.paymentCartCard}>
      <div className={styles.paymentCardContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="cash"
                checked={payment === "cash"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>
          </div>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="credit"
                checked={payment === "credit"}
                onChange={handleChange}
              />
              Credit Card
            </label>
          </div>
          <div>
            <label>
              <input
                name="paymentMethod"
                type="radio"
                value="debit"
                checked={payment === "debit"}
                onChange={handleChange}
              />
              Debit Card
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PaymentCartCard;
