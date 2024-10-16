import styles from "./page.module.css"; 

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Product App</h1>
      <p className={styles.paragraph}>
        Search for products by navigating to{" "}
        <code className={styles.code}>/product/id</code>
      </p>
    </div>
  );
}
