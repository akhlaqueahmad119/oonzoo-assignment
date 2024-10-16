export default function Head({ params }) {
  const productId = params.id;

  return (
    <>
      <title>Product {productId}</title>
      <meta property="og:title" content={`Product ${productId}`} />
      <meta
        property="og:description"
        content={`Check out product ${productId}`}
      />
      <meta
        property="og:image"
        content={`https://fakestoreapi.com/img/${productId}.jpg`}
      />
      <meta
        property="og:url"
        content={`https://products.oonzoo.com/product/${productId}`}
      />
    </>
  );
}
