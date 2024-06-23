import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, setCartItem }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setCartItem(product);
  };

  return (
    <div className={styles.cardBox}>
      <div className={styles.card}>
        <Link to={`/product/${product.id}`} className={styles.cardBody}>
          <img src={product.image} alt={product.title} />
          <div>
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardPrice}>${product.price}</p>
          </div>
        </Link>
        <button className={styles.addToCart} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
