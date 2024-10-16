import styles from "./product.module.css";

async function fetchProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <div className={styles.product}>
      <h1 className={styles.heading}>{product.title}</h1>
      <img loading="eager" src={product.image} alt={product.title} />
      <p className={styles.p1}>{product.description}</p>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <p className={styles.productCategory}>Category: {product.category}</p>
      <p className={styles.productRating}>
        Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
      </p>
      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
  );
}
