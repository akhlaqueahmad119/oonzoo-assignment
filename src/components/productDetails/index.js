// src/components/ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ setCartItem, cartItem }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProduct(response.data);
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainBox}>
      <div className={styles.productDetails}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productData}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button
            onClick={() => {
              dispatch(addToCart(product));
              setCartItem(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
